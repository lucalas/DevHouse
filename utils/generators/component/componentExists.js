/**
 * componentExists
 *
 * Check whether the given component exist in the components directory
 */

const fs = require("fs");
const path = require("path");

const pageComponents = fs.readdirSync(path.join(__dirname, "../../../components"));

const components = pageComponents;

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
