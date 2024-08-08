export const autoImport = function (path) {
  let defineCall = require(path);
  if (typeof defineCall === "object" && defineCall.__esModule) {
    // Babel/ES6 module compatability
    defineCall = defineCall["default"];
  }
  return defineCall(sequelize, Sequelize.DataTypes);
};
