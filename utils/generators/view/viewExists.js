/**
 * viewExists
 *
 * Check whether the given view exist in the views directory
 */

const fs = require("fs");
const path = require("path");

const pageViews = fs.readdirSync(path.join(__dirname, "../../../views"));

const views = pageViews;

function viewExists(comp) {
  return views.indexOf(comp) >= 0;
}

module.exports = viewExists;
