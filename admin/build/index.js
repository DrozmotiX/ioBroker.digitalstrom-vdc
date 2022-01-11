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
  __toModule,
  require_Theme,
  require_Utils,
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
  require_zh_cn
} from "./chunk-I4AYBCHB.js";

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
