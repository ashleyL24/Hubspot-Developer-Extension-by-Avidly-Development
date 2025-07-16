// Function to get page info from the window context
function injectGetPageInfo() {
    const script = document.createElement('script');
    script.textContent = `
        window.getHsInfo = function() {
            return {
                portalId: window.hsVars ? window.hsVars.portal_id : null,
                currentLanguage: window.hsVars ? window.hsVars.language : null
            };
        };
    `;
    document.documentElement.appendChild(script);
    script.remove();
}

// Extract portal ID and languages from hsVars and page content
function getPageInfo() {
    let info = {
        portalId: null,
        languages: new Set(),
        currentLanguage: null
    };

    // Try direct window access
    try {
        if (typeof window.getHsInfo === 'function') {
            const hsInfo = window.getHsInfo();
            info.portalId = hsInfo.portalId;
            info.currentLanguage = hsInfo.currentLanguage;
        } else if (typeof window.hsVars !== 'undefined') {
            info.portalId = window.hsVars.portal_id;
            info.currentLanguage = window.hsVars.language;
        } else {
            // Try to find hsVars in script tags (fallback, best effort only)
            const scripts = document.querySelectorAll('script');
            for (const script of scripts) {
                const content = script.textContent;
                if (content && content.includes('var hsVars = {')) {
                    // Extract object string
                    let objText = content.split('var hsVars = ')[1];
                    objText = objText.split('};')[0] + '}';
                    // Sanitize for JSON parse
                    let safeText = objText
                        .replace(/([{,]\s*)(\w+):/g, '$1"$2":') // quote keys
                        .replace(/'([^']*)'/g, '"$1"')         // single to double quotes
                        .replace(/,\s*}/g, '}');               // trailing commas
                    try {
                        const vars = JSON.parse(safeText);
                        info.portalId = vars.portal_id;
                        info.currentLanguage = vars.language;
                        break;
                    } catch (e) {
                        console.error('Error parsing hsVars:', e, safeText);
                    }
                }
            }
        }
    } catch (e) {
        console.error('Error accessing hsVars:', e);
    }

    // Find languages from alternate links
    const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    alternateLinks.forEach(link => {
        const lang = link.getAttribute('hreflang');
        if (lang) {
            info.languages.add(lang);
        }
    });

    // Add current language to available languages if not already included
    if (info.currentLanguage) {
        info.languages.add(info.currentLanguage);
    }

    return {
        portalId: info.portalId,
        languages: Array.from(info.languages),
        currentLanguage: info.currentLanguage
    };
}

// Send page info to the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getPortalId') {
        const info = getPageInfo();
        sendResponse({ portalId: info.portalId });
        return true;
    }

    if (request.action === 'getLanguages') {
        const info = getPageInfo();
        sendResponse({
            languages: info.languages,
            currentLanguage: info.currentLanguage
        });
        return true;
    }
});