import {
  Alert_default,
  Button_default,
  Tab_default,
  Tabs_default,
  __commonJS,
  __toModule,
  capitalize,
  deepmerge,
  exactProp,
  getDisplayName,
  nested_default,
  ponyfillGlobal_default,
  require_Badge,
  require_Box,
  require_Button,
  require_Checkbox,
  require_CircularProgress,
  require_Close,
  require_Dialog,
  require_DialogActions,
  require_DialogContent,
  require_DialogContentText,
  require_DialogTitle,
  require_Fab,
  require_FormControl,
  require_FormControlLabel,
  require_Grid,
  require_IconButton,
  require_Info,
  require_Input,
  require_List,
  require_ListItem,
  require_ListItemIcon,
  require_ListItemSecondaryAction,
  require_ListItemText,
  require_Loader,
  require_MenuItem,
  require_ModalDialog,
  require_OutlinedInput,
  require_Paper,
  require_Select,
  require_Slider,
  require_Snackbar,
  require_Switch,
  require_TextField,
  require_Tooltip,
  require_Typography,
  require_Utils,
  require_app,
  require_createSvgIcon,
  require_css_vendor_cjs,
  require_de,
  require_dist,
  require_en,
  require_es,
  require_fr,
  require_hoist_non_react_statics_cjs,
  require_hooks,
  require_i18n,
  require_i18n2,
  require_index_cjs,
  require_interopRequireDefault,
  require_interopRequireWildcard,
  require_it,
  require_jsx_runtime,
  require_nl,
  require_pl,
  require_prop_types,
  require_pt,
  require_react,
  require_react_dom,
  require_ru,
  require_styles,
  require_tiny_warning_cjs,
  require_withStyles,
  require_withWidth,
  require_zh_cn,
  useTheme
} from "./chunk-66IBHZNV.js";

// node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var require_react_error_boundary_umd = __commonJS({
  "node_modules/react-error-boundary/dist/react-error-boundary.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ReactErrorBoundary = {}, global.React));
    })(exports, function(exports2, React11) {
      "use strict";
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      var React__namespace = /* @__PURE__ */ _interopNamespace(React11);
      function _setPrototypeOf2(o, p) {
        _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf2(o, p);
      }
      function _inheritsLoose2(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf2(subClass, superClass);
      }
      var changedArray = function changedArray2(a, b) {
        if (a === void 0) {
          a = [];
        }
        if (b === void 0) {
          b = [];
        }
        return a.length !== b.length || a.some(function(item, index2) {
          return !Object.is(item, b[index2]);
        });
      };
      var initialState = {
        error: null
      };
      var ErrorBoundary2 = /* @__PURE__ */ function(_React$Component) {
        _inheritsLoose2(ErrorBoundary3, _React$Component);
        function ErrorBoundary3() {
          var _this;
          for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
            _args[_key] = arguments[_key];
          }
          _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
          _this.state = initialState;
          _this.resetErrorBoundary = function() {
            var _this$props;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);
            _this.reset();
          };
          return _this;
        }
        ErrorBoundary3.getDerivedStateFromError = function getDerivedStateFromError(error) {
          return {
            error
          };
        };
        var _proto = ErrorBoundary3.prototype;
        _proto.reset = function reset() {
          this.setState(initialState);
        };
        _proto.componentDidCatch = function componentDidCatch(error, info) {
          var _this$props$onError, _this$props2;
          (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info);
        };
        _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
          var error = this.state.error;
          var resetKeys = this.props.resetKeys;
          if (error !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
            var _this$props$onResetKe, _this$props3;
            (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);
            this.reset();
          }
        };
        _proto.render = function render() {
          var error = this.state.error;
          var _this$props4 = this.props, fallbackRender = _this$props4.fallbackRender, FallbackComponent = _this$props4.FallbackComponent, fallback = _this$props4.fallback;
          if (error !== null) {
            var _props = {
              error,
              resetErrorBoundary: this.resetErrorBoundary
            };
            if (/* @__PURE__ */ React__namespace.isValidElement(fallback)) {
              return fallback;
            } else if (typeof fallbackRender === "function") {
              return fallbackRender(_props);
            } else if (FallbackComponent) {
              return /* @__PURE__ */ React__namespace.createElement(FallbackComponent, _props);
            } else {
              throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
            }
          }
          return this.props.children;
        };
        return ErrorBoundary3;
      }(React__namespace.Component);
      function withErrorBoundary(Component, errorBoundaryProps) {
        var Wrapped = function Wrapped2(props) {
          return /* @__PURE__ */ React__namespace.createElement(ErrorBoundary2, errorBoundaryProps, /* @__PURE__ */ React__namespace.createElement(Component, props));
        };
        var name = Component.displayName || Component.name || "Unknown";
        Wrapped.displayName = "withErrorBoundary(" + name + ")";
        return Wrapped;
      }
      function useErrorHandler(givenError) {
        var _React$useState = React__namespace.useState(null), error = _React$useState[0], setError = _React$useState[1];
        if (givenError != null)
          throw givenError;
        if (error != null)
          throw error;
        return setError;
      }
      exports2.ErrorBoundary = ErrorBoundary2;
      exports2.useErrorHandler = useErrorHandler;
      exports2.withErrorBoundary = withErrorBoundary;
      Object.defineProperty(exports2, "__esModule", {value: true});
    });
  }
});

// node_modules/iobroker-react/build/lib/components/Dropdown.js
var require_Dropdown = __commonJS({
  "node_modules/iobroker-react/build/lib/components/Dropdown.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {enumerable: true, value: v});
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Dropdown = void 0;
    var MenuItem_1 = __importDefault(require_MenuItem());
    var OutlinedInput_1 = __importDefault(require_OutlinedInput());
    var Select_1 = __importDefault(require_Select());
    var React11 = __importStar(require_react());
    var Dropdown = (props) => {
      const {options, selectedOption, noOptionsMessage, placeholder} = props, otherProps = __rest(props, ["options", "selectedOption", "noOptionsMessage", "placeholder"]);
      const hasOptions = !!options && options.length;
      const showNoOptionsMessage = !hasOptions && !!noOptionsMessage;
      let value;
      if (options === null || options === void 0 ? void 0 : options.length)
        value = selectedOption;
      return React11.createElement(Select_1.default, Object.assign({value: value !== null && value !== void 0 ? value : "", displayEmpty: true, input: React11.createElement(OutlinedInput_1.default, {labelWidth: 0}), margin: "dense"}, otherProps), React11.createElement(MenuItem_1.default, {value: "", disabled: true}, placeholder !== null && placeholder !== void 0 ? placeholder : ""), options && options.length && options.map(({value: value2, label}) => React11.createElement(MenuItem_1.default, {key: value2, value: value2}, label)), showNoOptionsMessage && React11.createElement(MenuItem_1.default, {key: "__empty", value: "__empty", disabled: true}, noOptionsMessage));
    };
    exports.Dropdown = Dropdown;
  }
});

// node_modules/iobroker-react/build/components.js
var require_components = __commonJS({
  "node_modules/iobroker-react/build/components.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {"default": mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.ModalDialog = exports.Loader = exports.Dropdown = void 0;
    var Dropdown_1 = require_Dropdown();
    Object.defineProperty(exports, "Dropdown", {enumerable: true, get: function() {
      return Dropdown_1.Dropdown;
    }});
    var Loader_1 = require_Loader();
    Object.defineProperty(exports, "Loader", {enumerable: true, get: function() {
      return __importDefault(Loader_1).default;
    }});
    var ModalDialog_1 = require_ModalDialog();
    Object.defineProperty(exports, "ModalDialog", {enumerable: true, get: function() {
      return ModalDialog_1.ModalDialog;
    }});
  }
});

// node_modules/iobroker-react/build/i18n.js
var require_i18n3 = __commonJS({
  "node_modules/iobroker-react/build/i18n.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.I18n = void 0;
    var i18n_1 = require_i18n();
    Object.defineProperty(exports, "I18n", {enumerable: true, get: function() {
      return i18n_1.I18n;
    }});
  }
});

// node_modules/iobroker-react/build/index.js
var require_build = __commonJS({
  "node_modules/iobroker-react/build/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar(require_app(), exports);
    __exportStar(require_components(), exports);
    __exportStar(require_hooks(), exports);
    __exportStar(require_i18n3(), exports);
  }
});

// node_modules/@material-ui/icons/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/@material-ui/icons/Cancel.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
    }), "Cancel");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Check.js
var require_Check = __commonJS({
  "node_modules/@material-ui/icons/Check.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
    }), "Check");
    exports.default = _default;
  }
});

// node_modules/@iobroker/adapter-react/Components/copy-to-clipboard.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/@iobroker/adapter-react/Components/copy-to-clipboard.js"(exports, module) {
    "use strict";
    function deselectCurrent() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    }
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// node_modules/react-from-dom/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/react-from-dom/lib/helpers.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {error};
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.possibleStandardNames = exports.noTextChildNodes = exports.randomString = exports.styleToObject = void 0;
    var styleToObject = function(input) {
      var attributes = input.split(/ ?; ?/);
      return attributes.reduce(function(acc, d) {
        var _a = __read(d.split(/ ?: ?/), 2), key = _a[0], value = _a[1];
        if (key && value) {
          acc[key.replace(/-(\w)/g, function(_$0, $1) {
            return $1.toUpperCase();
          })] = Number.isNaN(Number(value)) ? value : Number(value);
        }
        return acc;
      }, {});
    };
    exports.styleToObject = styleToObject;
    function randomString(length) {
      if (length === void 0) {
        length = 6;
      }
      var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var result = "";
      for (var i = length; i > 0; --i) {
        result += characters[Math.round(Math.random() * (characters.length - 1))];
      }
      return result;
    }
    exports.randomString = randomString;
    exports.noTextChildNodes = [
      "br",
      "col",
      "colgroup",
      "dl",
      "hr",
      "iframe",
      "img",
      "input",
      "link",
      "menuitem",
      "meta",
      "ol",
      "param",
      "select",
      "table",
      "tbody",
      "tfoot",
      "thead",
      "tr",
      "ul",
      "wbr"
    ];
    exports.possibleStandardNames = {
      "accept-charset": "acceptCharset",
      acceptcharset: "acceptCharset",
      accesskey: "accessKey",
      allowfullscreen: "allowFullScreen",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      charset: "charSet",
      class: "className",
      classid: "classID",
      classname: "className",
      colspan: "colSpan",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controlslist: "controlsList",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      datetime: "dateTime",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      enctype: "encType",
      for: "htmlFor",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      maxlength: "maxLength",
      mediagroup: "mediaGroup",
      minlength: "minLength",
      nomodule: "noModule",
      novalidate: "noValidate",
      playsinline: "playsInline",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rowspan: "rowSpan",
      spellcheck: "spellCheck",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      tabindex: "tabIndex",
      typemustmatch: "typeMustMatch",
      usemap: "useMap",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      diffuseconstant: "diffuseConstant",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      edgemode: "edgeMode",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      externalresourcesrequired: "externalResourcesRequired",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      numoctaves: "numOctaves",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      ychannelselector: "yChannelSelector",
      zoomandpan: "zoomAndPan",
      onblur: "onBlur",
      onchange: "onChange",
      onclick: "onClick",
      oncontextmenu: "onContextMenu",
      ondoubleclick: "onDoubleClick",
      ondrag: "onDrag",
      ondragend: "onDragEnd",
      ondragenter: "onDragEnter",
      ondragexit: "onDragExit",
      ondragleave: "onDragLeave",
      ondragover: "onDragOver",
      ondragstart: "onDragStart",
      ondrop: "onDrop",
      onerror: "onError",
      onfocus: "onFocus",
      oninput: "onInput",
      oninvalid: "onInvalid",
      onkeydown: "onKeyDown",
      onkeypress: "onKeyPress",
      onkeyup: "onKeyUp",
      onload: "onLoad",
      onmousedown: "onMouseDown",
      onmouseenter: "onMouseEnter",
      onmouseleave: "onMouseLeave",
      onmousemove: "onMouseMove",
      onmouseout: "onMouseOut",
      onmouseover: "onMouseOver",
      onmouseup: "onMouseUp",
      onscroll: "onScroll",
      onsubmit: "onSubmit",
      ontouchcancel: "onTouchCancel",
      ontouchend: "onTouchEnd",
      ontouchmove: "onTouchMove",
      ontouchstart: "onTouchStart",
      onwheel: "onWheel"
    };
  }
});

// node_modules/react-from-dom/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-from-dom/lib/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {error};
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.convertFromString = exports.convertFromNode = void 0;
    var React11 = require_react();
    var helpers_1 = require_helpers();
    function parseAttributes(node, reactKey) {
      var attributes = {
        key: reactKey
      };
      if (node instanceof Element) {
        var nodeClassNames = node.getAttribute("class");
        if (nodeClassNames) {
          attributes.className = nodeClassNames;
        }
        __spreadArray([], __read(node.attributes)).forEach(function(d) {
          switch (d.name) {
            case "class":
              break;
            case "style":
              attributes[d.name] = helpers_1.styleToObject(d.value);
              break;
            case "allowfullscreen":
            case "allowpaymentrequest":
            case "async":
            case "autofocus":
            case "autoplay":
            case "checked":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "formnovalidate":
            case "hidden":
            case "ismap":
            case "itemscope":
            case "loop":
            case "multiple":
            case "muted":
            case "nomodule":
            case "novalidate":
            case "open":
            case "readonly":
            case "required":
            case "reversed":
            case "selected":
            case "typemustmatch":
              attributes[helpers_1.possibleStandardNames[d.name] || d.name] = true;
              break;
            default:
              attributes[helpers_1.possibleStandardNames[d.name] || d.name] = d.value;
          }
        });
      }
      return attributes;
    }
    function parseChildren(childNodeList, level, options) {
      var children = __spreadArray([], __read(childNodeList)).map(function(node, index2) {
        return convertFromNode(node, __assign(__assign({}, options), {index: index2, level: level + 1}));
      }).filter(Boolean);
      if (!children.length) {
        return null;
      }
      return children;
    }
    function parseName(nodeName) {
      if (/[a-z]+[A-Z]+[a-z]+/.test(nodeName)) {
        return nodeName;
      }
      return nodeName.toLowerCase();
    }
    function convertFromNode(input, options) {
      var _a;
      if (options === void 0) {
        options = {};
      }
      if (!input || !(input instanceof Node)) {
        return null;
      }
      var _b = options.actions, actions = _b === void 0 ? [] : _b, _c = options.index, index2 = _c === void 0 ? 0 : _c, _d = options.level, level = _d === void 0 ? 0 : _d, randomKey = options.randomKey;
      var node = input;
      var key = level + "-" + index2;
      var result = [];
      if (randomKey && level === 0) {
        key = helpers_1.randomString() + "-" + key;
      }
      if (Array.isArray(actions)) {
        actions.forEach(function(action) {
          if (action.condition(node, key, level)) {
            if (typeof action.pre === "function") {
              node = action.pre(node, key, level);
              if (!(node instanceof Node)) {
                node = input;
                if (true) {
                  console.warn("The `pre` method always must return a valid DomNode (instanceof Node) - your modification will be ignored (Hint: if you want to render a React-component, use the `post` method instead)");
                }
              }
            }
            if (typeof action.post === "function") {
              result.push(action.post(node, key, level));
            }
          }
        });
      }
      if (result.length) {
        return result;
      }
      switch (node.nodeType) {
        case 1: {
          return React11.createElement(parseName(node.nodeName), parseAttributes(node, key), parseChildren(node.childNodes, level, options));
        }
        case 3: {
          var nodeText = ((_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.toString()) || "";
          if (/^\s+$/.test(nodeText) && !/[\u202F\u00A0]/.test(nodeText)) {
            return null;
          }
          if (!node.parentNode) {
            return nodeText;
          }
          var parentNodeName = node.parentNode.nodeName.toLowerCase();
          if (helpers_1.noTextChildNodes.indexOf(parentNodeName) !== -1) {
            if (/\S/.test(nodeText)) {
              console.warn("A textNode is not allowed inside '" + parentNodeName + `'. Your text "` + nodeText + '" will be ignored');
            }
            return null;
          }
          return nodeText;
        }
        case 8: {
          return null;
        }
        default: {
          return null;
        }
      }
    }
    exports.convertFromNode = convertFromNode;
    function convertFromString(input, options) {
      if (options === void 0) {
        options = {};
      }
      if (!input || typeof input !== "string") {
        return null;
      }
      var _a = options.nodeOnly, nodeOnly = _a === void 0 ? false : _a, _b = options.selector, selector = _b === void 0 ? "body > *" : _b, _c = options.type, type = _c === void 0 ? "text/html" : _c;
      try {
        var parser = new DOMParser();
        var doc = parser.parseFromString(input, type);
        var node = doc.querySelector(selector);
        if (!(node instanceof Node)) {
          throw new Error("Error parsing input");
        }
        if (nodeOnly) {
          return node;
        }
        return convertFromNode(node, options);
      } catch (error) {
        if (true) {
          console.error(error);
        }
      }
      return null;
    }
    exports.convertFromString = convertFromString;
    function convert(input, options) {
      if (options === void 0) {
        options = {};
      }
      if (typeof input === "string") {
        return convertFromString(input, options);
      }
      if (input instanceof Node) {
        return convertFromNode(input, options);
      }
      return null;
    }
    exports.default = convert;
  }
});

// node_modules/exenv/index.js
var require_exenv = __commonJS({
  "node_modules/exenv/index.js"(exports, module) {
    (function() {
      "use strict";
      var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
      var ExecutionEnvironment = {
        canUseDOM,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
      };
      if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define(function() {
          return ExecutionEnvironment;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = ExecutionEnvironment;
      } else {
        window.ExecutionEnvironment = ExecutionEnvironment;
      }
    })();
  }
});

// node_modules/react-inlinesvg/lib/helpers.js
var require_helpers2 = __commonJS({
  "node_modules/react-inlinesvg/lib/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.removeProperties = exports.randomString = exports.supportsInlineSVG = exports.isSupportedEnvironment = exports.canUseDOM = exports.STATUS = void 0;
    var exenv_1 = require_exenv();
    exports.STATUS = {
      FAILED: "failed",
      LOADED: "loaded",
      LOADING: "loading",
      PENDING: "pending",
      READY: "ready",
      UNSUPPORTED: "unsupported"
    };
    function canUseDOM() {
      return exenv_1.canUseDOM;
    }
    exports.canUseDOM = canUseDOM;
    function isSupportedEnvironment() {
      return supportsInlineSVG() && typeof window !== "undefined" && window !== null;
    }
    exports.isSupportedEnvironment = isSupportedEnvironment;
    function supportsInlineSVG() {
      if (!document) {
        return false;
      }
      var div = document.createElement("div");
      div.innerHTML = "<svg />";
      return !!div.firstChild && div.firstChild.namespaceURI === "http://www.w3.org/2000/svg";
    }
    exports.supportsInlineSVG = supportsInlineSVG;
    function randomString(length) {
      var letters = "abcdefghijklmnopqrstuvwxyz";
      var numbers = "1234567890";
      var charset = "" + letters + letters.toUpperCase() + numbers;
      var randomCharacter = function(character) {
        return character[Math.floor(Math.random() * character.length)];
      };
      var R = "";
      for (var i = 0; i < length; i++) {
        R += randomCharacter(charset);
      }
      return R;
    }
    exports.randomString = randomString;
    function removeProperties(input) {
      var filter = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        filter[_i - 1] = arguments[_i];
      }
      var output = {};
      for (var key in input) {
        if ({}.hasOwnProperty.call(input, key)) {
          if (!filter.includes(key)) {
            output[key] = input[key];
          }
        }
      }
      return output;
    }
    exports.removeProperties = removeProperties;
  }
});

// node_modules/react-inlinesvg/lib/types.js
var require_types = __commonJS({
  "node_modules/react-inlinesvg/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
  }
});

// node_modules/react-inlinesvg/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/react-inlinesvg/lib/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {error};
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.cacheStore = void 0;
    var React11 = require_react();
    var react_from_dom_1 = require_lib();
    var helpers_1 = require_helpers2();
    exports.cacheStore = Object.create(null);
    var InlineSVG = function(_super) {
      __extends(InlineSVG2, _super);
      function InlineSVG2(props) {
        var _this = _super.call(this, props) || this;
        _this.isActive = false;
        _this.handleCacheQueue = function(content) {
          if (typeof content === "string") {
            _this.handleLoad(content);
            return;
          }
          _this.handleError(content);
        };
        _this.handleLoad = function(content) {
          if (_this.isActive) {
            _this.setState({
              content,
              status: helpers_1.STATUS.LOADED
            }, _this.getElement);
          }
        };
        _this.handleError = function(error) {
          var onError = _this.props.onError;
          var status = error.message === "Browser does not support SVG" ? helpers_1.STATUS.UNSUPPORTED : helpers_1.STATUS.FAILED;
          if (_this.isActive) {
            _this.setState({status}, function() {
              if (typeof onError === "function") {
                onError(error);
              }
            });
          }
        };
        _this.request = function() {
          var _a = _this.props, cacheRequests = _a.cacheRequests, fetchOptions = _a.fetchOptions, src = _a.src;
          try {
            if (cacheRequests) {
              exports.cacheStore[src] = {content: "", status: helpers_1.STATUS.LOADING, queue: []};
            }
            return fetch(src, fetchOptions).then(function(response) {
              var contentType = response.headers.get("content-type");
              var _a2 = __read((contentType || "").split(/ ?; ?/), 1), fileType = _a2[0];
              if (response.status > 299) {
                throw new Error("Not found");
              }
              if (!["image/svg+xml", "text/plain"].some(function(d) {
                return fileType.indexOf(d) >= 0;
              })) {
                throw new Error("Content type isn't valid: " + fileType);
              }
              return response.text();
            }).then(function(content) {
              var currentSrc = _this.props.src;
              if (src !== currentSrc) {
                return;
              }
              _this.handleLoad(content);
              if (cacheRequests) {
                var cache = exports.cacheStore[src];
                if (cache) {
                  cache.content = content;
                  cache.status = helpers_1.STATUS.LOADED;
                  cache.queue = cache.queue.filter(function(cb) {
                    cb(content);
                    return false;
                  });
                }
              }
            }).catch(function(error) {
              _this.handleError(error);
              if (cacheRequests) {
                var cache = exports.cacheStore[src];
                if (cache) {
                  cache.queue.forEach(function(cb) {
                    cb(error);
                  });
                  delete exports.cacheStore[src];
                }
              }
            });
          } catch (error) {
            return _this.handleError(new Error(error.message));
          }
        };
        _this.state = {
          content: "",
          element: null,
          hasCache: !!props.cacheRequests && !!exports.cacheStore[props.src],
          status: helpers_1.STATUS.PENDING
        };
        _this.hash = props.uniqueHash || helpers_1.randomString(8);
        return _this;
      }
      InlineSVG2.prototype.componentDidMount = function() {
        this.isActive = true;
        if (!helpers_1.canUseDOM()) {
          return;
        }
        var status = this.state.status;
        var src = this.props.src;
        try {
          if (status === helpers_1.STATUS.PENDING) {
            if (!helpers_1.isSupportedEnvironment()) {
              throw new Error("Browser does not support SVG");
            }
            if (!src) {
              throw new Error("Missing src");
            }
            this.load();
          }
        } catch (error) {
          this.handleError(error);
        }
      };
      InlineSVG2.prototype.componentDidUpdate = function(prevProps, prevState) {
        if (!helpers_1.canUseDOM()) {
          return;
        }
        var _a = this.state, hasCache = _a.hasCache, status = _a.status;
        var _b = this.props, onLoad = _b.onLoad, src = _b.src;
        if (prevState.status !== helpers_1.STATUS.READY && status === helpers_1.STATUS.READY) {
          if (onLoad) {
            onLoad(src, hasCache);
          }
        }
        if (prevProps.src !== src) {
          if (!src) {
            this.handleError(new Error("Missing src"));
            return;
          }
          this.load();
        }
      };
      InlineSVG2.prototype.componentWillUnmount = function() {
        this.isActive = false;
      };
      InlineSVG2.prototype.processSVG = function() {
        var content = this.state.content;
        var preProcessor = this.props.preProcessor;
        if (preProcessor) {
          return preProcessor(content);
        }
        return content;
      };
      InlineSVG2.prototype.updateSVGAttributes = function(node) {
        var _this = this;
        var _a = this.props, _b = _a.baseURL, baseURL = _b === void 0 ? "" : _b, uniquifyIDs = _a.uniquifyIDs;
        var replaceableAttributes = ["id", "href", "xlink:href", "xlink:role", "xlink:arcrole"];
        var linkAttributes = ["href", "xlink:href"];
        var isDataValue = function(name, value) {
          return linkAttributes.indexOf(name) >= 0 && (value ? value.indexOf("#") < 0 : false);
        };
        if (!uniquifyIDs) {
          return node;
        }
        __spreadArray([], __read(node.children)).map(function(d) {
          if (d.attributes && d.attributes.length) {
            var attributes_1 = Object.values(d.attributes).map(function(a) {
              var attr = a;
              var match = a.value.match(/url\((.*?)\)/);
              if (match && match[1]) {
                attr.value = a.value.replace(match[0], "url(" + baseURL + match[1] + "__" + _this.hash + ")");
              }
              return attr;
            });
            replaceableAttributes.forEach(function(r) {
              var attribute = attributes_1.find(function(a) {
                return a.name === r;
              });
              if (attribute && !isDataValue(r, attribute.value)) {
                attribute.value = attribute.value + "__" + _this.hash;
              }
            });
          }
          if (d.children.length) {
            return _this.updateSVGAttributes(d);
          }
          return d;
        });
        return node;
      };
      InlineSVG2.prototype.getNode = function() {
        var _a = this.props, description = _a.description, title = _a.title;
        try {
          var svgText = this.processSVG();
          var node = react_from_dom_1.default(svgText, {nodeOnly: true});
          if (!node || !(node instanceof SVGSVGElement)) {
            throw new Error("Could not convert the src to a DOM Node");
          }
          var svg = this.updateSVGAttributes(node);
          if (description) {
            var originalDesc = svg.querySelector("desc");
            if (originalDesc && originalDesc.parentNode) {
              originalDesc.parentNode.removeChild(originalDesc);
            }
            var descElement = document.createElement("desc");
            descElement.innerHTML = description;
            svg.prepend(descElement);
          }
          if (title) {
            var originalTitle = svg.querySelector("title");
            if (originalTitle && originalTitle.parentNode) {
              originalTitle.parentNode.removeChild(originalTitle);
            }
            var titleElement = document.createElement("title");
            titleElement.innerHTML = title;
            svg.prepend(titleElement);
          }
          return svg;
        } catch (error) {
          return this.handleError(error);
        }
      };
      InlineSVG2.prototype.getElement = function() {
        try {
          var node = this.getNode();
          var element = react_from_dom_1.default(node);
          if (!element || !React11.isValidElement(element)) {
            throw new Error("Could not convert the src to a React element");
          }
          this.setState({
            element,
            status: helpers_1.STATUS.READY
          });
        } catch (error) {
          this.handleError(new Error(error.message));
        }
      };
      InlineSVG2.prototype.load = function() {
        var _this = this;
        if (this.isActive) {
          this.setState({
            content: "",
            element: null,
            status: helpers_1.STATUS.LOADING
          }, function() {
            var _a = _this.props, cacheRequests = _a.cacheRequests, src = _a.src;
            var cache = cacheRequests && exports.cacheStore[src];
            if (cache) {
              if (cache.status === helpers_1.STATUS.LOADING) {
                cache.queue.push(_this.handleCacheQueue);
              } else if (cache.status === helpers_1.STATUS.LOADED) {
                _this.handleLoad(cache.content);
              }
              return;
            }
            var dataURI = src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);
            var inlineSrc;
            if (dataURI) {
              inlineSrc = dataURI[1] ? atob(dataURI[2]) : decodeURIComponent(dataURI[2]);
            } else if (src.indexOf("<svg") >= 0) {
              inlineSrc = src;
            }
            if (inlineSrc) {
              _this.handleLoad(inlineSrc);
              return;
            }
            _this.request();
          });
        }
      };
      InlineSVG2.prototype.render = function() {
        var _a = this.state, element = _a.element, status = _a.status;
        var _b = this.props, _c = _b.children, children = _c === void 0 ? null : _c, innerRef = _b.innerRef, _d = _b.loader, loader = _d === void 0 ? null : _d;
        var elementProps = helpers_1.removeProperties(this.props, "baseURL", "cacheRequests", "children", "description", "fetchOptions", "innerRef", "loader", "onError", "onLoad", "preProcessor", "src", "title", "uniqueHash", "uniquifyIDs");
        if (!helpers_1.canUseDOM()) {
          return loader;
        }
        if (element) {
          return React11.cloneElement(element, __assign({ref: innerRef}, elementProps));
        }
        if ([helpers_1.STATUS.UNSUPPORTED, helpers_1.STATUS.FAILED].indexOf(status) > -1) {
          return children;
        }
        return loader;
      };
      InlineSVG2.defaultProps = {
        cacheRequests: true,
        uniquifyIDs: false
      };
      return InlineSVG2;
    }(React11.PureComponent);
    exports.default = InlineSVG;
    __exportStar(require_types(), exports);
  }
});

// node_modules/@material-ui/icons/Edit.js
var require_Edit = __commonJS({
  "node_modules/@material-ui/icons/Edit.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    }), "Edit");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Delete.js
var require_Delete = __commonJS({
  "node_modules/@material-ui/icons/Delete.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
    }), "Delete");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Settings.js
var require_Settings = __commonJS({
  "node_modules/@material-ui/icons/Settings.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
    }), "Settings");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/SettingsApplications.js
var require_SettingsApplications = __commonJS({
  "node_modules/@material-ui/icons/SettingsApplications.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"
    }), "SettingsApplications");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Photo.js
var require_Photo = __commonJS({
  "node_modules/@material-ui/icons/Photo.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
    }), "Photo");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/SupervisedUserCircle.js
var require_SupervisedUserCircle = __commonJS({
  "node_modules/@material-ui/icons/SupervisedUserCircle.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"
    }), "SupervisedUserCircle");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/CalendarToday.js
var require_CalendarToday = __commonJS({
  "node_modules/@material-ui/icons/CalendarToday.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
    }), "CalendarToday");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/PersonOutlined.js
var require_PersonOutlined = __commonJS({
  "node_modules/@material-ui/icons/PersonOutlined.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
    }), "PersonOutlined");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Router.js
var require_Router = __commonJS({
  "node_modules/@material-ui/icons/Router.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"
    }), "Router");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Wifi.js
var require_Wifi = __commonJS({
  "node_modules/@material-ui/icons/Wifi.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
    }), "Wifi");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Description.js
var require_Description = __commonJS({
  "node_modules/@material-ui/icons/Description.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
    }), "Description");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Code.js
var require_Code = __commonJS({
  "node_modules/@material-ui/icons/Code.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
    }), "Code");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/ShowChart.js
var require_ShowChart = __commonJS({
  "node_modules/@material-ui/icons/ShowChart.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
    }), "ShowChart");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/ListAlt.js
var require_ListAlt = __commonJS({
  "node_modules/@material-ui/icons/ListAlt.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"
    }), "ListAlt");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/ViewColumn.js
var require_ViewColumn = __commonJS({
  "node_modules/@material-ui/icons/ViewColumn.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"
    }), "ViewColumn");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Build.js
var require_Build = __commonJS({
  "node_modules/@material-ui/icons/Build.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
    }), "Build");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Publish.js
var require_Publish = __commonJS({
  "node_modules/@material-ui/icons/Publish.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"
    }), "Publish");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Add.js
var require_Add = __commonJS({
  "node_modules/@material-ui/icons/Add.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    }), "Add");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/Refresh.js
var require_Refresh = __commonJS({
  "node_modules/@material-ui/icons/Refresh.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
    }), "Refresh");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/LooksOne.js
var require_LooksOne = __commonJS({
  "node_modules/@material-ui/icons/LooksOne.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"
    }), "LooksOne");
    exports.default = _default;
  }
});

// node_modules/@material-ui/icons/RoomService.js
var require_RoomService = __commonJS({
  "node_modules/@material-ui/icons/RoomService.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _interopRequireWildcard = require_interopRequireWildcard();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React11 = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ React11.createElement("path", {
      d: "M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z"
    }), "RoomService");
    exports.default = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconExpert.js
var require_IconExpert = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconExpert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var ExpertIcon = function ExpertIcon2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 486.70625 486",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "m414.928297,149.715165 c-2.639376,-57.222555 -35.669446,-106.505345 -83.345894,-132.039151 c-3.758948,-2.049842 -7.636885,-3.932022 -11.590542,-5.641125 c-19.303146,-8.394083 -40.607459,-13.050853 -63.004303,-13.050853 c-84.113909,0 -152.791790,65.703174 -157.718988,148.605566 l0.043268,-0.010816 v0.281245 c0,3.061243 -0.146031,16.750306 -0.146031,16.750306 l-2.352723,5.224668 h15.744315 c5.916964,-19.384275 24.078904,-32.635245 45.513024,-32.635245 c26.231510,0 47.573684,21.915481 47.573684,48.146991 c0,26.226103 -21.342174,47.146409 -47.573684,47.146409 c-25.111939,0 -45.734774,-19.735831 -47.443879,-44.658471 h-18.789334 c-0.400232,0 -0.778832,0.638209 -1.162839,0.584122 l-19.762875,55.199753 c-2.774590,7.696379 2.926030,16.214860 11.103771,16.214860 h17.020735 l-0.129805,87.899899 c0,17.356066 14.073071,31.174935 31.429136,31.174935 h56.205745 v82.648189 c0,12.877778 12.937273,22.580734 25.815051,22.580734 h144.597825 c12.877778,0 23.429877,-9.702955 23.429877,-22.580734 v-166.037352 c0,-22.645636 5.976457,-44.761234 16.561008,-64.789128 c11.055093,-20.925714 17.523731,-44.620611 18.129489,-69.792045 c0.027042,-1.260193 0.037858,-2.552839 0.037858,-3.845485 c0,-2.466302 -0.070310,-4.938014 -0.183890,-7.377273 zm-155.393308,-11.731165 h-13.456494 v13.559257 c0,4.732489 -4.267352,8.567157 -8.999842,8.567157 c-4.727079,0 -8.999842,-3.834667 -8.999842,-8.567157 v-13.559257 h-12.185483 c-4.732489,0 -8.567157,-4.267352 -8.567157,-8.999842 c0,-4.727079 3.834667,-8.999842 8.567157,-8.999842 h12.185483 v-12.077311 c0,-4.732489 4.272762,-8.567157 8.999842,-8.567157 c4.732489,0 8.999842,3.834667 8.999842,8.567157 v12.077311 h13.456494 c4.727079,0 8.567157,4.272762 8.567157,8.999842 c0,4.732489 -3.840077,8.999842 -8.567157,8.999842 zm0,0"
      }), /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "m187.695312 285.875c3.9375-3.980469 6.414063-9.449219 6.414063-15.523438 0-12.128906-9.855469-21.980468-21.984375-21.980468-6.007812 0-11.472656 2.410156-15.457031 6.347656-4.023438 4.003906-6.523438 9.539062-6.523438 15.636719 0 12.125 9.855469 21.980469 21.980469 21.980469 6.078125 0 11.585938-2.476563 15.570312-6.460938zm0 0"
      }));
    };
    ExpertIcon.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = ExpertIcon;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconAdapter.js
var require_IconAdapter = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconAdapter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconAdapter = function IconAdapter2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 512 512",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "M448 0L320 96v62.06l-83.03 83.03c6.79 4.25 13.27 9.06 19.07 14.87 5.8 5.8 10.62 12.28 14.87 19.07L353.94 192H416l96-128-64-64zM128 278.59L10.92 395.67c-14.55 14.55-14.55 38.15 0 52.71l52.7 52.7c14.56 14.56 38.15 14.56 52.71 0L233.41 384c29.11-29.11 29.11-76.3 0-105.41s-76.3-29.11-105.41 0z"
      }));
    };
    IconAdapter.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconAdapter;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconAlias.js
var require_IconAlias = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconAlias.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconAlias = function IconAlias2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 512 512",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"
      }));
    };
    IconAlias.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconAlias;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconChannel.js
var require_IconChannel = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconChannel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconChannel = function IconChannel2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 320 320",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("g", {
        fill: "currentColor"
      }, /* @__PURE__ */ _react["default"].createElement("rect", {
        rx: "32",
        id: "svg_1",
        height: "272",
        width: "267",
        y: "25",
        x: "25",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "none"
      }), /* @__PURE__ */ _react["default"].createElement("ellipse", {
        stroke: "currentColor",
        ry: "26",
        rx: "26",
        id: "svg_2",
        cy: "248",
        cx: "160",
        fill: "none",
        strokeWidth: "15"
      }), /* @__PURE__ */ _react["default"].createElement("line", {
        strokeLinecap: "null",
        strokeLinejoin: "null",
        id: "svg_3",
        y2: "201.94531",
        x2: "159.5",
        y1: "46.94531",
        x1: "159.5",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "none"
      }), /* @__PURE__ */ _react["default"].createElement("rect", {
        id: "svg_4",
        height: "27",
        width: "50",
        y: "79.7979",
        x: "133.5",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "#fff"
      })));
    };
    IconChannel.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconChannel;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconCopy.js
var require_IconCopy = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconCopy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconCopy = function IconCopy2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 512 512",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
      }));
    };
    IconCopy.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconCopy;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconDevice.js
var require_IconDevice = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconDevice.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconDevice = function IconDevice2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 320 320",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("g", {
        fill: "currentColor"
      }, /* @__PURE__ */ _react["default"].createElement("rect", {
        rx: "32",
        id: "svg_1",
        height: "272",
        width: "267",
        y: "25",
        x: "25",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "none"
      }), /* @__PURE__ */ _react["default"].createElement("ellipse", {
        stroke: "currentColor",
        ry: "26",
        rx: "26",
        id: "svg_2",
        cy: "252",
        cx: "160",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        fill: "#fff"
      }), /* @__PURE__ */ _react["default"].createElement("line", {
        strokeLinecap: "null",
        strokeLinejoin: "null",
        id: "svg_3",
        y2: "201.94531",
        x2: "159.5",
        y1: "46.94531",
        x1: "159.5",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "none"
      }), /* @__PURE__ */ _react["default"].createElement("rect", {
        height: "27",
        width: "50",
        y: "140.83068",
        x: "133.5",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "#fff"
      }), /* @__PURE__ */ _react["default"].createElement("ellipse", {
        stroke: "currentColor",
        ry: "26",
        rx: "26",
        id: "svg_5",
        cy: "251",
        cx: "241",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        fill: "#fff"
      }), /* @__PURE__ */ _react["default"].createElement("line", {
        strokeLinecap: "null",
        strokeLinejoin: "null",
        id: "svg_6",
        y2: "200.94531",
        x2: "240.5",
        y1: "45.94531",
        x1: "240.5",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "none"
      }), /* @__PURE__ */ _react["default"].createElement("rect", {
        height: "27",
        width: "50",
        y: "78.7979",
        x: "214.5",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "#fff"
      }), /* @__PURE__ */ _react["default"].createElement("ellipse", {
        stroke: "currentColor",
        ry: "26",
        rx: "26",
        id: "svg_8",
        cy: "252",
        cx: "84",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        fill: "#fff"
      }), /* @__PURE__ */ _react["default"].createElement("line", {
        strokeLinecap: "null",
        strokeLinejoin: "null",
        id: "svg_9",
        y2: "201.94531",
        x2: "83.5",
        y1: "46.94531",
        x1: "83.5",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "none"
      }), /* @__PURE__ */ _react["default"].createElement("rect", {
        height: "27",
        width: "50",
        y: "79.7979",
        x: "57.5",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor",
        fill: "#fff"
      })));
    };
    IconDevice.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconDevice;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconDocument.js
var require_IconDocument = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconDocument = function IconDocument2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 512 512",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"
      }));
    };
    IconDocument.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconDocument;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconInstance.js
var require_IconInstance = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconInstance.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconInstance = function IconInstance2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 512 512",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "M448 0L320 96v62.06l-83.03 83.03c6.79 4.25 13.27 9.06 19.07 14.87 5.8 5.8 10.62 12.28 14.87 19.07L353.94 192H416l96-128-64-64zM128 278.59L10.92 395.67c-14.55 14.55-14.55 38.15 0 52.71l52.7 52.7c14.56 14.56 38.15 14.56 52.71 0L233.41 384c29.11-29.11 29.11-76.3 0-105.41s-76.3-29.11-105.41 0z"
      }));
    };
    IconInstance.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconInstance;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconState.js
var require_IconState = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconState.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var IconState = function IconState2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 320 320",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("rect", _defineProperty({
        fill: "currentColor",
        rx: "32",
        id: "svg_1",
        height: "272",
        width: "267",
        y: "25",
        x: "25",
        strokeWidth: "15",
        stroke: "currentColor"
      }, "fill", "none")), /* @__PURE__ */ _react["default"].createElement("ellipse", _defineProperty({
        fill: "currentColor",
        ry: "54",
        rx: "54",
        id: "svg_2",
        cy: "160",
        cx: "160",
        fillOpacity: "null",
        strokeOpacity: "null",
        strokeWidth: "15",
        stroke: "currentColor"
      }, "fill", "#fff")));
    };
    IconState.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconState;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconClosed.js
var require_IconClosed = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconClosed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconClosed = function IconClosed2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 650 512",
        xmlns: "http://www.w3.org/2000/svg",
        width: props.width || 20,
        height: props.height || props.width || 20,
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"
      }));
    };
    IconClosed.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconClosed;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconOpen.js
var require_IconOpen = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconOpen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconOpen = function IconOpen2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 650 512",
        xmlns: "http://www.w3.org/2000/svg",
        width: props.width || 20,
        height: props.height || props.width || 20,
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        d: "M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"
      }));
    };
    IconOpen.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconOpen;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/icons/IconClearFilter.js
var require_IconClearFilter = __commonJS({
  "node_modules/@iobroker/adapter-react/icons/IconClearFilter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    var IconClearFilter = function IconClearFilter2(props) {
      return /* @__PURE__ */ _react["default"].createElement("svg", {
        onClick: function onClick(e) {
          return props.onClick && props.onClick(e);
        },
        viewBox: "0 0 24 24",
        width: props.width || 20,
        height: props.height || props.width || 20,
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className
      }, /* @__PURE__ */ _react["default"].createElement("path", {
        fill: "currentColor",
        stroke: "currentColor",
        d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"
      }));
    };
    IconClearFilter.propTypes = {
      onClick: _propTypes["default"].func,
      width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
      className: _propTypes["default"].string
    };
    var _default = IconClearFilter;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/Components/Icon.js
var require_Icon = __commonJS({
  "node_modules/@iobroker/adapter-react/Components/Icon.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports.getSelectIdIcon = getSelectIdIcon;
    exports.getSystemIcon = getSystemIcon;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactInlinesvg = _interopRequireDefault(require_lib2());
    var _SettingsApplications = _interopRequireDefault(require_SettingsApplications());
    var _Photo = _interopRequireDefault(require_Photo());
    var _SupervisedUserCircle = _interopRequireDefault(require_SupervisedUserCircle());
    var _PersonOutlined = _interopRequireDefault(require_PersonOutlined());
    var _Router = _interopRequireDefault(require_Router());
    var _Wifi = _interopRequireDefault(require_Wifi());
    var _Info = _interopRequireDefault(require_Info());
    var _Description = _interopRequireDefault(require_Description());
    var _IconAlias = _interopRequireDefault(require_IconAlias());
    var _Utils = _interopRequireDefault(require_Utils());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function getSystemIcon(obj) {
      var icon;
      var id = obj === null || obj === void 0 ? void 0 : obj._id;
      if (!id) {
        return null;
      }
      if (id.startsWith("_design/") || id === "system") {
        icon = /* @__PURE__ */ _react["default"].createElement(_SettingsApplications["default"], {
          className: "iconOwn"
        });
      } else if (id === "0_userdata" || id === "0_userdata.0") {
        icon = /* @__PURE__ */ _react["default"].createElement(_Photo["default"], {
          className: "iconOwn"
        });
      } else if (id === "alias" || id === "alias.0") {
        icon = /* @__PURE__ */ _react["default"].createElement(_IconAlias["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.adapter") {
        icon = /* @__PURE__ */ _react["default"].createElement(_SettingsApplications["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.group") {
        icon = /* @__PURE__ */ _react["default"].createElement(_SupervisedUserCircle["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.user") {
        icon = /* @__PURE__ */ _react["default"].createElement(_PersonOutlined["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.host") {
        icon = /* @__PURE__ */ _react["default"].createElement(_Router["default"], {
          className: "iconOwn"
        });
      } else if (id.endsWith(".connection") || id.endsWith(".connected")) {
        icon = /* @__PURE__ */ _react["default"].createElement(_Wifi["default"], {
          className: "iconOwn"
        });
      } else if (id.endsWith(".info")) {
        icon = /* @__PURE__ */ _react["default"].createElement(_Info["default"], {
          className: "iconOwn"
        });
      } else if ((obj === null || obj === void 0 ? void 0 : obj.type) === "meta") {
        icon = /* @__PURE__ */ _react["default"].createElement(_Description["default"], {
          className: "iconOwn"
        });
      }
      return icon || null;
    }
    function getSelectIdIcon(obj, imagePrefix) {
      imagePrefix = imagePrefix || ".";
      var src = "";
      var common = obj === null || obj === void 0 ? void 0 : obj.common;
      if (common) {
        var cIcon = common.icon;
        if (cIcon) {
          if (!cIcon.startsWith("data:image/")) {
            if (cIcon.includes(".")) {
              var instance;
              if (obj.type === "instance" || obj.type === "adapter") {
                src = imagePrefix + "/adapter/" + common.name + "/" + cIcon;
              } else if (obj._id && obj._id.startsWith("system.adapter.")) {
                instance = obj._id.split(".", 3);
                if (cIcon[0] === "/") {
                  instance[2] += cIcon;
                } else {
                  instance[2] += "/" + cIcon;
                }
                src = imagePrefix + "/adapter/" + instance[2];
              } else {
                instance = obj._id.split(".", 2);
                if (cIcon[0] === "/") {
                  instance[0] += cIcon;
                } else {
                  instance[0] += "/" + cIcon;
                }
                src = imagePrefix + "/adapter/" + instance[0];
              }
            } else {
              return null;
            }
          } else {
            src = cIcon;
          }
        }
      }
      return src || null;
    }
    var Icon = /* @__PURE__ */ function(_React$Component) {
      _inherits(Icon2, _React$Component);
      var _super = _createSuper(Icon2);
      function Icon2() {
        _classCallCheck(this, Icon2);
        return _super.apply(this, arguments);
      }
      _createClass2(Icon2, [{
        key: "render",
        value: function render() {
          if (this.props.src) {
            if (typeof this.props.src === "string") {
              if (this.props.src.length < 3) {
                return /* @__PURE__ */ _react["default"].createElement("span", {
                  title: this.props.title || void 0,
                  style: Object.assign({
                    height: 27,
                    marginTop: -8
                  }, this.props.styleUTF8 || this.props.style),
                  className: _Utils["default"].clsx(this.props.className, "iconOwn")
                }, this.props.src);
              } else {
                if (this.props.src.startsWith("data:image/svg")) {
                  var _this$props$style, _this$props$style2, _this$props$style3;
                  return /* @__PURE__ */ _react["default"].createElement(_reactInlinesvg["default"], {
                    title: this.props.title || void 0,
                    src: this.props.src,
                    className: _Utils["default"].clsx(this.props.className, "iconOwn"),
                    width: ((_this$props$style = this.props.style) === null || _this$props$style === void 0 ? void 0 : _this$props$style.width) || 28,
                    height: ((_this$props$style2 = this.props.style) === null || _this$props$style2 === void 0 ? void 0 : _this$props$style2.height) || ((_this$props$style3 = this.props.style) === null || _this$props$style3 === void 0 ? void 0 : _this$props$style3.width) || 28,
                    style: this.props.style || {}
                  });
                } else {
                  return /* @__PURE__ */ _react["default"].createElement("img", {
                    title: this.props.title || void 0,
                    style: this.props.style || {},
                    className: _Utils["default"].clsx(this.props.className, "iconOwn"),
                    src: this.props.src,
                    alt: ""
                  });
                }
              }
            } else {
              return this.props.src;
            }
          } else {
            return null;
          }
        }
      }]);
      return Icon2;
    }(_react["default"].Component);
    Icon.propTypes = {
      color: _propTypes["default"].string,
      title: _propTypes["default"].string,
      src: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
      className: _propTypes["default"].string,
      imagePrefix: _propTypes["default"].string,
      style: _propTypes["default"].object,
      styleUTF8: _propTypes["default"].object
    };
    var _default = Icon;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/Components/TabContainer.js
var require_TabContainer = __commonJS({
  "node_modules/@iobroker/adapter-react/Components/TabContainer.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _withStyles = _interopRequireDefault(require_withStyles());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _Utils = _interopRequireDefault(require_Utils());
    var _Grid = _interopRequireDefault(require_Grid());
    var _Paper = _interopRequireDefault(require_Paper());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var styles2 = {
      root: {
        width: "100%",
        height: "100%"
      },
      overflowHidden: {
        overflow: "hidden"
      },
      container: {
        height: "100%"
      }
    };
    var TabContainer = /* @__PURE__ */ function(_React$Component) {
      _inherits(TabContainer2, _React$Component);
      var _super = _createSuper(TabContainer2);
      function TabContainer2() {
        _classCallCheck(this, TabContainer2);
        return _super.apply(this, arguments);
      }
      _createClass2(TabContainer2, [{
        key: "render",
        value: function render() {
          var classes = this.props.classes;
          return /* @__PURE__ */ _react["default"].createElement(_Paper["default"], {
            elevation: !isNaN(this.props.elevation) ? this.props.elevation : 1,
            className: _Utils["default"].clsx(classes.root, _defineProperty({}, classes.overflowHidden, this.props.overflow !== "visible"))
          }, /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            container: true,
            direction: "column",
            wrap: "nowrap",
            className: classes.container
          }, this.props.children));
        }
      }]);
      return TabContainer2;
    }(_react["default"].Component);
    TabContainer.propTypes = {
      elevation: _propTypes["default"].number,
      overflow: _propTypes["default"].string
    };
    var _export = (0, _withStyles["default"])(styles2)(TabContainer);
    var _default = _export;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/Components/TabContent.js
var require_TabContent = __commonJS({
  "node_modules/@iobroker/adapter-react/Components/TabContent.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _withStyles = _interopRequireDefault(require_withStyles());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _Utils = _interopRequireDefault(require_Utils());
    var _Grid = _interopRequireDefault(require_Grid());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var styles2 = {
      root: {
        height: "100%",
        overflow: "hidden"
      },
      overflowAuto: {
        overflow: "auto"
      }
    };
    var TabContent = /* @__PURE__ */ function(_React$Component) {
      _inherits(TabContent2, _React$Component);
      var _super = _createSuper(TabContent2);
      function TabContent2() {
        _classCallCheck(this, TabContent2);
        return _super.apply(this, arguments);
      }
      _createClass2(TabContent2, [{
        key: "render",
        value: function render() {
          var classes = this.props.classes;
          return /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            item: true,
            className: _Utils["default"].clsx(classes.root, _defineProperty({}, classes.overflowAuto, this.props.overflow === "auto"))
          }, this.props.children);
        }
      }]);
      return TabContent2;
    }(_react["default"].Component);
    TabContent.propTypes = {
      overflow: _propTypes["default"].string
    };
    var _export = (0, _withStyles["default"])(styles2)(TabContent);
    var _default = _export;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/Components/TabHeader.js
var require_TabHeader = __commonJS({
  "node_modules/@iobroker/adapter-react/Components/TabHeader.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _Grid = _interopRequireDefault(require_Grid());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var TabHeader = /* @__PURE__ */ function(_React$Component) {
      _inherits(TabHeader2, _React$Component);
      var _super = _createSuper(TabHeader2);
      function TabHeader2() {
        _classCallCheck(this, TabHeader2);
        return _super.apply(this, arguments);
      }
      _createClass2(TabHeader2, [{
        key: "render",
        value: function render() {
          return /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            item: true,
            container: true,
            alignItems: "center"
          }, this.props.children);
        }
      }]);
      return TabHeader2;
    }(_react["default"].Component);
    TabHeader.propTypes = {};
    var _default = TabHeader;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/Components/ObjectBrowser.js
var require_ObjectBrowser = __commonJS({
  "node_modules/@iobroker/adapter-react/Components/ObjectBrowser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _copyToClipboard = _interopRequireDefault(require_copy_to_clipboard());
    var _withStyles = _interopRequireDefault(require_withStyles());
    var _reactInlinesvg = _interopRequireDefault(require_lib2());
    var _IconButton = _interopRequireDefault(require_IconButton());
    var _withWidth = _interopRequireDefault(require_withWidth());
    var _CircularProgress = _interopRequireDefault(require_CircularProgress());
    var _MenuItem = _interopRequireDefault(require_MenuItem());
    var _Select = _interopRequireDefault(require_Select());
    var _FormControl = _interopRequireDefault(require_FormControl());
    var _Input = _interopRequireDefault(require_Input());
    var _Grid = _interopRequireDefault(require_Grid());
    var _Badge = _interopRequireDefault(require_Badge());
    var _Tooltip = _interopRequireDefault(require_Tooltip());
    var _Snackbar = _interopRequireDefault(require_Snackbar());
    var _Checkbox = _interopRequireDefault(require_Checkbox());
    var _List = _interopRequireDefault(require_List());
    var _ListItem = _interopRequireDefault(require_ListItem());
    var _ListItemIcon = _interopRequireDefault(require_ListItemIcon());
    var _ListItemSecondaryAction = _interopRequireDefault(require_ListItemSecondaryAction());
    var _ListItemText = _interopRequireDefault(require_ListItemText());
    var _DialogTitle = _interopRequireDefault(require_DialogTitle());
    var _Dialog = _interopRequireDefault(require_Dialog());
    var _DialogContent = _interopRequireDefault(require_DialogContent());
    var _DialogContentText = _interopRequireDefault(require_DialogContentText());
    var _DialogActions = _interopRequireDefault(require_DialogActions());
    var _Button = _interopRequireDefault(require_Button());
    var _Fab = _interopRequireDefault(require_Fab());
    var _TextField = _interopRequireDefault(require_TextField());
    var _FormControlLabel = _interopRequireDefault(require_FormControlLabel());
    var _Switch = _interopRequireDefault(require_Switch());
    var _Slider = _interopRequireDefault(require_Slider());
    var _Typography = _interopRequireDefault(require_Typography());
    var _Edit = _interopRequireDefault(require_Edit());
    var _Delete = _interopRequireDefault(require_Delete());
    var _Settings = _interopRequireDefault(require_Settings());
    var _SettingsApplications = _interopRequireDefault(require_SettingsApplications());
    var _Photo = _interopRequireDefault(require_Photo());
    var _SupervisedUserCircle = _interopRequireDefault(require_SupervisedUserCircle());
    var _CalendarToday = _interopRequireDefault(require_CalendarToday());
    var _PersonOutlined = _interopRequireDefault(require_PersonOutlined());
    var _Router = _interopRequireDefault(require_Router());
    var _Wifi = _interopRequireDefault(require_Wifi());
    var _Info = _interopRequireDefault(require_Info());
    var _Description = _interopRequireDefault(require_Description());
    var _Code = _interopRequireDefault(require_Code());
    var _ShowChart = _interopRequireDefault(require_ShowChart());
    var _ListAlt = _interopRequireDefault(require_ListAlt());
    var _ViewColumn = _interopRequireDefault(require_ViewColumn());
    var _Close = _interopRequireDefault(require_Close());
    var _Check = _interopRequireDefault(require_Check());
    var _Build = _interopRequireDefault(require_Build());
    var _Publish = _interopRequireDefault(require_Publish());
    var _Add = _interopRequireDefault(require_Add());
    var _Refresh = _interopRequireDefault(require_Refresh());
    var _LooksOne = _interopRequireDefault(require_LooksOne());
    var _RoomService = _interopRequireDefault(require_RoomService());
    var _IconExpert = _interopRequireDefault(require_IconExpert());
    var _IconAdapter = _interopRequireDefault(require_IconAdapter());
    var _IconAlias = _interopRequireDefault(require_IconAlias());
    var _IconChannel = _interopRequireDefault(require_IconChannel());
    var _IconCopy = _interopRequireDefault(require_IconCopy());
    var _IconDevice = _interopRequireDefault(require_IconDevice());
    var _IconDocument = _interopRequireDefault(require_IconDocument());
    var _IconInstance = _interopRequireDefault(require_IconInstance());
    var _IconState = _interopRequireDefault(require_IconState());
    var _IconClosed = _interopRequireDefault(require_IconClosed());
    var _IconOpen = _interopRequireDefault(require_IconOpen());
    var _IconClearFilter = _interopRequireDefault(require_IconClearFilter());
    var _Icon = _interopRequireDefault(require_Icon());
    var _Utils = _interopRequireDefault(require_Utils());
    var _TabContainer = _interopRequireDefault(require_TabContainer());
    var _TabContent = _interopRequireDefault(require_TabContent());
    var _TabHeader = _interopRequireDefault(require_TabHeader());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {"default": obj};
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
      } else {
        obj[key] = value;
      }
      return obj;
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
    var ICON_SIZE = 24;
    var ROW_HEIGHT = 32;
    var ITEM_LEVEL = 16;
    var SMALL_BUTTON_SIZE = 20;
    var COLOR_NAME_SYSTEM = "#ff6d69";
    var COLOR_NAME_SYSTEM_ADAPTER = "#5773ff";
    var styles2 = function styles3(theme) {
      return {
        toolbar: {
          minHeight: 38
        },
        toolbarButtons: {
          padding: 4,
          marginLeft: 4
        },
        switchColumnAuto: {
          marginLeft: theme.spacing(2)
        },
        dialogColumns: {
          transition: "opacity 1s"
        },
        dialogColumnsLabel: {
          fontSize: 12,
          paddingTop: theme.spacing(1)
        },
        columnCustom: {
          width: "100%",
          display: "inline-block"
        },
        columnCustomEditable: {
          cursor: "text"
        },
        columnCustomCenter: {
          textAlign: "center"
        },
        columnCustomLeft: {
          textAlign: "left"
        },
        columnCustomRight: {
          textAlign: "right"
        },
        width100: {
          width: "100%"
        },
        transparent_10: {
          opacity: 0.1
        },
        transparent_20: {
          opacity: 0.2
        },
        transparent_30: {
          opacity: 0.3
        },
        transparent_40: {
          opacity: 0.4
        },
        transparent_50: {
          opacity: 0.5
        },
        transparent_60: {
          opacity: 0.6
        },
        transparent_70: {
          opacity: 0.7
        },
        transparent_80: {
          opacity: 0.8
        },
        transparent_90: {
          opacity: 0.9
        },
        transparent_100: {
          opacity: 1
        },
        columnsDialogInputWidth: {
          width: 80
        },
        headerRow: {
          paddingLeft: theme.spacing(1),
          height: 38,
          whiteSpace: "nowrap"
        },
        buttonClearFilter: {
          position: "relative",
          "float": "right",
          padding: 0
        },
        buttonClearFilterIcon: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          color: "#FF0000",
          opacity: 0.7
        },
        tableDiv: {
          paddingTop: 0,
          paddingLeft: 0,
          width: "calc(100% - ".concat(theme.spacing(1), "px)"),
          height: "calc(100% - 38px)",
          overflow: "auto"
        },
        tableRow: {
          paddingLeft: theme.spacing(1),
          height: ROW_HEIGHT,
          lineHeight: ROW_HEIGHT + "px",
          verticalAlign: "top",
          userSelect: "none",
          width: "100%",
          "&:hover": {
            background: "".concat(theme.palette.primary.main, " !important"),
            color: _Utils["default"].invertColor(theme.palette.primary.main, true)
          },
          whiteSpace: "nowrap",
          flexWrap: "nowrap"
        },
        tableRowLines: {
          borderBottom: "1px solid ".concat(theme.palette.type === "dark" ? "#8888882e" : "#8888882e")
        },
        tableRowNoDragging: {
          cursor: "pointer"
        },
        tableRowAlias: {
          height: ROW_HEIGHT + 10
        },
        tableRowAliasReadWrite: {
          height: ROW_HEIGHT + 22
        },
        checkBox: {
          padding: 0
        },
        cellId: {
          position: "relative",
          fontSize: "1rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
          "& .copyButton": {
            display: "none"
          },
          "&:hover .copyButton": {
            display: "block"
          },
          "& .iconOwn": {
            display: "block",
            width: ROW_HEIGHT - 4,
            height: ROW_HEIGHT - 4,
            marginTop: 2,
            "float": "right"
          },
          "&:hover .iconOwn": {
            display: "none"
          },
          "& *": {
            width: "initial"
          }
        },
        cellIdSpan: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        cellIdIconFolder: {
          marginRight: theme.spacing(1),
          width: ROW_HEIGHT - 4,
          height: ROW_HEIGHT - 4,
          cursor: "pointer",
          color: theme.palette.secondary.main || "#fbff7d",
          verticalAlign: "top"
        },
        cellIdIconDocument: {
          verticalAlign: "middle",
          marginLeft: (ROW_HEIGHT - SMALL_BUTTON_SIZE) / 2,
          marginRight: theme.spacing(1),
          width: SMALL_BUTTON_SIZE,
          height: SMALL_BUTTON_SIZE
        },
        cellIdIconOwn: {},
        cellCopyButton: {
          width: SMALL_BUTTON_SIZE,
          height: SMALL_BUTTON_SIZE,
          top: (ROW_HEIGHT - SMALL_BUTTON_SIZE) / 2,
          opacity: 0.8,
          "&:hover": {
            opacity: 1
          },
          position: "absolute",
          right: 3
        },
        cellEditButton: {
          width: SMALL_BUTTON_SIZE,
          height: SMALL_BUTTON_SIZE,
          color: "white",
          position: "absolute",
          top: (ROW_HEIGHT - SMALL_BUTTON_SIZE) / 2,
          right: SMALL_BUTTON_SIZE + 3,
          opacity: 0.7,
          "&:hover": {
            opacity: 1
          }
        },
        cellName: {
          display: "inline-block",
          verticalAlign: "top",
          fontSize: 14,
          marginLeft: 5,
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        cellIdAlias: {
          fontStyle: "italic",
          fontSize: 12,
          opacity: 0.7,
          "&:hover": {
            color: theme.palette.type === "dark" ? "#009900" : "#007700"
          }
        },
        cellIdAliasReadWriteDiv: {
          height: 24,
          marginTop: -5
        },
        cellIdAliasAlone: {
          lineHeight: 0
        },
        cellIdAliasReadWrite: {
          lineHeight: "12px"
        },
        cellType: {
          display: "inline-block",
          verticalAlign: "top",
          "& .itemIcon": {
            verticalAlign: "middle",
            width: ICON_SIZE,
            height: ICON_SIZE,
            display: "inline-block"
          },
          "& .itemIconFolder": {
            marginLeft: 3
          }
        },
        cellRole: {
          display: "inline-block",
          verticalAlign: "top",
          textOverflow: "ellipsis",
          overflow: "hidden"
        },
        cellRoom: {
          display: "inline-block",
          verticalAlign: "top",
          textOverflow: "ellipsis",
          overflow: "hidden"
        },
        cellEnumParent: {
          opacity: 0.4
        },
        cellFunc: {
          display: "inline-block",
          verticalAlign: "top",
          textOverflow: "ellipsis",
          overflow: "hidden"
        },
        cellValue: {
          display: "inline-block",
          verticalAlign: "top",
          textOverflow: "ellipsis",
          overflow: "hidden"
        },
        cellValueButton: {
          marginTop: 5,
          "&:active": {
            transform: "scale(0.8)"
          }
        },
        cellValueButtonFalse: {
          opacity: 0.3
        },
        cellAdapter: {
          display: "inline-block",
          verticalAlign: "top"
        },
        cellValueTooltip: {
          fontSize: 12
        },
        cellValueText: {
          width: "100%",
          height: ROW_HEIGHT,
          fontSize: 16,
          display: "inline-block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          position: "relative",
          verticalAlign: "top",
          "& .copyButton": {
            display: "none"
          },
          "&:hover .copyButton": {
            display: "block"
          }
        },
        cellValueTooltipTitle: {
          fontStyle: "italic",
          width: 100,
          display: "inline-block"
        },
        cellValueTooltipValue: {
          width: 120,
          display: "inline-block",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis"
        },
        cellValueTooltipBoth: {
          width: 220,
          display: "inline-block",
          whiteSpace: "nowrap"
        },
        cellValueTooltipBox: {
          width: 250,
          overflow: "hidden"
        },
        cellValueTextUnit: {
          marginLeft: theme.spacing(0.5),
          opacity: 0.8
        },
        newValue: {
          animation: "$newValueAnimation 2s ease-in-out"
        },
        "@keyframes newValueAnimation": {
          "0%": {
            color: "#00f900"
          },
          "80%": {
            color: "#008000"
          },
          "100%": {
            color: theme.palette.type === "dark" ? "#fff" : "#000"
          }
        },
        cellValueTextState: {
          opacity: 0.7
        },
        cellValueTooltipCopy: {
          position: "absolute",
          bottom: 3,
          right: 3
        },
        cellValueTooltipEdit: {
          position: "absolute",
          bottom: 3,
          right: 15
        },
        cellButtons: {
          display: "inline-block",
          verticalAlign: "top"
        },
        cellButtonsButton: {
          display: "inline-block",
          opacity: 0.7,
          width: SMALL_BUTTON_SIZE + 4,
          height: SMALL_BUTTON_SIZE + 4,
          "&:hover": {
            opacity: 1
          },
          paddingTop: 0,
          marginTop: -2
        },
        cellButtonsEmptyButton: {
          fontSize: 12
        },
        cellButtonMinWidth: {
          minWidth: 47
        },
        cellButtonsButtonAlone: {
          marginLeft: SMALL_BUTTON_SIZE + 4,
          paddingTop: 0,
          marginTop: -2
        },
        cellButtonsButtonWithCustoms: {
          color: theme.palette.secondary.main
        },
        cellButtonsValueButton: {
          position: "absolute",
          display: "inline-block",
          top: SMALL_BUTTON_SIZE / 2 - 2,
          opacity: 0.7,
          width: SMALL_BUTTON_SIZE - 2,
          height: SMALL_BUTTON_SIZE - 2,
          color: theme.palette.action.active,
          "&:hover": {
            opacity: 1
          }
        },
        cellButtonsValueButtonCopy: {
          right: theme.spacing(1),
          cursor: "pointer"
        },
        cellButtonsValueButtonEdit: {
          right: SMALL_BUTTON_SIZE / 2 + theme.spacing(2)
        },
        filteredOut: {
          opacity: 0.5
        },
        filteredParentOut: {
          opacity: 0.3
        },
        filterInput: {
          marginTop: 0,
          marginBottom: 0
        },
        selectIcon: {
          width: 24,
          height: 24,
          marginRight: 4
        },
        selectNone: {
          opacity: 0.5
        },
        itemSelected: {
          background: "".concat(theme.palette.type === "dark" ? theme.palette.primary.light : theme.palette.primary.dark, " !important"),
          color: "".concat(_Utils["default"].invertColor(theme.palette.primary.main, true), " !important")
        },
        header: {
          width: "100%"
        },
        headerCell: {
          display: "inline-block",
          verticalAlign: "top"
        },
        headerCellValue: {
          paddingTop: 4,
          fontSize: 16
        },
        headerCellInput: {
          width: "calc(100% - 5px)",
          height: ROW_HEIGHT,
          paddingTop: 3,
          "& .itemIcon": {
            verticalAlign: "middle",
            width: ICON_SIZE,
            height: ICON_SIZE,
            display: "inline-block"
          }
        },
        headerCellSelectItem: {
          "& .itemIcon": {
            width: ICON_SIZE,
            height: ICON_SIZE,
            marginRight: 5,
            display: "inline-block"
          }
        },
        visibleButtons: {
          color: "#2196f3",
          opacity: 0.7
        },
        grow: {
          flexGrow: 1
        },
        enumIconDiv: {
          marginRight: theme.spacing(1),
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#FFFFFF"
        },
        enumIcon: {
          marginTop: 4,
          marginLeft: 4,
          width: 24,
          height: 24
        },
        enumDialog: {
          overflow: "hidden"
        },
        enumList: {
          minWidth: 250,
          height: "calc(100% - 50px)",
          overflow: "auto"
        },
        enumButton: {
          "float": "right"
        },
        enumCheckbox: {
          minWidth: 0
        },
        buttonDiv: {
          display: "flex",
          height: "100%",
          alignItems: "center"
        },
        aclText: {
          fontSize: 13
        },
        rightsObject: {
          color: "#55ff55",
          paddingLeft: 3
        },
        rightsState: {
          color: "#86b6ff",
          paddingLeft: 3
        },
        textCenter: {
          padding: 12,
          textAlign: "center"
        },
        tooltipAccessControl: {
          display: "flex",
          flexDirection: "column"
        },
        "@media screen and (max-width: 465px)": {
          columnsDialogInputWidth: {
            width: 50
          },
          fontSizeTitle: {
            "& *": {
              fontSize: 12
            }
          }
        },
        "@media screen and (max-width: 700px)": {},
        "@media screen and (max-width: 430px)": {},
        draggable: {
          cursor: "copy"
        },
        nonDraggable: {
          cursor: "no-drop"
        },
        selectClearButton: {
          position: "absolute",
          top: 0,
          right: 0,
          borderRadius: 20,
          backgroundColor: theme.palette.background["default"]
        }
      };
    };
    function generateFile(filename, obj) {
      var el = document.createElement("a");
      el.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj, null, 2)));
      el.setAttribute("download", filename);
      el.style.display = "none";
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
    }
    function binarySearch(list, find, _start, _end) {
      _start = _start || 0;
      if (_end === void 0) {
        _end = list.length - 1;
        if (!_end) {
          return list[0] === find;
        }
      }
      var middle = Math.floor((_start + _end) / 2);
      if (find === list[middle]) {
        return list[middle];
      }
      if (_end - 1 === _start) {
        return list[_start] === find || list[_end] === find;
      }
      if (find > list[middle]) {
        return binarySearch(list, find, middle, _end);
      }
      if (find < list[middle]) {
        return binarySearch(list, find, _start, middle);
      }
    }
    function applyFilter(item, filters, lang, objects, context, counter, customFilter, selectedTypes) {
      var filteredOut = false;
      if (!context) {
        context = {};
        if (filters.id) {
          context.id = filters.id.toLowerCase();
        }
        if (filters.name) {
          context.name = filters.name.toLowerCase();
        }
        if (filters.type) {
          context.type = filters.type.toLowerCase();
        }
        if (filters.custom) {
          context.custom = filters.custom.toLowerCase();
        }
        if (filters.role) {
          context.role = filters.role.toLowerCase();
        }
        if (filters.room) {
          context.room = objects[filters.room] && objects[filters.room].common && objects[filters.room].common.members || [];
        }
        if (filters.func) {
          context.func = objects[filters.func] && objects[filters.func].common && objects[filters.func].common.members || [];
        }
      }
      var data = item.data;
      if (data && data.id) {
        var common = data.obj && data.obj.common;
        if (customFilter) {
          if (customFilter.type && customFilter.type !== data.obj.type) {
            filteredOut = true;
          } else if (customFilter.common && customFilter.common.custom) {
            if (!common || !common.custom || customFilter.common.custom !== true && !common.custom[customFilter.common.custom]) {
              filteredOut = true;
            }
          }
        }
        if (!filteredOut && !filters.expertMode) {
          filteredOut = data.id === "system" || data.id === "enum" || data.id.startsWith("system.") || data.id.startsWith("enum.") || data.id.startsWith("_design/") || common && common.expert;
        }
        if (!filteredOut && context.id) {
          if (data.fID === void 0) {
            data.fID = data.id.toLowerCase();
          }
          filteredOut = data.fID.indexOf(context.id) === -1;
        }
        if (!filteredOut && context.name) {
          if (common) {
            if (data.fName === void 0) {
              data.fName = common && getName(common.name, lang) || "";
              data.fName = data.fName.toLowerCase();
            }
            filteredOut = !data.fName.includes(context.name);
          } else {
            filteredOut = true;
          }
        }
        if (!filteredOut && filters.role && common) {
          if (common) {
            filteredOut = !(common.role && common.role.startsWith(context.role));
          } else {
            filteredOut = true;
          }
        }
        if (!filteredOut && context.room) {
          filteredOut = !context.room.find(function(id) {
            return id === data.id || data.id.startsWith(id + ".");
          });
        }
        if (!filteredOut && context.func) {
          filteredOut = !context.func.find(function(id) {
            return id === data.id || data.id.startsWith(id + ".");
          });
        }
        if (!filteredOut && context.type) {
          filteredOut = !(data.obj && data.obj.type && data.obj.type === context.type);
        }
        if (!filteredOut && selectedTypes) {
          filteredOut = !(data.obj && data.obj.type && selectedTypes.includes(data.obj.type));
        }
        if (!filteredOut && context.custom) {
          if (common) {
            filteredOut = !common.custom || !common.custom[context.custom];
          } else {
            filteredOut = true;
          }
        }
      }
      data.visible = !filteredOut;
      data.hasVisibleChildren = false;
      if (item.children) {
        item.children.forEach(function(_item) {
          var visible = applyFilter(_item, filters, lang, objects, context, counter, customFilter, selectedTypes);
          if (visible) {
            data.hasVisibleChildren = true;
          }
        });
      }
      data.sumVisibility = data.visible || data.hasVisibleChildren || data.hasVisibleParent;
      if (counter && data.sumVisibility) {
        counter.count++;
      }
      if (data.id && data.sumVisibility && item.children) {
        item.children.forEach(function(_item) {
          return _item.data.hasVisibleParent = true;
        });
      }
      return data.visible || data.hasVisibleChildren;
    }
    function getVisibleItems(item, type, objects, _result) {
      _result = _result || [];
      var data = item.data;
      if (data.sumVisibility) {
        var _item$children;
        data.id && objects[data.id] && (!type || objects[data.id].type === type) && _result.push(data.id);
        (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.forEach(function(_item) {
          return getVisibleItems(_item, type, objects, _result);
        });
      }
      return _result;
    }
    function getSystemIcon(objects, id, k, imagePrefix) {
      var icon;
      if (id.startsWith("_design/") || id === "system") {
        icon = /* @__PURE__ */ _react["default"].createElement(_SettingsApplications["default"], {
          className: "iconOwn"
        });
      } else if (id === "0_userdata" || id === "0_userdata.0") {
        icon = /* @__PURE__ */ _react["default"].createElement(_Photo["default"], {
          className: "iconOwn"
        });
      } else if (id === "alias" || id === "alias.0") {
        icon = /* @__PURE__ */ _react["default"].createElement(_IconAlias["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.adapter") {
        icon = /* @__PURE__ */ _react["default"].createElement(_SettingsApplications["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.group") {
        icon = /* @__PURE__ */ _react["default"].createElement(_SupervisedUserCircle["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.user") {
        icon = /* @__PURE__ */ _react["default"].createElement(_PersonOutlined["default"], {
          className: "iconOwn"
        });
      } else if (id === "system.host") {
        icon = /* @__PURE__ */ _react["default"].createElement(_Router["default"], {
          className: "iconOwn"
        });
      } else if (id.endsWith(".connection") || id.endsWith(".connected")) {
        icon = /* @__PURE__ */ _react["default"].createElement(_Wifi["default"], {
          className: "iconOwn"
        });
      } else if (id.endsWith(".info")) {
        icon = /* @__PURE__ */ _react["default"].createElement(_Info["default"], {
          className: "iconOwn"
        });
      } else if (objects[id] && objects[id].type === "meta") {
        icon = /* @__PURE__ */ _react["default"].createElement(_Description["default"], {
          className: "iconOwn"
        });
      } else if (k < 2) {
        if (objects["system.adapter." + id]) {
          icon = getSelectIdIcon(objects, "system.adapter." + id, imagePrefix);
        }
      }
      return icon || null;
    }
    function buildTree(objects, options) {
      options = options || {};
      var imagePrefix = options.imagePrefix || ".";
      var ids = Object.keys(objects);
      ids.sort(function(a, b) {
        if (a === b)
          return 0;
        a = a.replace(/\./g, "!!!");
        b = b.replace(/\./g, "!!!");
        if (a > b)
          return 1;
        return -1;
      });
      var currentPathArr = [];
      var currentPath = "";
      var currentPathLen = 0;
      var root = {
        data: {
          name: "",
          id: ""
        },
        children: []
      };
      var info = {
        funcEnums: [],
        roomEnums: [],
        roles: [],
        ids: [],
        types: [],
        objects,
        customs: [],
        enums: [],
        hasSomeCustoms: false
      };
      var croot = root;
      var _loop = function _loop2(i2) {
        var id = ids[i2];
        if (!id) {
          return "continue";
        }
        var obj = objects[id];
        var parts = id.split(".");
        if (obj.type && !info.types.includes(obj.type)) {
          info.types.push(obj.type);
        }
        if (obj) {
          var _common$adminUI;
          var common = obj.common;
          var role = common && common.role;
          if (role && !info.roles.includes(role)) {
            info.roles.push(role);
          } else if (id.startsWith("enum.rooms.")) {
            info.roomEnums.push(id);
            info.enums.push(id);
          } else if (id.startsWith("enum.functions.")) {
            info.funcEnums.push(id);
            info.enums.push(id);
          } else if (obj.type === "enum") {
            info.enums.push(id);
          } else if (obj.type === "instance" && common && (common.supportCustoms || (_common$adminUI = common.adminUI) !== null && _common$adminUI !== void 0 && _common$adminUI.custom)) {
            info.hasSomeCustoms = true;
            info.customs.push(id.substring("system.adapter.".length));
          }
        }
        info.ids.push(id);
        var repeat = void 0;
        do {
          repeat = false;
          if (!currentPath || id.startsWith(currentPath + ".")) {
            var _obj$common, _obj$common2, _obj$common3;
            if (parts.length - currentPathLen > 1) {
              var curPath = currentPath;
              var _loop22 = function _loop23(k2) {
                curPath += (curPath ? "." : "") + parts[k2];
                if (!binarySearch(info.ids, curPath)) {
                  var _croot2 = {
                    data: {
                      name: parts[k2],
                      parent: croot,
                      id: curPath,
                      obj: objects[curPath],
                      level: k2,
                      icon: getSystemIcon(objects, curPath, k2, imagePrefix),
                      generated: true
                    }
                  };
                  croot.children = croot.children || [];
                  croot.children.push(_croot2);
                  croot = _croot2;
                  info.ids.push(curPath);
                } else {
                  croot = croot.children.find(function(item) {
                    return item.data.name === parts[k2];
                  });
                }
              };
              for (var k = currentPathLen; k < parts.length - 1; k++) {
                _loop22(k);
              }
            }
            var _croot = {
              data: {
                name: parts[parts.length - 1],
                title: getName(obj && obj.common && obj.common.name, options.lang),
                obj,
                parent: croot,
                icon: getSelectIdIcon(objects, id, imagePrefix) || getSystemIcon(objects, id, 0, imagePrefix),
                id,
                hasCustoms: ((_obj$common = obj.common) === null || _obj$common === void 0 ? void 0 : _obj$common.custom) && Object.keys(obj.common.custom).length,
                level: parts.length - 1,
                generated: false,
                button: obj.type === "state" && ((_obj$common2 = obj.common) === null || _obj$common2 === void 0 ? void 0 : _obj$common2.role) && typeof obj.common.role === "string" && obj.common.role.startsWith("button") && ((_obj$common3 = obj.common) === null || _obj$common3 === void 0 ? void 0 : _obj$common3.write) !== false
              }
            };
            croot.children = croot.children || [];
            croot.children.push(_croot);
            croot = _croot;
            currentPathLen = parts.length;
            currentPathArr = parts;
            currentPath = id;
          } else {
            var u = 0;
            while (currentPathArr[u] === parts[u]) {
              u++;
            }
            if (u > 0) {
              var move = currentPathArr.length;
              currentPathArr = currentPathArr.splice(0, u);
              currentPathLen = u;
              currentPath = currentPathArr.join(".");
              while (move > u) {
                croot = croot.data.parent;
                move--;
              }
            } else {
              croot = root;
              currentPathArr = [];
              currentPath = "";
              currentPathLen = 0;
            }
            repeat = true;
          }
        } while (repeat);
      };
      for (var i = 0; i < ids.length; i++) {
        var _ret = _loop(i);
        if (_ret === "continue")
          continue;
      }
      info.roomEnums.sort(function(a, b) {
        var _objects$a, _objects$a$common, _objects$b, _objects$b$common;
        var aName = getName(((_objects$a = objects[a]) === null || _objects$a === void 0 ? void 0 : (_objects$a$common = _objects$a.common) === null || _objects$a$common === void 0 ? void 0 : _objects$a$common.name) || a.split(".").pop());
        var bName = getName(((_objects$b = objects[b]) === null || _objects$b === void 0 ? void 0 : (_objects$b$common = _objects$b.common) === null || _objects$b$common === void 0 ? void 0 : _objects$b$common.name) || b.split(".").pop());
        if (aName > bName) {
          return 1;
        } else if (aName < bName) {
          return -1;
        } else {
          return 0;
        }
      });
      info.funcEnums.sort(function(a, b) {
        var _objects$a2, _objects$a2$common, _objects$b2, _objects$b2$common;
        var aName = getName(((_objects$a2 = objects[a]) === null || _objects$a2 === void 0 ? void 0 : (_objects$a2$common = _objects$a2.common) === null || _objects$a2$common === void 0 ? void 0 : _objects$a2$common.name) || a.split(".").pop());
        var bName = getName(((_objects$b2 = objects[b]) === null || _objects$b2 === void 0 ? void 0 : (_objects$b2$common = _objects$b2.common) === null || _objects$b2$common === void 0 ? void 0 : _objects$b2$common.name) || b.split(".").pop());
        if (aName > bName) {
          return 1;
        } else if (aName < bName) {
          return -1;
        } else {
          return 0;
        }
      });
      info.roles.sort();
      info.types.sort();
      return {
        info,
        root
      };
    }
    function findNode(root, id, _parts, _path, _level) {
      if (root.data.id === id) {
        return root;
      }
      if (!_parts) {
        _parts = id.split(".");
        _level = 0;
        _path = _parts[_level];
      }
      if (!root.children && root.data.id !== id) {
        return null;
      } else {
        var found;
        for (var i = 0; i < root.children.length; i++) {
          var _id = root.children[i].data.id;
          if (_id === _path) {
            found = root.children[i];
            break;
          } else if (_id > _path) {
            break;
          }
        }
        if (found) {
          return findNode(found, id, _parts, _path + "." + _parts[_level + 1], _level + 1);
        } else {
          return null;
        }
      }
    }
    function getName(name, lang) {
      if (name && _typeof(name) === "object") {
        return (name[lang] || name.en || "").toString();
      } else {
        return (name || "").toString();
      }
    }
    function findRoomsForObject(data, id, lang, withParentInfo, rooms) {
      if (!id) {
        return {
          rooms: [],
          per: false
        };
      }
      rooms = rooms || [];
      for (var i = 0; i < data.roomEnums.length; i++) {
        var _data$objects$data$ro, _common$members;
        var common = (_data$objects$data$ro = data.objects[data.roomEnums[i]]) === null || _data$objects$data$ro === void 0 ? void 0 : _data$objects$data$ro.common;
        var name = getName(common.name, lang);
        if (common !== null && common !== void 0 && (_common$members = common.members) !== null && _common$members !== void 0 && _common$members.includes(id) && !rooms.includes(name)) {
          if (!withParentInfo) {
            rooms.push(name);
          } else {
            rooms.push({
              name,
              origin: id
            });
          }
        }
      }
      var ownEnums;
      var parts = id.split(".");
      parts.pop();
      id = parts.join(".");
      if (data.objects[id]) {
        ownEnums = rooms.length;
        findRoomsForObject(data, id, lang, withParentInfo, rooms);
      }
      return {
        rooms,
        per: !ownEnums
      };
    }
    function findEnumsForObjectAsIds(data, id, enumName, funcs) {
      if (!id) {
        return [];
      }
      funcs = funcs || [];
      for (var i = 0; i < data[enumName].length; i++) {
        var _data$objects$data$en, _common$members2;
        var common = (_data$objects$data$en = data.objects[data[enumName][i]]) === null || _data$objects$data$en === void 0 ? void 0 : _data$objects$data$en.common;
        if (common !== null && common !== void 0 && (_common$members2 = common.members) !== null && _common$members2 !== void 0 && _common$members2.includes(id) && !funcs.includes(data[enumName][i])) {
          funcs.push(data[enumName][i]);
        }
      }
      funcs.sort();
      return funcs;
    }
    function findFunctionsForObject(data, id, lang, withParentInfo, funcs) {
      if (!id) {
        return {
          funcs: [],
          pef: false
        };
      }
      funcs = funcs || [];
      for (var i = 0; i < data.funcEnums.length; i++) {
        var _data$objects$data$fu, _common$members3;
        var common = (_data$objects$data$fu = data.objects[data.funcEnums[i]]) === null || _data$objects$data$fu === void 0 ? void 0 : _data$objects$data$fu.common;
        var name = getName(common.name, lang);
        if (common !== null && common !== void 0 && (_common$members3 = common.members) !== null && _common$members3 !== void 0 && _common$members3.includes(id) && !funcs.includes(name)) {
          if (!withParentInfo) {
            funcs.push(name);
          } else {
            funcs.push({
              name,
              origin: id
            });
          }
        }
      }
      var ownEnums;
      var parts = id.split(".");
      parts.pop();
      id = parts.join(".");
      if (data.objects[id]) {
        ownEnums = funcs.length;
        findFunctionsForObject(data, id, lang, withParentInfo, funcs);
      }
      return {
        funcs,
        pef: !ownEnums
      };
    }
    function formatValue(id, state, obj, texts, dateFormat, isFloatComma) {
      var states = _Utils["default"].getStates(obj);
      var isCommon = obj.common;
      var valText = {};
      var v = !state || state.val === null ? "(null)" : state.val === void 0 ? "[undef]" : state.val;
      var type = _typeof(v);
      if (isCommon && isCommon.role && typeof isCommon.role === "string" && isCommon.role.match(/^value\.time|^date/)) {
        if (typeof v === "string" && v.length === 13) {
          v = parseInt(v, 10);
        }
        v = v ? new Date(v).toString() : v;
      } else {
        if (type === "number") {
          v = Math.round(v * 1e8) / 1e8;
          if (isFloatComma) {
            v = v.toString().replace(".", ",");
          }
        } else if (type === "object") {
          v = JSON.stringify(v);
        } else if (type !== "string") {
          v = v.toString();
        }
        if (typeof v !== "string") {
          v = v.toString();
        }
      }
      if (states && states[v] !== void 0) {
        valText.s = v;
        v = states[valText.s];
      }
      var valFull;
      if (isCommon && isCommon.unit) {
        valText.u = isCommon.unit;
      }
      valFull = [{
        t: texts.value,
        v
      }];
      if (state) {
        if (state.ack !== void 0) {
          valFull.push({
            t: texts.ack,
            v: state.ack.toString()
          });
        }
        if (state.ts) {
          valFull.push({
            t: texts.ts,
            v: state.ts ? _Utils["default"].formatDate(new Date(state.ts), dateFormat) : ""
          });
        }
        if (state.lc) {
          valFull.push({
            t: texts.lc,
            v: state.lc ? _Utils["default"].formatDate(new Date(state.lc), dateFormat) : ""
          });
        }
        if (state.from) {
          var from = state.from || "";
          if (from.startsWith("system.adapter.")) {
            from = from.substring(15);
          }
          valFull.push({
            t: texts.from,
            v: from
          });
        }
        if (state.user) {
          var user = state.user || "";
          if (user.startsWith("system.user.")) {
            user = user.substring(12);
          }
          valFull.push({
            t: texts.user,
            v: user
          });
        }
        valFull.push({
          t: texts.quality,
          v: _Utils["default"].quality2text(state.q || 0).join(", "),
          nbr: true
        });
      }
      valText.v = v;
      return {
        valText,
        valFull,
        style: {
          color: state !== null && state !== void 0 && state.ack ? state.q ? "#ffa500" : "" : "#ff2222c9"
        }
      };
    }
    function getSelectIdIcon(objects, id, imagePrefix) {
      imagePrefix = imagePrefix || ".";
      var src = "";
      var _id_ = "system.adapter." + id;
      var aIcon = id && objects[_id_] && objects[_id_].common && objects[_id_].common.icon;
      if (aIcon) {
        if (!aIcon.startsWith("data:image/")) {
          if (aIcon.includes(".")) {
            src = imagePrefix + "/adapter/" + objects[_id_].common.name + "/" + aIcon;
          } else if (aIcon && aIcon.length < 3) {
            return aIcon;
          } else {
            return null;
          }
        } else {
          if (aIcon.startsWith("data:image/svg")) {
            src = /* @__PURE__ */ _react["default"].createElement(_reactInlinesvg["default"], {
              src: aIcon,
              width: 28,
              height: 28
            });
          } else {
            src = aIcon;
          }
        }
      } else {
        var common = objects[id] && objects[id].common;
        if (common) {
          var cIcon = common.icon;
          if (cIcon) {
            if (!cIcon.startsWith("data:image/")) {
              if (cIcon.includes(".")) {
                var instance;
                if (objects[id].type === "instance" || objects[id].type === "adapter") {
                  src = imagePrefix + "/adapter/" + common.name + "/" + cIcon;
                } else if (id && id.startsWith("system.adapter.")) {
                  instance = id.split(".", 3);
                  if (cIcon[0] === "/") {
                    instance[2] += cIcon;
                  } else {
                    instance[2] += "/" + cIcon;
                  }
                  src = imagePrefix + "/adapter/" + instance[2];
                } else {
                  instance = id.split(".", 2);
                  if (cIcon[0] === "/") {
                    instance[0] += cIcon;
                  } else {
                    instance[0] += "/" + cIcon;
                  }
                  src = imagePrefix + "/adapter/" + instance[0];
                }
              } else if (aIcon && aIcon.length < 3) {
                return aIcon;
              } else {
                return null;
              }
            } else {
              if (cIcon.startsWith("data:image/svg")) {
                src = /* @__PURE__ */ _react["default"].createElement(_reactInlinesvg["default"], {
                  src: cIcon,
                  width: 28,
                  height: 28
                });
              } else {
                src = cIcon;
              }
            }
          }
        }
      }
      return src || null;
    }
    function prepareSparkData(values, from) {
      var time = from;
      var i = 1;
      var v = [];
      while (i < values.length && time < from + 25 * 36e5) {
        while (values[i - 1].ts < time && time <= values[i].ts && i < values.length) {
          i++;
        }
        if (i === 1 && values[i - 1].ts >= time) {
          v.push(0);
        } else if (i < values.length) {
          if (typeof values[i].val === "boolean" || typeof values[i - 1].val === "boolean") {
            v.push(values[i].val ? 1 : 0);
          } else {
            values[i - 1].val = values[i - 1].val || 0;
            values[i].val = values[i].val || 0;
            var val = values[i - 1].val + (values[i].val - values[i - 1].val) * (time - values[i - 1].ts) / (values[i].ts - values[i - 1].ts);
            v.push(val);
          }
        }
        time += 36e5;
      }
      return v;
    }
    var DEFAULT_FILTER = {
      id: "",
      name: "",
      room: "",
      func: "",
      role: "",
      type: "",
      custom: "",
      expertMode: false
    };
    var ITEM_IMAGES = {
      state: /* @__PURE__ */ _react["default"].createElement(_IconState["default"], {
        className: "itemIcon"
      }),
      channel: /* @__PURE__ */ _react["default"].createElement(_IconChannel["default"], {
        className: "itemIcon"
      }),
      device: /* @__PURE__ */ _react["default"].createElement(_IconDevice["default"], {
        className: "itemIcon"
      }),
      adapter: /* @__PURE__ */ _react["default"].createElement(_IconAdapter["default"], {
        className: "itemIcon"
      }),
      meta: /* @__PURE__ */ _react["default"].createElement(_Description["default"], {
        className: "itemIcon"
      }),
      instance: /* @__PURE__ */ _react["default"].createElement(_IconInstance["default"], {
        className: "itemIcon",
        style: {
          color: "#7da7ff"
        }
      }),
      "enum": /* @__PURE__ */ _react["default"].createElement(_ListAlt["default"], {
        className: "itemIcon"
      }),
      chart: /* @__PURE__ */ _react["default"].createElement(_ShowChart["default"], {
        className: "itemIcon"
      }),
      config: /* @__PURE__ */ _react["default"].createElement(_Settings["default"], {
        className: "itemIcon"
      }),
      group: /* @__PURE__ */ _react["default"].createElement(_SupervisedUserCircle["default"], {
        className: "itemIcon"
      }),
      user: /* @__PURE__ */ _react["default"].createElement(_PersonOutlined["default"], {
        className: "itemIcon"
      }),
      host: /* @__PURE__ */ _react["default"].createElement(_Router["default"], {
        className: "itemIcon"
      }),
      schedule: /* @__PURE__ */ _react["default"].createElement(_CalendarToday["default"], {
        className: "itemIcon"
      }),
      script: /* @__PURE__ */ _react["default"].createElement(_Code["default"], {
        className: "itemIcon"
      }),
      folder: /* @__PURE__ */ _react["default"].createElement(_IconClosed["default"], {
        className: "itemIcon itemIconFolder"
      })
    };
    var StyledBadge = (0, _withStyles["default"])(function(theme) {
      return {
        badge: {
          right: 3,
          top: 3,
          border: "2px solid ".concat(theme.palette.background.paper),
          padding: "0 4px"
        }
      };
    })(_Badge["default"]);
    var SCREEN_WIDTHS = {
      xs: {
        idWidth: "100%",
        fields: [],
        widths: {}
      },
      sm: {
        idWidth: 300,
        fields: ["room", "val"],
        widths: {
          room: 100,
          val: 200
        }
      },
      md: {
        idWidth: 300,
        fields: ["room", "func", "val", "buttons"],
        widths: {
          name: 200,
          room: 150,
          func: 150,
          val: 120,
          buttons: 120
        }
      },
      lg: {
        idWidth: 300,
        fields: ["name", "type", "role", "room", "func", "val", "buttons", "changedFrom", "qualityCode", "timestamp", "lastChange"],
        widths: {
          name: 300,
          type: 80,
          role: 120,
          room: 180,
          func: 180,
          val: 140,
          buttons: 120,
          changedFrom: 120,
          qualityCode: 100,
          timestamp: 165,
          lastChange: 165
        }
      },
      xl: {
        idWidth: 650,
        fields: ["name", "type", "role", "room", "func", "val", "buttons", "changedFrom", "qualityCode", "timestamp", "lastChange"],
        widths: {
          name: 400,
          type: 80,
          role: 120,
          room: 180,
          func: 180,
          val: 140,
          buttons: 120,
          changedFrom: 120,
          qualityCode: 100,
          timestamp: 170,
          lastChange: 170
        }
      }
    };
    var objectsAlreadyLoaded = false;
    var ObjectBrowser = /* @__PURE__ */ function(_Component) {
      _inherits(ObjectBrowser2, _Component);
      var _super = _createSuper(ObjectBrowser2);
      function ObjectBrowser2(props) {
        var _this;
        _classCallCheck(this, ObjectBrowser2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized2(_this), "onStateChange", function(id, state) {
          console.log("> stateChange " + id);
          if (_this.states[id]) {
            var item = _this.findItem(id);
            if (item && item.data.state) {
              item.data.state = null;
            }
          }
          _this.states[id] = state;
          if (!_this.pausedSubscribes) {
            if (!_this.statesUpdateTimer) {
              _this.statesUpdateTimer = setTimeout(function() {
                _this.statesUpdateTimer = null;
                _this.forceUpdate();
              }, 300);
            }
          } else {
            if (_this.statesUpdateTimer) {
              clearTimeout(_this.statesUpdateTimer);
              _this.statesUpdateTimer = null;
            }
          }
        });
        _defineProperty(_assertThisInitialized2(_this), "onObjectChange", function(id, obj, oldObj) {
          var newState;
          if (Array.isArray(id)) {
            id.forEach(function(event) {
              console.log("> objectChange " + event.id);
              if (event.obj && typeof _this.props.filterFunc === "function" && !_this.props.filterFunc(event.obj)) {
                return;
              }
              ;
              if (event.id.startsWith("system.adapter.") && event.obj && event.obj.type === "adapter") {
                var columnsForAdmin2 = JSON.parse(JSON.stringify(_this.state.columnsForAdmin));
                _this.parseObjectForAdmins(columnsForAdmin2, event.obj);
                if (JSON.stringify(_this.state.columnsForAdmin) !== JSON.stringify(columnsForAdmin2)) {
                  newState = {
                    columnsForAdmin: columnsForAdmin2
                  };
                }
              }
              _this.objects = _this.objects || [];
              if (_this.objects[event.id]) {
                if (event.obj) {
                  _this.objects[event.id] = event.obj;
                } else {
                  delete _this.objects[event.id];
                }
              } else if (_this.objects[event.id]) {
                delete _this.objects[event.id];
              }
            });
          } else {
            console.log("> objectChange " + id);
            _this.objects = _this.objects || [];
            if (obj && typeof _this.props.filterFunc === "function" && !_this.props.filterFunc(obj)) {
              return;
            }
            ;
            if (id.startsWith("system.adapter.") && obj && obj.type === "adapter") {
              var columnsForAdmin = JSON.parse(JSON.stringify(_this.state.columnsForAdmin));
              _this.parseObjectForAdmins(columnsForAdmin, obj);
              if (JSON.stringify(_this.state.columnsForAdmin) !== JSON.stringify(columnsForAdmin)) {
                newState = {
                  columnsForAdmin
                };
              }
            }
            if (_this.objects[id]) {
              if (obj) {
                _this.objects[id] = obj;
              } else {
                delete _this.objects[id];
              }
            } else if (_this.objects[id]) {
              delete _this.objects[id];
            }
          }
          newState && _this.setState(newState);
          if (!_this.objectsUpdateTimer && _this.objects) {
            _this.objectsUpdateTimer = setTimeout(function() {
              _this.objectsUpdateTimer = null;
              var _buildTree = buildTree(_this.objects, _this.props), info = _buildTree.info, root = _buildTree.root;
              _this.root = root;
              _this.info = info;
              _this.lastAppliedFilter = null;
              if (!_this.pausedSubscribes) {
                _this.forceUpdate();
              }
            }, 500);
          }
        });
        _defineProperty(_assertThisInitialized2(_this), "getEnumsForId", function(id) {
          var result = [];
          _this.info.enums.forEach(function(_id) {
            var _this$objects$_id, _this$objects$_id$com, _this$objects$_id$com2;
            if ((_this$objects$_id = _this.objects[_id]) !== null && _this$objects$_id !== void 0 && (_this$objects$_id$com = _this$objects$_id.common) !== null && _this$objects$_id$com !== void 0 && (_this$objects$_id$com2 = _this$objects$_id$com.members) !== null && _this$objects$_id$com2 !== void 0 && _this$objects$_id$com2.includes(id)) {
              var en = {
                _id: _this.objects[_id]._id,
                common: JSON.parse(JSON.stringify(_this.objects[_id].common)),
                "native": _this.objects[_id]["native"],
                type: "enum"
              };
              if (en.common) {
                delete en.common.members;
                delete en.common.custom;
                delete en.common.mobile;
              }
              result.push(en);
            }
          });
          return result.length ? result : void 0;
        });
        _defineProperty(_assertThisInitialized2(_this), "_createAllEnums", /* @__PURE__ */ function() {
          var _ref = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(enums, objId) {
            var e, _enObj$common, _enObj$common$members, id, _enObj, enObj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    e = 0;
                  case 1:
                    if (!(e < enums.length)) {
                      _context.next = 24;
                      break;
                    }
                    id = enums[e];
                    _enObj = void 0;
                    if (_typeof(id) === "object") {
                      _enObj = id;
                      id = id._id;
                    }
                    enObj = _this.objects[id];
                    if (enObj) {
                      _context.next = 14;
                      break;
                    }
                    enObj = _enObj || {
                      _id: id,
                      common: {
                        name: id.split(".").pop(),
                        members: []
                      },
                      "native": {}
                    };
                    enObj.common = enObj.common || {};
                    enObj.common.members = [objId];
                    _context.next = 12;
                    return _this.props.socket.setObject(id, enObj);
                  case 12:
                    _context.next = 21;
                    break;
                  case 14:
                    if ((_enObj$common = enObj.common) !== null && _enObj$common !== void 0 && (_enObj$common$members = _enObj$common.members) !== null && _enObj$common$members !== void 0 && _enObj$common$members.includes(objId)) {
                      _context.next = 21;
                      break;
                    }
                    enObj.common = enObj.common || {};
                    enObj.common.members = enObj.common.members || [];
                    enObj.common.members.push(objId);
                    enObj.common.members.sort();
                    _context.next = 21;
                    return _this.props.socket.setObject(id, enObj);
                  case 21:
                    e++;
                    _context.next = 1;
                    break;
                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
        _defineProperty(_assertThisInitialized2(_this), "loadObjects", /* @__PURE__ */ function() {
          var _ref2 = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2(objs) {
            var id, obj, enums, state;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!objs) {
                      _context2.next = 42;
                      break;
                    }
                    _context2.t0 = regeneratorRuntime.keys(objs);
                  case 2:
                    if ((_context2.t1 = _context2.t0()).done) {
                      _context2.next = 42;
                      break;
                    }
                    id = _context2.t1.value;
                    if (!(!objs.hasOwnProperty(id) || !objs[id])) {
                      _context2.next = 6;
                      break;
                    }
                    return _context2.abrupt("continue", 2);
                  case 6:
                    obj = objs[id];
                    enums = null;
                    if (obj && obj.common && obj.common.enums) {
                      enums = obj.common.enums;
                      delete obj.common.enums;
                    } else {
                      enums = null;
                    }
                    _context2.prev = 9;
                    _context2.next = 12;
                    return _this.props.socket.setObject(id, obj);
                  case 12:
                    _context2.t2 = enums;
                    if (!_context2.t2) {
                      _context2.next = 16;
                      break;
                    }
                    _context2.next = 16;
                    return _this._createAllEnums(enums, obj._id);
                  case 16:
                    if (!(obj.type === "state")) {
                      _context2.next = 35;
                      break;
                    }
                    _context2.prev = 17;
                    _context2.next = 20;
                    return _this.props.socket.getState(obj._id);
                  case 20:
                    state = _context2.sent;
                    if (!(!state || state.val === null)) {
                      _context2.next = 30;
                      break;
                    }
                    _context2.prev = 22;
                    _context2.next = 25;
                    return _this.props.socket.setState(obj._id, !obj.common || obj.common.def === void 0 ? null : obj.common.def, true);
                  case 25:
                    _context2.next = 30;
                    break;
                  case 27:
                    _context2.prev = 27;
                    _context2.t3 = _context2["catch"](22);
                    window.alert('Cannot set state "'.concat(obj._id, '": ').concat(_context2.t3));
                  case 30:
                    _context2.next = 35;
                    break;
                  case 32:
                    _context2.prev = 32;
                    _context2.t4 = _context2["catch"](17);
                    window.alert('Cannot read state "'.concat(obj._id, '": ').concat(_context2.t4));
                  case 35:
                    _context2.next = 40;
                    break;
                  case 37:
                    _context2.prev = 37;
                    _context2.t5 = _context2["catch"](9);
                    window.alert(_context2.t5);
                  case 40:
                    _context2.next = 2;
                    break;
                  case 42:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[9, 37], [17, 32], [22, 27]]);
          }));
          return function(_x3) {
            return _ref2.apply(this, arguments);
          };
        }());
        _defineProperty(_assertThisInitialized2(_this), "handleJsonUpload", function(evt) {
          var f = evt.target.files[0];
          if (f) {
            var r = new FileReader();
            r.onload = /* @__PURE__ */ function() {
              var _ref3 = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3(e) {
                var contents, json, len, id, enums, state;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        contents = e.target.result;
                        _context3.prev = 1;
                        json = JSON.parse(contents);
                        len = Object.keys(json).length;
                        id = json._id;
                        if (!(id === void 0 && len)) {
                          _context3.next = 11;
                          break;
                        }
                        _context3.next = 8;
                        return _this.loadObjects(json);
                      case 8:
                        window.alert(_this.props.t("ra_%s object(s) processed", len));
                        _context3.next = 33;
                        break;
                      case 11:
                        if (id) {
                          _context3.next = 13;
                          break;
                        }
                        return _context3.abrupt("return", window.alert(_this.props.t("ra_Invalid structure")));
                      case 13:
                        _context3.prev = 13;
                        if (json.common.enums) {
                          enums = json.common.enums;
                          delete json.common.enums;
                        }
                        _context3.next = 17;
                        return _this.props.socket.setObject(json._id, json);
                      case 17:
                        if (!(json.type === "state")) {
                          _context3.next = 24;
                          break;
                        }
                        _context3.next = 20;
                        return _this.props.socket.getState(json._id);
                      case 20:
                        state = _context3.sent;
                        if (!(!state || state.val === null || state.val === void 0)) {
                          _context3.next = 24;
                          break;
                        }
                        _context3.next = 24;
                        return _this.props.socket.getState(json._id, json.common.def === void 0 ? null : json.common.def, true);
                      case 24:
                        if (!enums) {
                          _context3.next = 27;
                          break;
                        }
                        _context3.next = 27;
                        return _this._createAllEnums(enums, json._id);
                      case 27:
                        window.alert(_this.props.t("ra_%s was imported", json._id));
                        _context3.next = 33;
                        break;
                      case 30:
                        _context3.prev = 30;
                        _context3.t0 = _context3["catch"](13);
                        window.alert(_context3.t0);
                      case 33:
                        _context3.next = 38;
                        break;
                      case 35:
                        _context3.prev = 35;
                        _context3.t1 = _context3["catch"](1);
                        window.alert(_context3.t1);
                      case 38:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[1, 35], [13, 30]]);
              }));
              return function(_x4) {
                return _ref3.apply(this, arguments);
              };
            }();
            r.readAsText(f);
          } else {
            window.alert(_this.props.t("ra_Failed to open JSON File"));
          }
        });
        _defineProperty(_assertThisInitialized2(_this), "toolTipObjectCreating", function() {
          var _this$objects$id2;
          var t = _this.props.t;
          var value = [/* @__PURE__ */ _react["default"].createElement("div", {
            key: 1
          }, t("ra_Only following structures of objects are available:")), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 2
          }, t("ra_Folder \u2192 State")), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 3
          }, t("ra_Folder \u2192 Channel \u2192 State")), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 4
          }, t("ra_Folder \u2192 Device \u2192 Channel \u2192 State")), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 5
          }, t("ra_Device \u2192 Channel \u2192 State")), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 6
          }, t("ra_Channel \u2192 State")), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 7,
            style: {
              height: 10
            }
          }), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 8
          }, t('ra_Non-experts may create new objects only in "0_userdata.0" or "alias.0".')), /* @__PURE__ */ _react["default"].createElement("div", {
            key: 9
          }, t('ra_The experts may create objects everywhere but from second level (e.g. "vis.0" or "javascript.0").'))];
          if (_this.state.selected.length || _this.state.selectedNonObject) {
            var _this$objects$id;
            var id = _this.state.selected[0] || _this.state.selectedNonObject;
            if (id.split(".").length < 2 || _this.objects[id] && ((_this$objects$id = _this.objects[id]) === null || _this$objects$id === void 0 ? void 0 : _this$objects$id.type) === "state") {
            } else {
              if (_this.props.expertMode) {
                switch ((_this$objects$id2 = _this.objects[id]) === null || _this$objects$id2 === void 0 ? void 0 : _this$objects$id2.type) {
                  case "device":
                    value = [/* @__PURE__ */ _react["default"].createElement("div", {
                      key: 1
                    }, t("ra_Only following structures of objects are available:")), /* @__PURE__ */ _react["default"].createElement("div", {
                      key: 5
                    }, t("ra_Device \u2192 Channel \u2192 State"))];
                    break;
                  case "folder":
                    value = [/* @__PURE__ */ _react["default"].createElement("div", {
                      key: 1
                    }, t("ra_Only following structures of objects are available:")), /* @__PURE__ */ _react["default"].createElement("div", {
                      key: 2
                    }, t("ra_Folder \u2192 State")), /* @__PURE__ */ _react["default"].createElement("div", {
                      key: 3
                    }, t("ra_Folder \u2192 Channel \u2192 State")), /* @__PURE__ */ _react["default"].createElement("div", {
                      key: 4
                    }, t("ra_Folder \u2192 Device \u2192 Channel \u2192 State"))];
                    break;
                  case "channel":
                    value = [/* @__PURE__ */ _react["default"].createElement("div", {
                      key: 1
                    }, t("ra_Only following structures of objects are available:")), /* @__PURE__ */ _react["default"].createElement("div", {
                      key: 1
                    }, t("ra_Channel \u2192 State"))];
                    break;
                  default:
                    break;
                }
              } else if (id.startsWith("alias.0") || id.startsWith("0_userdata")) {
                value = [/* @__PURE__ */ _react["default"].createElement("div", {
                  key: 1
                }, t("ra_Only following structures of objects are available:")), /* @__PURE__ */ _react["default"].createElement("div", {
                  key: 7
                }, t('ra_Non-experts may create new objects only in "0_userdata.0" or "alias.0".')), /* @__PURE__ */ _react["default"].createElement("div", {
                  key: 8
                }, t('ra_The experts may create objects everywhere but from second level (e.g. "vis.0" or "javascript.0").'))];
              }
            }
          }
          return value.length ? value : t("ra_Add new child object to selected parent");
        });
        _defineProperty(_assertThisInitialized2(_this), "renderTooltipAccessControl", function(acl) {
          if (!acl) {
            return null;
          }
          var check = [{
            value: "0x400",
            valueNum: 1024,
            title: "read",
            group: "Owner"
          }, {
            value: "0x200",
            valueNum: 512,
            title: "write",
            group: "Owner"
          }, {
            value: "0x40",
            valueNum: 64,
            title: "read",
            group: "Group"
          }, {
            value: "0x20",
            valueNum: 32,
            title: "write",
            group: "Group"
          }, {
            value: "0x4",
            valueNum: 4,
            title: "read",
            group: "Everyone"
          }, {
            value: "0x2",
            valueNum: 2,
            title: "write",
            group: "Everyone"
          }];
          var arrayTooltipText = [];
          var funcRenderStateObject = function funcRenderStateObject2() {
            var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "object";
            var rights = acl[value];
            check.forEach(function(el, i) {
              if (rights & el.valueNum) {
                arrayTooltipText.push(/* @__PURE__ */ _react["default"].createElement("span", {
                  key: value + i
                }, _this.texts["acl" + el.group + "_" + el.title + "_" + value], ",", /* @__PURE__ */ _react["default"].createElement("span", {
                  className: value === "object" ? _this.props.classes.rightsObject : _this.props.classes.rightsState
                }, el.value)));
              }
            });
          };
          arrayTooltipText.push(/* @__PURE__ */ _react["default"].createElement("span", {
            key: "group"
          }, _this.texts.ownerGroup + ": " + (acl.ownerGroup || "").replace("system.group.", "")));
          arrayTooltipText.push(/* @__PURE__ */ _react["default"].createElement("span", {
            key: "owner"
          }, _this.texts.ownerUser + ": " + (acl.owner || "").replace("system.user.", "")));
          funcRenderStateObject();
          if (acl.state) {
            funcRenderStateObject("state");
          }
          return arrayTooltipText.length ? /* @__PURE__ */ _react["default"].createElement("span", {
            className: _this.props.classes.tooltipAccessControl
          }, arrayTooltipText.map(function(el) {
            return el;
          })) : "";
        });
        _defineProperty(_assertThisInitialized2(_this), "extendObject", function(id, data) {
          return _this.props.socket.extendObject(id, data)["catch"](function(error) {
            return window.alert(error);
          });
        });
        _defineProperty(_assertThisInitialized2(_this), "setObject", function(id, data) {
          return _this.props.socket.setObject(id, data)["catch"](function(error) {
            return window.alert(error);
          });
        });
        _this.lastSelectedItems = window.localStorage.getItem("".concat(props.dialogName || "App", ".objectSelected")) || "[]";
        try {
          _this.lastSelectedItems = JSON.parse(_this.lastSelectedItems);
          if (_typeof(_this.lastSelectedItems) !== "object") {
            _this.lastSelectedItems = [_this.lastSelectedItems];
          }
          _this.lastSelectedItems = _this.lastSelectedItems.filter(function(id) {
            return id;
          });
        } catch (e) {
        }
        var expanded = window.localStorage.getItem("".concat(props.dialogName || "App", ".objectExpanded")) || "[]";
        try {
          expanded = JSON.parse(expanded);
        } catch (e) {
          expanded = [];
        }
        var filter = props.defaultFilters || window.localStorage.getItem("".concat(props.dialogName || "App", ".objectFilter")) || Object.assign({}, DEFAULT_FILTER);
        if (typeof filter === "string") {
          try {
            filter = JSON.parse(filter);
          } catch (e) {
            filter = Object.assign({}, DEFAULT_FILTER);
          }
        }
        filter.expertMode = props.expertMode !== void 0 ? props.expertMode : window.sessionStorage.getItem("App.expertMode") === "true";
        _this.tableRef = /* @__PURE__ */ (0, _react.createRef)();
        _this.filterRefs = {};
        Object.keys(DEFAULT_FILTER).forEach(function(name) {
          return _this.filterRefs[name] = /* @__PURE__ */ (0, _react.createRef)();
        });
        _this.lastAppliedFilter = null;
        _this.pausedSubscribes = false;
        _this.selectedFound = false;
        _this.root = null;
        _this.states = {};
        _this.subscribes = [];
        _this.statesUpdateTimer = null;
        _this.objectsUpdateTimer = null;
        _this.visibleCols = props.columns || SCREEN_WIDTHS[props.width].fields;
        if (props.types && props.types.length === 1) {
          var pos = _this.visibleCols.indexOf("type");
          pos !== -1 && _this.visibleCols.splice(pos, 1);
        }
        _this.possibleCols = SCREEN_WIDTHS.xl.fields;
        var customDialog = null;
        if (props.router) {
          var location = props.router.getLocation();
          if (location.id && location.dialog === "customs") {
            customDialog = [location.id];
            _this.pauseSubscribe(true);
          }
        }
        var selected = props.selected || "";
        if (_typeof(selected) !== "object") {
          selected = [selected];
        }
        selected = selected.map(function(id) {
          return id.replace(/["']/g, "");
        }).filter(function(id) {
          return id;
        });
        var columns = window.localStorage.getItem("".concat(props.dialogName || "App", ".columns"));
        try {
          columns = columns ? JSON.parse(columns) : null;
        } catch (e) {
          columns = null;
        }
        var columnsWidths = window.localStorage.getItem("".concat(props.dialogName || "App", ".columnsWidths"));
        try {
          columnsWidths = columnsWidths ? JSON.parse(columnsWidths) : {};
        } catch (e) {
          columnsWidths = {};
        }
        _this.imagePrefix = props.imagePrefix || ".";
        var foldersFirst = window.localStorage.getItem((props.dialogName || "App") + ".foldersFirst");
        if (foldersFirst === "false") {
          foldersFirst = false;
        } else if (foldersFirst === "true") {
          foldersFirst = true;
        } else {
          foldersFirst = props.foldersFirst === void 0 ? true : props.foldersFirst;
        }
        var statesView = _this.props.objectStatesView ? JSON.parse(window.localStorage.getItem((props.dialogName || "App") + ".objectStatesView")) || false : false;
        _this.state = {
          loaded: false,
          foldersFirst,
          selected,
          selectedNonObject: window.localStorage.getItem("".concat(props.dialogName || "App", ".selectedNonObject")) || "",
          filter,
          filterKey: 0,
          depth: 0,
          expandAllVisible: false,
          expanded,
          toast: "",
          lang: props.lang,
          scrollBarWidth: 16,
          customDialog,
          editObjectDialog: "",
          enumDialog: null,
          roleDialog: null,
          modalEmptyId: null,
          statesView,
          columns,
          columnsForAdmin: null,
          columnsSelectorShow: false,
          columnsAuto: window.localStorage.getItem("".concat(props.dialogName || "App", ".columnsAuto")) !== "false",
          columnsWidths,
          columnsDialogTransparent: 100,
          columnsEditCustomDialog: null,
          customColumnDialogValueChanged: false,
          showExportDialog: false,
          linesEnabled: window.localStorage.getItem("".concat(props.dialogName || "App", ".lines")) === "true"
        };
        _this.edit = {};
        _this.texts = {
          value: props.t("ra_tooltip_value"),
          ack: props.t("ra_tooltip_ack"),
          ts: props.t("ra_tooltip_ts"),
          lc: props.t("ra_tooltip_lc"),
          from: props.t("ra_tooltip_from"),
          user: props.t("ra_tooltip_user"),
          quality: props.t("ra_tooltip_quality"),
          editObject: props.t("ra_tooltip_editObject"),
          deleteObject: props.t("ra_tooltip_deleteObject"),
          customConfig: props.t("ra_tooltip_customConfig"),
          copyState: props.t("ra_tooltip_copyState"),
          editState: props.t("ra_tooltip_editState"),
          close: props.t("ra_Close"),
          filter_id: props.t("ra_filter_id"),
          filter_name: props.t("ra_filter_name"),
          filter_type: props.t("ra_filter_type"),
          filter_role: props.t("ra_filter_role"),
          filter_room: props.t("ra_filter_room"),
          filter_func: props.t("ra_filter_func"),
          filter_custom: props.t("ra_filter_customs"),
          objectChangedByUser: props.t("ra_object_changed_by_user"),
          objectChangedBy: props.t("ra_object_changed_by"),
          objectChangedFrom: props.t("ra_state_changed_from"),
          stateChangedBy: props.t("ra_state_changed_by"),
          stateChangedFrom: props.t("ra_state_changed_from"),
          ownerGroup: props.t("ra_Owner group"),
          ownerUser: props.t("ra_Owner user"),
          aclOwner_read_object: props.t("ra_aclOwner_read_object"),
          aclOwner_read_state: props.t("ra_aclOwner_read_state"),
          aclOwner_write_object: props.t("ra_aclOwner_write_object"),
          aclOwner_write_state: props.t("ra_aclOwner_write_state"),
          aclGroup_read_object: props.t("ra_aclGroup_read_object"),
          aclGroup_read_state: props.t("ra_aclGroup_read_state"),
          aclGroup_write_object: props.t("ra_aclGroup_write_object"),
          aclGroup_write_state: props.t("ra_aclGroup_write_state"),
          aclEveryone_read_object: props.t("ra_aclEveryone_read_object"),
          aclEveryone_read_state: props.t("ra_aclEveryone_read_state"),
          aclEveryone_write_object: props.t("ra_aclEveryone_write_object"),
          aclEveryone_write_state: props.t("ra_aclEveryone_write_state")
        };
        _this.levelPadding = props.levelPadding || ITEM_LEVEL;
        _this.calculateColumnsVisibility();
        return _this;
      }
      _createClass2(ObjectBrowser2, [{
        key: "loadAllObjects",
        value: function loadAllObjects(update2) {
          var _this2 = this;
          var props = this.props;
          return new Promise(function(resolve) {
            return _this2.setState({
              updating: true
            }, function() {
              return resolve();
            });
          }).then(function() {
            return _this2.props.objectsWorker ? _this2.props.objectsWorker.getObjects(update2) : props.socket.getObjects(update2, true);
          }).then(function(objects) {
            _this2.systemConfig = objects["system.config"] || {};
            _this2.systemConfig.common = _this2.systemConfig.common || {};
            _this2.systemConfig.common.defaultNewAcl = _this2.systemConfig.common.defaultNewAcl || {};
            _this2.systemConfig.common.defaultNewAcl.owner = _this2.systemConfig.common.defaultNewAcl.owner || "system.user.admin";
            _this2.systemConfig.common.defaultNewAcl.ownerGroup = _this2.systemConfig.common.defaultNewAcl.ownerGroup || "system.group.administrator";
            if (typeof _this2.systemConfig.common.defaultNewAcl.state !== "number") {
              _this2.systemConfig.common.defaultNewAcl.state = 1636;
            }
            if (typeof _this2.systemConfig.common.defaultNewAcl.object !== "number") {
              _this2.systemConfig.common.defaultNewAcl.state = 1636;
            }
            if (typeof props.filterFunc === "function") {
              _this2.objects = {};
              var keys = Object.keys(objects);
              for (var k = 0; k < keys.length; k++) {
                try {
                  if (props.filterFunc(objects[keys[k]])) {
                    _this2.objects[keys[k]] = objects[keys[k]];
                  }
                } catch (e) {
                  console.log('Error by filtering of "'.concat(keys[k], '": ').concat(e));
                }
              }
            } else if (props.types) {
              _this2.objects = {};
              Object.keys(objects).forEach(function(id) {
                var type = objects[id] && objects[id].type;
                if (type && (type === "channel" || type === "device" || type === "enum" || type === "folder" || type === "adapter" || type === "instance" || props.types.includes(type))) {
                  _this2.objects[id] = objects[id];
                }
              });
            } else {
              _this2.objects = objects;
            }
            _this2.defaultHistory = _this2.systemConfig.common.defaultHistory;
            if (_this2.defaultHistory) {
              props.socket.getState("system.adapter.".concat(_this2.defaultHistory, ".alive")).then(function(state) {
                if (!state || !state.val) {
                  _this2.defaultHistory = "";
                }
              })["catch"](function(e) {
                return window.alert("Cannot get state: " + e);
              });
            }
            return _this2.getAdditionalColumns();
          }).then(function(columnsForAdmin) {
            _this2.calculateColumnsVisibility(null, null, columnsForAdmin);
            var _buildTree2 = buildTree(_this2.objects, _this2.props), info = _buildTree2.info, root = _buildTree2.root;
            _this2.root = root;
            _this2.info = info;
            var node = _this2.state.selected && _this2.state.selected.length && findNode(_this2.root, _this2.state.selected[0]);
            _this2.lastAppliedFilter = null;
            if (node && !applyFilter(node, _this2.state.filter, _this2.state.lang, _this2.objects, null, null, props.customFilter, props.types)) {
              _this2.setState({
                filter: Object.assign({}, DEFAULT_FILTER),
                columnsForAdmin
              }, function() {
                _this2.setState({
                  loaded: true,
                  updating: false
                }, function() {
                  return _this2.expandAllSelected(function() {
                    return _this2.onAfterSelect();
                  });
                });
              });
            } else {
              _this2.setState({
                loaded: true,
                updating: false,
                columnsForAdmin
              }, function() {
                return _this2.expandAllSelected(function() {
                  return _this2.onAfterSelect();
                });
              });
            }
          })["catch"](function(e) {
            return _this2.showError(e);
          });
        }
      }, {
        key: "expandAllSelected",
        value: function expandAllSelected(cb) {
          var expanded = _toConsumableArray(this.state.expanded);
          var changed = false;
          this.state.selected.forEach(function(id) {
            var parts = id.split(".");
            var path = [];
            for (var i = 0; i < parts.length - 1; i++) {
              path.push(parts[i]);
              if (!expanded.includes(path.join("."))) {
                expanded.push(path.join("."));
                changed = true;
              }
            }
          });
          if (changed) {
            expanded.sort();
            window.localStorage.setItem("".concat(this.props.dialogName || "App", ".objectExpanded"), JSON.stringify(expanded));
            this.setState({
              expanded
            }, cb);
          } else {
            cb && cb();
          }
        }
      }, {
        key: "onAfterSelect",
        value: function onAfterSelect(isDouble) {
          var _this3 = this;
          this.lastSelectedItems = _toConsumableArray(this.state.selected);
          if (this.state.selected && this.state.selected.length) {
            window.localStorage.setItem("".concat(this.props.dialogName || "App", ".objectSelected"), JSON.stringify(this.lastSelectedItems));
            var name = this.lastSelectedItems.length === 1 ? _Utils["default"].getObjectName(this.objects, this.lastSelectedItems[0], null, {
              language: this.state.lang
            }) : "";
            this.props.onSelect && this.props.onSelect(this.lastSelectedItems, name, isDouble);
          } else {
            window.localStorage.setItem("".concat(this.props.dialogName || "App", ".objectSelected"), "");
            if (this.state.selected.length) {
              this.setState({
                selected: []
              }, function() {
                return _this3.props.onSelect && _this3.props.onSelect([], "");
              });
            } else {
              this.props.onSelect && this.props.onSelect([], "");
            }
          }
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this4 = this;
          this.loadAllObjects(!objectsAlreadyLoaded).then(function() {
            if (_this4.props.objectsWorker) {
              _this4.props.objectsWorker.registerHandler(_this4.onObjectChange);
            } else {
              _this4.props.socket.subscribeObject("*", _this4.onObjectChange);
            }
            objectsAlreadyLoaded = true;
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this5 = this;
          if (this.props.objectsWorker) {
            this.props.objectsWorker.unregisterHandler(this.onObjectChange, true);
          } else {
            this.props.socket.unsubscribeObject("*", this.onObjectChange);
          }
          this.subscribes.forEach(function(pattern) {
            console.log("- unsubscribe " + pattern);
            _this5.props.socket.unsubscribeState(pattern, _this5.onStateChange);
          });
          this.subscribes = [];
          this.objects = {};
        }
      }, {
        key: "refreshComponent",
        value: function refreshComponent() {
          var _this6 = this;
          this.subscribes.forEach(function(pattern) {
            console.log("- unsubscribe " + pattern);
            _this6.props.socket.unsubscribeState(pattern, _this6.onStateChange);
          });
          this.subscribes = [];
          this.loadAllObjects(true).then(function() {
            return console.log("updated!");
          });
        }
      }, {
        key: "renderErrorDialog",
        value: function renderErrorDialog() {
          var _this7 = this;
          return this.state.error ? /* @__PURE__ */ _react["default"].createElement(_Dialog["default"], {
            open: true,
            maxWidth: "sm",
            fullWidth: true,
            onClose: function onClose() {
              return _this7.setState({
                error: ""
              });
            },
            "aria-labelledby": "error-dialog-title",
            "aria-describedby": "error-dialog-description"
          }, /* @__PURE__ */ _react["default"].createElement(_DialogTitle["default"], {
            id: "alert-dialog-title"
          }, this.props.title || this.props.t("ra_Error")), /* @__PURE__ */ _react["default"].createElement(_DialogContent["default"], null, /* @__PURE__ */ _react["default"].createElement(_DialogContentText["default"], {
            id: "alert-dialog-description"
          }, this.state.error)), /* @__PURE__ */ _react["default"].createElement(_DialogActions["default"], null, /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
            variant: "contained",
            onClick: function onClick() {
              return _this7.setState({
                error: ""
              });
            },
            color: "primary",
            autoFocus: true,
            startIcon: /* @__PURE__ */ _react["default"].createElement(_Check["default"], null)
          }, this.props.t("ra_Ok")))) : null;
        }
      }, {
        key: "showError",
        value: function showError(error) {
          this.setState({
            error: _typeof(error) === "object" ? error && typeof error.toString === "function" ? error.toString() : JSON.stringify(error) : error
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(toggleItem, isDouble) {
          var _this8 = this;
          if (!this.props.multiSelect) {
            if (this.objects[toggleItem] && (!this.props.types || this.props.types.includes(this.objects[toggleItem].type))) {
              window.localStorage.removeItem("".concat(this.props.dialogName || "App", ".selectedNonObject"));
              if (this.state.selected[0] !== toggleItem) {
                this.setState({
                  selected: [toggleItem],
                  selectedNonObject: ""
                }, function() {
                  return _this8.onAfterSelect(isDouble);
                });
              } else if (isDouble && this.props.onSelect) {
                this.onAfterSelect(isDouble);
              }
            } else {
              window.localStorage.setItem("".concat(this.props.dialogName || "App", ".selectedNonObject"), toggleItem);
              this.setState({
                selected: [],
                selectedNonObject: toggleItem
              }, function() {
                return _this8.onAfterSelect();
              });
            }
          } else {
            if (this.objects[toggleItem] && (!this.props.types || this.props.types.includes(this.objects[toggleItem].type))) {
              window.localStorage.removeItem("".concat(this.props.dialogName || "App", ".selectedNonObject"));
              var selected = _toConsumableArray(this.state.selected);
              var pos = selected.indexOf(toggleItem);
              if (pos === -1) {
                selected.push(toggleItem);
                selected.sort();
              } else if (!isDouble) {
                selected.splice(pos, 1);
              }
              this.setState({
                selected,
                selectedNonObject: ""
              }, function() {
                return _this8.onAfterSelect(isDouble);
              });
            }
          }
        }
      }, {
        key: "_renderDefinedList",
        value: function _renderDefinedList(isLast) {
          var _this9 = this;
          var cols = _toConsumableArray(this.possibleCols);
          cols.unshift("id");
          if (this.props.columns && !this.props.columns.includes("buttons")) {
            var pos = cols.indexOf("buttons");
            if (pos !== -1) {
              cols.splice(pos, 1);
            }
          }
          return cols.filter(function(id) {
            return isLast && (id === "val" || id === "buttons") || !isLast && id !== "val" && id !== "buttons";
          }).map(function(id) {
            return /* @__PURE__ */ _react["default"].createElement(_ListItem["default"], {
              button: true,
              onClick: function onClick() {
                if (!_this9.state.columnsAuto && id !== "id") {
                  var columns = _toConsumableArray(_this9.state.columns || []);
                  var _pos = columns.indexOf(id);
                  if (_pos === -1) {
                    columns.push(id);
                    columns.sort();
                  } else {
                    columns.splice(_pos, 1);
                  }
                  window.localStorage.setItem((_this9.props.dialogName || "App") + ".columns", JSON.stringify(columns));
                  _this9.calculateColumnsVisibility(null, columns);
                  _this9.setState({
                    columns
                  });
                }
              },
              key: id
            }, /* @__PURE__ */ _react["default"].createElement(_Checkbox["default"], {
              edge: "start",
              disabled: id === "id" || _this9.state.columnsAuto,
              checked: id === "id" || (_this9.state.columnsAuto ? _this9.visibleCols.includes(id) : _this9.state.columns && _this9.state.columns.includes(id)),
              disableRipple: true
            }), /* @__PURE__ */ _react["default"].createElement(_ListItemText["default"], {
              primary: _this9.texts["filter_" + id] || _this9.props.t("ra_" + id)
            }), /* @__PURE__ */ _react["default"].createElement(_ListItemSecondaryAction["default"], null, /* @__PURE__ */ _react["default"].createElement(_FormControl["default"], {
              className: _this9.props.classes.columnsDialogInputWidth,
              style: {
                marginTop: 0,
                marginBottom: 0
              },
              margin: "dense"
            }, /* @__PURE__ */ _react["default"].createElement(_Input["default"], {
              classes: {
                underline: "no-underline"
              },
              placeholder: _this9.props.t("ra_Width"),
              value: _this9.state.columnsWidths[id] || "",
              onChange: function onChange(e) {
                var columnsWidths = JSON.parse(JSON.stringify(_this9.state.columnsWidths));
                columnsWidths[id] = e.target.value;
                window.localStorage.setItem((_this9.props.dialogName || "App") + ".columnsWidths", JSON.stringify(columnsWidths));
                _this9.calculateColumnsVisibility(null, null, null, columnsWidths);
                _this9.setState({
                  columnsWidths
                });
              },
              autoComplete: "off"
            }))));
          });
        }
      }, {
        key: "renderColumnsSelectorDialog",
        value: function renderColumnsSelectorDialog() {
          var _this10 = this;
          if (!this.state.columnsSelectorShow) {
            return null;
          } else {
            return /* @__PURE__ */ _react["default"].createElement(_Dialog["default"], {
              onClose: function onClose() {
                return _this10.setState({
                  columnsSelectorShow: false
                });
              },
              open: true,
              classes: {
                root: _Utils["default"].clsx(this.props.classes.dialogColumns, this.props.classes["transparent_" + this.state.columnsDialogTransparent])
              }
            }, /* @__PURE__ */ _react["default"].createElement(_DialogTitle["default"], {
              className: this.props.classes.fontSizeTitle
            }, this.props.t("ra_Configure visible columns")), /* @__PURE__ */ _react["default"].createElement(_DialogContent["default"], {
              className: this.props.classes.fontSizeTitle
            }, /* @__PURE__ */ _react["default"].createElement(_FormControlLabel["default"], {
              className: this.props.classes.switchColumnAuto,
              control: /* @__PURE__ */ _react["default"].createElement(_Switch["default"], {
                checked: this.state.columnsAuto,
                onChange: function onChange() {
                  window.localStorage.setItem((_this10.props.dialogName || "App") + ".columnsAuto", _this10.state.columnsAuto ? "false" : "true");
                  if (!_this10.state.columnsAuto) {
                    _this10.calculateColumnsVisibility(true);
                    _this10.setState({
                      columnsAuto: true
                    });
                  } else {
                    if (!_this10.state.columns) {
                      _this10.calculateColumnsVisibility(false, _toConsumableArray(_this10.visibleCols));
                      _this10.setState({
                        columnsAuto: false,
                        columns: _toConsumableArray(_this10.visibleCols)
                      });
                    } else {
                      _this10.calculateColumnsVisibility(false);
                      _this10.setState({
                        columnsAuto: false
                      });
                    }
                  }
                }
              }),
              label: this.props.t("ra_Auto (no custom columns)")
            }), /* @__PURE__ */ _react["default"].createElement(_FormControlLabel["default"], {
              className: this.props.classes.switchColumnAuto,
              control: /* @__PURE__ */ _react["default"].createElement(_Switch["default"], {
                checked: this.state.foldersFirst,
                onChange: function onChange() {
                  window.localStorage.setItem((_this10.props.dialogName || "App") + ".foldersFirst", _this10.state.foldersFirst ? "false" : "true");
                  _this10.setState({
                    foldersFirst: !_this10.state.foldersFirst
                  });
                }
              }),
              label: this.props.t("ra_Folders always first")
            }), /* @__PURE__ */ _react["default"].createElement(_FormControlLabel["default"], {
              className: this.props.classes.switchColumnAuto,
              control: /* @__PURE__ */ _react["default"].createElement(_Switch["default"], {
                checked: this.state.linesEnabled,
                onChange: function onChange() {
                  window.localStorage.setItem((_this10.props.dialogName || "App") + ".lines", _this10.state.linesEnabled ? "false" : "true");
                  _this10.setState({
                    linesEnabled: !_this10.state.linesEnabled
                  });
                }
              }),
              label: this.props.t("ra_Show lines between rows")
            }), /* @__PURE__ */ _react["default"].createElement(_Typography["default"], {
              classes: {
                root: this.props.classes.dialogColumnsLabel
              }
            }, this.props.t("ra_Transparent dialog")), /* @__PURE__ */ _react["default"].createElement(_Slider["default"], {
              classes: {
                root: this.props.classes.width100
              },
              value: this.state.columnsDialogTransparent,
              min: 20,
              max: 100,
              step: 10,
              onChange: function onChange(event, newValue) {
                return _this10.setState({
                  columnsDialogTransparent: newValue
                });
              }
            }), /* @__PURE__ */ _react["default"].createElement(_List["default"], null, this._renderDefinedList(false), this.state.columnsForAdmin && Object.keys(this.state.columnsForAdmin).sort().map(function(adapter) {
              return _this10.state.columnsForAdmin[adapter].map(function(column) {
                return /* @__PURE__ */ _react["default"].createElement(_ListItem["default"], {
                  button: true,
                  onClick: function onClick() {
                    if (!_this10.state.columnsAuto) {
                      var columns = _toConsumableArray(_this10.state.columns || []);
                      var id = "_" + adapter + "_" + column.path;
                      var pos = columns.indexOf(id);
                      if (pos === -1) {
                        columns.push(id);
                        columns.sort();
                      } else {
                        columns.splice(pos, 1);
                      }
                      _this10.calculateColumnsVisibility(null, columns);
                      window.localStorage.setItem((_this10.props.dialogName || "App") + ".columns", JSON.stringify(columns));
                      _this10.setState({
                        columns
                      });
                    }
                  },
                  key: adapter + "_" + column.name
                }, /* @__PURE__ */ _react["default"].createElement(_ListItemIcon["default"], null, /* @__PURE__ */ _react["default"].createElement(_Checkbox["default"], {
                  disabled: _this10.state.columnsAuto,
                  edge: "start",
                  checked: !_this10.state.columnsAuto && _this10.state.columns && _this10.state.columns.includes("_" + adapter + "_" + column.path),
                  disableRipple: true
                })), /* @__PURE__ */ _react["default"].createElement(_ListItemText["default"], {
                  primary: column.name + " (" + adapter + ")"
                }), /* @__PURE__ */ _react["default"].createElement(_ListItemSecondaryAction["default"], null, /* @__PURE__ */ _react["default"].createElement(_FormControl["default"], {
                  className: _this10.props.classes.columnsDialogInputWidth,
                  style: {
                    marginTop: 0,
                    marginBottom: 0
                  },
                  margin: "dense"
                }, /* @__PURE__ */ _react["default"].createElement(_Input["default"], {
                  classes: {
                    underline: "no-underline"
                  },
                  placeholder: _this10.props.t("ra_Width"),
                  value: _this10.state.columnsWidths["_" + adapter + "_" + column.path] || "",
                  onChange: function onChange(e) {
                    var columnsWidths = JSON.parse(JSON.stringify(_this10.state.columnsWidths));
                    columnsWidths["_" + adapter + "_" + column.path] = e.target.value;
                    window.localStorage.setItem((_this10.props.dialogName || "App") + ".columnsWidths", JSON.stringify(columnsWidths));
                    _this10.calculateColumnsVisibility(null, null, null, columnsWidths);
                    _this10.setState({
                      columnsWidths
                    });
                  },
                  autoComplete: "off"
                }))));
              });
            }), this._renderDefinedList(true))), /* @__PURE__ */ _react["default"].createElement(_DialogActions["default"], null, /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
              variant: "contained",
              onClick: function onClick() {
                return _this10.setState({
                  columnsSelectorShow: false
                });
              },
              color: "primary",
              startIcon: /* @__PURE__ */ _react["default"].createElement(_Close["default"], null)
            }, this.texts["close"])));
          }
        }
      }, {
        key: "getAdditionalColumns",
        value: function getAdditionalColumns() {
          var _this11 = this;
          return this.props.socket.getAdapters().then(function(instances) {
            var columnsForAdmin = null;
            instances.forEach(function(obj) {
              return columnsForAdmin = _this11.parseObjectForAdmins(columnsForAdmin, obj);
            });
            return columnsForAdmin;
          })["catch"](function(e) {
            return window.alert("Cannot get adapters: " + e);
          });
        }
      }, {
        key: "checkUnsubscribes",
        value: function checkUnsubscribes() {
          for (var i = this.subscribes.length - 1; i >= 0; i--) {
            !this.recordStates.includes(this.subscribes[i]) && this.unsubscribe(this.subscribes[i]);
          }
          this.recordStates = [];
        }
      }, {
        key: "findItem",
        value: function findItem(id, _parts, _root, _partyId) {
          _parts = _parts || id.split(".");
          _root = _root || this.root;
          if (!_root || !_parts.length) {
            return null;
          }
          _partyId = (_partyId ? _partyId + "." : "") + _parts.shift();
          if (_root.children) {
            var item = _root.children.find(function(i) {
              return i.data.id === _partyId;
            });
            if (item) {
              if (item.data.id === id) {
                return item;
              } else if (_parts.length) {
                return this.findItem(id, _parts, item, _partyId);
              }
            } else {
              return null;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "parseObjectForAdmins",
        value: function parseObjectForAdmins(columnsForAdmin, obj) {
          var _this12 = this;
          if (obj.common && obj.common.adminColumns && obj.common.name) {
            var columns = obj.common.adminColumns;
            if (_typeof(columns) !== "object") {
              columns = [columns];
            }
            columns = columns.map(function(item) {
              if (_typeof(item) !== "object") {
                return {
                  path: item,
                  name: item.split(".").pop()
                };
              }
              if (item.objTypes && _typeof(item.objTypes) !== "object") {
                item.objTypes = [item.objTypes];
              } else if (!item.objTypes) {
                item.objTypes = null;
              }
              if (!item.name && item.path) {
                return {
                  path: item.path,
                  name: item.path.split(".").pop(),
                  width: item.width,
                  edit: !!item.edit,
                  type: item.type,
                  objTypes: item.objTypes
                };
              }
              if (_typeof(item.name) !== "object" && item.path) {
                return {
                  path: item.path,
                  name: item.name,
                  width: item.width,
                  edit: !!item.edit,
                  type: item.type,
                  objTypes: item.objTypes
                };
              }
              if (!item.path) {
                console.warn("Admin columns for ".concat(obj._id, " ignored, because path not found"));
                return null;
              } else {
                return {
                  path: item.path,
                  name: item.name[_this12.props.lang] || item.name.en,
                  width: item.width,
                  edit: !!item.edit,
                  type: item.type,
                  objTypes: item.objTypes
                };
              }
            }).filter(function(item) {
              return item;
            });
            if (columns && columns.length) {
              columnsForAdmin = columnsForAdmin || {};
              columnsForAdmin[obj.common.name] = columns.sort(function(a, b) {
                return a.path > b.path ? -1 : a.path < b.path ? 1 : 0;
              });
            }
          } else if (obj.common && obj.common.name && columnsForAdmin && columnsForAdmin[obj.common.name]) {
            delete columnsForAdmin[obj.common.name];
          }
          return columnsForAdmin;
        }
      }, {
        key: "subscribe",
        value: function subscribe(id) {
          if (!this.subscribes.includes(id)) {
            this.subscribes.push(id);
            console.log("+ subscribe " + id);
            !this.pausedSubscribes && this.props.socket.subscribeState(id, this.onStateChange);
          }
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(id) {
          var pos = this.subscribes.indexOf(id);
          if (pos !== -1) {
            this.subscribes.splice(pos, 1);
            if (this.states[id]) {
              delete this.states[id];
            }
            console.log("- unsubscribe " + id);
            this.props.socket.unsubscribeState(id, this.onStateChange);
            if (this.pausedSubscribes) {
              console.warn("Unsubscribe during pause?");
            }
          }
        }
      }, {
        key: "pauseSubscribe",
        value: function pauseSubscribe(isPause) {
          var _this13 = this;
          if (!this.pausedSubscribes && isPause) {
            this.pausedSubscribes = true;
            this.subscribes.forEach(function(id) {
              return _this13.props.socket.unsubscribeState(id, _this13.onStateChange);
            });
          } else if (this.pausedSubscribes && !isPause) {
            this.pausedSubscribes = false;
            this.subscribes.forEach(function(id) {
              return _this13.props.socket.subscribeState(id, _this13.onStateChange);
            });
          }
        }
      }, {
        key: "onFilter",
        value: function onFilter(name, value) {
          var _this14 = this;
          this.filterTimer = null;
          var filter = {};
          Object.keys(this.filterRefs).forEach(function(name2) {
            if (_this14.filterRefs[name2] && _this14.filterRefs[name2].current) {
              for (var i = 0; i < _this14.filterRefs[name2].current.children.length; i++) {
                if (_this14.filterRefs[name2].current.children[i].tagName === "INPUT") {
                  filter[name2] = _this14.filterRefs[name2].current.children[i].value;
                  break;
                }
              }
            }
          });
          if (name) {
            filter[name] = value;
            if (name === "expertMode") {
              window.sessionStorage.setItem("App.expertMode", value ? "true" : "false");
            }
          }
          filter = Object.assign({}, this.state.filter, filter);
          if (JSON.stringify(this.state.filter) !== JSON.stringify(filter)) {
            window.localStorage.setItem((this.props.dialogName || "App") + ".objectFilter", JSON.stringify(filter));
            this.setState({
              filter
            }, function() {
              return _this14.props.onFilterChanged && _this14.props.onFilterChanged(filter);
            });
          }
        }
      }, {
        key: "clearFilter",
        value: function clearFilter() {
          var _this15 = this;
          var filter = {};
          Object.keys(this.filterRefs).forEach(function(name) {
            if (_this15.filterRefs[name] && _this15.filterRefs[name].current) {
              for (var i = 0; i < _this15.filterRefs[name].current.childNodes.length; i++) {
                var item = _this15.filterRefs[name].current.childNodes[i];
                if (item.tagName === "INPUT") {
                  filter[name] = "";
                  item.value = "";
                  break;
                }
              }
            }
          });
          filter = Object.assign({}, this.state.filter, filter);
          if (JSON.stringify(this.state.filter) !== JSON.stringify(filter)) {
            window.localStorage.setItem((this.props.dialogName || "App") + ".objectFilter", JSON.stringify(filter));
            this.setState({
              filter,
              filterKey: this.state.filterKey + 1
            }, function() {
              return _this15.props.onFilterChanged && _this15.props.onFilterChanged(filter);
            });
          }
        }
      }, {
        key: "isFilterEmpty",
        value: function isFilterEmpty() {
          var _this16 = this;
          var someNotEmpty = Object.keys(this.state.filter).find(function(attr) {
            return attr !== "expertMode" && _this16.state.filter[attr];
          });
          return !someNotEmpty;
        }
      }, {
        key: "getFilterInput",
        value: function getFilterInput(name) {
          var _this17 = this, _this$filterRefs$name, _this$filterRefs$name2;
          return /* @__PURE__ */ _react["default"].createElement(_FormControl["default"], {
            className: _Utils["default"].clsx(this.props.classes.headerCellInput, this.props.classes.filterInput),
            key: name + "_" + this.state.filterKey,
            margin: "dense"
          }, /* @__PURE__ */ _react["default"].createElement(_Input["default"], {
            ref: this.filterRefs[name],
            classes: {
              underline: "no-underline"
            },
            id: name,
            placeholder: this.texts["filter_" + name],
            defaultValue: this.state.filter[name],
            onChange: function onChange(e) {
              _this17.filterTimer && clearTimeout(_this17.filterTimer);
              _this17.filterTimer = setTimeout(function() {
                return _this17.onFilter();
              }, 400);
            },
            autoComplete: "off"
          }), (_this$filterRefs$name = this.filterRefs[name]) !== null && _this$filterRefs$name !== void 0 && (_this$filterRefs$name2 = _this$filterRefs$name.current) !== null && _this$filterRefs$name2 !== void 0 && _this$filterRefs$name2.firstChild.value ? /* @__PURE__ */ _react["default"].createElement("div", {
            style: {
              position: "absolute",
              right: 0
            }
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            size: "small",
            onClick: function onClick() {
              _this17.filterRefs[name].current.firstChild.value = "";
              _this17.onFilter(name, "");
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Close["default"], null))) : null);
        }
      }, {
        key: "getFilterSelect",
        value: function getFilterSelect(name, values) {
          var _this18 = this, _this$filterRefs$name3, _this$filterRefs$name4, _this$filterRefs$name5;
          var hasIcons = !!values.find(function(item) {
            return item.icon;
          });
          return /* @__PURE__ */ _react["default"].createElement("div", {
            style: {
              position: "relative"
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Select["default"], {
            key: name + "_" + this.state.filterKey,
            ref: this.filterRefs[name],
            className: this.props.classes.headerCellInput + " no-underline",
            onChange: function onChange(e) {
              _this18.filterTimer && clearTimeout(_this18.filterTimer);
              _this18.filterTimer = setTimeout(function() {
                return _this18.onFilter();
              }, 400);
            },
            defaultValue: this.state.filter[name] || "",
            inputProps: {
              name,
              id: name
            },
            displayEmpty: true
          }, /* @__PURE__ */ _react["default"].createElement(_MenuItem["default"], {
            key: "empty",
            value: ""
          }, /* @__PURE__ */ _react["default"].createElement("span", {
            className: this.props.classes.selectNone
          }, this.texts["filter_" + name])), values.map(function(item) {
            var id;
            var name2;
            var icon;
            if (_typeof(item) === "object") {
              id = item.value;
              name2 = item.name;
              icon = item.icon;
            } else {
              id = item;
              name2 = item;
            }
            return /* @__PURE__ */ _react["default"].createElement(_MenuItem["default"], {
              className: _this18.props.classes.headerCellSelectItem,
              key: id,
              value: id
            }, icon ? icon : hasIcons ? /* @__PURE__ */ _react["default"].createElement("div", {
              className: "itemIcon"
            }) : null, name2);
          })), (_this$filterRefs$name3 = this.filterRefs[name]) !== null && _this$filterRefs$name3 !== void 0 && (_this$filterRefs$name4 = _this$filterRefs$name3.current) !== null && _this$filterRefs$name4 !== void 0 && (_this$filterRefs$name5 = _this$filterRefs$name4.childNodes[1]) !== null && _this$filterRefs$name5 !== void 0 && _this$filterRefs$name5.value ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: _Utils["default"].clsx(this.props.classes.selectClearButton)
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            size: "small",
            onClick: function onClick() {
              var newFilter = _objectSpread({}, _this18.state.filter);
              newFilter[name] = "";
              _this18.filterRefs[name].current.childNodes[1].value = "";
              window.localStorage.setItem((_this18.props.dialogName || "App") + ".objectFilter", JSON.stringify(newFilter));
              _this18.setState({
                filter: newFilter,
                filterKey: _this18.state.filterKey + 1
              }, function() {
                return _this18.props.onFilterChanged && _this18.props.onFilterChanged(newFilter);
              });
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Close["default"], null))) : null);
        }
      }, {
        key: "getFilterSelectRole",
        value: function getFilterSelectRole() {
          return this.getFilterSelect("role", this.info.roles);
        }
      }, {
        key: "getFilterSelectRoom",
        value: function getFilterSelectRoom() {
          var _this19 = this;
          var rooms = this.info.roomEnums.map(function(id) {
            var _this19$objects$id, _this19$objects$id$co, _this19$objects$id2, _this19$objects$id2$c;
            return {
              name: getName(((_this19$objects$id = _this19.objects[id]) === null || _this19$objects$id === void 0 ? void 0 : (_this19$objects$id$co = _this19$objects$id.common) === null || _this19$objects$id$co === void 0 ? void 0 : _this19$objects$id$co.name) || id.split(".").pop()),
              value: id,
              icon: /* @__PURE__ */ _react["default"].createElement(_Icon["default"], {
                src: (_this19$objects$id2 = _this19.objects[id]) === null || _this19$objects$id2 === void 0 ? void 0 : (_this19$objects$id2$c = _this19$objects$id2.common) === null || _this19$objects$id2$c === void 0 ? void 0 : _this19$objects$id2$c.icon,
                className: _this19.props.classes.selectIcon
              })
            };
          });
          return this.getFilterSelect("room", rooms);
        }
      }, {
        key: "getFilterSelectFunction",
        value: function getFilterSelectFunction() {
          var _this20 = this;
          var func = this.info.funcEnums.map(function(id) {
            var _this20$objects$id, _this20$objects$id$co;
            return {
              name: getName(_this20.objects[id] && _this20.objects[id].common && _this20.objects[id].common.name || id.split(".").pop()),
              value: id,
              icon: /* @__PURE__ */ _react["default"].createElement(_Icon["default"], {
                src: (_this20$objects$id = _this20.objects[id]) === null || _this20$objects$id === void 0 ? void 0 : (_this20$objects$id$co = _this20$objects$id.common) === null || _this20$objects$id$co === void 0 ? void 0 : _this20$objects$id$co.icon,
                className: _this20.props.classes.selectIcon
              })
            };
          });
          return this.getFilterSelect("func", func);
        }
      }, {
        key: "getFilterSelectType",
        value: function getFilterSelectType() {
          var types = this.info.types.map(function(type) {
            return {
              name: type,
              value: type,
              icon: ITEM_IMAGES[type]
            };
          });
          return this.getFilterSelect("type", types);
        }
      }, {
        key: "getFilterSelectCustoms",
        value: function getFilterSelectCustoms() {
          var _this21 = this;
          if (this.info.customs.length) {
            var customs = this.info.customs.map(function(id) {
              return {
                name: id,
                value: id,
                icon: /* @__PURE__ */ _react["default"].createElement(_Icon["default"], {
                  src: getSelectIdIcon(_this21.objects, id, _this21.imagePrefix),
                  className: _this21.props.classes.selectIcon
                })
              };
            });
            return this.getFilterSelect("custom", customs);
          } else {
            return null;
          }
        }
      }, {
        key: "onExpandAll",
        value: function onExpandAll(root, expanded) {
          var _this22 = this;
          root = root || this.root;
          expanded = expanded || [];
          root.children && root.children.forEach(function(item) {
            if (item.data.sumVisibility) {
              expanded.push(item.data.id);
              _this22.onExpandAll(item, expanded);
            }
          });
          if (root === this.root) {
            expanded.sort();
            window.localStorage.setItem((this.props.dialogName || "App") + ".objectExpanded", JSON.stringify(expanded));
            this.setState({
              expanded
            });
          }
        }
      }, {
        key: "onCollapseAll",
        value: function onCollapseAll() {
          window.localStorage.setItem((this.props.dialogName || "App") + ".objectExpanded", JSON.stringify([]));
          this.setState({
            expanded: [],
            depth: 0
          });
        }
      }, {
        key: "expandDepth",
        value: function expandDepth(root, depth, expanded) {
          var _this23 = this;
          root = root || this.root;
          if (depth > 0) {
            if (root.children) {
              root.children.forEach(function(item) {
                if (item.data.sumVisibility) {
                  if (!binarySearch(expanded, item.data.id)) {
                    expanded.push(item.data.id);
                    expanded.sort();
                  }
                  if (depth - 1 > 0) {
                    _this23.expandDepth(item, depth - 1, expanded);
                  }
                }
              });
            }
          }
        }
      }, {
        key: "collapseDepth",
        value: function collapseDepth(depth, expanded) {
          return expanded.filter(function(id) {
            return id.split(".").length <= depth;
          });
        }
      }, {
        key: "onExpandVisible",
        value: function onExpandVisible() {
          if (this.state.depth < 9) {
            var depth = this.state.depth + 1;
            var expanded = _toConsumableArray(this.state.expanded);
            this.expandDepth(this.root, depth, expanded);
            window.localStorage.setItem((this.props.dialogName || "App") + ".objectExpanded", JSON.stringify(expanded));
            this.setState({
              depth,
              expanded
            });
          }
        }
      }, {
        key: "onStatesViewVisible",
        value: function onStatesViewVisible() {
          var statesView = !this.state.statesView;
          window.localStorage.setItem((this.props.dialogName || "App") + ".objectStatesView", JSON.stringify(statesView));
          this.setState({
            statesView
          });
        }
      }, {
        key: "onCollapseVisible",
        value: function onCollapseVisible() {
          if (this.state.depth > 0) {
            var depth = this.state.depth - 1;
            var expanded = this.collapseDepth(depth, this.state.expanded);
            window.localStorage.setItem((this.props.dialogName || "App") + ".objectExpanded", JSON.stringify(expanded));
            this.setState({
              depth,
              expanded
            });
          }
        }
      }, {
        key: "_getSelectedIdsForExport",
        value: function _getSelectedIdsForExport() {
          if (this.state.selected.length || this.state.selectedNonObject) {
            var result = [];
            var keys = Object.keys(this.objects);
            keys.sort();
            var id = this.state.selected[0] || this.state.selectedNonObject;
            var idDot = id + ".";
            var idLen = idDot.length;
            for (var k = 0; k < keys.length; k++) {
              var key = keys[k];
              if (id === key || key.startsWith(idDot)) {
                result.push(key);
              }
              if (key.substring(0, idLen) > idDot) {
                break;
              }
            }
            return result;
          } else {
            return [];
          }
        }
      }, {
        key: "_exportObjects",
        value: function _exportObjects(isAll) {
          var _this24 = this;
          if (isAll) {
            generateFile("allObjects.json", this.objects);
          } else if (this.state.selected.length || this.state.selectedNonObject) {
            var result = {};
            var id = this.state.selected[0] || this.state.selectedNonObject;
            this._getSelectedIdsForExport().forEach(function(key) {
              result[key] = JSON.parse(JSON.stringify(_this24.objects[key]));
              if (result[key].common) {
                var enums = _this24.getEnumsForId(key);
                if (enums) {
                  result[key].common.enums = enums;
                }
              }
            });
            generateFile(id + ".json", result);
          } else {
            window.alert(this.props.t("ra_Save of objects-tree is not possible"));
          }
        }
      }, {
        key: "renderExportDialog",
        value: function renderExportDialog() {
          var _this25 = this;
          if (this.state.showExportDialog === false) {
            return null;
          } else {
            return /* @__PURE__ */ _react["default"].createElement(_Dialog["default"], {
              open: true
            }, /* @__PURE__ */ _react["default"].createElement(_DialogTitle["default"], null, this.props.t("Select type of export")), /* @__PURE__ */ _react["default"].createElement(_DialogContent["default"], null, /* @__PURE__ */ _react["default"].createElement(_DialogContentText["default"], null, this.props.t("You can export all objects or just the selected branch."), /* @__PURE__ */ _react["default"].createElement("br", null), this.props.t("Selected %s object(s)", this.state.showExportDialog))), /* @__PURE__ */ _react["default"].createElement(_DialogActions["default"], null, /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
              variant: "outlined",
              onClick: function onClick() {
                return _this25.setState({
                  showExportDialog: false
                }, function() {
                  return _this25._exportObjects(true);
                });
              }
            }, this.props.t("All objects")), /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
              variant: "contained",
              autoFocus: true,
              color: "primary",
              onClick: function onClick() {
                return _this25.setState({
                  showExportDialog: false
                }, function() {
                  return _this25._exportObjects(false);
                });
              }
            }, this.props.t("Only selected")), /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
              variant: "contained",
              onClick: function onClick() {
                return _this25.setState({
                  showExportDialog: false
                });
              },
              startIcon: /* @__PURE__ */ _react["default"].createElement(_Close["default"], null)
            }, this.props.t("Cancel"))));
          }
        }
      }, {
        key: "getToolbar",
        value: function getToolbar() {
          var _this26 = this;
          var allowObjectCreation = false;
          if (this.state.selected.length || this.state.selectedNonObject) {
            var id = this.state.selected[0] || this.state.selectedNonObject;
            if (id.split(".").length < 2 || this.objects[id] && this.objects[id].type === "state") {
              allowObjectCreation = false;
            } else {
              if (this.props.expertMode) {
                allowObjectCreation = true;
              } else if (id.startsWith("alias.0") || id.startsWith("0_userdata")) {
                allowObjectCreation = true;
              }
            }
          }
          return /* @__PURE__ */ _react["default"].createElement("div", {
            style: {
              display: "flex",
              width: "100%",
              alignItems: "center"
            }
          }, /* @__PURE__ */ _react["default"].createElement("div", {
            style: {
              display: "flex",
              width: "100%",
              alignItems: "center"
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Refresh tree")
          }, /* @__PURE__ */ _react["default"].createElement("div", null, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            onClick: function onClick() {
              return _this26.refreshComponent();
            },
            disabled: this.state.updating
          }, /* @__PURE__ */ _react["default"].createElement(_Refresh["default"], null)))), this.props.showExpertButton && /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_expertMode")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "expertMode",
            color: this.state.filter.expertMode ? "secondary" : "default",
            onClick: function onClick() {
              return _this26.onFilter("expertMode", !_this26.state.filter.expertMode);
            }
          }, /* @__PURE__ */ _react["default"].createElement(_IconExpert["default"], null))), !this.props.disableColumnSelector && /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Configure visible columns")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "columnSelector",
            color: this.state.columnsAuto ? "primary" : "default",
            onClick: function onClick() {
              return _this26.setState({
                columnsSelectorShow: true
              });
            }
          }, /* @__PURE__ */ _react["default"].createElement(_ViewColumn["default"], null))), this.state.expandAllVisible && /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Expand all nodes")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "expandAll",
            onClick: function onClick() {
              return _this26.onExpandAll();
            }
          }, /* @__PURE__ */ _react["default"].createElement(_IconOpen["default"], null))), /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Collapse all nodes")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "collapseAll",
            onClick: function onClick() {
              return _this26.onCollapseAll();
            }
          }, /* @__PURE__ */ _react["default"].createElement(_IconClosed["default"], null))), /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Expand one step node")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "expandVisible",
            color: "primary",
            onClick: function onClick() {
              return _this26.onExpandVisible();
            }
          }, /* @__PURE__ */ _react["default"].createElement(StyledBadge, {
            badgeContent: this.state.depth,
            color: "secondary"
          }, /* @__PURE__ */ _react["default"].createElement(_IconOpen["default"], null)))), /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Collapse one step node")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "collapseVisible",
            color: "primary",
            onClick: function onClick() {
              return _this26.onCollapseVisible();
            }
          }, /* @__PURE__ */ _react["default"].createElement(StyledBadge, {
            badgeContent: this.state.depth,
            color: "secondary"
          }, /* @__PURE__ */ _react["default"].createElement(_IconClosed["default"], null)))), this.props.objectStatesView && /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Toggle the states view")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            onClick: function onClick() {
              return _this26.onStatesViewVisible();
            }
          }, /* @__PURE__ */ _react["default"].createElement(_LooksOne["default"], {
            color: this.state.statesView ? "primary" : "inherit"
          }))), this.props.objectAddBoolean ? /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.toolTipObjectCreating()
          }, /* @__PURE__ */ _react["default"].createElement("div", null, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            disabled: !allowObjectCreation,
            onClick: function onClick() {
              return _this26.setState({
                modalNewObj: true
              });
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Add["default"], null)))) : null, this.props.objectImportExport && /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Add objects tree from JSON file")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            onClick: function onClick() {
              var input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("id", "files");
              input.setAttribute("opacity", 0);
              input.addEventListener("change", function(e) {
                return _this26.handleJsonUpload(e);
              }, false);
              input.click();
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Publish["default"], null))), this.props.objectImportExport && (!!this.state.selected.length || this.state.selectedNonObject) && /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Save objects tree as JSON file")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            onClick: function onClick() {
              return _this26.setState({
                showExportDialog: _this26._getSelectedIdsForExport().length
              });
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Publish["default"], {
            style: {
              transform: "rotate(180deg)"
            }
          })))), !!this.props.objectBrowserEditObject && /* @__PURE__ */ _react["default"].createElement("div", {
            style: {
              display: "flex",
              whiteSpace: "nowrap"
            }
          }, "".concat(this.props.t("ra_Objects"), ": ").concat(Object.keys(this.info.objects).length, ", ").concat(this.props.t("ra_States"), ": ").concat(Object.keys(this.info.objects).filter(function(el) {
            return _this26.info.objects[el].type === "state";
          }).length)), this.props.objectEditBoolean && /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            title: this.props.t("ra_Edit custom config")
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            onClick: function onClick() {
              var ids = getVisibleItems(_this26.root, "state", _this26.objects);
              if (ids.length) {
                _this26.pauseSubscribe(true);
                if (ids.length === 1) {
                  window.localStorage.setItem((_this26.props.dialogName || "App") + ".objectSelected", _this26.state.selected[0]);
                  _this26.props.router && _this26.props.router.doNavigate(null, "custom", _this26.state.selected[0]);
                }
                _this26.setState({
                  customDialog: ids
                });
              } else {
                _this26.setState({
                  toast: _this26.props.t("ra_please select object")
                });
              }
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Build["default"], null))));
        }
      }, {
        key: "toggleExpanded",
        value: function toggleExpanded(id) {
          var expanded = JSON.parse(JSON.stringify(this.state.expanded));
          var pos = expanded.indexOf(id);
          if (pos === -1) {
            expanded.push(id);
            expanded.sort();
          } else {
            expanded.splice(pos, 1);
          }
          window.localStorage.setItem((this.props.dialogName || "App") + ".objectExpanded", JSON.stringify(expanded));
          this.setState({
            expanded
          });
        }
      }, {
        key: "onCopy",
        value: function onCopy(e, text) {
          e.stopPropagation();
          e.preventDefault();
          (0, _copyToClipboard["default"])(text);
          if (text.length < 50) {
            this.setState({
              toast: this.props.t("ra_Copied %s", text)
            });
          } else {
            this.setState({
              toast: this.props.t("ra_Copied")
            });
          }
        }
      }, {
        key: "renderColumnButtons",
        value: function renderColumnButtons(id, item, classes) {
          var _this27 = this, _item$children2, _item$data$obj$common;
          if (!item.data.obj) {
            return this.props.onObjectDelete || this.props.objectEditOfAccessControl ? /* @__PURE__ */ _react["default"].createElement("div", {
              className: classes.buttonDiv
            }, this.props.expertMode && this.props.objectEditOfAccessControl ? /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
              className: _Utils["default"].clsx(classes.cellButtonsButton, classes.cellButtonsEmptyButton, classes.cellButtonMinWidth),
              onClick: function onClick() {
                return _this27.setState({
                  modalEditOfAccess: true,
                  modalEmptyId: id,
                  modalEditOfAccessObjData: item.data
                });
              }
            }, "---") : null, this.props.onObjectDelete && item.children && item.children.length ? /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
              className: _Utils["default"].clsx(classes.cellButtonsButton, classes.cellButtonsButtonAlone),
              size: "small",
              "aria-label": "delete",
              title: this.texts.deleteObject,
              onClick: function onClick() {
                return _this27.props.onObjectDelete(id, !!(item.children && item.children.length), false);
              }
            }, /* @__PURE__ */ _react["default"].createElement(_Delete["default"], {
              className: classes.cellButtonsButtonIcon
            })) : null) : null;
          }
          item.data.aclTooltip = item.data.aclTooltip || this.renderTooltipAccessControl(item.data.obj.acl);
          var acl = item.data.obj.acl ? item.data.obj.type === "state" ? item.data.obj.acl.state : item.data.obj.acl.object : 0;
          var aclSystemConfig = item.data.obj.acl && (item.data.obj.type === "state" ? this.systemConfig.common.defaultNewAcl.state : this.systemConfig.common.defaultNewAcl.object);
          return [this.props.expertMode && this.props.objectEditOfAccessControl ? /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            key: "acl",
            title: item.data.aclTooltip
          }, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            className: classes.cellButtonMinWidth,
            onClick: function onClick() {
              return _this27.setState({
                modalEditOfAccess: true,
                modalEditOfAccessObjData: item.data
              });
            }
          }, /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.aclText
          }, isNaN(Number(acl).toString(16)) ? Number(aclSystemConfig).toString(16) : Number(acl).toString(16)))) : /* @__PURE__ */ _react["default"].createElement("div", {
            key: "aclEmpty",
            className: classes.cellButtonMinWidth
          }), /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "edit",
            className: classes.cellButtonsButton,
            size: "small",
            "aria-label": "edit",
            title: this.texts.editObject,
            onClick: function onClick() {
              window.localStorage.setItem("".concat(_this27.props.dialogName || "App", ".objectSelected"), id);
              _this27.setState({
                editObjectDialog: id
              });
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Edit["default"], {
            className: classes.cellButtonsButtonIcon
          })), this.props.onObjectDelete && ((_item$children2 = item.children) !== null && _item$children2 !== void 0 && _item$children2.length || !((_item$data$obj$common = item.data.obj.common) !== null && _item$data$obj$common !== void 0 && _item$data$obj$common.dontDelete)) ? /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            key: "delete",
            className: classes.cellButtonsButton,
            size: "small",
            "aria-label": "delete",
            onClick: function onClick() {
              var _item$children3, _item$data$obj$common2;
              return _this27.props.onObjectDelete(id, !!((_item$children3 = item.children) !== null && _item$children3 !== void 0 && _item$children3.length), !((_item$data$obj$common2 = item.data.obj.common) !== null && _item$data$obj$common2 !== void 0 && _item$data$obj$common2.dontDelete));
            },
            title: this.texts.deleteObject
          }, /* @__PURE__ */ _react["default"].createElement(_Delete["default"], {
            className: classes.cellButtonsButtonIcon
          })) : null, this.props.objectCustomDialog && this.info.hasSomeCustoms && item.data.obj.type === "state" ? /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
            className: _Utils["default"].clsx(classes.cellButtonsButton, item.data.hasCustoms && classes.cellButtonsButtonWithCustoms),
            key: "custom",
            size: "small",
            "aria-label": "config",
            title: this.texts.customConfig,
            onClick: function onClick() {
              window.localStorage.setItem((_this27.props.dialogName || "App") + ".objectSelected", id);
              _this27.pauseSubscribe(true);
              _this27.props.router && _this27.props.router.doNavigate(null, "customs", id);
              _this27.setState({
                customDialog: [id]
              });
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Settings["default"], {
            className: classes.cellButtonsButtonIcon
          })) : null];
        }
      }, {
        key: "readHistory",
        value: function readHistory(id) {
          var _this28 = this;
          if (window.sparkline && this.defaultHistory && this.objects[id] && this.objects[id].common && this.objects[id].common.custom && this.objects[id].common.custom[this.defaultHistory]) {
            var now2 = new Date();
            now2.setHours(now2.getHours() - 24);
            now2.setMinutes(0);
            now2.setSeconds(0);
            now2.setMilliseconds(0);
            var nowMs = now2.getTime();
            this.props.socket.getHistory(id, {
              instance: this.defaultHistory,
              start: nowMs,
              end: Date.now(),
              step: 36e5,
              from: false,
              ack: false,
              q: false,
              addID: false,
              aggregate: "minmax"
            }).then(function(values) {
              var sparks = window.document.getElementsByClassName("sparkline");
              for (var s = 0; s < sparks.length; s++) {
                if (sparks[s].dataset.id === id) {
                  var v = prepareSparkData(values, nowMs);
                  window.sparkline.sparkline(sparks[s], v);
                  break;
                }
              }
            })["catch"](function(e) {
              return _this28.showError(e);
            });
          }
        }
      }, {
        key: "renderColumnValue",
        value: function renderColumnValue(id, item, classes) {
          var _this29 = this;
          if (!item.data.obj || !this.states) {
            return null;
          }
          if (!this.states[id]) {
            if (item.data.obj.type === "state") {
              this.recordStates.push(id);
              this.states[id] = {
                val: null
              };
              this.subscribe(id);
            }
            return null;
          } else {
            this.recordStates.push(id);
          }
          var state = this.states[id];
          var info = item.data.state;
          if (!info) {
            info = item.data.state = item.data.state || formatValue(id, state, item.data.obj, this.texts, this.props.dateFormat, this.props.isFloatComma);
            info.valFull = info.valFull.map(function(item2) {
              if (item2.t === _this29.texts.quality && state.q) {
                return [
                  /* @__PURE__ */ _react["default"].createElement("div", {
                    className: classes.cellValueTooltipBoth,
                    key: item2.t
                  }, item2.t, ": ", item2.v),
                  !item2.nbr ? /* @__PURE__ */ _react["default"].createElement("br", {
                    key: item2.t + "_br"
                  }) : null
                ];
              } else {
                return [/* @__PURE__ */ _react["default"].createElement("div", {
                  className: classes.cellValueTooltipTitle,
                  key: item2.t
                }, item2.t, ":"), /* @__PURE__ */ _react["default"].createElement("div", {
                  className: classes.cellValueTooltipValue,
                  key: item2.t + "_v"
                }, item2.v), !item2.nbr ? /* @__PURE__ */ _react["default"].createElement("br", {
                  key: item2.t + "_br"
                }) : null];
              }
            });
            if (this.defaultHistory && this.objects[id] && this.objects[id].common && this.objects[id].common.custom && this.objects[id].common.custom[this.defaultHistory]) {
              info.valFull.push(/* @__PURE__ */ _react["default"].createElement("svg", {
                key: "sparkline",
                className: "sparkline",
                "data-id": id,
                style: {
                  fill: "#3d85de"
                },
                width: "200",
                height: "30",
                strokeWidth: "3"
              }));
            }
            var copyText = info.valText.v || "";
            info.val = copyText;
            info.valText = [
              /* @__PURE__ */ _react["default"].createElement("span", {
                className: classes.newValue || classes.newValue,
                key: "".concat(info.valText.v.toString(), "valText")
              }, info.valText.v.toString()),
              info.valText.u ? /* @__PURE__ */ _react["default"].createElement("span", {
                className: _Utils["default"].clsx(classes.cellValueTextUnit, classes.newValue),
                key: "".concat(info.valText.v.toString(), "unit")
              }, info.valText.u) : null,
              info.valText.s !== void 0 ? /* @__PURE__ */ _react["default"].createElement("span", {
                className: _Utils["default"].clsx(classes.cellValueTextState, classes.newValue),
                key: "".concat(info.valText.v.toString(), "states")
              }, "(", info.valText.s, ")") : null,
              /* @__PURE__ */ _react["default"].createElement(_IconCopy["default"], {
                className: _Utils["default"].clsx(classes.cellButtonsValueButton, "copyButton", classes.cellButtonsValueButtonCopy),
                onClick: function onClick(e) {
                  return _this29.onCopy(e, copyText);
                },
                key: "cc"
              })
            ];
          }
          var val = info.valText;
          if (!this.props.expertMode && item.data.button) {
            val = /* @__PURE__ */ _react["default"].createElement(_RoomService["default"], {
              className: _Utils["default"].clsx(this.props.classes.cellValueButton, !this.states[id] || !this.states[id].val ? this.props.classes.cellValueButtonFalse : "")
            });
          }
          return /* @__PURE__ */ _react["default"].createElement(_Tooltip["default"], {
            key: "value",
            title: info.valFull,
            classes: {
              tooltip: this.props.classes.cellValueTooltip,
              popper: this.props.classes.cellValueTooltipBox
            },
            onOpen: function onOpen() {
              return _this29.readHistory(id);
            }
          }, /* @__PURE__ */ _react["default"].createElement("div", {
            style: info.style,
            className: classes.cellValueText
          }, val));
        }
      }, {
        key: "_syncEnum",
        value: function _syncEnum(id, enumIds, newArray, cb) {
          var _this30 = this;
          if (!enumIds || !enumIds.length) {
            return cb && cb();
          } else {
            var _this$info$objects$en;
            var enumId = enumIds.pop();
            var promises = [];
            if ((_this$info$objects$en = this.info.objects[enumId]) !== null && _this$info$objects$en !== void 0 && _this$info$objects$en.common) {
              var _this$info$objects$en2, _this$info$objects$en3;
              if ((_this$info$objects$en2 = this.info.objects[enumId].common.members) !== null && _this$info$objects$en2 !== void 0 && _this$info$objects$en2.length) {
                var pos = this.info.objects[enumId].common.members.indexOf(id);
                if (pos !== -1 && !newArray.includes(enumId)) {
                  var obj = JSON.parse(JSON.stringify(this.info.objects[enumId]));
                  obj.common.members.splice(pos, 1);
                  promises.push(this.props.socket.setObject(enumId, obj).then(function() {
                    return _this30.info.objects[enumId] = obj;
                  })["catch"](function(e) {
                    return _this30.showError(e);
                  }));
                }
              }
              if (newArray.includes(enumId) && !((_this$info$objects$en3 = this.info.objects[enumId].common.members) !== null && _this$info$objects$en3 !== void 0 && _this$info$objects$en3.includes(id))) {
                var _obj = JSON.parse(JSON.stringify(this.info.objects[enumId]));
                _obj.common.members = _obj.common.members || [];
                _obj.common.members.push(id);
                _obj.common.members.sort();
                promises.push(this.props.socket.setObject(enumId, _obj).then(function() {
                  return _this30.info.objects[enumId] = _obj;
                })["catch"](function(e) {
                  return _this30.showError(e);
                }));
              }
            }
            Promise.all(promises).then(function() {
              return setTimeout(function() {
                return _this30._syncEnum(id, enumIds, newArray, cb);
              }, 0);
            });
          }
        }
      }, {
        key: "syncEnum",
        value: function syncEnum(id, enumName, newArray) {
          var _this31 = this;
          var toCheck = _toConsumableArray(this.info[enumName === "func" ? "funcEnums" : "roomEnums"]);
          return new Promise(function(resolve) {
            return _this31._syncEnum(id, toCheck, newArray, function(error) {
              error && _this31.showError(error);
              resolve();
            });
          });
        }
      }, {
        key: "renderEnumDialog",
        value: function renderEnumDialog() {
          var _this32 = this;
          if (this.state.enumDialog) {
            var type = this.state.enumDialog.type;
            var item = this.state.enumDialog.item;
            var itemEnums = this.state.enumDialogEnums;
            var enumsOriginal = this.state.enumDialog.enumsOriginal;
            var enums = (type === "room" ? this.info.roomEnums : this.info.funcEnums).map(function(id) {
              return {
                name: getName(_this32.objects[id] && _this32.objects[id].common && _this32.objects[id].common.name || id.split(".").pop(), _this32.props.lang),
                value: id,
                icon: getSelectIdIcon(_this32.objects, id, _this32.imagePrefix)
              };
            });
            enums.forEach(function(item2) {
              if (item2.icon && typeof item2.icon == "string") {
                item2.icon = /* @__PURE__ */ _react["default"].createElement("div", {
                  className: _this32.props.classes.enumIconDiv
                }, /* @__PURE__ */ _react["default"].createElement("img", {
                  src: item2.icon,
                  className: _this32.props.classes.enumIcon,
                  alt: item2.name
                }));
              }
            });
            return /* @__PURE__ */ _react["default"].createElement(_Dialog["default"], {
              className: this.props.classes.enumDialog,
              onClose: function onClose() {
                return _this32.setState({
                  enumDialog: null
                });
              },
              "aria-labelledby": "enum-dialog-title",
              open: true
            }, /* @__PURE__ */ _react["default"].createElement(_DialogTitle["default"], {
              id: "enum-dialog-title"
            }, type === "func" ? this.props.t("ra_Define functions") : this.props.t("ra_Define rooms"), /* @__PURE__ */ _react["default"].createElement(_Fab["default"], {
              className: this.props.classes.enumButton,
              color: "primary",
              disabled: JSON.stringify(enumsOriginal) === JSON.stringify(itemEnums),
              size: "small",
              onClick: function onClick() {
                return _this32.syncEnum(item.data.id, type, itemEnums).then(function() {
                  return _this32.setState({
                    enumDialog: null,
                    enumDialogEnums: null
                  });
                });
              }
            }, /* @__PURE__ */ _react["default"].createElement(_Check["default"], null))), /* @__PURE__ */ _react["default"].createElement(_List["default"], {
              classes: {
                root: this.props.classes.enumList
              }
            }, enums.map(function(item2) {
              var id;
              var name;
              var icon;
              if (_typeof(item2) === "object") {
                id = item2.value;
                name = item2.name;
                icon = item2.icon;
              } else {
                id = item2;
                name = item2;
              }
              var labelId = "checkbox-list-label-".concat(id);
              return /* @__PURE__ */ _react["default"].createElement(_ListItem["default"], {
                className: _this32.props.classes.headerCellSelectItem,
                key: id,
                onClick: function onClick() {
                  var pos = itemEnums.indexOf(id);
                  var enumDialogEnums = JSON.parse(JSON.stringify(_this32.state.enumDialogEnums));
                  if (pos === -1) {
                    enumDialogEnums.push(id);
                    enumDialogEnums.sort();
                  } else {
                    enumDialogEnums.splice(pos, 1);
                  }
                  _this32.setState({
                    enumDialogEnums
                  });
                }
              }, /* @__PURE__ */ _react["default"].createElement(_ListItemIcon["default"], {
                classes: {
                  root: _this32.props.classes.enumCheckbox
                }
              }, /* @__PURE__ */ _react["default"].createElement(_Checkbox["default"], {
                edge: "start",
                checked: itemEnums.includes(id),
                tabIndex: -1,
                disableRipple: true,
                inputProps: {
                  "aria-labelledby": labelId
                }
              })), /* @__PURE__ */ _react["default"].createElement(_ListItemText["default"], {
                id: labelId
              }, name), icon ? /* @__PURE__ */ _react["default"].createElement(_ListItemSecondaryAction["default"], null, icon) : null);
            })));
          } else {
            return null;
          }
        }
      }, {
        key: "renderEditRoleDialog",
        value: function renderEditRoleDialog() {
          var _this33 = this;
          if (this.state.roleDialog && this.props.objectBrowserEditRole) {
            var ObjectBrowserEditRole = this.props.objectBrowserEditRole;
            return /* @__PURE__ */ _react["default"].createElement(ObjectBrowserEditRole, {
              key: "objectBrowserEditRole",
              id: this.state.roleDialog,
              socket: this.props.socket,
              t: this.props.t,
              roles: this.info.roles,
              onClose: function onClose(obj) {
                if (obj) {
                  _this33.info.objects[_this33.state.roleDialog] = obj;
                }
                _this33.setState({
                  roleDialog: false
                });
              }
            });
          } else {
            return null;
          }
        }
      }, {
        key: "onColumnsEditCustomDialogClose",
        value: function onColumnsEditCustomDialogClose(isSave) {
          var _this34 = this;
          if (isSave) {
            var value = this.customColumnDialog.value;
            if (this.customColumnDialog.type === "boolean") {
              value = value === "true" || value === true;
            } else if (this.customColumnDialog.type === "number") {
              value = parseFloat(value);
            }
            this.customColumnDialog = null;
            this.props.socket.getObject(this.state.columnsEditCustomDialog.obj._id).then(function(obj) {
              if (_this34.setCustomValue(obj, _this34.state.columnsEditCustomDialog.it, value)) {
                return _this34.props.socket.setObject(obj._id, obj);
              } else {
                throw new Error(_this34.props.t("ra_Cannot update attribute, because not found in the object"));
              }
            }).then(function() {
              return _this34.setState({
                columnsEditCustomDialog: null
              });
            })["catch"](function(e) {
              return _this34.showError(e);
            });
          } else {
            this.customColumnDialog = null;
            this.setState({
              columnsEditCustomDialog: null
            });
          }
        }
      }, {
        key: "renderColumnsEditCustomDialog",
        value: function renderColumnsEditCustomDialog() {
          var _this35 = this;
          if (this.state.columnsEditCustomDialog) {
            if (!this.customColumnDialog) {
              var value = this.getCustomValue(this.state.columnsEditCustomDialog.obj, this.state.columnsEditCustomDialog.it);
              this.customColumnDialog = {
                type: this.state.columnsEditCustomDialog.it.type || _typeof(value),
                initValue: (value === null || value === void 0 ? "" : value).toString(),
                value: (value === null || value === void 0 ? "" : value).toString()
              };
            }
            return /* @__PURE__ */ _react["default"].createElement(_Dialog["default"], {
              onClose: function onClose() {
                return _this35.setState({
                  columnsEditCustomDialog: null
                });
              },
              maxWidth: "md",
              "aria-labelledby": "custom-dialog-title",
              open: true
            }, /* @__PURE__ */ _react["default"].createElement(_DialogTitle["default"], {
              id: "custom-dialog-title"
            }, this.props.t("ra_Edit object field") + ": " + this.state.columnsEditCustomDialog.obj._id), /* @__PURE__ */ _react["default"].createElement(_DialogContent["default"], null, /* @__PURE__ */ _react["default"].createElement(_DialogContentText["default"], {
              id: "alert-dialog-description"
            }, this.customColumnDialog.type === "boolean" ? /* @__PURE__ */ _react["default"].createElement(_FormControlLabel["default"], {
              control: /* @__PURE__ */ _react["default"].createElement(_Checkbox["default"], {
                onKeyUp: function onKeyUp(e) {
                  return e.keyCode === 13 && _this35.onColumnsEditCustomDialogClose(true);
                },
                defaultChecked: this.customColumnDialog.value === "true",
                onChange: function onChange(e) {
                  _this35.customColumnDialog.value = e.target.checked.toString();
                  var changed = _this35.customColumnDialog.value !== _this35.customColumnDialog.initValue;
                  if (changed === !_this35.state.customColumnDialogValueChanged) {
                    _this35.setState({
                      customColumnDialogValueChanged: changed
                    });
                  }
                }
              }),
              label: this.state.columnsEditCustomDialog.it.name + " (" + this.state.columnsEditCustomDialog.it.pathText + ")"
            }) : /* @__PURE__ */ _react["default"].createElement(_TextField["default"], {
              defaultValue: this.customColumnDialog.value,
              fullWidth: true,
              onKeyUp: function onKeyUp(e) {
                return e.keyCode === 13 && _this35.onColumnsEditCustomDialogClose(true);
              },
              label: this.state.columnsEditCustomDialog.it.name + " (" + this.state.columnsEditCustomDialog.it.pathText + ")",
              onChange: function onChange(e) {
                _this35.customColumnDialog.value = e.target.value;
                var changed = _this35.customColumnDialog.value !== _this35.customColumnDialog.initValue;
                if (changed === !_this35.state.customColumnDialogValueChanged) {
                  _this35.setState({
                    customColumnDialogValueChanged: changed
                  });
                }
              },
              autoFocus: true
            }))), /* @__PURE__ */ _react["default"].createElement(_DialogActions["default"], null, /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
              variant: "contained",
              onClick: function onClick() {
                return _this35.onColumnsEditCustomDialogClose(true);
              },
              disabled: !this.state.customColumnDialogValueChanged,
              color: "primary",
              startIcon: /* @__PURE__ */ _react["default"].createElement(_Check["default"], null)
            }, this.props.t("ra_Update")), /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
              variant: "contained",
              onClick: function onClick() {
                return _this35.onColumnsEditCustomDialogClose();
              },
              startIcon: /* @__PURE__ */ _react["default"].createElement(_Close["default"], null)
            }, this.props.t("Cancel"))));
          } else {
            return null;
          }
        }
      }, {
        key: "getCustomValue",
        value: function getCustomValue(obj, it) {
          if (obj && obj._id && obj._id.startsWith(it.adapter + ".") && it.path.length > 1) {
            var p = it.path;
            var value;
            if (obj[p[0]] && _typeof(obj[p[0]]) === "object") {
              if (p.length === 2) {
                value = obj[p[0]][p[1]];
              } else if (p.length === 3) {
                value = obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object" ? obj[p[0]][p[1]][p[2]] : null;
              } else if (p.length === 4) {
                value = obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object" && obj[p[0]][p[1]][p[2]] ? obj[p[0]][p[1]][p[2]][p[3]] : null;
              } else if (p.length === 5) {
                value = obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object" && obj[p[0]][p[1]][p[2]] && obj[p[0]][p[1]][p[2]][p[3]] ? obj[p[0]][p[1]][p[2]][p[3]][p[4]] : null;
              } else if (p.length === 6) {
                value = obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object" && obj[p[0]][p[1]][p[2]] && obj[p[0]][p[1]][p[2]][p[3]] && obj[p[0]][p[1]][p[2]][p[3]][p[4]] ? obj[p[0]][p[1]][p[2]][p[3]][p[4]][p[5]] : null;
              }
              if (value === void 0 || value === null) {
                return null;
              } else {
                return value;
              }
            }
          } else {
            return null;
          }
        }
      }, {
        key: "setCustomValue",
        value: function setCustomValue(obj, it, value) {
          if (obj && obj._id && obj._id.startsWith(it.adapter + ".") && it.path.length > 1) {
            var p = it.path;
            if (obj[p[0]] && _typeof(obj[p[0]]) === "object") {
              if (p.length === 2) {
                obj[p[0]][p[1]] = value;
                return true;
              } else if (p.length === 3) {
                if (obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object") {
                  obj[p[0]][p[1]][p[2]] = value;
                  return true;
                }
              } else if (p.length === 4) {
                if (obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object" && obj[p[0]][p[1]][p[2]] && _typeof(obj[p[0]][p[1]][p[2]]) === "object") {
                  obj[p[0]][p[1]][p[2]][p[3]] = value;
                  return true;
                }
              } else if (p.length === 5) {
                if (obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object" && obj[p[0]][p[1]][p[2]] && _typeof(obj[p[0]][p[1]][p[2]]) === "object" && obj[p[0]][p[1]][p[2]][p[3]] && _typeof(obj[p[0]][p[1]][p[2]][p[3]]) === "object") {
                  obj[p[0]][p[1]][p[2]][p[3]][p[4]] = value;
                  return true;
                }
              } else if (p.length === 6) {
                if (obj[p[0]][p[1]] && _typeof(obj[p[0]][p[1]]) === "object" && obj[p[0]][p[1]][p[2]] && _typeof(obj[p[0]][p[1]][p[2]]) === "object" && obj[p[0]][p[1]][p[2]][p[3]] && _typeof(obj[p[0]][p[1]][p[2]][p[3]]) === "object" && obj[p[0]][p[1]][p[2]][p[3]][p[4]] && _typeof(obj[p[0]][p[1]][p[2]][p[3]][p[4]]) === "object") {
                  obj[p[0]][p[1]][p[2]][p[3]][p[4]][p[5]] = value;
                  return true;
                }
              }
            }
          }
          return false;
        }
      }, {
        key: "renderCustomValue",
        value: function renderCustomValue(obj, it, item) {
          var _this36 = this;
          var text = this.getCustomValue(obj, it);
          if (text !== null && text !== void 0) {
            if (it.edit && !this.props.notEditable && (!it.objTypes || it.objTypes.includes(obj.type))) {
              return /* @__PURE__ */ _react["default"].createElement("div", {
                className: _Utils["default"].clsx(this.props.classes.columnCustom, this.props.classes.columnCustomEditable, this.props.classes["columnCustom_" + it.align]),
                onClick: function onClick() {
                  return _this36.setState({
                    columnsEditCustomDialog: {
                      item,
                      it,
                      obj
                    },
                    customColumnDialogValueChanged: false
                  });
                }
              }, text);
            } else {
              return /* @__PURE__ */ _react["default"].createElement("div", {
                className: _Utils["default"].clsx(this.props.classes.columnCustom, this.props.classes["columnCustom_" + it.align])
              }, text);
            }
          } else {
            return null;
          }
        }
      }, {
        key: "renderLeaf",
        value: function renderLeaf(item, isExpanded, classes, counter) {
          var _item$data$obj, _this37 = this, _item$data$obj2, _item$data$obj2$commo, _item$data$obj3, _item$data$obj4, _item$data$obj5, _item$data$obj6, _item$data$obj6$commo, _item$data$obj6$commo2, _item$data$obj7, _item$data$obj7$commo, _item$data$obj7$commo2, _item$data, _item$data$obj8, _item$data$obj8$commo, _this$states$id2, _item$data2, _this$states$id3, _this$states$id4, _this$states$id5;
          var id = item.data.id;
          counter.count++;
          isExpanded = isExpanded === void 0 ? this.state.expanded.includes(id) : isExpanded;
          var iconFolder;
          var itemType = (_item$data$obj = item.data.obj) === null || _item$data$obj === void 0 ? void 0 : _item$data$obj.type;
          if (item.children || itemType === "folder" || itemType === "device" || itemType === "channel" || itemType === "meta") {
            iconFolder = isExpanded ? /* @__PURE__ */ _react["default"].createElement(_IconOpen["default"], {
              className: classes.cellIdIconFolder,
              onClick: function onClick() {
                return _this37.toggleExpanded(id);
              }
            }) : /* @__PURE__ */ _react["default"].createElement(_IconClosed["default"], {
              className: classes.cellIdIconFolder,
              onClick: function onClick() {
                return _this37.toggleExpanded(id);
              }
            });
          } else {
            iconFolder = /* @__PURE__ */ _react["default"].createElement(_IconDocument["default"], {
              className: classes.cellIdIconDocument
            });
          }
          var iconItem = null;
          if (item.data.icon) {
            if (typeof item.data.icon === "string") {
              if (item.data.icon.length < 3) {
                iconItem = /* @__PURE__ */ _react["default"].createElement("span", {
                  className: _Utils["default"].clsx(classes.cellIdIconOwn, "iconOwn")
                }, item.data.icon);
              } else {
                iconItem = /* @__PURE__ */ _react["default"].createElement("img", {
                  className: _Utils["default"].clsx(classes.cellIdIconOwn, "iconOwn"),
                  src: item.data.icon,
                  alt: ""
                });
              }
            } else {
              iconItem = item.data.icon;
            }
          }
          var obj = item.data.obj;
          var typeImg = obj && obj.type && ITEM_IMAGES[obj.type] || /* @__PURE__ */ _react["default"].createElement("div", {
            className: "itemIcon"
          });
          var paddingLeft = this.levelPadding * item.data.level;
          if (item.data.lang !== this.state.lang) {
            var _findRoomsForObject = findRoomsForObject(this.info, id, this.state.lang), rooms = _findRoomsForObject.rooms, per = _findRoomsForObject.per;
            item.data.rooms = rooms.join(", ");
            item.data.per = per;
            var _findFunctionsForObje = findFunctionsForObject(this.info, id, this.state.lang), funcs = _findFunctionsForObje.funcs, pef = _findFunctionsForObje.pef;
            item.data.funcs = funcs.join(", ");
            item.data.pef = pef;
            item.data.lang = this.state.lang;
          }
          var checkbox = this.props.multiSelect && this.objects[id] && (!this.props.types || this.props.types.includes(this.objects[id].type)) ? /* @__PURE__ */ _react["default"].createElement(_Checkbox["default"], {
            className: classes.checkBox,
            checked: this.state.selected.includes(id)
          }) : null;
          var valueEditable = !this.props.notEditable && itemType === "state" && (this.props.expertMode || ((_item$data$obj2 = item.data.obj) === null || _item$data$obj2 === void 0 ? void 0 : (_item$data$obj2$commo = _item$data$obj2.common) === null || _item$data$obj2$commo === void 0 ? void 0 : _item$data$obj2$commo.write) !== false);
          var enumEditable = !this.props.notEditable && this.objects[id] && (this.props.expertMode || itemType === "state" || itemType === "channel" || itemType === "device");
          var checkVisibleObjectType = this.state.statesView && (itemType === "state" || itemType === "channel" || itemType === "device");
          var newValue = "";
          var newValueTitle = [];
          if (checkVisibleObjectType) {
            var _this$states$id;
            newValue = (_this$states$id = this.states[id]) === null || _this$states$id === void 0 ? void 0 : _this$states$id.from;
            if (newValue === void 0) {
              newValue = "&nbsp;";
            } else {
              newValue = newValue ? newValue.replace(/^system\.adapter\.|^system\./, "") : "";
              newValueTitle.push("".concat(this.texts.stateChangedFrom, " ").concat(newValue));
            }
            if (obj.user) {
              var user = obj.user.replace("system.user.", "");
              newValue += "/".concat(user);
              newValueTitle.push("".concat(this.texts.stateChangedBy, " ").concat(user));
            }
          }
          ((_item$data$obj3 = item.data.obj) === null || _item$data$obj3 === void 0 ? void 0 : _item$data$obj3.from) && newValueTitle.push(this.texts.objectChangedFrom + " " + item.data.obj.from.replace(/^system\.adapter\.|^system\./, ""));
          ((_item$data$obj4 = item.data.obj) === null || _item$data$obj4 === void 0 ? void 0 : _item$data$obj4.user) && newValueTitle.push(this.texts.objectChangedBy + " " + item.data.obj.user.replace(/^system\.user\./, ""));
          ((_item$data$obj5 = item.data.obj) === null || _item$data$obj5 === void 0 ? void 0 : _item$data$obj5.ts) && newValueTitle.push(this.texts.objectChangedByUser + " " + _Utils["default"].formatDate(new Date(item.data.obj.ts), this.props.dateFormat));
          var readWriteAlias = _typeof((_item$data$obj6 = item.data.obj) === null || _item$data$obj6 === void 0 ? void 0 : (_item$data$obj6$commo = _item$data$obj6.common) === null || _item$data$obj6$commo === void 0 ? void 0 : (_item$data$obj6$commo2 = _item$data$obj6$commo.alias) === null || _item$data$obj6$commo2 === void 0 ? void 0 : _item$data$obj6$commo2.id) === "object";
          var alias = id.startsWith("alias.") && (_item$data$obj7 = item.data.obj) !== null && _item$data$obj7 !== void 0 && (_item$data$obj7$commo = _item$data$obj7.common) !== null && _item$data$obj7$commo !== void 0 && (_item$data$obj7$commo2 = _item$data$obj7$commo.alias) !== null && _item$data$obj7$commo2 !== void 0 && _item$data$obj7$commo2.id ? readWriteAlias ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellIdAliasReadWriteDiv
          }, item.data.obj.common.alias.id.read ? /* @__PURE__ */ _react["default"].createElement("div", {
            onClick: function onClick(e) {
              e.stopPropagation();
              e.preventDefault();
              _this37.onSelect(item.data.obj.common.alias.id.read);
              setTimeout(function() {
                _this37.expandAllSelected(function() {
                  return _this37.scrollToItem(item.data.obj.common.alias.id.read);
                });
              }, 100);
            },
            className: _Utils["default"].clsx(classes.cellIdAlias, classes.cellIdAliasReadWrite)
          }, "\u2190", item.data.obj.common.alias.id.read) : null, item.data.obj.common.alias.id.write ? /* @__PURE__ */ _react["default"].createElement("div", {
            onClick: function onClick(e) {
              e.stopPropagation();
              e.preventDefault();
              _this37.onSelect(item.data.obj.common.alias.id.write);
              setTimeout(function() {
                _this37.expandAllSelected(function() {
                  return _this37.scrollToItem(item.data.obj.common.alias.id.write);
                });
              }, 100);
            },
            className: _Utils["default"].clsx(classes.cellIdAlias, classes.cellIdAliasReadWrite)
          }, "\u2192", item.data.obj.common.alias.id.write) : null) : /* @__PURE__ */ _react["default"].createElement("div", {
            onClick: function onClick(e) {
              e.stopPropagation();
              e.preventDefault();
              _this37.onSelect(item.data.obj.common.alias.id);
              setTimeout(function() {
                _this37.expandAllSelected(function() {
                  return _this37.scrollToItem(item.data.obj.common.alias.id);
                });
              }, 100);
            },
            className: _Utils["default"].clsx(classes.cellIdAlias, classes.cellIdAliasAlone)
          }, "\u2192", item.data.obj.common.alias.id) : null;
          var checkColor = (_item$data = item.data) === null || _item$data === void 0 ? void 0 : (_item$data$obj8 = _item$data.obj) === null || _item$data$obj8 === void 0 ? void 0 : (_item$data$obj8$commo = _item$data$obj8.common) === null || _item$data$obj8$commo === void 0 ? void 0 : _item$data$obj8$commo.color;
          var invertBackground = "none";
          if (checkColor && !this.state.selected.includes(id)) {
            invertBackground = _Utils["default"].invertColor(checkColor, true);
          }
          if (!checkColor || this.state.selected.includes(id)) {
            checkColor = "inherit";
          }
          var q = checkVisibleObjectType ? _Utils["default"].quality2text(((_this$states$id2 = this.states[id]) === null || _this$states$id2 === void 0 ? void 0 : _this$states$id2.q) || 0).join(", ") : null;
          return /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            container: true,
            direction: "row",
            wrap: "nowrap",
            className: _Utils["default"].clsx(classes.tableRow, this.state.linesEnabled && classes.tableRowLines, !this.props.dragEnabled && classes.tableRowNoDragging, alias && classes.tableRowAlias, readWriteAlias && classes.tableRowAliasReadWrite, !item.data.visible && classes.filteredOut, item.data.hasVisibleParent && !item.data.visible && !item.data.hasVisibleChildren && classes.filteredParentOut, this.state.selected.includes(id) && classes.itemSelected, this.state.selectedNonObject === id && classes.itemSelected),
            key: id,
            id,
            onClick: function onClick() {
              return _this37.onSelect(id);
            },
            onDoubleClick: function onDoubleClick() {
              if (!item.children) {
                _this37.onSelect(id, true);
              } else {
                _this37.toggleExpanded(id);
              }
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            container: true,
            wrap: "nowrap",
            direction: "row",
            className: classes.cellId,
            style: {
              width: this.columnsVisibility.id,
              paddingLeft
            }
          }, /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            item: true,
            container: true,
            alignItems: "center",
            style: {
              color: checkColor,
              background: invertBackground
            }
          }, checkbox, iconFolder), /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            item: true,
            title: id,
            className: classes.cellIdSpan,
            style: {
              background: invertBackground,
              color: id === "system" ? COLOR_NAME_SYSTEM : id === "system.adapter" ? COLOR_NAME_SYSTEM_ADAPTER : checkColor
            }
          }, item.data.name, alias), /* @__PURE__ */ _react["default"].createElement("div", {
            style: {
              color: checkColor,
              background: invertBackground
            },
            className: classes.grow
          }), /* @__PURE__ */ _react["default"].createElement(_Grid["default"], {
            item: true,
            container: true,
            alignItems: "center"
          }, iconItem), /* @__PURE__ */ _react["default"].createElement("div", {
            style: {
              color: checkColor
            }
          }, /* @__PURE__ */ _react["default"].createElement(_IconCopy["default"], {
            className: _Utils["default"].clsx(classes.cellCopyButton, "copyButton"),
            onClick: function onClick(e) {
              return _this37.onCopy(e, id);
            }
          }))), this.columnsVisibility.name ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellName,
            style: {
              width: this.columnsVisibility.name
            }
          }, ((_item$data2 = item.data) === null || _item$data2 === void 0 ? void 0 : _item$data2.title) || "") : null, !this.state.statesView ? /* @__PURE__ */ _react["default"].createElement(_react["default"].Fragment, null, this.columnsVisibility.type ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellType,
            style: {
              width: this.columnsVisibility.type
            }
          }, typeImg, " ", obj && obj.type) : null, this.columnsVisibility.role ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellRole,
            style: {
              width: this.columnsVisibility.role,
              cursor: this.props.expertMode && enumEditable && this.props.objectBrowserEditRole ? "text" : "default"
            },
            onClick: this.props.expertMode && enumEditable && this.props.objectBrowserEditRole ? function() {
              return _this37.setState({
                roleDialog: item.data.id
              });
            } : void 0
          }, obj && obj.common && obj.common.role) : null, this.columnsVisibility.room ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: "".concat(classes.cellRoom, " ").concat(item.data.per ? classes.cellEnumParent : ""),
            style: {
              width: this.columnsVisibility.room,
              cursor: enumEditable ? "text" : "default"
            },
            onClick: enumEditable ? function() {
              var enums = findEnumsForObjectAsIds(_this37.info, item.data.id, "roomEnums");
              _this37.setState({
                enumDialogEnums: enums,
                enumDialog: {
                  item,
                  type: "room",
                  enumsOriginal: JSON.parse(JSON.stringify(enums))
                }
              });
            } : void 0
          }, item.data.rooms) : null, this.columnsVisibility.func ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: "".concat(classes.cellFunc, " ").concat(item.data.pef ? classes.cellEnumParent : ""),
            style: {
              width: this.columnsVisibility.func,
              cursor: enumEditable ? "text" : "default"
            },
            onClick: enumEditable ? function() {
              var enums = findEnumsForObjectAsIds(_this37.info, item.data.id, "funcEnums");
              _this37.setState({
                enumDialogEnums: enums,
                enumDialog: {
                  item,
                  type: "func",
                  enumsOriginal: JSON.parse(JSON.stringify(enums))
                }
              });
            } : void 0
          }, item.data.funcs) : null) : /* @__PURE__ */ _react["default"].createElement(_react["default"].Fragment, null, this.columnsVisibility.changedFrom ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellRole,
            style: {
              width: this.columnsVisibility.changedFrom
            },
            title: newValueTitle.join("\n")
          }, checkVisibleObjectType && (_this$states$id3 = this.states[id]) !== null && _this$states$id3 !== void 0 && _this$states$id3.from ? newValue : null) : null, this.columnsVisibility.qualityCode ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellRole,
            style: {
              width: this.columnsVisibility.qualityCode
            },
            title: q || ""
          }, q) : null, this.columnsVisibility.timestamp ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellRole,
            style: {
              width: this.columnsVisibility.timestamp
            }
          }, checkVisibleObjectType && (_this$states$id4 = this.states[id]) !== null && _this$states$id4 !== void 0 && _this$states$id4.ts ? _Utils["default"].formatDate(new Date(this.states[id].ts), this.props.dateFormat) : null) : null, this.columnsVisibility.lastChange ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellRole,
            style: {
              width: this.columnsVisibility.lastChange
            }
          }, checkVisibleObjectType && (_this$states$id5 = this.states[id]) !== null && _this$states$id5 !== void 0 && _this$states$id5.lc ? _Utils["default"].formatDate(new Date(this.states[id].lc), this.props.dateFormat) : null) : null), this.adapterColumns.map(function(it) {
            return /* @__PURE__ */ _react["default"].createElement("div", {
              className: classes.cellAdapter,
              style: {
                width: _this37.columnsVisibility[it.id]
              },
              key: it.id,
              title: it.adapter + " => " + it.pathText
            }, _this37.renderCustomValue(obj, it, item));
          }), this.columnsVisibility.val ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellValue,
            style: {
              width: this.columnsVisibility.val,
              cursor: valueEditable ? item.data.button ? "grab" : "text" : "default"
            },
            onClick: valueEditable ? function() {
              if (!item.data.obj || !_this37.states) {
                return null;
              }
              if (!_this37.props.expertMode && item.data.button) {
                return _this37.props.socket.setState(id, true)["catch"](function(e) {
                  return window.alert('Cannot write state "'.concat(id, '": ').concat(e));
                });
              }
              _this37.edit = {
                val: _this37.states[id] ? _this37.states[id].val : "",
                q: _this37.states[id] ? _this37.states[id].q || 0 : 0,
                ack: false,
                id
              };
              _this37.setState({
                updateOpened: true
              });
            } : void 0
          }, this.renderColumnValue(id, item, classes)) : null, this.columnsVisibility.buttons ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.cellButtons,
            style: {
              width: this.columnsVisibility.buttons
            }
          }, this.renderColumnButtons(id, item, classes)) : null);
        }
      }, {
        key: "renderItem",
        value: function renderItem(root, isExpanded, classes, counter) {
          var _this38 = this;
          var items = [];
          counter = counter || {
            count: 0
          };
          var leaf = this.renderLeaf(root, isExpanded, classes, counter);
          var DragWrapper = this.props.DragWrapper;
          if (this.props.dragEnabled) {
            if (root.data.sumVisibility) {
              leaf = /* @__PURE__ */ _react["default"].createElement(DragWrapper, {
                key: root.data.id,
                item: root,
                className: classes.draggable
              }, leaf);
            } else {
              leaf = /* @__PURE__ */ _react["default"].createElement("div", {
                key: root.data.id,
                className: classes.nonDraggable
              }, leaf);
            }
          }
          root.data.id && items.push(leaf);
          isExpanded = isExpanded === void 0 ? binarySearch(this.state.expanded, root.data.id) : isExpanded;
          if (!root.data.id || isExpanded) {
            if (!this.state.foldersFirst) {
              root.children && items.push(root.children.map(function(item) {
                if (!_this38.state.columnsSelectorShow || counter.count < 15) {
                  if (item.data.sumVisibility) {
                    return _this38.renderItem(item, void 0, classes, counter);
                  }
                }
                return null;
              }));
            } else {
              root.children && items.push(root.children.map(function(item) {
                if (item.children) {
                  if (!_this38.state.columnsSelectorShow || counter.count < 15) {
                    if (item.data.sumVisibility) {
                      return _this38.renderItem(item, void 0, classes, counter);
                    }
                  }
                }
                return null;
              }));
              root.children && items.push(root.children.map(function(item) {
                if (!item.children) {
                  if (!_this38.state.columnsSelectorShow || counter.count < 15) {
                    if (item.data.sumVisibility) {
                      return _this38.renderItem(item, void 0, classes, counter);
                    }
                  }
                }
                return null;
              }));
            }
          }
          return items;
        }
      }, {
        key: "calculateColumnsVisibility",
        value: function calculateColumnsVisibility(columnsAuto, columns, columnsForAdmin, columnsWidths) {
          var _this39 = this;
          columnsWidths = columnsWidths || this.state.columnsWidths;
          columnsForAdmin = columnsForAdmin || this.state.columnsForAdmin;
          columns = columns || this.state.columns || [];
          columnsAuto = typeof columnsAuto !== "boolean" ? this.state.columnsAuto : columnsAuto;
          columnsWidths = JSON.parse(JSON.stringify(columnsWidths));
          Object.keys(columnsWidths).forEach(function(name) {
            if (columnsWidths[name]) {
              columnsWidths[name] = parseInt(columnsWidths[name], 10) || 0;
            }
          });
          this.adapterColumns = [];
          var WIDTHS = SCREEN_WIDTHS[this.props.width].widths;
          if (columnsAuto) {
            this.columnsVisibility = {
              id: SCREEN_WIDTHS[this.props.width].idWidth,
              name: this.visibleCols.includes("name") ? WIDTHS.name || 0 : 0,
              type: this.visibleCols.includes("type") ? WIDTHS.type || 0 : 0,
              role: this.visibleCols.includes("role") ? WIDTHS.role || 0 : 0,
              room: this.visibleCols.includes("room") ? WIDTHS.room || 0 : 0,
              func: this.visibleCols.includes("func") ? WIDTHS.func || 0 : 0,
              changedFrom: this.visibleCols.includes("changedFrom") ? WIDTHS.changedFrom || 0 : 0,
              qualityCode: this.visibleCols.includes("qualityCode") ? WIDTHS.qualityCode || 0 : 0,
              timestamp: this.visibleCols.includes("timestamp") ? WIDTHS.timestamp || 0 : 0,
              lastChange: this.visibleCols.includes("lastChange") ? WIDTHS.lastChange || 0 : 0,
              val: this.visibleCols.includes("val") ? WIDTHS.val || 0 : 0,
              buttons: this.visibleCols.includes("buttons") ? WIDTHS.buttons || 0 : 0
            };
            if (this.columnsVisibility.name) {
              var widthSum = this.columnsVisibility.id;
              if (this.state.statesView) {
                widthSum += this.columnsVisibility.changedFrom;
                widthSum += this.columnsVisibility.qualityCode;
                widthSum += this.columnsVisibility.timestamp;
                widthSum += this.columnsVisibility.lastChange;
              } else {
                widthSum += this.columnsVisibility.type;
                widthSum += this.columnsVisibility.role;
                widthSum += this.columnsVisibility.room;
                widthSum += this.columnsVisibility.func;
              }
              widthSum += this.columnsVisibility.val;
              widthSum += this.columnsVisibility.buttons;
              this.columnsVisibility.name = "calc(100% - ".concat(widthSum + 5, "px)");
              this.columnsVisibility.nameHeader = "calc(100% - ".concat(widthSum + 5 + this.state.scrollBarWidth, "px)");
            } else {
              var _widthSum = 0;
              if (this.state.statesView) {
                _widthSum += this.columnsVisibility.changedFrom;
                _widthSum += this.columnsVisibility.qualityCode;
                _widthSum += this.columnsVisibility.timestamp;
                _widthSum += this.columnsVisibility.lastChange;
              } else {
                _widthSum += this.columnsVisibility.type;
                _widthSum += this.columnsVisibility.role;
                _widthSum += this.columnsVisibility.room;
                _widthSum += this.columnsVisibility.func;
              }
              _widthSum += this.columnsVisibility.val;
              _widthSum += this.columnsVisibility.buttons;
              this.columnsVisibility.id = "calc(100% - ".concat(_widthSum + 5, "px)");
            }
          } else {
            this.columnsVisibility = {
              id: columnsWidths.id || SCREEN_WIDTHS[this.props.width].idWidth,
              name: columns.includes("name") ? columnsWidths.name || WIDTHS.name || SCREEN_WIDTHS[this.props.width].widths.name || 0 : 0,
              type: columns.includes("type") ? columnsWidths.type || WIDTHS.type || SCREEN_WIDTHS[this.props.width].widths.type || 0 : 0,
              role: columns.includes("role") ? columnsWidths.role || WIDTHS.role || SCREEN_WIDTHS[this.props.width].widths.role || 0 : 0,
              room: columns.includes("room") ? columnsWidths.room || WIDTHS.room || SCREEN_WIDTHS[this.props.width].widths.room || 0 : 0,
              func: columns.includes("func") ? columnsWidths.func || WIDTHS.func || SCREEN_WIDTHS[this.props.width].widths.func || 0 : 0
            };
            var _widthSum2 = this.columnsVisibility.id;
            if (this.columnsVisibility.name) {
              _widthSum2 += this.columnsVisibility.type;
              _widthSum2 += this.columnsVisibility.role;
              _widthSum2 += this.columnsVisibility.room;
              _widthSum2 += this.columnsVisibility.func;
            }
            if (columnsForAdmin && columns) {
              Object.keys(columnsForAdmin).sort().forEach(function(adapter) {
                return columnsForAdmin[adapter].forEach(function(column) {
                  var id = "_" + adapter + "_" + column.path;
                  _this39.columnsVisibility[id] = columns.includes(id);
                  if (columns.includes(id)) {
                    var item = {
                      adapter,
                      id: "_" + adapter + "_" + column.path,
                      name: column.name,
                      path: column.path.split("."),
                      pathText: column.path
                    };
                    if (column.edit) {
                      item.edit = true;
                      if (column.type) {
                        item.type = column.type;
                      }
                      if (column.objTypes) {
                        item.objTypes = column.objTypes;
                      }
                    }
                    _this39.adapterColumns.push(item);
                    _this39.columnsVisibility[id] = columnsWidths[item.id] || column.width || SCREEN_WIDTHS[_this39.props.width].widths.func || SCREEN_WIDTHS.xl.widths.func;
                    _widthSum2 += _this39.columnsVisibility[id];
                  } else {
                    _this39.columnsVisibility[id] = 0;
                  }
                });
              });
            }
            this.adapterColumns.sort(function(a, b) {
              return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
            });
            this.columnsVisibility.val = columns.includes("val") ? columnsWidths.val || WIDTHS.val || SCREEN_WIDTHS.xl.widths.val : 0;
            if (!this.props.columns || this.props.columns.includes("buttons")) {
              this.columnsVisibility.buttons = columns.includes("buttons") ? columnsWidths.buttons || WIDTHS.buttons || SCREEN_WIDTHS.xl.widths.buttons : 0;
              _widthSum2 += this.columnsVisibility.buttons;
            }
            if (this.columnsVisibility.name && !columnsWidths.name) {
              _widthSum2 += this.columnsVisibility.val;
              this.columnsVisibility.name = "calc(100% - ".concat(_widthSum2, "px)");
              this.columnsVisibility.nameHeader = "calc(100% - ".concat(_widthSum2 + 5 + this.state.scrollBarWidth, "px)");
            } else {
              var newWidth = Object.keys(this.columnsVisibility).reduce(function(accumulator, name) {
                if (name === "id" || typeof _this39.columnsVisibility[name] === "string" || !_this39.columnsVisibility[name]) {
                  return accumulator;
                } else {
                  return accumulator + _this39.columnsVisibility[name];
                }
              }, 0);
              this.columnsVisibility.id = "calc(100% - ".concat(newWidth, "px)");
            }
          }
        }
      }, {
        key: "renderHeader",
        value: function renderHeader() {
          var _this40 = this;
          var classes = this.props.classes;
          var filterClearInValue = null;
          if (!this.columnsVisibility.buttons && !this.isFilterEmpty()) {
            filterClearInValue = /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
              onClick: function onClick() {
                return _this40.clearFilter();
              },
              className: classes.buttonClearFilter,
              title: this.props.t("ra_Clear filter")
            }, /* @__PURE__ */ _react["default"].createElement(_IconClearFilter["default"], null), /* @__PURE__ */ _react["default"].createElement(_Close["default"], {
              className: classes.buttonClearFilterIcon
            }));
          }
          return /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerRow
          }, /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerCell,
            style: {
              width: this.columnsVisibility.id
            }
          }, this.getFilterInput("id")), this.columnsVisibility.name ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerCell,
            style: {
              width: this.columnsVisibility.nameHeader
            }
          }, this.getFilterInput("name")) : null, !this.state.statesView && /* @__PURE__ */ _react["default"].createElement(_react["default"].Fragment, null, this.columnsVisibility.type ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerCell,
            style: {
              width: this.columnsVisibility.type
            }
          }, this.getFilterSelectType()) : null, this.columnsVisibility.role ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerCell,
            style: {
              width: this.columnsVisibility.role
            }
          }, this.getFilterSelectRole()) : null, this.columnsVisibility.room ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerCell,
            style: {
              width: this.columnsVisibility.room
            }
          }, this.getFilterSelectRoom()) : null, this.columnsVisibility.func ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerCell,
            style: {
              width: this.columnsVisibility.func
            }
          }, this.getFilterSelectFunction()) : null), this.state.statesView && /* @__PURE__ */ _react["default"].createElement(_react["default"].Fragment, null, /* @__PURE__ */ _react["default"].createElement("div", {
            className: _Utils["default"].clsx(classes.headerCell, classes.headerCellValue),
            style: {
              width: this.columnsVisibility.changedFrom
            }
          }, this.props.t("ra_Changed from")), /* @__PURE__ */ _react["default"].createElement("div", {
            className: _Utils["default"].clsx(classes.headerCell, classes.headerCellValue),
            style: {
              width: this.columnsVisibility.qualityCode
            }
          }, this.props.t("ra_Quality code")), /* @__PURE__ */ _react["default"].createElement("div", {
            className: _Utils["default"].clsx(classes.headerCell, classes.headerCellValue),
            style: {
              width: this.columnsVisibility.timestamp
            }
          }, this.props.t("ra_Timestamp")), /* @__PURE__ */ _react["default"].createElement("div", {
            className: _Utils["default"].clsx(classes.headerCell, classes.headerCellValue),
            style: {
              width: this.columnsVisibility.lastChange
            }
          }, this.props.t("ra_Last change"))), this.adapterColumns.map(function(item) {
            return /* @__PURE__ */ _react["default"].createElement("div", {
              className: _Utils["default"].clsx(classes.headerCell, classes.headerCellValue),
              style: {
                width: _this40.columnsVisibility[item.id]
              },
              title: item.adapter,
              key: item.id
            }, item.name);
          }), this.columnsVisibility.val ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: _Utils["default"].clsx(classes.headerCell, classes.headerCellValue),
            style: {
              width: this.columnsVisibility.val
            }
          }, this.props.t("ra_Value"), filterClearInValue) : null, this.columnsVisibility.buttons ? /* @__PURE__ */ _react["default"].createElement("div", {
            className: classes.headerCell,
            style: {
              width: this.columnsVisibility.buttons
            }
          }, " ", this.getFilterSelectCustoms()) : null);
        }
      }, {
        key: "renderToast",
        value: function renderToast() {
          var _this41 = this;
          return /* @__PURE__ */ _react["default"].createElement(_Snackbar["default"], {
            open: !!this.state.toast,
            autoHideDuration: 3e3,
            onClick: function onClick() {
              return _this41.setState({
                toast: ""
              });
            },
            onClose: function onClose() {
              return _this41.setState({
                toast: ""
              });
            },
            message: this.state.toast,
            action: /* @__PURE__ */ _react["default"].createElement(_react["default"].Fragment, null, /* @__PURE__ */ _react["default"].createElement(_IconButton["default"], {
              size: "small",
              "aria-label": "close",
              color: "inherit",
              onClick: function onClick() {
                return _this41.setState({
                  toast: ""
                });
              }
            }, /* @__PURE__ */ _react["default"].createElement(_Close["default"], {
              fontSize: "small"
            })))
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var _this42 = this;
          if (this.tableRef.current) {
            var scrollBarWidth = this.tableRef.current.offsetWidth - this.tableRef.current.clientWidth;
            if (this.state.scrollBarWidth !== scrollBarWidth) {
              setTimeout(function() {
                return _this42.setState({
                  scrollBarWidth
                });
              }, 100);
            } else {
              if (!this.selectedFound && (this.state.selected && this.state.selected[0] || this.lastSelectedItems)) {
                this.scrollToItem(this.state.selected && this.state.selected[0] || this.lastSelectedItems);
              }
            }
          }
        }
      }, {
        key: "scrollToItem",
        value: function scrollToItem(id) {
          var node = window.document.getElementById(id);
          node && node.scrollIntoView({
            behavior: "auto",
            block: "center",
            inline: "center"
          });
          this.selectedFound = true;
        }
      }, {
        key: "renderCustomDialog",
        value: function renderCustomDialog() {
          var _this43 = this;
          if (this.state.customDialog && this.props.objectCustomDialog) {
            var ObjectCustomDialog = this.props.objectCustomDialog;
            return /* @__PURE__ */ _react["default"].createElement(ObjectCustomDialog, {
              reportChangedIds: function reportChangedIds(changedIds) {
                return _this43.changedIds = _toConsumableArray(changedIds);
              },
              objectIDs: this.state.customDialog,
              expertMode: this.state.filter.expertMode,
              isFloatComma: this.props.isFloatComma,
              t: this.props.t,
              lang: this.props.lang,
              socket: this.props.socket,
              themeName: this.props.themeName,
              themeType: this.props.themeType,
              theme: this.props.theme,
              objects: this.objects,
              customsInstances: this.info.customs,
              onClose: function onClose() {
                _this43.pauseSubscribe(false);
                _this43.setState({
                  customDialog: null
                });
                if (_this43.changedIds) {
                  _this43.changedIds = null;
                  _this43.forceUpdate();
                }
                _this43.props.router && _this43.props.router.doNavigate("tab-objects");
              }
            });
          } else {
            return null;
          }
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(valAck) {
          var _this44 = this;
          this.props.socket.setState(this.edit.id, {
            val: valAck.val,
            ack: valAck.ack,
            q: valAck.q || 0,
            expire: valAck.expire || void 0
          })["catch"](function(e) {
            return _this44.showError("Cannot write value: " + e);
          });
        }
      }, {
        key: "renderEditObjectDialog",
        value: function renderEditObjectDialog() {
          var _this45 = this;
          if (!this.state.editObjectDialog || !this.props.objectBrowserEditObject) {
            return null;
          }
          var ObjectBrowserEditObject = this.props.objectBrowserEditObject;
          return /* @__PURE__ */ _react["default"].createElement(ObjectBrowserEditObject, {
            key: this.state.editObjectDialog,
            obj: this.objects[this.state.editObjectDialog],
            roleArray: this.info.roles,
            objects: this.objects,
            dateFormat: this.props.dateFormat,
            isFloatComma: this.props.isFloatComma,
            themeName: this.props.themeName,
            socket: this.props.socket,
            dialogName: this.props.dialogName,
            t: this.props.t,
            expertMode: this.state.filter.expertMode,
            onNewObject: function onNewObject(obj) {
              return _this45.props.socket.setObject(obj._id, obj).then(function() {
                return _this45.setState({
                  editObjectDialog: obj._id
                }, function() {
                  return _this45.onSelect(obj._id);
                });
              })["catch"](function(e) {
                return _this45.showError("Cannot write object: " + e);
              });
            },
            onClose: function onClose(obj) {
              _this45.setState({
                editObjectDialog: ""
              });
              if (obj) {
                _this45.props.socket.setObject(obj._id, obj)["catch"](function(e) {
                  return _this45.showError("Cannot write object: " + e);
                });
              }
            }
          });
        }
      }, {
        key: "renderEditValueDialog",
        value: function renderEditValueDialog() {
          var _this$objects$this$ed, _this46 = this;
          if (!this.state.updateOpened || !this.props.objectBrowserValue) {
            return null;
          }
          var type = (_this$objects$this$ed = this.objects[this.edit.id].common) !== null && _this$objects$this$ed !== void 0 && _this$objects$this$ed.type ? this.objects[this.edit.id].common.type : _typeof(this.edit.val);
          var ObjectBrowserValue = this.props.objectBrowserValue;
          return /* @__PURE__ */ _react["default"].createElement(ObjectBrowserValue, {
            t: this.props.t,
            lang: this.props.lang,
            type,
            states: _Utils["default"].getStates(this.objects[this.edit.id]),
            themeType: this.props.themeType,
            expertMode: this.state.filter.expertMode,
            value: this.edit.val,
            socket: this.props.socket,
            object: this.objects[this.edit.id],
            defaultHistory: this.defaultHistory,
            dateFormat: this.props.dateFormat,
            onClose: function onClose(res) {
              _this46.setState({
                updateOpened: false
              });
              res && _this46.onUpdate(res);
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this47 = this;
          this.recordStates = [];
          this.unsubscribeTimer && clearTimeout(this.unsubscribeTimer);
          var jsonFilter = JSON.stringify(this.state.filter);
          if (this.lastAppliedFilter !== jsonFilter && this.objects && this.root) {
            var counter = {
              count: 0
            };
            applyFilter(this.root, this.state.filter, this.state.lang, this.objects, null, counter, this.props.customFilter, this.props.types);
            if (counter.count < 500 && !this.state.expandAllVisible) {
              setTimeout(function() {
                return _this47.setState({
                  expandAllVisible: true
                });
              });
            } else if (counter.count >= 500 && this.state.expandAllVisible) {
              setTimeout(function() {
                return _this47.setState({
                  expandAllVisible: false
                });
              });
            }
            this.lastAppliedFilter = jsonFilter;
          }
          this.unsubscribeTimer = setTimeout(function() {
            _this47.unsubscribeTimer = null;
            _this47.checkUnsubscribes();
          }, 200);
          if (!this.state.loaded) {
            return /* @__PURE__ */ _react["default"].createElement(_CircularProgress["default"], {
              key: this.props.dialogName + "_c"
            });
          } else {
            var classes = this.props.classes;
            var items = this.renderItem(this.root, void 0, classes);
            return /* @__PURE__ */ _react["default"].createElement(_TabContainer["default"], {
              key: this.props.dialogName
            }, /* @__PURE__ */ _react["default"].createElement(_TabHeader["default"], null, this.getToolbar()), /* @__PURE__ */ _react["default"].createElement(_TabContent["default"], null, this.renderHeader(), /* @__PURE__ */ _react["default"].createElement("div", {
              className: this.props.classes.tableDiv,
              ref: this.tableRef
            }, items)), this.renderToast(), this.renderColumnsEditCustomDialog(), this.renderColumnsSelectorDialog(), this.renderCustomDialog(), this.renderEditValueDialog(), this.renderEditObjectDialog(), this.renderEditRoleDialog(), this.renderEnumDialog(), this.renderErrorDialog(), this.renderExportDialog(), this.state.modalNewObj && this.props.modalNewObject && this.props.modalNewObject(this), this.state.modalEditOfAccess && this.props.modalEditOfAccessControl && this.props.modalEditOfAccessControl(this, this.state.modalEditOfAccessObjData));
          }
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
          var newState = {};
          var changed = false;
          if (props.expertMode !== void 0 && props.expertMode !== state.filter.expertMode) {
            changed = true;
            newState.filter = Object.assign({}, state.filter);
            newState.filter.expertMode = props.expertMode;
          }
          return changed ? newState : null;
        }
      }]);
      return ObjectBrowser2;
    }(_react.Component);
    ObjectBrowser.defaultProps = {
      objectAddBoolean: false,
      objectEditBoolean: false,
      objectStatesView: false,
      objectImportExport: false,
      objectEditOfAccessControl: false,
      modalNewObject: function modalNewObject() {
      },
      modalEditOfAccessControl: function modalEditOfAccessControl() {
      }
    };
    ObjectBrowser.propTypes = {
      dialogName: _propTypes["default"].string,
      classes: _propTypes["default"].object,
      defaultFilters: _propTypes["default"].object,
      selected: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
      onSelect: _propTypes["default"].func,
      onFilterChanged: _propTypes["default"].func,
      socket: _propTypes["default"].object,
      showExpertButton: _propTypes["default"].bool,
      expertMode: _propTypes["default"].bool,
      imagePrefix: _propTypes["default"].string,
      themeName: _propTypes["default"].string,
      themeType: _propTypes["default"].string,
      theme: _propTypes["default"].object,
      t: _propTypes["default"].func,
      lang: _propTypes["default"].string.isRequired,
      multiSelect: _propTypes["default"].bool,
      notEditable: _propTypes["default"].bool,
      foldersFirst: _propTypes["default"].bool,
      disableColumnSelector: _propTypes["default"].bool,
      isFloatComma: _propTypes["default"].bool,
      dateFormat: _propTypes["default"].string,
      levelPadding: _propTypes["default"].number,
      objectCustomDialog: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
      objectAddBoolean: _propTypes["default"].bool,
      objectEditBoolean: _propTypes["default"].bool,
      objectStatesView: _propTypes["default"].bool,
      objectImportExport: _propTypes["default"].bool,
      objectEditOfAccessControl: _propTypes["default"].bool,
      modalNewObject: _propTypes["default"].func,
      modalEditOfAccessControl: _propTypes["default"].func,
      onObjectDelete: _propTypes["default"].func,
      customFilter: _propTypes["default"].object,
      objectBrowserValue: _propTypes["default"].object,
      objectBrowserEditObject: _propTypes["default"].object,
      objectBrowserEditRole: _propTypes["default"].object,
      router: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
      types: _propTypes["default"].array,
      columns: _propTypes["default"].array,
      objectsWorker: _propTypes["default"].object,
      filterFunc: _propTypes["default"].func,
      dragSettings: _propTypes["default"].object,
      DragWrapper: _propTypes["default"].func,
      dragEnabled: _propTypes["default"].bool,
      useDrag: _propTypes["default"].func
    };
    var _export = (0, _withWidth["default"])()((0, _withStyles["default"])(styles2)(ObjectBrowser));
    var _default = _export;
    exports["default"] = _default;
  }
});

// node_modules/@iobroker/adapter-react/Dialogs/SelectID.js
var require_SelectID = __commonJS({
  "node_modules/@iobroker/adapter-react/Dialogs/SelectID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _withStyles = _interopRequireDefault(require_withStyles());
    var _Button = _interopRequireDefault(require_Button());
    var _DialogTitle = _interopRequireDefault(require_DialogTitle());
    var _DialogContent = _interopRequireDefault(require_DialogContent());
    var _DialogActions = _interopRequireDefault(require_DialogActions());
    var _Dialog = _interopRequireDefault(require_Dialog());
    var _Cancel = _interopRequireDefault(require_Cancel());
    var _Check = _interopRequireDefault(require_Check());
    var _Utils = _interopRequireDefault(require_Utils());
    var _i18n = _interopRequireDefault(require_i18n2());
    var _ObjectBrowser = _interopRequireDefault(require_ObjectBrowser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
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
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass2(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
      if (superClass)
        _setPrototypeOf2(subClass, superClass);
    }
    function _setPrototypeOf2(o, p) {
      _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf2(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized2(self2);
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var styles2 = function styles3(theme) {
      return {
        headerID: {
          fontWeight: "bold",
          fontStyle: "italic"
        },
        dialog: {
          height: "95%"
        },
        dialogMobile: {
          padding: 4,
          width: "100%",
          maxWidth: "100%",
          maxHeight: "calc(100% - 16px)",
          height: "100%"
        },
        content: {
          height: "100%",
          overflow: "hidden"
        },
        contentMobile: {
          padding: "8px 4px"
        },
        titleRoot: {
          whiteSpace: "nowrap",
          width: "calc(100% - 72px)",
          overflow: "hidden",
          display: "inline-block",
          textOverflow: "ellipsis"
        }
      };
    };
    var SelectID2 = /* @__PURE__ */ function(_React$Component) {
      _inherits(SelectID3, _React$Component);
      var _super = _createSuper(SelectID3);
      function SelectID3(props) {
        var _this;
        _classCallCheck(this, SelectID3);
        _this = _super.call(this, props);
        _this.dialogName = _this.props.dialogName || "default";
        _this.dialogName = "SelectID." + _this.dialogName;
        _this.filters = window.localStorage.getItem(_this.dialogName) || "{}";
        try {
          _this.filters = JSON.parse(_this.filters);
        } catch (e) {
          _this.filters = {};
        }
        var selected = _this.props.selected || [];
        if (_typeof(selected) !== "object") {
          selected = [selected];
        }
        selected = selected.filter(function(id) {
          return id;
        });
        _this.state = {
          selected,
          name: "",
          isMobile: window.innerWidth < 800
        };
        return _this;
      }
      _createClass2(SelectID3, [{
        key: "handleCancel",
        value: function handleCancel() {
          this.props.onClose();
        }
      }, {
        key: "handleOk",
        value: function handleOk() {
          this.props.onOk(this.props.multiSelect ? this.state.selected : this.state.selected[0] || "", this.state.name);
          this.props.onClose();
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var title;
          if (this.state.name || this.state.selected.length) {
            if (this.state.selected.length === 1) {
              title = [/* @__PURE__ */ _react["default"].createElement("span", {
                key: "selected"
              }, _i18n["default"].t("ra_Selected"), " "), /* @__PURE__ */ _react["default"].createElement("span", {
                key: "id",
                className: this.props.classes.headerID
              }, (this.state.name || this.state.selected) + (this.state.name ? " [" + this.state.selected + "]" : ""))];
            } else {
              title = [/* @__PURE__ */ _react["default"].createElement("span", {
                key: "selected"
              }, _i18n["default"].t("ra_Selected"), " "), /* @__PURE__ */ _react["default"].createElement("span", {
                key: "id",
                className: this.props.classes.headerID
              }, _i18n["default"].t("%s items", this.state.selected.length))];
            }
          } else {
            title = this.props.title || _i18n["default"].t("ra_Please select object ID...");
          }
          return /* @__PURE__ */ _react["default"].createElement(_Dialog["default"], {
            disableBackdropClick: true,
            maxWidth: false,
            disableEscapeKeyDown: true,
            classes: {
              paper: _Utils["default"].clsx(this.props.classes.dialog, this.props.classes.dialogMobile)
            },
            fullWidth: true,
            open: true,
            "aria-labelledby": "selectid-dialog-title"
          }, /* @__PURE__ */ _react["default"].createElement(_DialogTitle["default"], {
            id: "selectid-dialog-title",
            classes: {
              root: this.props.classes.titleRoot
            }
          }, title), /* @__PURE__ */ _react["default"].createElement(_DialogContent["default"], {
            className: _Utils["default"].clsx(this.props.classes.content, this.props.classes.contentMobile)
          }, /* @__PURE__ */ _react["default"].createElement(_ObjectBrowser["default"], {
            foldersFirst: this.props.foldersFirst,
            imagePrefix: this.props.imagePrefix || this.props.prefix,
            defaultFilters: this.filters,
            dialogName: this.dialogName,
            showExpertButton: this.props.showExpertButton !== void 0 ? this.props.showExpertButton : true,
            style: {
              width: "100%",
              height: "100%"
            },
            columns: this.props.columns || ["name", "type", "role", "room", "func", "val"],
            types: this.props.types || ["state"],
            t: _i18n["default"].t,
            lang: this.props.lang || _i18n["default"].getLanguage(),
            socket: this.props.socket,
            selected: this.state.selected,
            multiSelect: this.props.multiSelect,
            notEditable: this.props.notEditable === void 0 ? true : this.props.notEditable,
            name: this.state.name,
            themeName: this.props.themeName,
            themeType: this.props.themeType,
            customFilter: this.props.customFilter,
            onFilterChanged: function onFilterChanged(filterConfig) {
              _this2.filters = filterConfig;
              window.localStorage.setItem(_this2.dialogName, JSON.stringify(filterConfig));
            },
            onSelect: function onSelect(selected, name, isDouble) {
              if (JSON.stringify(selected) !== JSON.stringify(_this2.state.selected)) {
                _this2.setState({
                  selected,
                  name
                }, function() {
                  return isDouble && _this2.handleOk();
                });
              } else if (isDouble) {
                _this2.handleOk();
              }
            },
            filterFunc: this.props.filterFunc
          })), /* @__PURE__ */ _react["default"].createElement(_DialogActions["default"], null, /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
            variant: "contained",
            onClick: function onClick() {
              return _this2.handleOk();
            },
            startIcon: /* @__PURE__ */ _react["default"].createElement(_Check["default"], null),
            disabled: !this.state.selected.length,
            color: "primary"
          }, this.props.ok || _i18n["default"].t("ra_Ok")), /* @__PURE__ */ _react["default"].createElement(_Button["default"], {
            variant: "contained",
            onClick: function onClick() {
              return _this2.handleCancel();
            },
            startIcon: /* @__PURE__ */ _react["default"].createElement(_Cancel["default"], null)
          }, this.props.cancel || _i18n["default"].t("ra_Cancel"))));
        }
      }]);
      return SelectID3;
    }(_react["default"].Component);
    SelectID2.propTypes = {
      dialogName: _propTypes["default"].string,
      classes: _propTypes["default"].object,
      onClose: _propTypes["default"].func,
      notEditable: _propTypes["default"].bool,
      onOk: _propTypes["default"].func.isRequired,
      title: _propTypes["default"].string,
      lang: _propTypes["default"].string,
      foldersFirst: _propTypes["default"].bool,
      isFloatComma: _propTypes["default"].bool,
      dateFormat: _propTypes["default"].string,
      selected: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
      customFilter: _propTypes["default"].object,
      statesOnly: _propTypes["default"].bool,
      socket: _propTypes["default"].object.isRequired,
      cancel: _propTypes["default"].string,
      imagePrefix: _propTypes["default"].string,
      ok: _propTypes["default"].string,
      themeName: _propTypes["default"].string,
      themeType: _propTypes["default"].string,
      showExpertButton: _propTypes["default"].bool,
      multiSelect: _propTypes["default"].bool,
      types: _propTypes["default"].array,
      columns: _propTypes["default"].array,
      filterFunc: _propTypes["default"].func
    };
    var _export = (0, _withStyles["default"])(styles2)(SelectID2);
    var _default = _export;
    exports["default"] = _default;
  }
});

// admin/src/tab.tsx
var import_react7 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());
var import_react_error_boundary = __toModule(require_react_error_boundary_umd());
var import_app = __toModule(require_app());
var import_hooks3 = __toModule(require_hooks());

// admin/src/components/TabPanel.tsx
var import_Box = __toModule(require_Box());
var import_styles = __toModule(require_styles());
var import_react = __toModule(require_react());
var useStyles = (0, import_styles.makeStyles)((_theme) => ({
  tabpanel: {
    flex: 1,
    position: "relative",
    "& > *": {
      width: "100%",
      height: "100%"
    }
  }
}));
var TabPanel = (props) => {
  const {children, value, index: index2, ...other} = props;
  const classes = useStyles();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: classes.tabpanel,
    role: "tabpanel",
    hidden: value !== index2,
    ...other
  }, value === index2 && /* @__PURE__ */ import_react.default.createElement(import_Box.default, {
    p: 3
  }, children));
};

// admin/src/pages/AddNewDevices.tsx
var import_react3 = __toModule(require_react());
var import_iobroker_react = __toModule(require_build());

// admin/src/components/Messages.tsx
var import_react2 = __toModule(require_react());
var import_hooks = __toModule(require_hooks());
var Message = ({children, severity}) => {
  return /* @__PURE__ */ import_react2.default.createElement(Alert_default, {
    sx: {marginTop: 1},
    severity
  }, children);
};
var NotRunning = () => {
  const {translate: _} = (0, import_hooks.useI18n)();
  return /* @__PURE__ */ import_react2.default.createElement(Message, {
    severity: "error"
  }, _("adapter not ready"));
};

// admin/src/pages/AddNewDevices.tsx
var AddNewDevices = (props) => {
  const {alive: adapterRunning, connected: driverReady} = (0, import_iobroker_react.useAdapter)();
  if (!adapterRunning || !driverReady)
    return /* @__PURE__ */ import_react3.default.createElement(NotRunning, null);
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    id: "AddNewDevices"
  }, "AddNewDevice");
};

// admin/src/pages/ListDevices.tsx
var import_react5 = __toModule(require_react());
var import_iobroker_react2 = __toModule(require_build());
var import_hooks2 = __toModule(require_hooks());

// admin/src/components/SelectID.tsx
var import_react4 = __toModule(require_react());
var import_SelectID = __toModule(require_SelectID());

// node_modules/@mui/styles/createGenerateClassName/createGenerateClassName.js
var stateClasses = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
function createGenerateClassName(options = {}) {
  const {
    disableGlobal = false,
    productionPrefix = "jss",
    seed = ""
  } = options;
  const seedPrefix = seed === "" ? "" : `${seed}-`;
  let ruleCounter = 0;
  const getNextCounterId = () => {
    ruleCounter += 1;
    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(["MUI: You might have a memory leak.", "The ruleCounter is not supposed to grow that much."].join(""));
      }
    }
    return ruleCounter;
  };
  return (rule, styleSheet) => {
    const name = styleSheet.options.name;
    if (name && name.indexOf("Mui") === 0 && !styleSheet.options.link && !disableGlobal) {
      if (stateClasses.indexOf(rule.key) !== -1) {
        return `Mui-${rule.key}`;
      }
      const prefix = `${seedPrefix}${name}-${rule.key}`;
      if (!styleSheet.options.theme[nested_default] || seed !== "") {
        return prefix;
      }
      return `${prefix}-${getNextCounterId()}`;
    }
    if (false) {
      return `${seedPrefix}${productionPrefix}${getNextCounterId()}`;
    }
    const suffix = `${rule.key}-${getNextCounterId()}`;
    if (styleSheet.options.classNamePrefix) {
      return `${seedPrefix}${styleSheet.options.classNamePrefix}-${suffix}`;
    }
    return `${seedPrefix}${suffix}`;
  };
}

// node_modules/@mui/styles/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@mui/styles/getThemeProps/getThemeProps.js
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  const output = _extends({}, props);
  const defaultProps = theme.components[name].defaultProps;
  let propName;
  for (propName in defaultProps) {
    if (output[propName] === void 0) {
      output[propName] = defaultProps[propName];
    }
  }
  return output;
}

// node_modules/@mui/styles/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js
var import_tiny_warning2 = __toModule(require_tiny_warning_cjs());

// node_modules/@mui/styles/node_modules/jss/dist/jss.esm.js
var import_is_in_browser = __toModule(require_dist());
var import_tiny_warning = __toModule(require_tiny_warning_cjs());

// node_modules/@mui/styles/node_modules/@babel/runtime/helpers/esm/createClass.js
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/@mui/styles/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@mui/styles/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/@mui/styles/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/@mui/styles/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@mui/styles/node_modules/jss/dist/jss.esm.js
var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== "object")
    return style;
  if (Array.isArray(style))
    return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor)
    return style;
  var newStyle = {};
  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }
  return newStyle;
}
function createRule(name, decl, options) {
  if (name === void 0) {
    name = "unnamed";
  }
  var jss2 = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss2.plugins.onCreateRule(name, declCopy, options);
  if (rule)
    return rule;
  if (name[0] === "@") {
    true ? (0, import_tiny_warning.default)(false, "[JSS] Unknown rule " + name) : void 0;
  }
  return null;
}
var join = function join2(value, by) {
  var result = "";
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "!important")
      break;
    if (result)
      result += by;
    result += value[i];
  }
  return result;
};
var toCssValue = function toCssValue2(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }
  if (!Array.isArray(value))
    return value;
  var cssValue = "";
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === "!important")
        break;
      if (cssValue)
        cssValue += ", ";
      cssValue += join(value[i], " ");
    }
  } else
    cssValue = join(value, ", ");
  if (!ignoreImportant && value[value.length - 1] === "!important") {
    cssValue += " !important";
  }
  return cssValue;
};
function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: "",
      space: ""
    };
  }
  return {
    linebreak: "\n",
    space: " "
  };
}
function indentStr(str, indent) {
  var result = "";
  for (var index2 = 0; index2 < indent; index2++) {
    result += "  ";
  }
  return result + str;
}
function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }
  var result = "";
  if (!style)
    return result;
  var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (options.format === false) {
    indent = -Infinity;
  }
  var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
  if (selector)
    indent++;
  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index2 = 0; index2 < fallbacks.length; index2++) {
        var fallback = fallbacks[index2];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            if (result)
              result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          if (result)
            result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }
  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== "fallbacks") {
      if (result)
        result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  }
  if (!result && !options.allowEmpty)
    return result;
  if (!selector)
    return result;
  indent--;
  if (result)
    result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr("}", indent);
}
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
var escape = function(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
};
var BaseStyleRule = /* @__PURE__ */ function() {
  function BaseStyleRule2(key, style, options) {
    this.type = "style";
    this.isProcessed = false;
    var sheet = options.sheet, Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet)
      this.renderer = sheet.renderer;
    else if (Renderer)
      this.renderer = new Renderer();
  }
  var _proto = BaseStyleRule2.prototype;
  _proto.prop = function prop(name, value, options) {
    if (value === void 0)
      return this.style[name];
    var force = options ? options.force : false;
    if (!force && this.style[name] === value)
      return this;
    var newValue = value;
    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }
    var isEmpty2 = newValue == null || newValue === false;
    var isDefined = name in this.style;
    if (isEmpty2 && !isDefined && !force)
      return this;
    var remove = isEmpty2 && isDefined;
    if (remove)
      delete this.style[name];
    else
      this.style[name] = newValue;
    if (this.renderable && this.renderer) {
      if (remove)
        this.renderer.removeProperty(this.renderable, name);
      else
        this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }
    var sheet = this.options.sheet;
    if (sheet && sheet.attached) {
      true ? (0, import_tiny_warning.default)(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
    }
    return this;
  };
  return BaseStyleRule2;
}();
var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(StyleRule2, _BaseStyleRule);
  function StyleRule2(key, style, options) {
    var _this;
    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }
    return _this;
  }
  var _proto2 = StyleRule2.prototype;
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;
    if (renderer) {
      var json = this.toJSON();
      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }
    return this;
  };
  _proto2.toJSON = function toJSON() {
    var json = {};
    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== "object")
        json[prop] = value;
      else if (Array.isArray(value))
        json[prop] = toCssValue(value);
    }
    return json;
  };
  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };
  _createClass(StyleRule2, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText)
        return;
      this.selectorText = selector;
      var renderer = this.renderer, renderable = this.renderable;
      if (!renderable || !renderer)
        return;
      var hasChanged = renderer.setSelector(renderable, selector);
      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    },
    get: function get() {
      return this.selectorText;
    }
  }]);
  return StyleRule2;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
      return null;
    }
    return new StyleRule(key, style, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
var ConditionalRule = /* @__PURE__ */ function() {
  function ConditionalRule2(key, styles2, options) {
    this.type = "conditional";
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : "unknown";
    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in styles2) {
      this.rules.add(name, styles2[name]);
    }
    this.rules.process();
  }
  var _proto = ConditionalRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions.indent;
    if (options.children == null)
      options.children = defaultToStringOptions.children;
    if (options.children === false) {
      return this.query + " {}";
    }
    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
  };
  return ConditionalRule2;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule2(key, styles2, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles2, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
var KeyframesRule = /* @__PURE__ */ function() {
  function KeyframesRule2(key, frames, options) {
    this.type = "keyframes";
    this.at = "@keyframes";
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);
    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = "noname";
      true ? (0, import_tiny_warning.default)(false, "[JSS] Bad keyframes name " + key) : void 0;
    }
    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }
    this.rules.process();
  }
  var _proto = KeyframesRule2.prototype;
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions$1.indent;
    if (options.children == null)
      options.children = defaultToStringOptions$1.children;
    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }
    var children = this.rules.toString(options);
    if (children)
      children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };
  return KeyframesRule2;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;
var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
  if (typeof val === "string") {
    return val.replace(refRegExp, function(match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }
      true ? (0, import_tiny_warning.default)(false, '[JSS] Referenced keyframes rule "' + name + '" is not defined.') : void 0;
      return match;
    });
  }
  return val;
};
var replaceRef = function replaceRef2(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);
  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};
var pluginKeyframesRule = {
  onCreateRule: function onCreateRule3(key, frames, options) {
    return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return style;
    if ("animation-name" in style)
      replaceRef(style, "animation-name", sheet.keyframes);
    if ("animation" in style)
      replaceRef(style, "animation", sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;
    if (!sheet) {
      return val;
    }
    switch (prop) {
      case "animation":
        return findReferencedKeyframe(val, sheet.keyframes);
      case "animation-name":
        return findReferencedKeyframe(val, sheet.keyframes);
      default:
        return val;
    }
  }
};
var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
  _inheritsLoose(KeyframeRule2, _BaseStyleRule);
  function KeyframeRule2() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }
  var _proto = KeyframeRule2.prototype;
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };
  return KeyframeRule2;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule4(key, style, options) {
    if (options.parent && options.parent.type === "keyframes") {
      return new KeyframeRule(key, style, options);
    }
    return null;
  }
};
var FontFaceRule = /* @__PURE__ */ function() {
  function FontFaceRule2(key, style, options) {
    this.type = "font-face";
    this.at = "@font-face";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = FontFaceRule2.prototype;
  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (Array.isArray(this.style)) {
      var str = "";
      for (var index2 = 0; index2 < this.style.length; index2++) {
        str += toCss(this.at, this.style[index2]);
        if (this.style[index2 + 1])
          str += linebreak;
      }
      return str;
    }
    return toCss(this.at, this.style, options);
  };
  return FontFaceRule2;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule5(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};
var ViewportRule = /* @__PURE__ */ function() {
  function ViewportRule2(key, style, options) {
    this.type = "viewport";
    this.at = "@viewport";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = ViewportRule2.prototype;
  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };
  return ViewportRule2;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule6(key, style, options) {
    return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style, options) : null;
  }
};
var SimpleRule = /* @__PURE__ */ function() {
  function SimpleRule2(key, value, options) {
    this.type = "simple";
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  var _proto = SimpleRule2.prototype;
  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = "";
      for (var index2 = 0; index2 < this.value.length; index2++) {
        str += this.key + " " + this.value[index2] + ";";
        if (this.value[index2 + 1])
          str += "\n";
      }
      return str;
    }
    return this.key + " " + this.value + ";";
  };
  return SimpleRule2;
}();
var keysMap = {
  "@charset": true,
  "@import": true,
  "@namespace": true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule7(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
};
var RuleList = /* @__PURE__ */ function() {
  function RuleList2(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  var _proto = RuleList2.prototype;
  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss2 = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
    var options = _extends({
      classes: this.classes,
      parent,
      sheet,
      jss: jss2,
      Renderer,
      generateId,
      scoped,
      name,
      keyframes: this.keyframes,
      selector: void 0
    }, ruleOptions);
    var key = name;
    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    }
    this.raw[key] = decl;
    if (key in this.classes) {
      options.selector = "." + escape(this.classes[key]);
    }
    var rule = createRule(key, decl, options);
    if (!rule)
      return null;
    this.register(rule);
    var index2 = options.index === void 0 ? this.index.length : options.index;
    this.index.splice(index2, 0, rule);
    return rule;
  };
  _proto.replace = function replace(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);
    if (oldRule) {
      this.remove(oldRule);
    }
    var options = ruleOptions;
    if (oldIndex !== -1)
      options = _extends({}, ruleOptions, {
        index: oldIndex
      });
    return this.add(name, decl, options);
  };
  _proto.get = function get(nameOrSelector) {
    return this.map[nameOrSelector];
  };
  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  };
  _proto.process = function process2() {
    var plugins2 = this.options.jss.plugins;
    this.index.slice(0).forEach(plugins2.onProcessRule, plugins2);
  };
  _proto.register = function register(rule) {
    this.map[rule.key] = rule;
    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id)
        this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };
  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];
    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };
  _proto.update = function update2() {
    var name;
    var data;
    var options;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
      name = arguments.length <= 0 ? void 0 : arguments[0];
      data = arguments.length <= 1 ? void 0 : arguments[1];
      options = arguments.length <= 2 ? void 0 : arguments[2];
    } else {
      data = arguments.length <= 0 ? void 0 : arguments[0];
      options = arguments.length <= 1 ? void 0 : arguments[1];
      name = null;
    }
    if (name) {
      this.updateOne(this.get(name), data, options);
    } else {
      for (var index2 = 0; index2 < this.index.length; index2++) {
        this.updateOne(this.index[index2], data, options);
      }
    }
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }
    var _this$options2 = this.options, plugins2 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
    if (rule.rules instanceof RuleList2) {
      rule.rules.update(data, options);
      return;
    }
    var style = rule.style;
    plugins2.onUpdate(data, rule, sheet, options);
    if (options.process && style && style !== rule.style) {
      plugins2.onProcessStyle(rule.style, rule, sheet);
      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style[prop];
        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      }
      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop];
        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  };
  _proto.toString = function toString(options) {
    var str = "";
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    for (var index2 = 0; index2 < this.index.length; index2++) {
      var rule = this.index[index2];
      var css = rule.toString(options);
      if (!css && !link)
        continue;
      if (str)
        str += linebreak;
      str += css;
    }
    return str;
  };
  return RuleList2;
}();
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(styles2, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });
    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }
    this.rules = new RuleList(this.options);
    for (var name in styles2) {
      this.rules.add(name, styles2[name]);
    }
    this.rules.process();
  }
  var _proto = StyleSheet2.prototype;
  _proto.attach = function attach2() {
    if (this.attached)
      return this;
    if (this.renderer)
      this.renderer.attach();
    this.attached = true;
    if (!this.deployed)
      this.deploy();
    return this;
  };
  _proto.detach = function detach2() {
    if (!this.attached)
      return this;
    if (this.renderer)
      this.renderer.detach();
    this.attached = false;
    return this;
  };
  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue;
    if (this.attached && !queue)
      this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    if (this.attached) {
      if (!this.deployed)
        return rule;
      if (queue)
        queue.push(rule);
      else {
        this.insertRule(rule);
        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = void 0;
        }
      }
      return rule;
    }
    this.deployed = false;
    return rule;
  };
  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule)
      return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);
    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }
    if (this.attached) {
      if (!this.deployed)
        return newRule;
      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }
      return newRule;
    }
    this.deployed = false;
    return newRule;
  };
  _proto.insertRule = function insertRule2(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  };
  _proto.addRules = function addRules(styles2, options) {
    var added = [];
    for (var name in styles2) {
      var rule = this.addRule(name, styles2[name], options);
      if (rule)
        added.push(rule);
    }
    return added;
  };
  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
  };
  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === "object" ? name : this.rules.get(name);
    if (!rule || this.attached && !rule.renderable) {
      return false;
    }
    this.rules.remove(rule);
    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }
    return true;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.deploy = function deploy() {
    if (this.renderer)
      this.renderer.deploy();
    this.deployed = true;
    return this;
  };
  _proto.update = function update2() {
    var _this$rules;
    (_this$rules = this.rules).update.apply(_this$rules, arguments);
    return this;
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return StyleSheet2;
}();
var PluginsRegistry = /* @__PURE__ */ function() {
  function PluginsRegistry2() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }
  var _proto = PluginsRegistry2.prototype;
  _proto.onCreateRule = function onCreateRule8(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule)
        return rule;
    }
    return null;
  };
  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed)
      return;
    var sheet = rule.options.sheet;
    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }
    if (rule.style)
      this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };
  _proto.onProcessStyle = function onProcessStyle2(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  };
  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  };
  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  };
  _proto.onChangeValue = function onChangeValue2(value, prop, rule) {
    var processedValue = value;
    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }
    return processedValue;
  };
  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: "external"
      };
    }
    var plugins2 = this.plugins[options.queue];
    if (plugins2.indexOf(newPlugin) !== -1) {
      return;
    }
    plugins2.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          true ? (0, import_tiny_warning.default)(false, '[JSS] Unknown hook "' + name + '".') : void 0;
        }
      }
      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };
  return PluginsRegistry2;
}();
var SheetsRegistry = /* @__PURE__ */ function() {
  function SheetsRegistry2() {
    this.registry = [];
  }
  var _proto = SheetsRegistry2.prototype;
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index2 = sheet.options.index;
    if (registry.indexOf(sheet) !== -1)
      return;
    if (registry.length === 0 || index2 >= this.index) {
      registry.push(sheet);
      return;
    }
    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index2) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  };
  _proto.reset = function reset() {
    this.registry = [];
  };
  _proto.remove = function remove(sheet) {
    var index2 = this.registry.indexOf(sheet);
    this.registry.splice(index2, 1);
  };
  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose(_ref, ["attached"]);
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    var css = "";
    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css)
        css += linebreak;
      css += sheet.toString(options);
    }
    return css;
  };
  _createClass(SheetsRegistry2, [{
    key: "index",
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);
  return SheetsRegistry2;
}();
var sheets = new SheetsRegistry();
var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
if (globalThis$1[ns] == null)
  globalThis$1[ns] = 0;
var moduleId = globalThis$1[ns]++;
var maxRules = 1e10;
var createGenerateId = function createGenerateId2(options) {
  if (options === void 0) {
    options = {};
  }
  var ruleCounter = 0;
  var generateId = function generateId2(rule, sheet) {
    ruleCounter += 1;
    if (ruleCounter > maxRules) {
      true ? (0, import_tiny_warning.default)(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
    }
    var jssId = "";
    var prefix = "";
    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }
      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }
    if (options.minify) {
      return "" + (prefix || "c") + moduleId + jssId + ruleCounter;
    }
    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
  };
  return generateId;
};
var memoize = function memoize2(fn) {
  var value;
  return function() {
    if (!value)
      value = fn();
    return value;
  };
};
var getPropertyValue = function getPropertyValue2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    return "";
  }
};
var setProperty = function setProperty2(cssRule, prop, value) {
  try {
    var cssValue = value;
    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);
      if (value[value.length - 1] === "!important") {
        cssRule.style.setProperty(prop, cssValue, "important");
        return true;
      }
    }
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    return false;
  }
  return true;
};
var removeProperty = function removeProperty2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    true ? (0, import_tiny_warning.default)(false, '[JSS] DOMException "' + err.message + '" was thrown. Tried to remove property "' + prop + '".') : void 0;
  }
};
var setSelector = function setSelector2(cssRule, selectorText) {
  cssRule.selectorText = selectorText;
  return cssRule.selectorText === selectorText;
};
var getHead = memoize(function() {
  return document.querySelector("head");
});
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}
function findPrevNode(options) {
  var registry = sheets.registry;
  if (registry.length > 0) {
    var sheet = findHigherSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    }
    sheet = findHighestSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  }
  var insertionPoint = options.insertionPoint;
  if (insertionPoint && typeof insertionPoint === "string") {
    var comment = findCommentNode(insertionPoint);
    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    }
    true ? (0, import_tiny_warning.default)(false, '[JSS] Insertion point "' + insertionPoint + '" not found.') : void 0;
  }
  return false;
}
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);
  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  }
  if (insertionPoint && typeof insertionPoint.nodeType === "number") {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode)
      parentNode.insertBefore(style, insertionPointElement.nextSibling);
    else
      true ? (0, import_tiny_warning.default)(false, "[JSS] Insertion point is not in the DOM.") : void 0;
    return;
  }
  getHead().appendChild(style);
}
var getNonce = memoize(function() {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute("content") : null;
});
var _insertRule = function insertRule(container, rule, index2) {
  try {
    if ("insertRule" in container) {
      container.insertRule(rule, index2);
    } else if ("appendRule" in container) {
      container.appendRule(rule);
    }
  } catch (err) {
    true ? (0, import_tiny_warning.default)(false, "[JSS] " + err.message) : void 0;
    return false;
  }
  return container.cssRules[index2];
};
var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index2) {
  var maxIndex = container.cssRules.length;
  if (index2 === void 0 || index2 > maxIndex) {
    return maxIndex;
  }
  return index2;
};
var createStyle = function createStyle2() {
  var el = document.createElement("style");
  el.textContent = "\n";
  return el;
};
var DomRenderer = /* @__PURE__ */ function() {
  function DomRenderer2(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    if (sheet)
      sheets.add(sheet);
    this.sheet = sheet;
    var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
    this.element = element || createStyle();
    this.element.setAttribute("data-jss", "");
    if (media)
      this.element.setAttribute("media", media);
    if (meta)
      this.element.setAttribute("data-meta", meta);
    var nonce = getNonce();
    if (nonce)
      this.element.setAttribute("nonce", nonce);
  }
  var _proto = DomRenderer2.prototype;
  _proto.attach = function attach2() {
    if (this.element.parentNode || !this.sheet)
      return;
    insertStyle(this.element, this.sheet.options);
    var deployed = Boolean(this.sheet && this.sheet.deployed);
    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };
  _proto.detach = function detach2() {
    if (!this.sheet)
      return;
    var parentNode = this.element.parentNode;
    if (parentNode)
      parentNode.removeChild(this.element);
    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = "\n";
    }
  };
  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet)
      return;
    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }
    this.element.textContent = "\n" + sheet.toString() + "\n";
  };
  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  };
  _proto.insertRule = function insertRule2(rule, index2, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }
    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;
      if (rule.type === "conditional" || rule.type === "keyframes") {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);
        if (latestNativeParent === false) {
          return false;
        }
        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }
      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }
    var ruleStr = rule.toString();
    if (!ruleStr)
      return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
    if (nativeRule === false) {
      return false;
    }
    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };
  _proto.refCssRule = function refCssRule(rule, index2, cssRule) {
    rule.renderable = cssRule;
    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules.splice(index2, 0, cssRule);
    }
  };
  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return true;
  };
  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  };
  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    this.element.sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return this.insertRule(rule, index2);
  };
  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };
  return DomRenderer2;
}();
var instanceCounter = 0;
var Jss = /* @__PURE__ */ function() {
  function Jss2(options) {
    this.id = instanceCounter++;
    this.version = "10.9.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId,
      Renderer: import_is_in_browser.default ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });
    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: "internal"
      });
    }
    this.setup(options);
  }
  var _proto = Jss2.prototype;
  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }
    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }
    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }
    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }
    if (options.insertionPoint != null)
      this.options.insertionPoint = options.insertionPoint;
    if ("Renderer" in options) {
      this.options.Renderer = options.Renderer;
    }
    if (options.plugins)
      this.use.apply(this, options.plugins);
    return this;
  };
  _proto.createStyleSheet = function createStyleSheet(styles2, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, index2 = _options.index;
    if (typeof index2 !== "number") {
      index2 = sheets.index === 0 ? 0 : sheets.index + 1;
    }
    var sheet = new StyleSheet(styles2, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index2
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };
  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  };
  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof name === "object") {
      return this.createRule(void 0, name, style);
    }
    var ruleOptions = _extends({}, options, {
      name,
      jss: this,
      Renderer: this.options.Renderer
    });
    if (!ruleOptions.generateId)
      ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes)
      ruleOptions.classes = {};
    if (!ruleOptions.keyframes)
      ruleOptions.keyframes = {};
    var rule = createRule(name, style, ruleOptions);
    if (rule)
      this.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.use = function use() {
    var _this = this;
    for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins2[_key] = arguments[_key];
    }
    plugins2.forEach(function(plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };
  return Jss2;
}();
var createJss = function createJss2(options) {
  return new Jss(options);
};
var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
function getDynamicStyles(styles2) {
  var to = null;
  for (var key in styles2) {
    var value = styles2[key];
    var type = typeof value;
    if (type === "function") {
      if (!to)
        to = {};
      to[key] = value;
    } else if (type === "object" && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to)
          to = {};
        to[key] = extracted;
      }
    }
  }
  return to;
}
var index = createJss();

// node_modules/@mui/styles/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js
var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
var functionPlugin = function functionPlugin2() {
  return {
    onCreateRule: function onCreateRule8(name, decl, options) {
      if (typeof decl !== "function")
        return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule)
        return style;
      var fnValues = {};
      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== "function")
          continue;
        delete style[prop];
        fnValues[prop] = value;
      }
      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs];
      if (fnRule) {
        styleRule.style = fnRule(data) || {};
        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === "function") {
              true ? (0, import_tiny_warning2.default)(false, "[JSS] Function values inside function rules are not supported.") : void 0;
              break;
            }
          }
        }
      }
      var fnValues = styleRule[fnValuesNs];
      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};
var jss_plugin_rule_value_function_esm_default = functionPlugin;

// node_modules/@mui/styles/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
var at = "@global";
var atPrefix = "@global ";
var GlobalContainerRule = /* @__PURE__ */ function() {
  function GlobalContainerRule2(key, styles2, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var selector in styles2) {
      this.rules.add(selector, styles2[selector]);
    }
    this.rules.process();
  }
  var _proto = GlobalContainerRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule)
      this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return GlobalContainerRule2;
}();
var GlobalPrefixedRule = /* @__PURE__ */ function() {
  function GlobalPrefixedRule2(key, style, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }
  var _proto2 = GlobalPrefixedRule2.prototype;
  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : "";
  };
  return GlobalPrefixedRule2;
}();
var separatorRegExp = /\s*,\s*/g;
function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = "";
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1])
      scoped += ", ";
  }
  return scoped;
}
function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules)
    return;
  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }
  delete style[at];
}
function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  for (var prop in style) {
    if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
      continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends({}, options, {
      selector
    }));
    delete style[prop];
  }
}
function jssGlobal() {
  function onCreateRule8(name, styles2, options) {
    if (!name)
      return null;
    if (name === at) {
      return new GlobalContainerRule(name, styles2, options);
    }
    if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles2, options);
    }
    var parent = options.parent;
    if (parent) {
      if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
        options.scoped = false;
      }
    }
    if (!options.selector && options.scoped === false) {
      options.selector = name;
    }
    return null;
  }
  function onProcessRule(rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }
  return {
    onCreateRule: onCreateRule8,
    onProcessRule
  };
}
var jss_plugin_global_esm_default = jssGlobal;

// node_modules/@mui/styles/node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js
var import_tiny_warning3 = __toModule(require_tiny_warning_cjs());
var separatorRegExp2 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp2 = /\$([\w-]+)/g;
function jssNested() {
  function getReplaceRef(container, sheet) {
    return function(match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);
      if (rule) {
        return rule.selector;
      }
      true ? (0, import_tiny_warning3.default)(false, '[JSS] Could not find the referenced rule "' + key + '" in "' + (container.options.meta || container.toString()) + '".') : void 0;
      return key;
    };
  }
  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp2);
    var nestedSelectors = nestedProp.split(separatorRegExp2);
    var result = "";
    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];
      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result)
          result += ", ";
        result += nested.indexOf("&") !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }
    return result;
  }
  function getOptions(rule, container, prevOptions) {
    if (prevOptions)
      return _extends({}, prevOptions, {
        index: prevOptions.index + 1
      });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
    var options = _extends({}, rule.options, {
      nestingLevel,
      index: container.indexOf(rule) + 1
    });
    delete options.name;
    return options;
  }
  function onProcessStyle2(style, rule, sheet) {
    if (rule.type !== "style")
      return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef3;
    for (var prop in style) {
      var isNested = prop.indexOf("&") !== -1;
      var isNestedConditional = prop[0] === "@";
      if (!isNested && !isNestedConditional)
        continue;
      options = getOptions(styleRule, container, options);
      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector);
        if (!replaceRef3)
          replaceRef3 = getReplaceRef(container, sheet);
        selector = selector.replace(refRegExp2, replaceRef3);
        var name = styleRule.key + "-" + prop;
        if ("replaceRule" in container) {
          container.replaceRule(name, style[prop], _extends({}, options, {
            selector
          }));
        } else {
          container.addRule(name, style[prop], _extends({}, options, {
            selector
          }));
        }
      } else if (isNestedConditional) {
        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }
      delete style[prop];
    }
    return style;
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var jss_plugin_nested_esm_default = jssNested;

// node_modules/@mui/styles/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js
var import_hyphenate_style_name = __toModule(require_index_cjs());
function convertCase(style) {
  var converted = {};
  for (var prop in style) {
    var key = prop.indexOf("--") === 0 ? prop : (0, import_hyphenate_style_name.default)(prop);
    converted[key] = style[prop];
  }
  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks))
      converted.fallbacks = style.fallbacks.map(convertCase);
    else
      converted.fallbacks = convertCase(style.fallbacks);
  }
  return converted;
}
function camelCase() {
  function onProcessStyle2(style) {
    if (Array.isArray(style)) {
      for (var index2 = 0; index2 < style.length; index2++) {
        style[index2] = convertCase(style[index2]);
      }
      return style;
    }
    return convertCase(style);
  }
  function onChangeValue2(value, prop, rule) {
    if (prop.indexOf("--") === 0) {
      return value;
    }
    var hyphenatedProp = (0, import_hyphenate_style_name.default)(prop);
    if (prop === hyphenatedProp)
      return value;
    rule.prop(hyphenatedProp, value);
    return null;
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_camel_case_esm_default = camelCase;

// node_modules/@mui/styles/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js
var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
var defaultUnits = {
  "animation-delay": ms,
  "animation-duration": ms,
  "background-position": px,
  "background-position-x": px,
  "background-position-y": px,
  "background-size": px,
  border: px,
  "border-bottom": px,
  "border-bottom-left-radius": px,
  "border-bottom-right-radius": px,
  "border-bottom-width": px,
  "border-left": px,
  "border-left-width": px,
  "border-radius": px,
  "border-right": px,
  "border-right-width": px,
  "border-top": px,
  "border-top-left-radius": px,
  "border-top-right-radius": px,
  "border-top-width": px,
  "border-width": px,
  "border-block": px,
  "border-block-end": px,
  "border-block-end-width": px,
  "border-block-start": px,
  "border-block-start-width": px,
  "border-block-width": px,
  "border-inline": px,
  "border-inline-end": px,
  "border-inline-end-width": px,
  "border-inline-start": px,
  "border-inline-start-width": px,
  "border-inline-width": px,
  "border-start-start-radius": px,
  "border-start-end-radius": px,
  "border-end-start-radius": px,
  "border-end-end-radius": px,
  margin: px,
  "margin-bottom": px,
  "margin-left": px,
  "margin-right": px,
  "margin-top": px,
  "margin-block": px,
  "margin-block-end": px,
  "margin-block-start": px,
  "margin-inline": px,
  "margin-inline-end": px,
  "margin-inline-start": px,
  padding: px,
  "padding-bottom": px,
  "padding-left": px,
  "padding-right": px,
  "padding-top": px,
  "padding-block": px,
  "padding-block-end": px,
  "padding-block-start": px,
  "padding-inline": px,
  "padding-inline-end": px,
  "padding-inline-start": px,
  "mask-position-x": px,
  "mask-position-y": px,
  "mask-size": px,
  height: px,
  width: px,
  "min-height": px,
  "max-height": px,
  "min-width": px,
  "max-width": px,
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  "inset-block": px,
  "inset-block-end": px,
  "inset-block-start": px,
  "inset-inline": px,
  "inset-inline-end": px,
  "inset-inline-start": px,
  "box-shadow": px,
  "text-shadow": px,
  "column-gap": px,
  "column-rule": px,
  "column-rule-width": px,
  "column-width": px,
  "font-size": px,
  "font-size-delta": px,
  "letter-spacing": px,
  "text-decoration-thickness": px,
  "text-indent": px,
  "text-stroke": px,
  "text-stroke-width": px,
  "word-spacing": px,
  motion: px,
  "motion-offset": px,
  outline: px,
  "outline-offset": px,
  "outline-width": px,
  perspective: px,
  "perspective-origin-x": percent,
  "perspective-origin-y": percent,
  "transform-origin": percent,
  "transform-origin-x": percent,
  "transform-origin-y": percent,
  "transform-origin-z": percent,
  "transition-delay": ms,
  "transition-duration": ms,
  "vertical-align": px,
  "flex-basis": px,
  "shape-margin": px,
  size: px,
  gap: px,
  grid: px,
  "grid-gap": px,
  "row-gap": px,
  "grid-row-gap": px,
  "grid-column-gap": px,
  "grid-template-rows": px,
  "grid-template-columns": px,
  "grid-auto-rows": px,
  "grid-auto-columns": px,
  "box-shadow-x": px,
  "box-shadow-y": px,
  "box-shadow-blur": px,
  "box-shadow-spread": px,
  "font-line-height": px,
  "text-shadow-x": px,
  "text-shadow-y": px,
  "text-shadow-blur": px
};
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;
  var replace = function replace2(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }
  return newObj;
}
var units = addCamelCasedVersion(defaultUnits);
function iterate(prop, value, options) {
  if (value == null)
    return value;
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === "object") {
    if (prop === "fallbacks") {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === "number" && isNaN(value) === false) {
    var unit = options[prop] || units[prop];
    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
    }
    return value.toString();
  }
  return value;
}
function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }
  var camelCasedOptions = addCamelCasedVersion(options);
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style")
      return style;
    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }
    return style;
  }
  function onChangeValue2(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_default_unit_esm_default = defaultUnit;

// node_modules/@mui/styles/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js
var import_css_vendor = __toModule(require_css_vendor_cjs());
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === "keyframes") {
      var atRule = rule;
      atRule.at = (0, import_css_vendor.supportedKeyframes)(atRule.at);
    }
  }
  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];
      if (prop === "fallbacks" && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }
      var changeProp = false;
      var supportedProp = (0, import_css_vendor.supportedProperty)(prop);
      if (supportedProp && supportedProp !== prop)
        changeProp = true;
      var changeValue = false;
      var supportedValue$1 = (0, import_css_vendor.supportedValue)(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value)
        changeValue = true;
      if (changeProp || changeValue) {
        if (changeProp)
          delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }
    return style;
  }
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style")
      return style;
    return prefixStyle(style);
  }
  function onChangeValue2(value, prop) {
    return (0, import_css_vendor.supportedValue)(prop, toCssValue(value)) || value;
  }
  return {
    onProcessRule,
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_vendor_prefixer_esm_default = jssVendorPrefixer;

// node_modules/@mui/styles/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
function jssPropsSort() {
  var sort = function sort2(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }
    return prop0.length - prop1.length;
  };
  return {
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (rule.type !== "style")
        return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);
      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }
      return newStyle;
    }
  };
}
var jss_plugin_props_sort_esm_default = jssPropsSort;

// node_modules/@mui/styles/jssPreset/jssPreset.js
function jssPreset() {
  return {
    plugins: [
      jss_plugin_rule_value_function_esm_default(),
      jss_plugin_global_esm_default(),
      jss_plugin_nested_esm_default(),
      jss_plugin_camel_case_esm_default(),
      jss_plugin_default_unit_esm_default(),
      typeof window === "undefined" ? null : jss_plugin_vendor_prefixer_esm_default(),
      jss_plugin_props_sort_esm_default()
    ]
  };
}

// node_modules/@mui/styles/makeStyles/makeStyles.js
var React5 = __toModule(require_react());

// node_modules/@mui/styles/mergeClasses/mergeClasses.js
function mergeClasses(options = {}) {
  const {
    baseClasses,
    newClasses,
    Component
  } = options;
  if (!newClasses) {
    return baseClasses;
  }
  const nextClasses = _extends({}, baseClasses);
  if (true) {
    if (typeof newClasses === "string") {
      console.error([`MUI: The value \`${newClasses}\` provided to the classes prop of ${getDisplayName(Component)} is incorrect.`, "You might want to use the className prop instead."].join("\n"));
      return baseClasses;
    }
  }
  Object.keys(newClasses).forEach((key) => {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error([`MUI: The key \`${key}\` provided to the classes prop is not implemented in ${getDisplayName(Component)}.`, `You can only override one of the following: ${Object.keys(baseClasses).join(",")}.`].join("\n"));
      }
      if (newClasses[key] && typeof newClasses[key] !== "string") {
        console.error([`MUI: The key \`${key}\` provided to the classes prop is not valid for ${getDisplayName(Component)}.`, `You need to provide a non empty string instead of: ${newClasses[key]}.`].join("\n"));
      }
    }
    if (newClasses[key]) {
      nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
    }
  });
  return nextClasses;
}

// node_modules/@mui/styles/makeStyles/multiKeyStore.js
var multiKeyStore = {
  set: (cache, key1, key2, value) => {
    let subCache = cache.get(key1);
    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }
    subCache.set(key2, value);
  },
  get: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : void 0;
  },
  delete: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
var multiKeyStore_default = multiKeyStore;

// node_modules/@mui/styles/StylesProvider/StylesProvider.js
var React4 = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var import_jsx_runtime = __toModule(require_jsx_runtime());
var _excluded = ["children", "injectFirst", "disableGeneration"];
var jss = createJss(jssPreset());
var generateClassName = createGenerateClassName();
var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
var StylesContext = /* @__PURE__ */ React4.createContext(defaultOptions);
if (true) {
  StylesContext.displayName = "StylesContext";
}
var injectFirstNode;
function StylesProvider(props) {
  const {
    children,
    injectFirst = false,
    disableGeneration = false
  } = props, localOptions = _objectWithoutPropertiesLoose(props, _excluded);
  const outerOptions = React4.useContext(StylesContext);
  const context = _extends({}, outerOptions, {
    disableGeneration
  }, localOptions);
  if (true) {
    if (typeof window === "undefined" && !context.sheetsManager) {
      console.error("MUI: You need to use the ServerStyleSheets API when rendering on the server.");
    }
  }
  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error("MUI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.");
    }
  }
  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error("MUI: You cannot use the jss and injectFirst props at the same time.");
    }
  }
  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== "undefined") {
    if (!injectFirstNode) {
      const head = document.head;
      injectFirstNode = document.createComment("mui-inject-first");
      head.insertBefore(injectFirstNode, head.firstChild);
    }
    context.jss = createJss({
      plugins: jssPreset().plugins,
      insertionPoint: injectFirstNode
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StylesContext.Provider, {
    value: context,
    children
  });
}
true ? StylesProvider.propTypes = {
  children: import_prop_types.default.node,
  disableGeneration: import_prop_types.default.bool,
  generateClassName: import_prop_types.default.func,
  injectFirst: import_prop_types.default.bool,
  jss: import_prop_types.default.object,
  serverGenerateClassName: import_prop_types.default.func,
  sheetsCache: import_prop_types.default.object,
  sheetsManager: import_prop_types.default.object,
  sheetsRegistry: import_prop_types.default.object
} : void 0;
if (true) {
  true ? StylesProvider.propTypes = exactProp(StylesProvider.propTypes) : void 0;
}

// node_modules/@mui/styles/makeStyles/indexCounter.js
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;
  if (true) {
    if (indexCounter >= 0) {
      console.warn(["MUI: You might have a memory leak.", "The indexCounter is not supposed to grow that much."].join("\n"));
    }
  }
  return indexCounter;
}

// node_modules/@mui/styles/propsToClassKey/propsToClassKey.js
var _excluded2 = ["variant"];
function isEmpty(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

// node_modules/@mui/styles/getStylesCreator/noopTheme.js
var noopTheme = {};
var noopTheme_default = noopTheme;

// node_modules/@mui/styles/getStylesCreator/getStylesCreator.js
function getStylesCreator(stylesOrCreator) {
  const themingEnabled = typeof stylesOrCreator === "function";
  if (true) {
    if (typeof stylesOrCreator !== "object" && !themingEnabled) {
      console.error(["MUI: The `styles` argument provided is invalid.", "You need to provide a function generating the styles or a styles object."].join("\n"));
    }
  }
  return {
    create: (theme, name) => {
      let styles2;
      try {
        styles2 = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === noopTheme_default) {
            console.error(["MUI: The `styles` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
          }
        }
        throw err;
      }
      if (!name || !theme.components || !theme.components[name] || !theme.components[name].styleOverrides && !theme.components[name].variants) {
        return styles2;
      }
      const overrides = theme.components[name].styleOverrides || {};
      const variants = theme.components[name].variants || [];
      const stylesWithOverrides = _extends({}, styles2);
      Object.keys(overrides).forEach((key) => {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(["MUI: You are trying to override a style that does not exist.", `Fix the \`${key}\` key of \`theme.components.${name}.styleOverrides\`.`, "", `If you intentionally wanted to add a new key, please use the theme.components[${name}].variants option.`].join("\n"));
          }
        }
        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key] || {}, overrides[key]);
      });
      variants.forEach((definition) => {
        const classKey = propsToClassKey(definition.props);
        stylesWithOverrides[classKey] = deepmerge(stylesWithOverrides[classKey] || {}, definition.style);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

// node_modules/@mui/styles/makeStyles/makeStyles.js
var _excluded3 = ["name", "classNamePrefix", "Component", "defaultTheme"];
function getClasses({
  state,
  stylesOptions
}, classes, Component) {
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }
  if (!state.cacheClasses) {
    state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    };
  }
  let generate = false;
  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }
  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }
  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }
  return state.cacheClasses.value;
}
function attach({
  state,
  theme,
  stylesOptions,
  stylesCreator,
  name
}, props) {
  if (stylesOptions.disableGeneration) {
    return;
  }
  let sheetManager = multiKeyStore_default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore_default.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }
  const options = _extends({}, stylesCreator.options, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === "boolean" ? stylesOptions.flip : theme.direction === "rtl"
  });
  options.generateId = options.serverGenerateClassName || options.generateClassName;
  const sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    let staticSheet;
    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore_default.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }
    const styles2 = stylesCreator.create(theme, name);
    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles2, _extends({
        link: false
      }, options));
      staticSheet.attach();
      if (stylesOptions.sheetsCache) {
        multiKeyStore_default.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }
    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }
    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles2);
  }
  if (sheetManager.dynamicStyles) {
    const dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });
    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }
  sheetManager.refs += 1;
}
function update({
  state
}, props) {
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}
function detach({
  state,
  theme,
  stylesOptions,
  stylesCreator
}) {
  if (stylesOptions.disableGeneration) {
    return;
  }
  const sheetManager = multiKeyStore_default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  const sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    multiKeyStore_default.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }
  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}
function useSynchronousEffect(func, values) {
  const key = React5.useRef([]);
  let output;
  const currentKey = React5.useMemo(() => ({}), values);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }
  React5.useEffect(() => () => {
    if (output) {
      output();
    }
  }, [currentKey]);
}
function makeStyles2(stylesOrCreator, options = {}) {
  const {
    name,
    classNamePrefix: classNamePrefixOption,
    Component,
    defaultTheme = noopTheme_default
  } = options, stylesOptions2 = _objectWithoutPropertiesLoose(options, _excluded3);
  const stylesCreator = getStylesCreator(stylesOrCreator);
  const classNamePrefix = name || classNamePrefixOption || "makeStyles";
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };
  const useStyles2 = (props = {}) => {
    const theme = useTheme() || defaultTheme;
    const stylesOptions = _extends({}, React5.useContext(StylesContext), stylesOptions2);
    const instance = React5.useRef();
    const shouldUpdate = React5.useRef();
    useSynchronousEffect(() => {
      const current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return () => {
        detach(current);
      };
    }, [theme, stylesCreator]);
    React5.useEffect(() => {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }
      shouldUpdate.current = true;
    });
    const classes = getClasses(instance.current, props.classes, Component);
    if (true) {
      React5.useDebugValue(classes);
    }
    if (true) {
      const supportedComponents = ["MuiAvatar", "MuiBadge", "MuiButton", "MuiButtonGroup", "MuiChip", "MuiDivider", "MuiFab", "MuiPaper", "MuiToolbar", "MuiTypography", "MuiAlert", "MuiPagination", "MuiPaginationItem", "MuiSkeleton", "MuiTimelineDot"];
      if (name && supportedComponents.indexOf(name) >= 0 && props.variant && !classes[props.variant]) {
        console.error([`MUI: You are using a variant value \`${props.variant}\` for which you didn't define styles.`, `Please create a new variant matcher in your theme for this variant. To learn more about matchers visit https://mui.com/r/custom-component-variants.`].join("\n"));
      }
    }
    return classes;
  };
  return useStyles2;
}

// node_modules/@mui/styles/withStyles/withStyles.js
var React6 = __toModule(require_react());
var import_prop_types2 = __toModule(require_prop_types());
var import_hoist_non_react_statics = __toModule(require_hoist_non_react_statics_cjs());
var import_jsx_runtime2 = __toModule(require_jsx_runtime());
var _excluded4 = ["defaultTheme", "withTheme", "name"];
var _excluded22 = ["classes"];
var withStyles = (stylesOrCreator, options = {}) => (Component) => {
  const {
    defaultTheme,
    withTheme = false,
    name
  } = options, stylesOptions = _objectWithoutPropertiesLoose(options, _excluded4);
  if (true) {
    if (Component === void 0) {
      throw new Error(["You are calling withStyles(styles)(Component) with an undefined component.", "You may have forgotten to import it."].join("\n"));
    }
  }
  let classNamePrefix = name;
  if (true) {
    if (!name) {
      const displayName = getDisplayName(Component);
      if (displayName !== void 0) {
        classNamePrefix = displayName;
      }
    }
  }
  const useStyles2 = makeStyles2(stylesOrCreator, _extends({
    defaultTheme,
    Component,
    name: name || Component.displayName,
    classNamePrefix
  }, stylesOptions));
  const WithStyles = /* @__PURE__ */ React6.forwardRef(function WithStyles2(props, ref) {
    const other = _objectWithoutPropertiesLoose(props, _excluded22);
    const classes = useStyles2(_extends({}, Component.defaultProps, props));
    let theme;
    let more = other;
    if (typeof name === "string" || withTheme) {
      theme = useTheme() || defaultTheme;
      if (name) {
        more = getThemeProps({
          theme,
          name,
          props: other
        });
      }
      if (withTheme && !more.theme) {
        more.theme = theme;
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, _extends({
      ref,
      classes
    }, more));
  });
  true ? WithStyles.propTypes = {
    classes: import_prop_types2.default.object
  } : void 0;
  if (true) {
    WithStyles.displayName = `WithStyles(${getDisplayName(Component)})`;
  }
  (0, import_hoist_non_react_statics.default)(WithStyles, Component);
  if (true) {
    WithStyles.Naked = Component;
    WithStyles.options = options;
    WithStyles.useStyles = useStyles2;
  }
  return WithStyles;
};
var withStyles_default = withStyles;

// node_modules/@mui/styles/index.js
if (typeof window !== "undefined") {
  ponyfillGlobal_default["__@mui/styles-init__"] = ponyfillGlobal_default["__@mui/styles-init__"] || 0;
  if (ponyfillGlobal_default["__@mui/styles-init__"] === 1) {
    console.warn(["It looks like there are several instances of `@mui/styles` initialized in this application.", "This may cause theme propagation issues, broken class names, specificity issues, and makes your application bigger without a good reason.", "", "See https://mui.com/r/styles-instance-warning for more info."].join("\n"));
  }
  ponyfillGlobal_default["__@mui/styles-init__"] += 1;
}

// admin/src/components/SelectID.tsx
var styles = () => ({});
var SelectID = class extends import_react4.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectId: true
    };
    this.selectIdValue = void 0;
    console.log("constructor");
  }
  render() {
    console.log(this.state.showSelectId);
    if (this.state.showSelectId) {
      return /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("div", null, "Gugus!!!"), /* @__PURE__ */ import_react4.default.createElement(import_SelectID.default, {
        key: "tableSelect",
        imagePrefix: "../..",
        dialogName: this.props.dialogName,
        themeType: this.props.themeType,
        socket: this.props.socket,
        statesOnly: true,
        selected: this.selectIdValue,
        onClose: () => this.props.onChange(void 0),
        onOk: (selected) => {
          this.setState({showSelectId: false});
          this.props.onChange(selected);
          this.selectIdValue = selected;
          console.log(selected);
        }
      }));
    } else {
      return /* @__PURE__ */ import_react4.default.createElement("div", null, "not showing!");
    }
  }
};
var SelectID_default = withStyles_default(styles)(SelectID);

// admin/src/pages/ListDevices.tsx
var showSelectId = (dialogName, connection, setSelectIdValue, triggerSelectId) => {
  console.log("showSelectId", SelectID_default);
  if (!triggerSelectId)
    return;
  return /* @__PURE__ */ import_react5.default.createElement(SelectID_default, {
    dialogName,
    themeType: "dark",
    socket: connection,
    onChange: (value) => setSelectIdValue(value)
  });
};
var ListDevices = (props) => {
  const {alive: adapterRunning, connected: driverReady} = (0, import_iobroker_react2.useAdapter)();
  const connection = (0, import_hooks2.useConnection)();
  const [triggerSelectId, setTriggerSelectId] = import_react5.default.useState(false);
  const [selectIdValue, setSelectIdValue] = import_react5.default.useState();
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    id: "ListDevices"
  }, showSelectId("test", connection, setSelectIdValue, triggerSelectId), ";", /* @__PURE__ */ import_react5.default.createElement(Button_default, {
    onClick: () => {
      {
        console.log("click to open selectID");
        setTriggerSelectId(true);
      }
    },
    variant: "outlined"
  }, "SelectID"));
};

// admin/src/lib/useDevices.ts
var import_react6 = __toModule(require_react());
var DevicesContext = import_react6.default.createContext({
  devices: {},
  async updateDevices() {
  }
});
function useDevices() {
  const [devices, setDevices] = import_react6.default.useState();
  async function updateDevices() {
  }
  return [devices, updateDevices];
}

// admin/src/tab.tsx
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
function ErrorFallback({error, resetErrorBoundary}) {
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    role: "alert"
  }, /* @__PURE__ */ import_react7.default.createElement("p", null, "Something went wrong:"), /* @__PURE__ */ import_react7.default.createElement("pre", null, error.stack), /* @__PURE__ */ import_react7.default.createElement("button", {
    onClick: resetErrorBoundary
  }, "Try again"));
}
var Root = () => {
  const [value, setValue] = import_react7.default.useState(0);
  const {translate: _} = (0, import_hooks3.useI18n)();
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const [devices, updateDevices] = useDevices();
  return /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement(Tabs_default, {
    value,
    onChange: handleTabChange
  }, /* @__PURE__ */ import_react7.default.createElement(Tab_default, {
    label: _("tabListDevices")
  }), /* @__PURE__ */ import_react7.default.createElement(Tab_default, {
    label: _("tabAddNewDevices")
  })), /* @__PURE__ */ import_react7.default.createElement(TabPanel, {
    value,
    index: 0
  }, /* @__PURE__ */ import_react7.default.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /* @__PURE__ */ import_react7.default.createElement(ListDevices, {
    devices
  }))), /* @__PURE__ */ import_react7.default.createElement(TabPanel, {
    value,
    index: 1
  }, /* @__PURE__ */ import_react7.default.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /* @__PURE__ */ import_react7.default.createElement(AddNewDevices, {
    devices
  }))));
};
import_react_dom.default.render(/* @__PURE__ */ import_react7.default.createElement(import_app.IoBrokerApp, {
  name: "digitalstrom-vdc",
  translations
}, /* @__PURE__ */ import_react7.default.createElement(Root, null)), document.getElementById("root"));
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
/** @license MUI v5.2.3
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=tab.js.map
