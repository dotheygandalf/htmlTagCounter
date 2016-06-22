(function() {
  'use strict'

  function codeViewerController($scope) {

    $scope.$on('selectTag', function(event, tag) {
      $scope.highlightTags(tag);
    });

    $scope.editorOptions = {
      mode: 'htmlmixed',
      height: '600px',
      lineWrapping : false,
      lineNumbers: true,
      readOnly: true
    };

    $scope.codemirrorLoaded = function(_editor) {
      $scope.editor = _editor;

      $scope.editor.on('scroll', function() {
        updateHighlights();
      });
    };

    function updateHighlights() {
      $('.cm-tag:findExactly(\'' + $scope.tag + '\')').addClass('selected');
    }

    $scope.highlightTags = function(tag) {
      $scope.tag = tag;

      var cursor = $scope.editor.getSearchCursor(tag.toLowerCase(), null);
      if(cursor && cursor.findNext()) {
        $scope.editor.setSelection(cursor.pos.from, cursor.pos.to);
      }
      $('.cm-tag').removeClass('selected');
      $('.cm-tag:findExactly(\'' + tag + '\')').addClass('selected');
    };
  }

  angular.module('htmlTagCounterApp')
  .controller('codeViewerController', codeViewerController)
  .directive('codeViewer', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        content: '='
      },
      templateUrl: 'directives/codeViewer/codeViewer.tpl.html',
      controller: 'codeViewerController'
    };
  });
})();
