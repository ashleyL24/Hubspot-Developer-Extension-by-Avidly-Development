/**
 * Injects a function into the page context to safely access HubSpot variables
 * This is necessary because content scripts run in an isolated context
 */
function injectGetPageInfo() {
    if (typeof window.getHsInfo === 'function') {
        return;
    }
    
    const script = document.createElement('script');
    script.textContent = `
        window.getHsInfo = function() {
            try {
                return {
                    portalId: window.hsVars ? window.hsVars.portal_id : null,
                    currentLanguage: window.hsVars ? window.hsVars.language : null
                };
            } catch (e) {
                console.warn('Error accessing hsVars:', e);
                return { portalId: null, currentLanguage: null };
            }
        };
    `;
    
    try {
        document.documentElement.appendChild(script);
        script.remove();
    } catch (error) {
        console.error('Failed to inject script:', error);
    }
}

/**
 * Extracts HubSpot portal information and available languages from the current page
 * Uses multiple fallback methods to ensure compatibility across different HubSpot pages
 * @returns {Object} Object containing portalId, languages array, and currentLanguage
 */
function getPageInfo() {
    const info = {
        portalId: null,
        languages: new Set(),
        currentLanguage: null
    };

    // Inject the helper function first
    injectGetPageInfo();

    // Try different methods to access HubSpot variables
    try {
        if (typeof window.getHsInfo === 'function') {
            const hsInfo = window.getHsInfo();
            if (hsInfo && typeof hsInfo === 'object') {
                info.portalId = hsInfo.portalId;
                info.currentLanguage = hsInfo.currentLanguage;
            }
        } else if (typeof window.hsVars !== 'undefined' && window.hsVars) {
            info.portalId = window.hsVars.portal_id || null;
            info.currentLanguage = window.hsVars.language || null;
        } else {
            // Fallback: parse hsVars from script tags (with improved safety)
            const scripts = document.querySelectorAll('script[type="text/javascript"], script:not([type])');
            for (const script of scripts) {
                const content = script.textContent || script.innerText;
                if (content && content.includes('var hsVars = {')) {
                    try {
                        const match = content.match(/var hsVars = (\{[^}]*\});?/);
                        if (match && match[1]) {
                            let objText = match[1];
                            // Safer sanitization for JSON parsing
                            objText = objText
                                .replace(/([{,]\s*)(\w+):/g, '$1"$2":')  // quote unquoted keys
                                .replace(/'([^']*)'/g, '"$1"')          // single to double quotes
                                .replace(/,\s*}/g, '}')                // remove trailing commas
                                .replace(/undefined/g, 'null');        // handle undefined values
                            
                            const vars = JSON.parse(objText);
                            if (vars && typeof vars === 'object') {
                                info.portalId = vars.portal_id || null;
                                info.currentLanguage = vars.language || null;
                                break;
                            }
                        }
                    } catch (parseError) {
                        console.warn('Error parsing hsVars from script tag:', parseError);
                        continue;
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error accessing HubSpot variables:', error);
    }

    // Extract available languages from hreflang attributes
    try {
        const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
        alternateLinks.forEach(link => {
            const lang = link.getAttribute('hreflang');
            if (lang && lang !== 'x-default' && /^[a-z]{2}(-[A-Z]{2})?$/.test(lang)) {
                info.languages.add(lang);
            }
        });

        // Add current language if it's valid
        if (info.currentLanguage && /^[a-z]{2}(-[A-Z]{2})?$/.test(info.currentLanguage)) {
            info.languages.add(info.currentLanguage);
        }
    } catch (error) {
        console.warn('Error extracting language information:', error);
    }

    return {
        portalId: info.portalId ? String(info.portalId) : null,
        languages: Array.from(info.languages).sort(),
        currentLanguage: info.currentLanguage
    };
}

/**
 * Message listener for communication with the extension popup
 * Handles requests for portal ID and language information
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    try {
        if (!request || typeof request.action !== 'string') {
            sendResponse({ error: 'Invalid request format' });
            return false;
        }

        switch (request.action) {
            case 'getPortalId':
                try {
                    const info = getPageInfo();
                    sendResponse({ 
                        portalId: info.portalId,
                        success: true
                    });
                } catch (error) {
                    console.error('Error getting portal ID:', error);
                    sendResponse({ 
                        portalId: null, 
                        error: 'Failed to retrieve portal ID',
                        success: false
                    });
                }
                break;

            case 'getLanguages':
                try {
                    const info = getPageInfo();
                    sendResponse({
                        languages: info.languages,
                        currentLanguage: info.currentLanguage,
                        success: true
                    });
                } catch (error) {
                    console.error('Error getting languages:', error);
                    sendResponse({ 
                        languages: [], 
                        currentLanguage: null,
                        error: 'Failed to retrieve language information',
                        success: false
                    });
                }
                break;

            default:
                sendResponse({ error: `Unknown action: ${request.action}` });
                return false;
        }
        
        return true; // Keep the message channel open for async response
    } catch (error) {
        console.error('Error in message listener:', error);
        sendResponse({ error: 'Internal error processing request' });
        return false;
    }
});