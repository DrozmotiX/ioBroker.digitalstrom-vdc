import {
  ThemeProvider_default,
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
} from "./chunk-CMJHLSNR.js";

// admin/src/tab.tsx
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
  return /* @__PURE__ */ import_react.default.createElement("div", null);
});
var migrateSettings = (settings) => {
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
//# sourceMappingURL=tab.js.map
