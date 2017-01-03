# Angular Media Server
This is an angular directive that includes media.smarteragent.com URL to an image URL. This directive has an option to define a default image and a "stand by" image while the main image is loaded

## Parameters
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `media-server-url` | String | The media.smarteragent.com URL that should be used |
| `stand-by-server-url` | String | The media.smarteragent.com URL that reduces the quality of the original image to be used while the image in the final size is loaded |
| `background-image` | String | The image URL that should be used as background image of the HTML element |
| `default-image` | String | The URL for a default image that should be displayed if the original image fails to load |

## Basic Usage

This is the simple use case where the media server URL will be contatenated with the image URL
```html
<img ng-src="{{ imageURL }}" media-server-url="{{ mediaServerURL }}">
```

It is also possible to use this directive to set an image as the background of an HTML element
```html
<div media-server-url="{{ mediaServerURL }}" background-image="{{ imageURL }}">
```