System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "Frontend/vendor/github/*",
    "npm:*": "Frontend/vendor/npm/*"
  },

  map: {

  }
});
