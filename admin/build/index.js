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
  require_Utils,
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
} from "./chunk-66IBHZNV.js";

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
