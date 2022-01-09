import {
  AlertTitle_default,
  Alert_default,
  Avatar_default,
  Box_default,
  Button_default,
  Grid_default,
  TextField_default,
  ThemeProvider_default,
  Tooltip_default,
  __commonJS,
  __toModule,
  require_app,
  require_de,
  require_en,
  require_es,
  require_fr,
  require_hooks,
  require_it,
  require_nl,
  require_orange,
  require_pl,
  require_pt,
  require_react,
  require_react_dom,
  require_ru,
  require_styles,
  require_zh_cn
} from "./chunk-Y54RMG7Y.js";

// node_modules/@iobroker/adapter-react/Theme.js
var require_Theme = __commonJS({
  "node_modules/@iobroker/adapter-react/Theme.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _styles = require_styles();
    var _orange = _interopRequireDefault(require_orange());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var step = (16 - 5) / 23 / 100;
    function toInt(hex) {
      var rgb = {
        r: 0,
        g: 0,
        b: 0
      };
      if (hex.length === 7) {
        rgb.r = parseInt(hex.substr(1, 2), 16);
        rgb.g = parseInt(hex.substr(3, 2), 16);
        rgb.b = parseInt(hex.substr(5, 2), 16);
      } else if (hex.length === 4) {
        var r = hex.substr(1, 1);
        var g = hex.substr(2, 1);
        var b = hex.substr(3, 1);
        rgb.r = parseInt(r + r, 16);
        rgb.g = parseInt(g + g, 16);
        rgb.b = parseInt(b + b, 16);
      }
      return rgb;
    }
    function toHex(_int) {
      return "#" + Math.round(_int.r).toString(16) + Math.round(_int.g).toString(16) + Math.round(_int.b).toString(16);
    }
    function getElevation(color, overlayColor, elevation) {
      var rgb = toInt(color);
      var overlay = toInt(overlayColor);
      rgb.r += overlay.r * (0.05 + step * (elevation - 1));
      rgb.g += overlay.g * (0.05 + step * (elevation - 1));
      rgb.b += overlay.b * (0.05 + step * (elevation - 1));
      return toHex(rgb);
    }
    function getElevations(color, overlay) {
      var elevations = {};
      for (var i = 1; i <= 24; i++) {
        elevations["elevation" + i] = {
          backgroundColor: getElevation(color, overlay, i)
        };
      }
      return elevations;
    }
    var Theme = function Theme2(type) {
      var theme2;
      if (type === "dark") {
        theme2 = {
          name: type,
          palette: {
            type: "dark",
            background: {
              paper: "#121212",
              "default": "#121212"
            },
            primary: {
              main: "#4dabf5"
            },
            secondary: {
              main: "#436a93"
            },
            expert: "#14bb00",
            text: {
              primary: "#ffffff",
              secondary: "#ffffff"
            }
          },
          overrides: {
            MuiAppBar: {
              colorDefault: {
                backgroundColor: "#272727"
              }
            },
            MuiLink: {
              root: {
                textTransform: "uppercase",
                transition: "color .3s ease",
                color: _orange["default"][200],
                "&:hover": {
                  color: _orange["default"][100]
                }
              }
            },
            MuiPaper: getElevations("#121212", "#fff")
          }
        };
      } else if (type === "blue") {
        theme2 = {
          name: type,
          palette: {
            type: "dark",
            background: {
              paper: "#151d21",
              "default": "#151d21"
            },
            primary: {
              main: "#4dabf5"
            },
            secondary: {
              main: "#436a93"
            },
            expert: "#14bb00",
            text: {
              primary: "#ffffff",
              secondary: "#ffffff"
            }
          },
          overrides: {
            MuiAppBar: {
              colorDefault: {
                backgroundColor: "#2a3135"
              }
            },
            MuiLink: {
              root: {
                textTransform: "uppercase",
                transition: "color .3s ease",
                color: _orange["default"][200],
                "&:hover": {
                  color: _orange["default"][100]
                }
              }
            },
            MuiPaper: getElevations("#151d21", "#fff")
          }
        };
      } else if (type === "colored") {
        theme2 = {
          name: type,
          palette: {
            type: "light",
            primary: {
              main: "#3399CC"
            },
            secondary: {
              main: "#164477"
            },
            expert: "#96fc96"
          },
          overrides: {
            MuiAppBar: {
              colorDefault: {
                backgroundColor: "#3399CC"
              }
            },
            MuiLink: {
              root: {
                textTransform: "uppercase",
                transition: "color .3s ease",
                color: _orange["default"][400],
                "&:hover": {
                  color: _orange["default"][300]
                }
              }
            }
          }
        };
      } else if (type === "PT") {
        theme2 = {
          name: type,
          palette: {
            type: "light",
            primary: {
              main: "#0F99DE"
            },
            secondary: {
              main: "#88A536"
            },
            expert: "#BD1B24"
          },
          overrides: {
            MuiAppBar: {
              colorDefault: {
                backgroundColor: "#0F99DE"
              }
            },
            MuiLink: {
              root: {
                textTransform: "uppercase",
                transition: "color .3s ease",
                color: _orange["default"][400],
                "&:hover": {
                  color: _orange["default"][300]
                }
              }
            }
          }
        };
      } else if (type === "DX") {
        theme2 = {
          name: type,
          palette: {
            type: "light",
            primary: {
              main: "#F5F5F7"
            },
            secondary: {
              main: "#a9a9a9"
            },
            expert: "#BD1B24",
            text: {
              primary: "#007AFE",
              secondary: "#007AFE",
              disabled: "#007AFEAA"
            }
          },
          overrides: {
            MuiAppBar: {
              colorDefault: {
                backgroundColor: "#a9a9a9"
              }
            },
            MuiLink: {
              root: {
                textTransform: "uppercase",
                transition: "color .3s ease",
                color: _orange["default"][400],
                "&:hover": {
                  color: _orange["default"][300]
                }
              }
            }
          }
        };
      } else {
        theme2 = {
          name: type,
          palette: {
            type: "light",
            primary: {
              main: "#3399CC"
            },
            secondary: {
              main: "#164477"
            },
            expert: "#14bb00"
          },
          overrides: {
            MuiLink: {
              root: {
                textTransform: "uppercase",
                transition: "color .3s ease",
                color: _orange["default"][400],
                "&:hover": {
                  color: _orange["default"][300]
                }
              }
            }
          }
        };
      }
      theme2.toolbar = {
        height: 48
      };
      theme2.saveToolbar = {
        background: theme2.palette.primary.main,
        button: {
          borderRadius: 3,
          height: 32
        }
      };
      return (0, _styles.createTheme)(theme2);
    };
    var _default = Theme;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/i18n.js
var require_i18n = __commonJS({
  "node_modules/@iobroker/adapter-react/i18n.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var I18n = /* @__PURE__ */ function() {
      function I18n2() {
        _classCallCheck(this, I18n2);
      }
      _createClass(I18n2, null, [{
        key: "setLanguage",
        value: function setLanguage(lang) {
          if (lang) {
            I18n2.lang = lang;
          }
        }
      }, {
        key: "extendTranslations",
        value: function extendTranslations(words, lang) {
          try {
            if (!lang) {
              Object.keys(words).forEach(function(word) {
                Object.keys(words[word]).forEach(function(lang2) {
                  if (!I18n2.translations[lang2]) {
                    console.warn("Used unknown language: ".concat(lang2));
                  }
                  if (!I18n2.translations[lang2][word]) {
                    I18n2.translations[lang2][word] = words[word][lang2];
                  } else if (I18n2.translations[lang2][word] !== words[word][lang2]) {
                    console.warn('Translation for word "'.concat(word, '" in "').concat(lang2, '" was ignored: existing = "').concat(I18n2.translations[lang2][word], '", new = ').concat(words[word][lang2]));
                  }
                });
              });
            } else {
              if (!I18n2.translations[lang]) {
                console.warn("Used unknown language: ".concat(lang));
              }
              I18n2.translations[lang] = I18n2.translations[lang] || {};
              Object.keys(words).forEach(function(word) {
                if (!I18n2.translations[lang][word]) {
                  I18n2.translations[lang][word] = words[word];
                } else if (I18n2.translations[lang][word] !== words[word]) {
                  console.warn('Translation for word "'.concat(word, '" in "').concat(lang, '" was ignored: existing = "').concat(I18n2.translations[lang][word], '", new = ').concat(words[word]));
                }
              });
            }
          } catch (e) {
            console.error("Cannot apply translations: ".concat(e));
          }
        }
      }, {
        key: "setTranslations",
        value: function setTranslations(translations2) {
          if (translations2) {
            I18n2.translations = translations2;
          }
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          return I18n2.lang;
        }
      }, {
        key: "t",
        value: function t(word) {
          var translation = I18n2.translations[I18n2.lang];
          if (translation) {
            var w = translation[word];
            if (w) {
              word = w;
            } else {
              console.log("Translate: ".concat(word));
            }
          }
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          for (var _i = 0, _args = args; _i < _args.length; _i++) {
            var arg = _args[_i];
            word = word.replace("%s", arg);
          }
          return word;
        }
      }]);
      return I18n2;
    }();
    _defineProperty(I18n, "translations", {});
    _defineProperty(I18n, "lang", window.sysLang || "en");
    var _default = I18n;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/Components/Utils.js
var require_Utils = __commonJS({
  "node_modules/@iobroker/adapter-react/Components/Utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _i18n = _interopRequireDefault(require_i18n());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var NAMESPACE = "material";
    var days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    var months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var QUALITY_BITS = {
      0: "0x00 - good",
      1: "0x01 - general problem",
      2: "0x02 - no connection problem",
      16: "0x10 - substitute value from controller",
      32: "0x20 - substitute initial value",
      64: "0x40 - substitute value from device or instance",
      128: "0x80 - substitute value from sensor",
      17: "0x11 - general problem by instance",
      65: "0x41 - general problem by device",
      129: "0x81 - general problem by sensor",
      18: "0x12 - instance not connected",
      66: "0x42 - device not connected",
      130: "0x82 - sensor not connected",
      68: "0x44 - device reports error",
      132: "0x84 - sensor reports error"
    };
    var Utils2 = /* @__PURE__ */ function() {
      function Utils3() {
        _classCallCheck(this, Utils3);
      }
      _createClass(Utils3, null, [{
        key: "CapitalWords",
        value: function CapitalWords(name) {
          return (name || "").split(/[\s_]/).filter(function(item) {
            return item;
          }).map(function(word) {
            return word ? word[0].toUpperCase() + word.substring(1).toLowerCase() : "";
          }).join(" ");
        }
      }, {
        key: "formatSeconds",
        value: function formatSeconds(seconds) {
          var days2 = Math.floor(seconds / (3600 * 24));
          seconds %= 3600 * 24;
          var hours = Math.floor(seconds / 3600);
          if (hours < 10) {
            hours = "0" + hours;
          }
          seconds %= 3600;
          var minutes = Math.floor(seconds / 60);
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          seconds %= 60;
          seconds = Math.floor(seconds);
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          var text = "";
          if (days2) {
            text += days2 + " " + _i18n["default"].t("daysShortText") + " ";
          }
          text += hours + ":" + minutes + ":" + seconds;
          return text;
        }
      }, {
        key: "getObjectName",
        value: function getObjectName(objects, id, settings, options, isDesc) {
          var item = objects[id];
          var text = id;
          var attr = isDesc ? "desc" : "name";
          if (typeof settings === "string" && !options) {
            options = {
              language: settings
            };
            settings = null;
          }
          options = options || {};
          if (!options.language) {
            options.language = objects["system.config"] && objects["system.config"].common && objects["system.config"].common.language || window.sysLang || "en";
          }
          if (settings && settings.name) {
            text = settings.name;
            if (_typeof(text) === "object") {
              text = text[options.language] || text.en;
            }
          } else if (item && item.common && item.common[attr]) {
            text = item.common[attr];
            if (attr !== "desc" && !text && item.common.desc) {
              text = item.common.desc;
            }
            if (_typeof(text) === "object") {
              text = text[options.language] || text.en || text.de || text.ru || "";
            }
            text = (text || "").toString().replace(/[_.]/g, " ");
            if (text === text.toUpperCase()) {
              text = text[0] + text.substring(1).toLowerCase();
            }
          } else {
            var pos = id.lastIndexOf(".");
            text = id.substring(pos + 1).replace(/[_.]/g, " ");
            text = Utils3.CapitalWords(text);
          }
          return text.trim();
        }
      }, {
        key: "getObjectNameFromObj",
        value: function getObjectNameFromObj(obj, settings, options, isDesc) {
          var item = obj;
          var text = obj && obj._id || "";
          var attr = isDesc ? "desc" : "name";
          if (typeof settings === "string" && !options) {
            options = {
              language: settings
            };
            settings = null;
          }
          options = options || {};
          if (settings && settings.name) {
            text = settings.name;
            if (_typeof(text) === "object") {
              text = text[options.language] || text.en;
            }
          } else if (item && item.common && item.common[attr]) {
            text = item.common[attr];
            if (attr !== "desc" && !text && item.common.desc) {
              text = item.common.desc;
            }
            if (_typeof(text) === "object") {
              text = text[options.language] || text.en;
            }
            text = (text || "").toString().replace(/[_.]/g, " ");
            if (text === text.toUpperCase()) {
              text = text[0] + text.substring(1).toLowerCase();
            }
          }
          return text.trim();
        }
      }, {
        key: "getSettingsOrder",
        value: function getSettingsOrder(obj, forEnumId, options) {
          if (obj && obj.hasOwnProperty("common")) {
            obj = obj.common;
          }
          var settings;
          if (obj && obj.custom) {
            settings = (obj.custom || {})[NAMESPACE];
            var user = options.user || "admin";
            if (settings && settings[user]) {
              if (forEnumId) {
                if (settings[user].subOrder && settings[user].subOrder[forEnumId]) {
                  return JSON.parse(JSON.stringify(settings[user].subOrder[forEnumId]));
                }
              } else {
                if (settings[user].order) {
                  return JSON.parse(JSON.stringify(settings[user].order));
                }
              }
            }
          }
          return null;
        }
      }, {
        key: "getSettingsCustomURLs",
        value: function getSettingsCustomURLs(obj, forEnumId, options) {
          if (obj && obj.hasOwnProperty("common")) {
            obj = obj.common;
          }
          var settings;
          if (obj && obj.custom) {
            settings = (obj.custom || {})[NAMESPACE];
            var user = options.user || "admin";
            if (settings && settings[user]) {
              if (forEnumId) {
                if (settings[user].subURLs && settings[user].subURLs[forEnumId]) {
                  return JSON.parse(JSON.stringify(settings[user].subURLs[forEnumId]));
                }
              } else {
                if (settings[user].URLs) {
                  return JSON.parse(JSON.stringify(settings[user].URLs));
                }
              }
            }
          }
          return null;
        }
      }, {
        key: "reorder",
        value: function reorder(list, source, dest) {
          var result = Array.from(list);
          var _result$splice = result.splice(source, 1), _result$splice2 = _slicedToArray(_result$splice, 1), removed = _result$splice2[0];
          result.splice(dest, 0, removed);
          return result;
        }
      }, {
        key: "getSettings",
        value: function getSettings(obj, options, defaultEnabling) {
          var settings;
          var id = obj && obj._id || options && options.id;
          if (obj && obj.hasOwnProperty("common")) {
            obj = obj.common;
          }
          if (obj && obj.custom) {
            settings = obj.custom || {};
            settings = settings[NAMESPACE] && settings[NAMESPACE][options.user || "admin"] ? JSON.parse(JSON.stringify(settings[NAMESPACE][options.user || "admin"])) : {
              enabled: true
            };
          } else {
            settings = {
              enabled: defaultEnabling === void 0 ? true : defaultEnabling,
              useCustom: false
            };
          }
          if (!settings.hasOwnProperty("enabled")) {
            settings.enabled = defaultEnabling === void 0 ? true : defaultEnabling;
          }
          if (false) {
            if (obj.color)
              settings.color = obj.color;
            if (obj.icon)
              settings.icon = obj.icon;
            if (obj.name)
              settings.name = obj.name;
          } else {
            if (options) {
              if (!settings.name && options.name)
                settings.name = options.name;
              if (!settings.icon && options.icon)
                settings.icon = options.icon;
              if (!settings.color && options.color)
                settings.color = options.color;
            }
            if (obj) {
              if (!settings.color && obj.color)
                settings.color = obj.color;
              if (!settings.icon && obj.icon)
                settings.icon = obj.icon;
              if (!settings.name && obj.name)
                settings.name = obj.name;
            }
          }
          if (_typeof(settings.name) === "object") {
            settings.name = settings.name[options.language] || settings.name.en;
            settings.name = (settings.name || "").toString().replace(/_/g, " ");
            if (settings.name === settings.name.toUpperCase()) {
              settings.name = settings.name[0] + settings.name.substring(1).toLowerCase();
            }
          }
          if (!settings.name && id) {
            var pos = id.lastIndexOf(".");
            settings.name = id.substring(pos + 1).replace(/[_.]/g, " ");
            settings.name = (settings.name || "").toString().replace(/_/g, " ");
            settings.name = Utils3.CapitalWords(settings.name);
          }
          return settings;
        }
      }, {
        key: "setSettings",
        value: function setSettings(obj, settings, options) {
          if (obj) {
            obj.common = obj.common || {};
            obj.common.custom = obj.common.custom || {};
            obj.common.custom[NAMESPACE] = obj.common.custom[NAMESPACE] || {};
            obj.common.custom[NAMESPACE][options.user || "admin"] = settings;
            var s = obj.common.custom[NAMESPACE][options.user || "admin"];
            if (s.useCommon) {
              if (s.color !== void 0) {
                obj.common.color = s.color;
                delete s.color;
              }
              if (s.icon !== void 0) {
                obj.common.icon = s.icon;
                delete s.icon;
              }
              if (s.name !== void 0) {
                if (_typeof(obj.common.name) !== "object") {
                  obj.common.name = {};
                  obj.common.name[options.language] = s.name;
                } else {
                  obj.common.name[options.language] = s.name;
                }
                delete s.name;
              }
            }
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "getIcon",
        value: function getIcon(settings, style) {
          if (settings && settings.icon) {
            if (settings.icon.length <= 2) {
              return /* @__PURE__ */ _react["default"].createElement("span", {
                style: style || {}
              }, settings.icon);
            } else if (settings.icon.startsWith("data:image")) {
              return /* @__PURE__ */ _react["default"].createElement("img", {
                alt: settings.name,
                src: settings.icon,
                style: style || {}
              });
            } else {
              return /* @__PURE__ */ _react["default"].createElement("img", {
                alt: settings.name,
                src: (settings.prefix || "") + settings.icon,
                style: style || {}
              });
            }
          }
          return null;
        }
      }, {
        key: "getObjectIcon",
        value: function getObjectIcon(id, obj) {
          if (_typeof(id) === "object") {
            obj = id;
            id = obj._id;
          }
          if (obj && obj.common && obj.common.icon) {
            var icon = obj.common.icon;
            if (typeof icon === "string" && icon.length <= 2) {
              return icon;
            } else if (icon.startsWith("data:image")) {
              return icon;
            } else {
              var parts = id.split(".");
              if (parts[0] === "system") {
                icon = "adapter/" + parts[2] + (icon.startsWith("/") ? "" : "/") + icon;
              } else {
                icon = "adapter/" + parts[0] + (icon.startsWith("/") ? "" : "/") + icon;
              }
              if (window.location.pathname.match(/adapter\/[^/]+\/[^/]+\.html/)) {
                icon = "../../" + icon;
              } else if (window.location.pathname.match(/material\/[.\d]+/)) {
                icon = "../../" + icon;
              } else if (window.location.pathname.match(/material\//)) {
                icon = "../" + icon;
              }
              return icon;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "splitCamelCase",
        value: function splitCamelCase(text) {
          if (false) {
            var words = text.split(/\s+/);
            for (var i = 0; i < words.length; i++) {
              var word = words[i];
              if (word.toLowerCase() !== word && word.toUpperCase() !== word) {
                var z = 0;
                var ww = [];
                var start = 0;
                while (z < word.length) {
                  if (word[z].match(/[A-ZÜÄÖА-Я]/)) {
                    ww.push(word.substring(start, z));
                    start = z;
                  }
                  z++;
                }
                if (start !== z) {
                  ww.push(word.substring(start, z));
                }
                for (var k = 0; k < ww.length; k++) {
                  words.splice(i + k, 0, ww[k]);
                }
                i += ww.length;
              }
            }
            return words.map(function(w) {
              w = w.trim();
              if (w) {
                return w[0].toUpperCase() + w.substring(1).toLowerCase();
              }
              return "";
            }).join(" ");
          } else {
            return Utils3.CapitalWords(text);
          }
        }
      }, {
        key: "isUseBright",
        value: function isUseBright(color, defaultValue) {
          if (color === null || color === void 0 || color === "") {
            return defaultValue === void 0 ? true : defaultValue;
          }
          color = color.toString();
          if (color.indexOf("#") === 0) {
            color = color.slice(1);
          }
          var r;
          var g;
          var b;
          var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
          if (rgb && rgb.length === 4) {
            r = parseInt(rgb[1], 10);
            g = parseInt(rgb[2], 10);
            b = parseInt(rgb[3], 10);
          } else {
            if (color.length === 3) {
              color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
            }
            if (color.length !== 6) {
              return false;
            }
            r = parseInt(color.slice(0, 2), 16);
            g = parseInt(color.slice(2, 4), 16);
            b = parseInt(color.slice(4, 6), 16);
          }
          return r * 0.299 + g * 0.587 + b * 0.114 <= 186;
        }
      }, {
        key: "getTimeString",
        value: function getTimeString(seconds) {
          seconds = parseFloat(seconds);
          if (isNaN(seconds)) {
            return "--:--";
          }
          var hours = Math.floor(seconds / 3600);
          var minutes = Math.floor(seconds % 3600 / 60);
          var secs = seconds % 60;
          if (hours) {
            if (minutes < 10)
              minutes = "0" + minutes;
            if (secs < 10)
              secs = "0" + secs;
            return hours + ":" + minutes + ":" + secs;
          } else {
            if (secs < 10)
              secs = "0" + secs;
            return minutes + ":" + secs;
          }
        }
      }, {
        key: "getWindDirection",
        value: function getWindDirection(angle) {
          if (angle >= 0 && angle < 11.25) {
            return "N";
          } else if (angle >= 11.25 && angle < 33.75) {
            return "NNE";
          } else if (angle >= 33.75 && angle < 56.25) {
            return "NE";
          } else if (angle >= 56.25 && angle < 78.75) {
            return "ENE";
          } else if (angle >= 78.75 && angle < 101.25) {
            return "E";
          } else if (angle >= 101.25 && angle < 123.75) {
            return "ESE";
          } else if (angle >= 123.75 && angle < 146.25) {
            return "SE";
          } else if (angle >= 146.25 && angle < 168.75) {
            return "SSE";
          } else if (angle >= 168.75 && angle < 191.25) {
            return "S";
          } else if (angle >= 191.25 && angle < 213.75) {
            return "SSW";
          } else if (angle >= 213.75 && angle < 236.25) {
            return "SW";
          } else if (angle >= 236.25 && angle < 258.75) {
            return "WSW";
          } else if (angle >= 258.75 && angle < 281.25) {
            return "W";
          } else if (angle >= 281.25 && angle < 303.75) {
            return "WNW";
          } else if (angle >= 303.75 && angle < 326.25) {
            return "NW";
          } else if (angle >= 326.25 && angle < 348.75) {
            return "NNW";
          } else if (angle >= 348.75) {
            return "N";
          }
        }
      }, {
        key: "padding",
        value: function padding(num) {
          if (typeof num === "string") {
            if (num.length < 2) {
              return "0" + num;
            } else {
              return num;
            }
          } else if (num < 10) {
            return "0" + num;
          } else {
            return num;
          }
        }
      }, {
        key: "setDataFormat",
        value: function setDataFormat(format) {
          if (format) {
            Utils3.dateFormat = format.toUpperCase().split(/[.-/]/);
            Utils3.dateFormat.splice(Utils3.dateFormat.indexOf("YYYY"), 1);
          }
        }
      }, {
        key: "date2string",
        value: function date2string(now) {
          if (typeof now === "string") {
            now = now.trim();
            if (!now)
              return "";
            if (now.match(/^[\w\s]+$/)) {
              return now;
            }
            var m = now.match(/(\d{1,4})[-./](\d{1,2})[-./](\d{1,4})/);
            if (m) {
              var a = [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
              var year = a.find(function(y) {
                return y > 31;
              });
              a.splice(a.indexOf(year), 1);
              var day = a.find(function(m2) {
                return m2 > 12;
              });
              if (day) {
                a.splice(a.indexOf(day), 1);
                now = new Date(year, a[0] - 1, day);
              } else {
                if (Utils3.dateFormat[0][0] === "M" && Utils3.dateFormat[1][0] === "D") {
                  now = new Date(year, a[0] - 1, a[1]);
                  if (Math.abs(now.getTime - Date.now()) > 36e5 * 24 * 10) {
                    now = new Date(year, a[1] - 1, a[0]);
                  }
                } else if (Utils3.dateFormat[0][0] === "D" && Utils3.dateFormat[1][0] === "M") {
                  now = new Date(year, a[1] - 1, a[0]);
                  if (Math.abs(now.getTime - Date.now()) > 36e5 * 24 * 10) {
                    now = new Date(year, a[0] - 1, a[1]);
                  }
                } else {
                  now = new Date(now);
                }
              }
            } else {
              now = new Date(now);
            }
          } else {
            now = new Date(now);
          }
          var date = _i18n["default"].t("ra_dow_" + days[now.getDay()]).replace("ra_dow_", "");
          date += ". " + now.getDate() + " " + _i18n["default"].t("ra_month_" + months[now.getMonth()]).replace("ra_month_", "");
          return date;
        }
      }, {
        key: "renderTextWithA",
        value: function renderTextWithA(text) {
          var m = text.match(/<a [^<]+<\/a>|<br\/?>/);
          if (m) {
            var result = [];
            var key = 1;
            do {
              var p = text.split(m[0]);
              p[0] && result.push(/* @__PURE__ */ _react["default"].createElement("span", {
                key: "a" + key++
              }, p[0]));
              if (m[0].startsWith("<br")) {
                result.push(/* @__PURE__ */ _react["default"].createElement("br", {
                  key: "a" + key++
                }));
              } else {
                var href = m[0].match(/href="([^"]+)"/) || m[0].match(/href='([^']+)'/);
                var target = m[0].match(/target="([^"]+)"/) || m[0].match(/target='([^']+)'/);
                var rel = m[0].match(/rel="([^"]+)"/) || m[0].match(/rel='([^']+)'/);
                var title = m[0].match(/>([^<]*)</);
                result.push(/* @__PURE__ */ _react["default"].createElement("a", {
                  key: "a" + key++,
                  href: href ? href[1] : "",
                  target: target ? target[1] : "_blank",
                  rel: rel ? rel[1] : ""
                }, title ? title[1] : ""));
              }
              text = p[1];
              m = text && text.match(/<a [^<]+<\/a>|<br\/?>/);
              if (!m) {
                p[1] && result.push(/* @__PURE__ */ _react["default"].createElement("span", {
                  key: "a" + key++
                }, p[1]));
              }
            } while (m);
            return result;
          } else {
            return text;
          }
        }
      }, {
        key: "getSmartName",
        value: function getSmartName(states, id, instanceId, noCommon) {
          if (!id) {
            if (!noCommon) {
              if (!states.common) {
                return states.smartName;
              } else {
                if (states && !states.common) {
                  return states.smartName;
                } else {
                  return states.common.smartName;
                }
              }
            } else {
              if (states && !states.common) {
                return states.smartName;
              } else {
                return states && states.common && states.common.custom && states.common.custom[instanceId] ? states.common.custom[instanceId].smartName : void 0;
              }
            }
          } else if (!noCommon) {
            return states[id].common.smartName;
          } else {
            return states[id] && states[id].common && states[id].common.custom && states[id].common.custom[instanceId] ? states[id].common.custom[instanceId].smartName || null : null;
          }
        }
      }, {
        key: "getSmartNameFromObj",
        value: function getSmartNameFromObj(obj, instanceId, noCommon) {
          if (!noCommon) {
            if (!obj.common) {
              return obj.smartName;
            } else {
              if (obj && !obj.common) {
                return obj.smartName;
              } else {
                return obj.common.smartName;
              }
            }
          } else {
            if (obj && !obj.common) {
              return obj.smartName;
            } else {
              return obj && obj.common && obj.common.custom && obj.common.custom[instanceId] ? obj.common.custom[instanceId].smartName : void 0;
            }
          }
        }
      }, {
        key: "enableSmartName",
        value: function enableSmartName(obj, instanceId, noCommon) {
          if (noCommon) {
            obj.common.custom = obj.common.custom || {};
            obj.common.custom[instanceId] = obj.common.custom[instanceId] || {};
            obj.common.custom[instanceId].smartName = {};
          } else {
            obj.common.smartName = {};
          }
        }
      }, {
        key: "removeSmartName",
        value: function removeSmartName(obj, instanceId, noCommon) {
          if (noCommon) {
            if (obj.common && obj.common.custom && obj.common.custom[instanceId]) {
              obj.common.custom[instanceId] = null;
            }
          } else {
            obj.common.smartName = null;
          }
        }
      }, {
        key: "updateSmartName",
        value: function updateSmartName(obj, newSmartName, byON, smartType, instanceId, noCommon) {
          var language = _i18n["default"].getLanguage();
          if (typeof obj.common.smartName === "string") {
            var nnn = obj.common.smartName;
            obj.common.smartName = {};
            obj.common.smartName[language] = nnn;
          }
          if (obj["native"] && obj["native"].byON) {
            delete obj["native"].byON;
            var _smartName = obj.common.smartName;
            if (!_smartName || _typeof(_smartName) !== "object") {
              _smartName = {
                en: _smartName
              };
              _smartName[language] = _smartName.en;
            }
            obj.common.smartName = _smartName;
          }
          if (smartType !== void 0) {
            if (noCommon) {
              obj.common.custom = obj.common.custom || {};
              obj.common.custom[instanceId] = obj.common.custom[instanceId] || {};
              obj.common.custom[instanceId].smartName = obj.common.custom[instanceId].smartName || {};
              if (!smartType) {
                delete obj.common.custom[instanceId].smartName.smartType;
              } else {
                obj.common.custom[instanceId].smartName.smartType = smartType;
              }
            } else {
              obj.common.smartName = obj.common.smartName || {};
              if (!smartType) {
                delete obj.common.smartName.smartType;
              } else {
                obj.common.smartName.smartType = smartType;
              }
            }
          }
          if (byON !== void 0) {
            if (noCommon) {
              obj.common.custom = obj.common.custom || {};
              obj.common.custom[instanceId] = obj.common.custom[instanceId] || {};
              obj.common.custom[instanceId].smartName = obj.common.custom[instanceId].smartName || {};
              obj.common.custom[instanceId].smartName.byON = byON;
            } else {
              obj.common.smartName = obj.common.smartName || {};
              obj.common.smartName.byON = byON;
            }
          }
          if (newSmartName !== void 0) {
            var smartName;
            if (noCommon) {
              obj.common.custom = obj.common.custom || {};
              obj.common.custom[instanceId] = obj.common.custom[instanceId] || {};
              obj.common.custom[instanceId].smartName = obj.common.custom[instanceId].smartName || {};
              smartName = obj.common.custom[instanceId].smartName;
            } else {
              obj.common.smartName = obj.common.smartName || {};
              smartName = obj.common.smartName;
            }
            smartName[language] = newSmartName;
            if (smartName && (!smartName[language] || smartName[language] === obj.common.name && (!obj.common.role || obj.common.role.indexOf("button") >= 0))) {
              delete smartName[language];
              var empty = true;
              for (var key in smartName) {
                if (smartName.hasOwnProperty(key)) {
                  empty = false;
                  break;
                }
              }
              if (empty) {
                if (noCommon) {
                  if (obj.common.custom[instanceId].smartName.byON === void 0) {
                    delete obj.common.custom[instanceId];
                  } else {
                    delete obj.common.custom[instanceId].en;
                    delete obj.common.custom[instanceId].de;
                    delete obj.common.custom[instanceId].ru;
                    delete obj.common.custom[instanceId].nl;
                    delete obj.common.custom[instanceId].pl;
                    delete obj.common.custom[instanceId].it;
                    delete obj.common.custom[instanceId].fr;
                    delete obj.common.custom[instanceId].pt;
                    delete obj.common.custom[instanceId].es;
                    delete obj.common.custom[instanceId]["zh-cn"];
                  }
                } else {
                  if (obj.common.smartName.byON !== void 0) {
                    delete obj.common.smartName.en;
                    delete obj.common.smartName.de;
                    delete obj.common.smartName.ru;
                    delete obj.common.smartName.nl;
                    delete obj.common.smartName.pl;
                    delete obj.common.smartName.it;
                    delete obj.common.smartName.fr;
                    delete obj.common.smartName.pt;
                    delete obj.common.smartName.es;
                    delete obj.common.smartName["zh-cn"];
                  } else {
                    obj.common.smartName = null;
                  }
                }
              }
            }
          }
        }
      }, {
        key: "disableSmartName",
        value: function disableSmartName(obj, instanceId, noCommon) {
          if (noCommon) {
            obj.common.custom = obj.common.custom || {};
            obj.common.custom[instanceId] = obj.common.custom[instanceId] || {};
            obj.common.custom[instanceId].smartName = false;
          } else {
            obj.common.smartName = false;
          }
        }
      }, {
        key: "copyToClipboard",
        value: function copyToClipboard(text, e) {
          var el = window.document.createElement("textarea");
          el.value = text;
          window.document.body.appendChild(el);
          el.select();
          window.document.execCommand("copy");
          window.document.body.removeChild(el);
          console.log(text);
          e && e.stopPropagation();
          e && e.preventDefault();
        }
      }, {
        key: "getFileExtension",
        value: function getFileExtension(fileName) {
          var pos = (fileName || "").lastIndexOf(".");
          if (pos !== -1) {
            return fileName.substring(pos + 1).toLowerCase();
          } else {
            return null;
          }
        }
      }, {
        key: "formatBytes",
        value: function formatBytes(bytes) {
          if (Math.abs(bytes) < 1024) {
            return bytes + " B";
          }
          var units = ["KB", "MB", "GB"];
          var u = -1;
          do {
            bytes /= 1024;
            ++u;
          } while (Math.abs(bytes) >= 1024 && u < units.length - 1);
          return bytes.toFixed(1) + " " + units[u];
        }
      }, {
        key: "getInvertedColor",
        value: function getInvertedColor(color, themeType, invert) {
          if (!color) {
            return void 0;
          } else {
            var invertedColor = Utils3.invertColor(color, true);
            if (invertedColor === "#FFFFFF" && (themeType === "dark" || invert && themeType === "light")) {
              return "#DDD";
            } else if (invertedColor === "#000000" && (themeType === "light" || invert && themeType === "dark")) {
              return "#222";
            } else {
              return void 0;
            }
          }
        }
      }, {
        key: "invertColor",
        value: function invertColor(hex, bw) {
          if (hex === void 0 || hex === null || hex === "" || typeof hex !== "string") {
            return "";
          }
          if (hex.startsWith("rgba")) {
            var m = hex.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([.\d]+)\)/);
            if (m) {
              hex = parseInt(m[1], 10).toString(16).padStart(2, "0") + parseInt(m[2], 10).toString(16).padStart(2, "0") + parseInt(m[2], 10).toString(16).padStart(2, "0");
            }
          } else if (hex.startsWith("rgba")) {
            var _m = hex.match(/rgb?\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (_m) {
              hex = parseInt(_m[1], 10).toString(16).padStart(2, "0") + parseInt(_m[2], 10).toString(16).padStart(2, "0") + parseInt(_m[2], 10).toString(16).padStart(2, "0");
            }
          } else if (hex.startsWith("#")) {
            hex = hex.slice(1);
          }
          if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }
          if (hex.length !== 6) {
            console.warn("Cannot invert color: " + hex);
            return hex;
          }
          var r = parseInt(hex.slice(0, 2), 16);
          var g = parseInt(hex.slice(2, 4), 16);
          var b = parseInt(hex.slice(4, 6), 16);
          if (bw) {
            return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
          }
          r = (255 - r).toString(16);
          g = (255 - g).toString(16);
          b = (255 - b).toString(16);
          return "#" + r.padStart(2, "0") + g.padStart(2, "0") + b.padStart(2, "0");
        }
      }, {
        key: "_toVal",
        value: function _toVal(mix) {
          var k, y, str = "";
          if (typeof mix === "string" || typeof mix === "number") {
            str += mix;
          } else if (_typeof(mix) === "object") {
            if (Array.isArray(mix)) {
              for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                  if (y = Utils3._toVal(mix[k])) {
                    str && (str += " ");
                    str += y;
                  }
                }
              }
            } else {
              for (k in mix) {
                if (mix[k]) {
                  str && (str += " ");
                  str += k;
                }
              }
            }
          }
          return str;
        }
      }, {
        key: "clsx",
        value: function clsx() {
          var i = 0;
          var tmp;
          var x;
          var str = "";
          while (i < arguments.length) {
            if (tmp = arguments[i++]) {
              if (x = Utils3._toVal(tmp)) {
                str && (str += " ");
                str += x;
              }
            }
          }
          return str;
        }
      }, {
        key: "getThemeName",
        value: function getThemeName() {
          var themeName2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          if (window.vendorPrefix && window.vendorPrefix !== "@@vendorPrefix@@") {
            return window.vendorPrefix;
          }
          return themeName2 ? themeName2 : window.localStorage && window.localStorage.getItem("App.themeName") ? window.localStorage.getItem("App.themeName") : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "colored";
        }
      }, {
        key: "getThemeType",
        value: function getThemeType() {
          var themeName2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          if (window.vendorPrefix && window.vendorPrefix !== "@@vendorPrefix@@") {
            return "light";
          }
          themeName2 = themeName2 || window.localStorage && window.localStorage.getItem("App.themeName");
          return themeName2 === "dark" || themeName2 === "blue" ? "dark" : "light";
        }
      }, {
        key: "setThemeName",
        value: function setThemeName(themeName2) {
          if (window.vendorPrefix && window.vendorPrefix !== "@@vendorPrefix@@") {
            return;
          }
          window.localStorage.setItem("App.themeName", themeName2);
          window.localStorage.setItem("App.theme", themeName2 === "dark" || themeName2 === "blue" ? "dark" : "light");
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme(themeName2) {
          if (window.vendorPrefix && window.vendorPrefix !== "@@vendorPrefix@@") {
            return window.vendorPrefix;
          }
          themeName2 = themeName2 || window.localStorage && window.localStorage.getItem("App.themeName");
          var themes = Utils3.getThemeNames();
          var pos = themes.indexOf(themeName2);
          var newTheme;
          if (pos !== -1) {
            newTheme = themes[(pos + 1) % themes.length];
          } else {
            newTheme = themes[0];
          }
          Utils3.setThemeName(newTheme);
          return newTheme;
        }
      }, {
        key: "getThemeNames",
        value: function getThemeNames() {
          if (window.vendorPrefix && window.vendorPrefix !== "@@vendorPrefix@@") {
            return [window.vendorPrefix];
          }
          return ["light", "dark", "blue", "colored"];
        }
      }, {
        key: "parseQuery",
        value: function parseQuery(query) {
          query = (query || "").toString().replace(/^\?/, "");
          var result = {};
          query.split("&").forEach(function(part) {
            part = part.trim();
            if (part) {
              var parts = part.split("=");
              var attr = decodeURIComponent(parts[0]).trim();
              if (parts.length > 1) {
                result[attr] = decodeURIComponent(parts[1]);
                if (result[attr] === "true") {
                  result[attr] = true;
                } else if (result[attr] === "false") {
                  result[attr] = false;
                } else {
                  var f = parseFloat(result[attr]);
                  if (f.toString() === result[attr]) {
                    result[attr] = f;
                  }
                }
              } else {
                result[attr] = true;
              }
            }
          });
          return result;
        }
      }, {
        key: "getParentId",
        value: function getParentId(id) {
          var p = (id || "").toString().split(".");
          if (p.length > 1) {
            p.pop();
            return p.join(".");
          } else {
            return null;
          }
        }
      }, {
        key: "formatDate",
        value: function formatDate(dateObj, dateFormat) {
          if (!dateObj) {
            return "";
          }
          var text;
          var mm = dateObj.getMonth() + 1;
          if (mm < 10) {
            mm = "0" + mm;
          }
          var dd = dateObj.getDate();
          if (dd < 10) {
            dd = "0" + dd;
          }
          if (dateFormat === "MM/DD/YYYY") {
            text = mm + "/" + dd + "/" + dateObj.getFullYear();
          } else {
            text = dateObj.getFullYear() + "-" + mm + "-" + dd;
          }
          var v = dateObj.getHours();
          if (v < 10) {
            text += " 0" + v;
          } else {
            text += " " + v;
          }
          v = dateObj.getMinutes();
          if (v < 10) {
            text += ":0" + v;
          } else {
            text += ":" + v;
          }
          v = dateObj.getSeconds();
          if (v < 10) {
            text += ":0" + v;
          } else {
            text += ":" + v;
          }
          v = dateObj.getMilliseconds();
          if (v < 10) {
            text += ".00" + v;
          } else if (v < 100) {
            text += ".0" + v;
          } else {
            text += "." + v;
          }
          return text;
        }
      }, {
        key: "formatTime",
        value: function formatTime(seconds) {
          if (seconds) {
            seconds = Math.round(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = seconds % 60;
            if (d) {
              return "".concat(d, ".").concat(h.toString().padStart(2, "0"), ":").concat(m.toString().padStart(2, "0"), ":").concat(s.toString().padStart(2, "0"));
            } else if (h) {
              return "".concat(h, ":").concat(m.toString().padStart(2, "0"), ":").concat(s.toString().padStart(2, "0"));
            } else {
              return "0:".concat(m.toString().padStart(2, "0"), ":").concat(s.toString().padStart(2, "0"));
            }
          } else {
            return "0:00:00";
          }
        }
      }, {
        key: "MDtext2link",
        value: function MDtext2link(text) {
          var m = text.match(/\d+\.\)\s/);
          if (m) {
            text = text.replace(m[0], m[0].replace(/\s/, "&nbsp;"));
          }
          return text.replace(/[^a-zA-Zа-яА-Я0-9]/g, "").trim().replace(/\s/g, "").toLowerCase();
        }
      }, {
        key: "openLink",
        value: function openLink(url, target) {
          if (target === "this") {
            window.location = url;
          } else {
            window.open(url, target || "_blank");
          }
        }
      }, {
        key: "MDgetTitle",
        value: function MDgetTitle(text) {
          var _Utils$extractHeader = Utils3.extractHeader(text), body = _Utils$extractHeader.body, header = _Utils$extractHeader.header;
          if (!header.title) {
            body = body.replace(/{[^}]*}/g, "");
            body = body.trim();
            var lines = body.replace(/\r/g, "").split("\n");
            for (var i = 0; i < lines.length; i++) {
              if (lines[i].startsWith("# ")) {
                return lines[i].substring(2).trim();
              }
            }
            return "";
          } else {
            return header.title;
          }
        }
      }, {
        key: "MDextractHeader",
        value: function MDextractHeader(text) {
          var attrs = {};
          if (text.substring(0, 3) === "---") {
            var pos = text.substring(3).indexOf("\n---");
            if (pos !== -1) {
              var _header = text.substring(3, pos + 3);
              var lines = _header.replace(/\r/g, "").split("\n");
              lines.forEach(function(line) {
                if (!line.trim()) {
                  return;
                }
                var pos2 = line.indexOf(":");
                if (pos2 !== -1) {
                  var attr = line.substring(0, pos2).trim();
                  attrs[attr] = line.substring(pos2 + 1).trim();
                  attrs[attr] = attrs[attr].replace(/^['"]|['"]$/g, "");
                  if (attrs[attr] === "true") {
                    attrs[attr] = true;
                  } else if (attrs[attr] === "false") {
                    attrs[attr] = false;
                  } else if (parseFloat(attrs[attr]).toString() === attrs[attr]) {
                    attrs[attr] = parseFloat(attrs[attr]);
                  }
                } else {
                  attrs[line.trim()] = true;
                }
              });
              text = text.substring(pos + 7);
            }
          }
          return {
            header: attrs,
            body: text
          };
        }
      }, {
        key: "MDremoveDocsify",
        value: function MDremoveDocsify(text) {
          var m = text.match(/{docsify-[^}]*}/g);
          if (m) {
            m.forEach(function(doc) {
              return text = text.replace(doc, "");
            });
          }
          return text;
        }
      }, {
        key: "generateFile",
        value: function generateFile(filename, json) {
          var el = document.createElement("a");
          el.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json, null, 2)));
          el.setAttribute("download", filename);
          el.style.display = "none";
          document.body.appendChild(el);
          el.click();
          document.body.removeChild(el);
        }
      }, {
        key: "quality2text",
        value: function quality2text(quality) {
          var custom = quality & 4294901760;
          var text = QUALITY_BITS[quality];
          var result;
          if (text) {
            result = [text];
          } else if (quality & 1) {
            result = [QUALITY_BITS[1], "0x" + (quality & (65535 & ~1)).toString(16)];
          } else if (quality & 2) {
            result = [QUALITY_BITS[2], "0x" + (quality & (65535 & ~2)).toString(16)];
          } else {
            result = ["0x" + quality.toString(16)];
          }
          if (custom) {
            result.push("0x" + (custom >> 16).toString(16).toUpperCase());
          }
          return result;
        }
      }, {
        key: "clone",
        value: function clone(object) {
          return JSON.parse(JSON.stringify(object));
        }
      }, {
        key: "getStates",
        value: function getStates(obj) {
          var _obj$common;
          var states = obj === null || obj === void 0 ? void 0 : (_obj$common = obj.common) === null || _obj$common === void 0 ? void 0 : _obj$common.states;
          if (states) {
            if (typeof states === "string" && states[0] === "{") {
              try {
                states = JSON.parse(states);
              } catch (ex) {
                console.error("Cannot parse states: ".concat(states));
                states = null;
              }
            } else if (typeof states === "string") {
              var parts = states.split(";");
              states = {};
              for (var p = 0; p < parts.length; p++) {
                var s = parts[p].split(":");
                states[s[0]] = s[1];
              }
            } else if (Array.isArray(states)) {
              var result = {};
              states.forEach(function(value, key) {
                return result[key] = value;
              });
              return result;
            }
          }
          return states;
        }
      }, {
        key: "getSvg",
        value: function getSvg(url) {
          return fetch(url).then(function(response) {
            return response.blob();
          }).then(function(blob) {
            return new Promise(function(resolve) {
              var reader = new FileReader();
              reader.onload = function() {
                resolve(this.result);
              };
              reader.readAsDataURL(blob);
            });
          });
        }
      }]);
      return Utils3;
    }();
    _defineProperty(Utils2, "namespace", NAMESPACE);
    _defineProperty(Utils2, "INSTANCES", "instances");
    _defineProperty(Utils2, "dateFormat", ["DD", "MM"]);
    _defineProperty(Utils2, "FORBIDDEN_CHARS", /(?:(?![ !#-&\(\)\+\x2D-:=@-Z\^_a-~\xB5\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BC-\u01BF\u01C4\u01C6\u01C7\u01C9\u01CA\u01CC-\u01F1\u01F3-\u0293\u0295-\u02AF\u0370-\u0373\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0560-\u0588\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FD-\u10FF\u13A0-\u13F5\u13F8-\u13FD\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6-\u1FBB\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCB\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFB\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C7B\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA620-\uA629\uA640-\uA66D\uA680-\uA69B\uA722-\uA76F\uA771-\uA787\uA78B-\uA78E\uA790-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F5\uA7F6\uA7FA\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uABF0-\uABF9\uFB00-\uFB06\uFB13-\uFB17\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDC00-\uDC4F\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD00-\uDD43\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9])[\s\S])+/g);
    var _default = Utils2;
    exports["default"] = _default;
  }
});

// admin/src/index.tsx
var import_react = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());
var import_app = __toModule(require_app());
var import_Theme = __toModule(require_Theme());
var import_Utils = __toModule(require_Utils());
var import_hooks = __toModule(require_hooks());
var themeName = import_Utils.default.getThemeName();
var SettingsPageContent = import_react.default.memo(() => {
  const {settings, originalSettings, setSettings} = (0, import_hooks.useSettings)();
  const {translate: _} = (0, import_hooks.useI18n)();
  const handleChange = (option, value) => {
    setSettings((s) => ({
      ...s,
      [option]: value
    }));
  };
  const genDSUID = () => {
    const genRanHex = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
    handleChange("vdcDSUID", genRanHex(34).toUpperCase());
  };
  const showNoDSUID = () => {
    if (settings.vdcDSUID && settings.vdcDSUID.length > 0)
      return null;
    return /* @__PURE__ */ import_react.default.createElement(Alert_default, {
      sx: {marginTop: 1},
      severity: "warning"
    }, /* @__PURE__ */ import_react.default.createElement(AlertTitle_default, null, _("noDSUIDTitle")), _("noDSUIDText"));
  };
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    container: true,
    sx: {marginTop: 4}
  }, /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    item: true,
    xs: 1
  }, /* @__PURE__ */ import_react.default.createElement(Avatar_default, {
    alt: "Digitalstrom VDC",
    src: "digitalstrom-vdc.png"
  })), /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    item: true,
    xs: 11
  }, /* @__PURE__ */ import_react.default.createElement("h3", null, /* @__PURE__ */ import_react.default.createElement("strong", null, _("pageTitle"))))), showNoDSUID(), /* @__PURE__ */ import_react.default.createElement(Box_default, {
    sx: {marginTop: 1, p: 2, border: "1px grey"}
  }, /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    container: true,
    sx: {marginTop: 4}
  }, /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    item: true,
    xs: 12,
    sm: 6
  }, /* @__PURE__ */ import_react.default.createElement(Tooltip_default, {
    title: _("vdcNameTooltip"),
    arrow: true
  }, /* @__PURE__ */ import_react.default.createElement(TextField_default, {
    label: _("vdcName"),
    color: "success",
    sx: {width: "100%", textAlignLast: "left"},
    value: settings.vdcName,
    placeholder: "placeholder",
    onChange: (event) => {
      handleChange("vdcName", event.target.value);
    }
  }))), /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    item: true,
    xs: 12,
    sm: 6
  }, /* @__PURE__ */ import_react.default.createElement(Tooltip_default, {
    title: _("vdcConfigURLTooltip"),
    arrow: true
  }, /* @__PURE__ */ import_react.default.createElement(TextField_default, {
    fullWidth: true,
    label: _("vdcConfigURL"),
    color: "success",
    sx: {width: "100%", textAlignLast: "left"},
    value: settings.vdcConfigURL,
    placeholder: "http://iobroker:8081",
    onChange: (event) => {
      handleChange("vdcConfigURL", event.target.value);
    }
  })))), /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    container: true,
    sx: {marginTop: 4}
  }, /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    item: true,
    xs: 12,
    sm: 6
  }, /* @__PURE__ */ import_react.default.createElement(Tooltip_default, {
    title: _("vdcPortTooltip"),
    arrow: true
  }, /* @__PURE__ */ import_react.default.createElement(TextField_default, {
    label: _("vdcPort"),
    color: "success",
    sx: {width: "100%", textAlignLast: "left"},
    value: settings.vdcPort,
    placeholder: "placeholder",
    onChange: (event) => {
      handleChange("vdcPort", parseInt(event.target.value));
    }
  }))), /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    container: true,
    xs: 12,
    sm: 6
  }, /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    item: true,
    xs: 8
  }, /* @__PURE__ */ import_react.default.createElement(Tooltip_default, {
    title: _("vdcDSUIDTooltip"),
    arrow: true
  }, /* @__PURE__ */ import_react.default.createElement(TextField_default, {
    label: _("vdcDSUID"),
    color: "success",
    sx: {width: "100%", textAlignLast: "left"},
    value: settings.vdcDSUID,
    placeholder: "placeholder",
    onChange: (event) => {
      handleChange("vdcDSUID", event.target.value);
    }
  }))), /* @__PURE__ */ import_react.default.createElement(Grid_default, {
    item: true,
    xs: 4
  }, /* @__PURE__ */ import_react.default.createElement(Button_default, {
    onClick: () => {
      genDSUID();
    },
    variant: "outlined"
  }, _("generateVDCDSUID")))))));
});
var migrateSettings = (settings) => {
  if (settings.vdcName === void 0) {
    settings.vdcName = "ioBroker Controller";
    settings.vdcPort = 4e4;
    settings.vdcDebug = false;
  }
};
var translations = {
  en: require_en(),
  de: require_de(),
  ru: require_ru(),
  pt: require_pt(),
  nl: require_nl(),
  fr: require_fr(),
  it: require_it(),
  es: require_es(),
  pl: require_pl(),
  "zh-cn": require_zh_cn()
};
var Root = () => {
  return /* @__PURE__ */ import_react.default.createElement(ThemeProvider_default, {
    theme: (0, import_Theme.default)(themeName)
  }, /* @__PURE__ */ import_react.default.createElement(import_app.SettingsApp, {
    name: "digitalstrom-vdc",
    afterLoad: migrateSettings,
    translations
  }, /* @__PURE__ */ import_react.default.createElement(SettingsPageContent, null)));
};
import_react_dom.default.render(/* @__PURE__ */ import_react.default.createElement(Root, null), document.getElementById("root"));
//# sourceMappingURL=index.js.map
