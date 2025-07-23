/******/ (() => { // webpackBootstrap
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  var tabs = document.querySelectorAll(".tab-btn");
  var contents = document.querySelectorAll(".tab-content");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and contents
      tabs.forEach(function (t) {
        return t.classList.remove("active");
      });
      contents.forEach(function (c) {
        return c.classList.remove("active");
      });

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active");
      var tabId = tab.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // URL modification functionality
  var modifyUrl = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
      var tabs, currentTab, url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return chrome.tabs.query({
              active: true,
              currentWindow: true
            });
          case 1:
            tabs = _context.v;
            currentTab = tabs[0]; // if (!currentTab.url.includes('hubspot.com')) {
            //     alert('This tool can only be used on HubSpot domains.');
            //     return;
            // }
            url = new URL(currentTab.url); // Update or add each parameter
            Object.entries(params).forEach(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];
              url.searchParams.set(key, value);
            });

            // Update the URL and reload the page
            _context.n = 2;
            return chrome.tabs.update(currentTab.id, {
              url: url.toString()
            });
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function modifyUrl(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // Generate random 4-digit number
  var generateRandomNumber = function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
  };

  // Button click handlers
  document.getElementById("bypassCache").addEventListener("click", function () {
    modifyUrl({
      hsCacheBuster: generateRandomNumber()
    });
    window.close();
  });
  document.getElementById("enableDebug").addEventListener("click", function () {
    modifyUrl({
      hsDebug: "true"
    });
    window.close();
  });
  document.getElementById("showDebugOnly").addEventListener("click", function () {
    modifyUrl({
      hsDebugOnly: "true"
    });
    window.close();
  });
  document.getElementById("activateDev").addEventListener("click", function () {
    modifyUrl({
      developerMode: "true"
    });
    window.close();
  });
  document.getElementById("viewAmp").addEventListener("click", function () {
    modifyUrl({
      hs_amp: "true"
    });
    window.close();
  });

  // Language switcher functionality
  var setupLanguageSwitcher = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var langSelect, switchLangBtn, langMessage, response, _t, _t2, _t3, _t4, _t5, _t6, _t7, _t8, _t9;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            langSelect = document.getElementById("langSelect");
            switchLangBtn = document.getElementById("switchLang");
            langMessage = document.getElementById("langMessage");
            _context2.p = 1;
            _t = chrome.scripting;
            _context2.n = 2;
            return chrome.tabs.query({
              active: true,
              currentWindow: true
            });
          case 2:
            _t2 = _context2.v[0].id;
            _t3 = {
              tabId: _t2
            };
            _t4 = ["js/content.js"];
            _t5 = {
              target: _t3,
              files: _t4
            };
            _context2.n = 3;
            return _t.executeScript.call(_t, _t5);
          case 3:
            _t6 = chrome.tabs;
            _context2.n = 4;
            return chrome.tabs.query({
              active: true,
              currentWindow: true
            });
          case 4:
            _t7 = _context2.v[0].id;
            _t8 = {
              action: "getLanguages"
            };
            _context2.n = 5;
            return _t6.sendMessage.call(_t6, _t7, _t8);
          case 5:
            response = _context2.v;
            if (response && response.languages && response.languages.length > 0) {
              // Clear any existing options
              langSelect.innerHTML = '<option value="">Select Language</option>';

              // Add available languages
              response.languages.forEach(function (lang) {
                var option = document.createElement("option");
                option.value = lang;
                option.textContent = new Intl.DisplayNames(["en"], {
                  type: "language"
                }).of(lang);
                if (lang === response.currentLanguage) {
                  option.selected = true;
                }
                langSelect.appendChild(option);
              });

              // Enable controls
              langSelect.disabled = false;
              switchLangBtn.disabled = false;
              if (langMessage) langMessage.style.display = "none";
            } else {
              // Disable controls and show message
              langSelect.disabled = true;
              switchLangBtn.disabled = true;
              if (langMessage) {
                langMessage.textContent = "No language options available on this page";
                langMessage.style.display = "block";
              }
            }
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t9 = _context2.v;
            console.error("Error setting up language switcher:", _t9);
            langSelect.disabled = true;
            switchLangBtn.disabled = true;
            if (langMessage) {
              langMessage.textContent = "Unable to detect available languages";
              langMessage.style.display = "block";
            }
          case 7:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 6]]);
    }));
    return function setupLanguageSwitcher() {
      return _ref4.apply(this, arguments);
    };
  }();

  // Initialize language switcher
  setupLanguageSwitcher();

  // Language switch button handler
  document.getElementById("switchLang").addEventListener("click", function () {
    var langSelect = document.getElementById("langSelect");
    var selectedLang = langSelect.value;
    if (!selectedLang) {
      alert("Please select a language");
      return;
    }
    modifyUrl({
      hsLang: selectedLang
    });
    window.close();
  });

  // Design Manager functionality
  var openDesignManager = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var tabs, currentTab, response, designManagerUrl, _t0;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.n = 1;
            return chrome.tabs.query({
              active: true,
              currentWindow: true
            });
          case 1:
            tabs = _context3.v;
            currentTab = tabs[0];
            _context3.p = 2;
            _context3.n = 3;
            return chrome.scripting.executeScript({
              target: {
                tabId: currentTab.id
              },
              files: ["js/content.js"]
            });
          case 3:
            _context3.n = 4;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 100);
            });
          case 4:
            _context3.n = 5;
            return chrome.tabs.sendMessage(currentTab.id, {
              action: "getPortalId"
            });
          case 5:
            response = _context3.v;
            if (!(response && response.portalId)) {
              _context3.n = 7;
              break;
            }
            designManagerUrl = "https://app.hubspot.com/design-manager/".concat(response.portalId);
            _context3.n = 6;
            return chrome.tabs.create({
              url: designManagerUrl
            });
          case 6:
            window.close();
            _context3.n = 8;
            break;
          case 7:
            alert("Could not find portal ID on this page. Please make sure you are on a HubSpot page.");
          case 8:
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t0 = _context3.v;
            console.error("Error accessing portal ID:", _t0);
            alert("Could not access page information. Please make sure you are on a HubSpot page.");
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 9]]);
    }));
    return function openDesignManager() {
      return _ref5.apply(this, arguments);
    };
  }();
  document.getElementById("designManager").addEventListener("click", openDesignManager);
});
/******/ })()
;
//# sourceMappingURL=popup.js.map