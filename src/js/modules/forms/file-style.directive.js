/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('naut')
        .directive('filestyle', filestyle);
    
    function filestyle() {
      return {
        restrict: 'A',
        controller: controller
      };

      function controller($scope, $element) {
        var options = $element.data();
        
        // old usage support
          options.classInput = $element.data('classinput') || options.classInput;
        
        $element.filestyle(options);
      }
    }
})();
