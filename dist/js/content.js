/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Injects a function into the page context to safely access HubSpot variables
 * This is necessary because content scripts run in an isolated context
 */
function injectGetPageInfo() {
  if (typeof window.getHsInfo === 'function') {
    return;
  }
  var script = document.createElement('script');
  script.textContent = "\n        window.getHsInfo = function() {\n            try {\n                return {\n                    portalId: window.hsVars ? window.hsVars.portal_id : null,\n                    currentLanguage: window.hsVars ? window.hsVars.language : null\n                };\n            } catch (e) {\n                console.warn('Error accessing hsVars:', e);\n                return { portalId: null, currentLanguage: null };\n            }\n        };\n    ";
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
  var info = {
    portalId: null,
    languages: new Set(),
    currentLanguage: null
  };

  // Inject the helper function first
  injectGetPageInfo();

  // Try different methods to access HubSpot variables
  try {
    if (typeof window.getHsInfo === 'function') {
      var hsInfo = window.getHsInfo();
      if (hsInfo && _typeof(hsInfo) === 'object') {
        info.portalId = hsInfo.portalId;
        info.currentLanguage = hsInfo.currentLanguage;
      }
    } else if (typeof window.hsVars !== 'undefined' && window.hsVars) {
      info.portalId = window.hsVars.portal_id || null;
      info.currentLanguage = window.hsVars.language || null;
    } else {
      // Fallback: parse hsVars from script tags (with improved safety)
      var scripts = document.querySelectorAll('script[type="text/javascript"], script:not([type])');
      var _iterator = _createForOfIteratorHelper(scripts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var script = _step.value;
          var content = script.textContent || script.innerText;
          if (content && content.includes('var hsVars = {')) {
            try {
              var match = content.match(/var hsVars = (\{[^}]*\});?/);
              if (match && match[1]) {
                var objText = match[1];
                // Safer sanitization for JSON parsing
                objText = objText.replace(/([{,]\s*)(\w+):/g, '$1"$2":') // quote unquoted keys
                .replace(/'([^']*)'/g, '"$1"') // single to double quotes
                .replace(/,\s*}/g, '}') // remove trailing commas
                .replace(/undefined/g, 'null'); // handle undefined values

                var vars = JSON.parse(objText);
                if (vars && _typeof(vars) === 'object') {
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
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  } catch (error) {
    console.error('Error accessing HubSpot variables:', error);
  }

  // Extract available languages from hreflang attributes
  try {
    var alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    alternateLinks.forEach(function (link) {
      var lang = link.getAttribute('hreflang');
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
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try {
    if (!request || typeof request.action !== 'string') {
      sendResponse({
        error: 'Invalid request format'
      });
      return false;
    }
    switch (request.action) {
      case 'getPortalId':
        try {
          var info = getPageInfo();
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
          var _info = getPageInfo();
          sendResponse({
            languages: _info.languages,
            currentLanguage: _info.currentLanguage,
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
        sendResponse({
          error: "Unknown action: ".concat(request.action)
        });
        return false;
    }
    return true; // Keep the message channel open for async response
  } catch (error) {
    console.error('Error in message listener:', error);
    sendResponse({
      error: 'Internal error processing request'
    });
    return false;
  }
});
/******/ })()
;
//# sourceMappingURL=content.js.map