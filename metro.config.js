// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: {
      src: path.resolve(__dirname, "src"),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
