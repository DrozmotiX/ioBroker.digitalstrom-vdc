import {
  Alert_default,
  Box_default,
  Button_default,
  DialogActions_default,
  DialogContent_default,
  DialogTitle_default,
  Dialog_default,
  FormControl_default,
  Grid_default,
  IconButton_default,
  InputLabel_default,
  MenuItem_default,
  Select_default,
  Tab_default,
  Tabs_default,
  TextField_default,
  Tooltip_default,
  __commonJS,
  __toModule,
  material_exports,
  require_Box,
  require_Loader,
  require_MenuItem,
  require_ModalDialog,
  require_OutlinedInput,
  require_Select,
  require_app,
  require_de,
  require_en,
  require_es,
  require_fr,
  require_hooks,
  require_i18n,
  require_it,
  require_jsx_runtime,
  require_nl,
  require_pl,
  require_pt,
  require_react,
  require_react_dom,
  require_ru,
  require_styles,
  require_utils,
  require_utils2,
  require_zh_cn,
  styled_default
} from "./chunk-MDR2AFO3.js";

// node_modules/react-error-boundary/dist/react-error-boundary.umd.js
var require_react_error_boundary_umd = __commonJS({
  "node_modules/react-error-boundary/dist/react-error-boundary.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ReactErrorBoundary = {}, global.React));
    })(exports, function(exports2, React14) {
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
      var React__namespace = /* @__PURE__ */ _interopNamespace(React14);
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
    var React14 = __importStar(require_react());
    var Dropdown = (props) => {
      const {options, selectedOption, noOptionsMessage, placeholder} = props, otherProps = __rest(props, ["options", "selectedOption", "noOptionsMessage", "placeholder"]);
      const hasOptions = !!options && options.length;
      const showNoOptionsMessage = !hasOptions && !!noOptionsMessage;
      let value;
      if (options === null || options === void 0 ? void 0 : options.length)
        value = selectedOption;
      return React14.createElement(Select_1.default, Object.assign({value: value !== null && value !== void 0 ? value : "", displayEmpty: true, input: React14.createElement(OutlinedInput_1.default, {labelWidth: 0}), margin: "dense"}, otherProps), React14.createElement(MenuItem_1.default, {value: "", disabled: true}, placeholder !== null && placeholder !== void 0 ? placeholder : ""), options && options.length && options.map(({value: value2, label}) => React14.createElement(MenuItem_1.default, {key: value2, value: value2}, label)), showNoOptionsMessage && React14.createElement(MenuItem_1.default, {key: "__empty", value: "__empty", disabled: true}, noOptionsMessage));
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
var require_i18n2 = __commonJS({
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
    __exportStar(require_i18n2(), exports);
  }
});

// node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@mui/icons-material/utils/createSvgIcon.js
var require_createSvgIcon = __commonJS({
  "node_modules/@mui/icons-material/utils/createSvgIcon.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _utils.createSvgIcon;
      }
    });
    var _utils = require_utils2();
  }
});

// node_modules/@mui/icons-material/Close.js
var require_Close = __commonJS({
  "node_modules/@mui/icons-material/Close.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    }), "Close");
    exports.default = _default;
  }
});

// admin/src/tab.tsx
var import_react9 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());
var import_react_error_boundary = __toModule(require_react_error_boundary_umd());
var import_app = __toModule(require_app());
var import_hooks5 = __toModule(require_hooks());

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
var import_react6 = __toModule(require_react());
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
var NoDevices = () => {
  const {translate: _} = (0, import_hooks.useI18n)();
  return /* @__PURE__ */ import_react2.default.createElement(Message, {
    severity: "info"
  }, _("No devices present"));
};

// admin/src/pages/AddNewDevices.tsx
var import_Close = __toModule(require_Close());

// admin/src/lib/Config.ts
var InitialConfig = {
  deviceConfig: {
    light: false,
    addDeviceDeviceType: "",
    configUrl: "",
    name: "",
    deviceType: "",
    color: 0,
    watchStateID: "",
    deviceSensorResolution: "",
    basicButton: "",
    DeviceSensorColorClass: "",
    DeviceSensorState: "",
    DeviceSensorType: "",
    DeviceSensorUsage: "",
    DeviceSensorMax: "",
    DeviceSensorMin: "",
    DeviceSensorSIUnit: "",
    DeviceSensorSymbol: "",
    showCreateConfirmation: "",
    manualDeviceId: "",
    showSelectId: "",
    selectIdValue: "",
    basicDoorbell: "",
    DeviceRGBLampPowerSwitch: "",
    DeviceRGBLampColormode: "",
    DeviceRGBLampDimmer: "",
    DeviceRGBLampColortemp: "",
    DeviceRGBLampHue: "",
    DeviceRGBLampSaturation: "",
    DeviceRGBLampRGB: "",
    sensorList: "",
    unitValue: "",
    sensorMultiplier: ""
  }
};
var Config = {
  light: false,
  configUrl: "",
  name: "",
  deviceType: "",
  color: 0,
  watchStateID: "",
  addDeviceDeviceType: "",
  basicButton: "",
  DeviceSensorColorClass: "",
  deviceSensorResolution: "",
  DeviceSensorState: "",
  DeviceSensorType: "",
  DeviceSensorUsage: "",
  DeviceSensorMax: "",
  DeviceSensorMin: "",
  DeviceSensorSIUnit: "",
  DeviceSensorSymbol: "",
  showCreateConfirmation: "",
  manualDeviceId: "",
  showSelectId: "",
  selectIdValue: "",
  basicDoorbell: "",
  DeviceRGBLampPowerSwitch: "",
  DeviceRGBLampColormode: "",
  DeviceRGBLampDimmer: "",
  DeviceRGBLampColortemp: "",
  DeviceRGBLampHue: "",
  DeviceRGBLampSaturation: "",
  DeviceRGBLampRGB: "",
  sensorList: "",
  unitValue: "",
  sensorMultiplier: ""
};
var clearConfig = () => {
  Config = InitialConfig.deviceConfig;
};

// admin/src/options/DeviceTypeOptions.tsx
var import_hooks4 = __toModule(require_hooks());
var import_react5 = __toModule(require_react());

// admin/src/options/ColorClassOption.tsx
var import_hooks2 = __toModule(require_hooks());
var import_react3 = __toModule(require_react());
var colorClassOptions = [
  {
    label: "Select DS Color",
    title: "selectcolor",
    disabled: true
  },
  {
    label: "1",
    title: "yellowColorClass"
  },
  {
    label: "2",
    title: "greyColorClass"
  },
  {
    label: "3",
    title: "blueColorClass"
  },
  {
    label: "4",
    title: "cyanColorClass"
  },
  {
    label: "5",
    title: "magentaColorClass"
  },
  {
    label: "6",
    title: "redColorClass"
  },
  {
    label: "7",
    title: "greenColorClass"
  },
  {
    label: "8",
    title: "blackColorClass"
  },
  {
    label: "9",
    title: "whiteColorClass"
  }
];
var SelectColorClassOptions = () => {
  const {translate: _} = (0, import_hooks2.useI18n)();
  const [colorOptions, setColorGlassOptions] = (0, import_react3.useState)("selectcolor");
  const handleColorClassOptions = (event) => {
    setColorGlassOptions(event.target.value);
    console.log(typeof event.target.value);
    Config.color = JSON.parse(event.target.value);
  };
  const ColorClassSelect = () => {
    const menuItem = [];
    for (const key in colorClassOptions) {
      menuItem.push(/* @__PURE__ */ import_react3.default.createElement(MenuItem_default, {
        disabled: colorClassOptions[key].disabled,
        key: key + colorClassOptions[key].title,
        value: colorClassOptions[key].label
      }, `${_(colorClassOptions[key].title)}`));
    }
    return menuItem;
  };
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(Box_default, {
    sx: {minWidth: 120, maxWidth: 300, width: "250px"}
  }, /* @__PURE__ */ import_react3.default.createElement(FormControl_default, null, /* @__PURE__ */ import_react3.default.createElement(InputLabel_default, {
    id: "ColorClass-select-label"
  }, _("select Color Class")), /* @__PURE__ */ import_react3.default.createElement(Select_default, {
    labelId: "ColorClass-select-label",
    id: "ColorClass",
    value: colorOptions,
    label: "select Color Class",
    onChange: handleColorClassOptions,
    sx: {width: 250}
  }, ColorClassSelect())))));
};

// admin/src/options/DefineConfigURL.tsx
var React4 = __toModule(require_react());
function DefineConfigURL() {
  const [name, setName] = React4.useState("http://localhost:8081");
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
    Config.configUrl = event.target.value;
  };
  return /* @__PURE__ */ React4.createElement(Box_default, {
    component: "form",
    sx: {
      "& > :not(style)": {m: 1, width: "25ch"}
    },
    noValidate: true,
    autoComplete: "off"
  }, /* @__PURE__ */ React4.createElement(TextField_default, {
    id: "outlined-name",
    label: "ConfigURL",
    value: name,
    onChange: handleChange
  }));
}

// admin/src/options/DefineName.tsx
var React5 = __toModule(require_react());
function DefineName() {
  const [name, setName] = React5.useState("VDC DeviceName");
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
    Config.name = event.target.value;
  };
  return /* @__PURE__ */ React5.createElement(Box_default, {
    component: "form",
    sx: {
      "& > :not(style)": {m: 1, width: "25ch"}
    },
    noValidate: true,
    autoComplete: "off"
  }, /* @__PURE__ */ React5.createElement(TextField_default, {
    id: "outlined-name",
    label: "Name",
    value: name,
    onChange: handleChange
  }));
}

// node_modules/@material-ui/icons/esm/utils/createSvgIcon.js
var import_utils = __toModule(require_utils());

// node_modules/@material-ui/icons/esm/Info.js
var React6 = __toModule(require_react());
var Info_default = (0, import_utils.createSvgIcon)(/* @__PURE__ */ React6.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), "Info");

// admin/src/options/DefineResolution.tsx
var React7 = __toModule(require_react());
function DefineResolution() {
  const [name, setName] = React7.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
    Config.deviceSensorResolution = event.target.value;
  };
  return /* @__PURE__ */ React7.createElement(Box_default, {
    component: "form",
    sx: {
      "& > :not(style)": {m: 1, width: "25ch"}
    },
    noValidate: true,
    autoComplete: "off"
  }, /* @__PURE__ */ React7.createElement(TextField_default, {
    id: "outlined-name",
    label: "Resolution",
    value: name,
    onChange: handleChange
  }), /* @__PURE__ */ React7.createElement(Tooltip_default, {
    title: "tooltipResolution"
  }, /* @__PURE__ */ React7.createElement(IconButton_default, null, /* @__PURE__ */ React7.createElement(Info_default, null))));
}

// admin/src/options/LightOptions.tsx
var import_hooks3 = __toModule(require_hooks());
var import_react4 = __toModule(require_react());
var outputLightOptions = [
  {
    label: "Select Light Option",
    title: "selectlight",
    disabled: true
  },
  {
    label: "basic",
    title: "outputLightBasic"
  },
  {
    label: "colorlight",
    title: "outputLightColorlight"
  },
  {
    label: "ctlight",
    title: "outputLightCTLight"
  }
];
var SelectLightOptions = () => {
  const {translate: _} = (0, import_hooks3.useI18n)();
  const [lightOptions, setOutputLightOptions] = (0, import_react4.useState)("selectlight");
  const handleChangeLightOptions = (event) => {
    setOutputLightOptions(event.target.value);
    console.log(event.target.value);
  };
  const LightOptionsSelect = () => {
    const menuItem = [];
    for (const key in outputLightOptions) {
      menuItem.push(/* @__PURE__ */ import_react4.default.createElement(MenuItem_default, {
        disabled: outputLightOptions[key].disabled,
        key: key + outputLightOptions[key].label,
        value: outputLightOptions[key].title
      }, `${_(outputLightOptions[key].label)}`));
    }
    return menuItem;
  };
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(Box_default, {
    sx: {minWidth: 120, maxWidth: 300, width: "250px"}
  }, /* @__PURE__ */ import_react4.default.createElement(FormControl_default, null, /* @__PURE__ */ import_react4.default.createElement(InputLabel_default, {
    id: "LightOptions-select-label"
  }, _("select Light Option")), /* @__PURE__ */ import_react4.default.createElement(Select_default, {
    labelId: "LightOptions-select-label",
    id: "LightOptions",
    value: lightOptions,
    label: "select Light Option",
    onChange: handleChangeLightOptions,
    sx: {width: 250}
  }, LightOptionsSelect())))));
};

// admin/src/options/DeviceTypeOptions.tsx
var deviceTypeOptions = [
  {
    label: "Select Device type",
    title: "selectDevice",
    disabled: true
  },
  {
    label: "lamp",
    title: "deviceTypeOptionsLamp"
  },
  {
    label: "rgbLamp",
    title: "deviceTypeOptionsRGBLamp"
  },
  {
    label: "sensor",
    title: "deviceTypeOptionsSensor"
  },
  {
    label: "presenceSensor",
    title: "deviceTypeOptionsMotionDetection"
  },
  {
    label: "smokeAlarm",
    title: "deviceTypeOptionsSmokeAlarm"
  },
  {
    label: "button",
    title: "deviceTypeOptionsButton"
  },
  {
    label: "doorbell",
    title: "deviceTypeOptionsDoorbell"
  },
  {
    label: "multiSensor",
    title: "deviceTypeOptionsMultiSensor"
  },
  {
    label: "awayButton",
    title: "deviceTypeOptionsAwayButton"
  }
];
var SelectDeviceType = () => {
  const {translate: _} = (0, import_hooks4.useI18n)();
  const [devicetype, sethandleDeviceType] = (0, import_react5.useState)("selectDevice");
  const handleDeviceType = (event) => {
    console.log(Config);
    sethandleDeviceType(event.target.value);
  };
  const deviceTypeSelect = () => {
    const menuItem = [];
    for (const key in deviceTypeOptions) {
      menuItem.push(/* @__PURE__ */ import_react5.default.createElement(MenuItem_default, {
        disabled: deviceTypeOptions[key].disabled,
        key: key + deviceTypeOptions[key].label,
        value: deviceTypeOptions[key].title
      }, `${_(deviceTypeOptions[key].label)}`));
    }
    return menuItem;
  };
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(Box_default, {
    sx: {minWidth: 120, maxWidth: 300, width: "250px"}
  }, /* @__PURE__ */ import_react5.default.createElement(FormControl_default, null, /* @__PURE__ */ import_react5.default.createElement(InputLabel_default, {
    id: "DeviceType-select-label"
  }, _("Select Device type")), /* @__PURE__ */ import_react5.default.createElement(Select_default, {
    labelId: "DeviceType-select-label",
    id: "DeviceType",
    value: devicetype,
    label: "select device Type",
    onChange: handleDeviceType,
    sx: {width: 250}
  }, deviceTypeSelect()))))), devicetype === "deviceTypeOptionsLamp" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null))), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(TextField_default, {
    id: "outlined-basic",
    label: "Select ID Placeholder",
    variant: "outlined"
  }))) : null, devicetype === "deviceTypeOptionsRGBLamp" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(SelectLightOptions, null), /* @__PURE__ */ import_react5.default.createElement(SelectColorClassOptions, null), /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null))), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(SelectLightOptions, null), /* @__PURE__ */ import_react5.default.createElement(SelectColorClassOptions, null))) : null, devicetype === "deviceTypeOptionsSensor" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null), /* @__PURE__ */ import_react5.default.createElement(SelectColorClassOptions, null))), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(DefineResolution, null), /* @__PURE__ */ import_react5.default.createElement("h1", null, "test1"))) : null, devicetype === "deviceTypeOptionsMotionDetection" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null))), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "test1"))) : null, devicetype === "deviceTypeOptionsSmokeAlarm" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null))), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "test1"))) : null, devicetype === "deviceTypeOptionsButton" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null))), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "test1"))) : null, devicetype === "deviceTypeOptionsDoorbell" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null))), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "test1"))) : null, devicetype === "deviceTypeOptionsMultiSensor" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null)), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "test2"), /* @__PURE__ */ import_react5.default.createElement("h1", null, "test2"))) : null, devicetype === "deviceTypeOptionsAwayButton" ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement(DefineName, null), /* @__PURE__ */ import_react5.default.createElement(DefineConfigURL, null)), /* @__PURE__ */ import_react5.default.createElement(Grid_default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: "10px",
      paddingBottom: "15px",
      alignItems: "center",
      justifyContent: "space-around",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ import_react5.default.createElement("h1", null, "test2"), /* @__PURE__ */ import_react5.default.createElement("h1", null, "test2"))) : null);
};

// admin/src/pages/AddNewDevices.tsx
var AddNewDevices = ({devices}) => {
  const [open, setOpen] = import_react6.default.useState(false);
  const {alive: adapterRunning, connected: driverReady} = (0, import_iobroker_react.useAdapter)();
  if (!adapterRunning || !driverReady)
    return /* @__PURE__ */ import_react6.default.createElement(NotRunning, null);
  const BootstrapDialog = styled_default(Dialog_default)(({theme}) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2)
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1)
    }
  }));
  const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;
    return /* @__PURE__ */ import_react6.default.createElement(DialogTitle_default, {
      sx: {m: 0, p: 2},
      ...other
    }, children, onClose ? /* @__PURE__ */ import_react6.default.createElement(IconButton_default, {
      "aria-label": "close",
      onClick: onClose,
      sx: {
        position: "absolute",
        right: 8,
        top: 8,
        color: (theme) => theme.palette.grey[500]
      }
    }, /* @__PURE__ */ import_react6.default.createElement(import_Close.default, null)) : null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    clearConfig();
  };
  return /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement(Button_default, {
    variant: "outlined",
    onClick: handleClickOpen
  }, "Add new Device"), /* @__PURE__ */ import_react6.default.createElement(BootstrapDialog, {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open
  }, /* @__PURE__ */ import_react6.default.createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose
  }, "Add Device"), /* @__PURE__ */ import_react6.default.createElement(DialogContent_default, {
    dividers: true
  }, /* @__PURE__ */ import_react6.default.createElement(SelectDeviceType, null)), /* @__PURE__ */ import_react6.default.createElement(DialogActions_default, null, /* @__PURE__ */ import_react6.default.createElement(Button_default, {
    autoFocus: true,
    onClick: handleClose
  }, "Save changes"))));
};

// admin/src/pages/ListDevices.tsx
var import_react7 = __toModule(require_react());
var import_iobroker_react2 = __toModule(require_build());
var ListDevices = (props) => {
  const {alive: adapterRunning, connected: driverReady} = (0, import_iobroker_react2.useAdapter)();
  if (!adapterRunning || !driverReady)
    return /* @__PURE__ */ import_react7.default.createElement(NotRunning, null);
  if (!props.devices)
    return /* @__PURE__ */ import_react7.default.createElement(NoDevices, null);
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    id: "ListDevices"
  }, "ListDevices");
};

// admin/src/lib/useDevices.ts
var import_react8 = __toModule(require_react());
var DevicesContext = import_react8.default.createContext({
  devices: {},
  async updateDevices() {
  }
});
function useDevices() {
  const [devices, setDevices] = import_react8.default.useState();
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
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    role: "alert"
  }, /* @__PURE__ */ import_react9.default.createElement("p", null, "Something went wrong:"), /* @__PURE__ */ import_react9.default.createElement("pre", null, error.stack), /* @__PURE__ */ import_react9.default.createElement("button", {
    onClick: resetErrorBoundary
  }, "Try again"));
}
var Root = () => {
  const [value, setValue] = import_react9.default.useState(0);
  const {translate: _} = (0, import_hooks5.useI18n)();
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const [devices, updateDevices] = useDevices();
  return /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement(Tabs_default, {
    value,
    onChange: handleTabChange
  }, /* @__PURE__ */ import_react9.default.createElement(Tab_default, {
    label: _("tabListDevices")
  }), /* @__PURE__ */ import_react9.default.createElement(Tab_default, {
    label: _("tabAddNewDevices")
  })), /* @__PURE__ */ import_react9.default.createElement(TabPanel, {
    value,
    index: 0
  }, /* @__PURE__ */ import_react9.default.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /* @__PURE__ */ import_react9.default.createElement(ListDevices, {
    devices
  }))), /* @__PURE__ */ import_react9.default.createElement(TabPanel, {
    value,
    index: 1
  }, /* @__PURE__ */ import_react9.default.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback
  }, /* @__PURE__ */ import_react9.default.createElement(AddNewDevices, {
    devices
  }))));
};
import_react_dom.default.render(/* @__PURE__ */ import_react9.default.createElement(import_app.IoBrokerApp, {
  name: "digitalstrom-vdc",
  translations
}, /* @__PURE__ */ import_react9.default.createElement(Root, null)), document.getElementById("root"));
/** @license Material-UI v4.11.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=tab.js.map
