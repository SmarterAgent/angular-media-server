# Angular Media Server

This is an angular directive that includes media.smarteragent.com URL to an image URL. This directive has an option to define a default image and a "stand by" image while the main image is loaded. The image pre loading module used is available here: https://github.com/RevillWeb/angular-preload-image.

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `media-server-url` | String | The media.smarteragent.com URL that should be used in a `<img>` tag |
| `bg-media-server-url` | String | The media.smarteragent.com URL that should be used for a background image|
| `stand-by-server-url` | String | The media.smarteragent.com URL that reduces the quality of the original image to be used while the image in the final size is loaded |
| `background-image` | String | The image URL that should be used as background image of the HTML element |
| `default-image` | String | The URL for a default image that should be displayed if the original image fails to load |

## Install

1. Install using bower `bower install https://github.com/SmarterAgent/angular-media-server.git --save`.
2. Include the javascript file in your project
```html
<script src="../bower_components/angular-preload-image/angular-preload-image.js"></script>
```
3. Add the module as a dependency to your angular application
```javascript
var app = angular.module('MyApp', ['angular-media-server'])
```

## Basic Usage

This is the simple use case where the media server URL will be contatenated with the image URL
```html
<img ng-src="{{ imageURL }}" media-server-url="{{ mediaServerURL }}">
```

It is also possible to use this directive to set an image as the background of an HTML element
```html
<div bg-media-server-url="{{ mediaServerURL }}" background-image="{{ imageURL }}">
```

To use "pre loader" feature, it is necessary to provide the `stand-by-server-url` parameter
```html
<div bg-media-server-url="{{ mediaServerURL }}" stand-by-server-url="{{ standByMediaServerURL }}" background-image="{{ imageURL }}">
```

The default image will be shown if the original image fail to load
```html
<div bg-media-server-url="{{ mediaServerURL }}" background-image="{{ imageURL }}" default-image="../path/to/default_image.png">
```
