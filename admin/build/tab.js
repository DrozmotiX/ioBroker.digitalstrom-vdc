import {
  Tab_default,
  Tabs_default,
  __commonJS,
  __toModule,
  require_Box,
  require_app,
  require_de,
  require_en,
  require_es,
  require_fr,
  require_hooks,
  require_it,
  require_nl,
  require_pl,
  require_pt,
  require_react,
  require_react_dom,
  require_ru,
  require_styles,
  require_zh_cn
} from "./chunk-MXOWYMLR.js";

// node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var require_react_error_boundary_umd = __commonJS({
  "node_modules/react-error-boundary/dist/react-error-boundary.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ReactErrorBoundary = {}, global.React));
    })(exports, function(exports2, React6) {
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
      var React__namespace = /* @__PURE__ */ _interopNamespace(React6);
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      var changedArray = function changedArray2(a, b) {
        if (a === void 0) {
          a = [];
        }
        if (b === void 0) {
          b = [];
        }
        return a.length !== b.length || a.some(function(item, index) {
          return !Object.is(item, b[index]);
        });
      };
      var initialState = {
        error: null
      };
      var ErrorBoundary2 = /* @__PURE__ */ function(_React$Component) {
        _inheritsLoose(ErrorBoundary3, _React$Component);
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

// admin/src/tab.tsx
var import_react5 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());
var import_react_error_boundary = __toModule(require_react_error_boundary_umd());
var import_app = __toModule(require_app());
var import_hooks = __toModule(require_hooks());

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
  const {children, value, index, ...other} = props;
  const classes = useStyles();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: classes.tabpanel,
    role: "tabpanel",
    hidden: value !== index,
    ...other
  }, value === index && /* @__PURE__ */ import_react.default.createElement(import_Box.default, {
    p: 3
  }, children));
};

// admin/src/pages/AddNewDevices.tsx
var import_react2 = __toModule(require_react());
var AddNewDevices = (props) => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    id: "AddNewDevices"
  }, "AddNewDevice");
};

// admin/src/pages/ListDevices.tsx
var import_react3 = __toModule(require_react());
var ListDevices = (props) => {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    id: "ListDevices"
  }, "ListDevices");
};

// admin/src/lib/useDevices.ts
var import_react4 = __toModule(require_react());
var DevicesContext = import_react4.default.createContext({
  devices: {},
  async updateDevices() {
  }
});
function useDevices() {
  const [devices, setDevices] = import_react4.default.useState();
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
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    role: "alert"
  }, /* @__PURE__ */ import_react5.default.createElement("p", null, "Something went wrong:"), /* @__PURE__ */ import_react5.default.createElement("pre", null, error.stack), /* @__PURE__ */ import_react5.default.createElement("button", {
    onClick: resetErrorBoundary
  }, "Try again"));
}
var Root = () => {
  const [value, setValue] = import_react5.default.useState(0);
  const {translate: _} = (0, import_hooks.useI18n)();
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const [devices, updateDevices] = useDevices();
  return /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement(Tabs_default, {
    value,
    onChange: handleTabChange
  }, /* @__PURE__ */ import_react5.default.createElement(Tab_default, {
    label: _("tabListDevices")
  }), /* @__PURE__ */ import_react5.default.createElement(Tab_default, {
    label: _("tabAddNewDevices")
  })), /* @__PURE__ */ import_react5.default.createElement(TabPanel, {
    value,
    index: 0
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /* @__PURE__ */ import_react5.default.createElement(ListDevices, {
    devices
  }))), /* @__PURE__ */ import_react5.default.createElement(TabPanel, {
    value,
    index: 1
  }, /* @__PURE__ */ import_react5.default.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /* @__PURE__ */ import_react5.default.createElement(AddNewDevices, {
    devices
  }))));
};
import_react_dom.default.render(/* @__PURE__ */ import_react5.default.createElement(import_app.IoBrokerApp, {
  name: "digitalstrom-vdc",
  translations
}, /* @__PURE__ */ import_react5.default.createElement(Root, null)), document.getElementById("root"));
//# sourceMappingURL=tab.js.map
