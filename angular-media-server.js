(function() {
  'use strict';

  angular.module('angular-media-server', ['angular-preload-image']);

  angular.module('angular-media-server').factory('utils', [function () {
    var utils = {
      bgImageCSS: bgImageCSS,
    }

    return utils;

    function bgImageCSS(imageURL) {
      return { 'background-image': 'url("' + imageURL + '")' };
    }
  }]);

  angular.module('angular-media-server').directive('mediaServerUrl', ['preLoader', function (preLoader) {
    return {
      restrict: 'A',
      terminal: true,
      priority: 100,
      link: function (scope, element, attrs) {
        var mediaServerURL = attrs.mediaServerUrl || "https://media.smarteragent.com/unsafe/";
        var defaultImage = attrs.defaultImage;
        var standByMediaServerURL = attrs.standByMediaServerUrl;

        attrs.$observe('ngSrc', function () {
          if (attrs.ngSrc) {
            var image = attrs.ngSrc;

            if (standByMediaServerURL) {
              attrs.$set('src', standByMediaServerURL + image);

              preLoader(
                mediaServerURL + image,
                function () {
                  attrs.$set('src', mediaServerURL + image);
                },
                function () {
                  if (defaultImage) attrs.$set('src', defaultImage);
                }
                )
            } else {
              attrs.$set('src', mediaServerURL + image);
            }
          } else {
            if (defaultImage) attrs.$set('src', defaultImage);
          }
          
        })
      }
    }
  }]);

  angular.module('angular-media-server').directive('bgMediaServerUrl', ['preLoader', 'utils', function (preLoader, utils) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var mediaServerURL = attrs.bgMediaServerUrl || "https://media.smarteragent.com/unsafe/";
        var defaultImage = attrs.defaultImage;
        var standByMediaServerURL = attrs.standByMediaServerUrl;

        attrs.$observe('bgImage', function () {
          if (attrs.bgImage) {
            var bgImage = attrs.bgImage;

            if (standByMediaServerURL) {
              element.css(utils.bgImageCSS(standByMediaServerURL + bgImage));

              preLoader(
                mediaServerURL + bgImage, 
                function () {
                  element.css(utils.bgImageCSS(mediaServerURL + bgImage));
                },
                function () {
                  if (defaultImage) element.css(utils.bgImageCSS(defaultImage));
                })
            } else {
              element.css(utils.bgImageCSS(mediaServerURL + bgImage))
            }
          } else {
            if (defaultImage) element.css(utils.bgImageCSS(defaultImage));
          }
        })
      }
    }
  }]);
})