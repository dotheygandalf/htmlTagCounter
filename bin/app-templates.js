angular.module('templates-app', ['directives/codeViewer/codeViewer.tpl.html', 'directives/tagCountViewer/tagCountViewer.tpl.html', 'directives/tagList/tagList.tpl.html']);

angular.module("directives/codeViewer/codeViewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/codeViewer/codeViewer.tpl.html",
    "<div class=\"code-viewer\">\n" +
    "  <div ui-codemirror=\"{ onLoad : codemirrorLoaded }\" ng-model=\"content\" ui-codemirror-opts=\"editorOptions\"></div>\n" +
    "</div>");
}]);

angular.module("directives/tagCountViewer/tagCountViewer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/tagCountViewer/tagCountViewer.tpl.html",
    "<div class=\"tag-count-viewer\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-lg-12\">\n" +
    "      <form novalidate name=\"urlForm\" ng-submit=\"go()\">\n" +
    "        <label>Get Source from URL</label>\n" +
    "        <div class=\"input-group\">\n" +
    "          <input class=\"form-control\" name=\"url\" ng-model=\"url\" placeholder=\"https://www.website.abc\" type=\"url\" required=\"required\">\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-default\" type=\"button\" ng-click=\"go()\">Go!</button>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-lg-12\" ng-if=\"!error && !isLoading\">\n" +
    "      <code-viewer content=\"html\" class=\"col-lg-10\"></code-viewer>\n" +
    "      <tag-list tags=\"tags\" ng-if=\"tags\" class=\"col-lg-2\"></tag-list>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-lg-12\" ng-if=\"error && !isLoading\">\n" +
    "      <h1>Woops</h1>\n" +
    "      <h4>It looks like there was a problem retrieving your reqested page.</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-lg-12\" ng-if=\"isLoading\">\n" +
    "      <div class=\"spinner\">\n" +
    "        <i class=\"fa fa-circle-o-notch fa-spin\" aria-hidden=\"true\"></i>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("directives/tagList/tagList.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/tagList/tagList.tpl.html",
    "<div class=\"tag-list\">\n" +
    "  <ul>\n" +
    "    <li ng-repeat=\"item in tags\" class=\"tag-list-item\" ng-click=\"selectTag(item.tag)\" ng-class=\"{ selected: isTagSelected(item.tag) }\">\n" +
    "      <div>{{ item.tag | formatTag }}</div>\n" +
    "      <div>{{ item.count }}</div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>");
}]);
