# ProtectImage.js

<img src="https://user-images.githubusercontent.com/65585002/115801594-21660000-a3ab-11eb-88a0-3dddb0c1afbe.png" height="200" align="right">
ProtectImage.js is a Javascript library that helps prevent image theft by disabling traditional user interactions to download/copy images.
<hr>


ProtectImage.js uses HTML5 [CanvasAPI](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and the `protected` attribute in images to protect your images. It disables and prevents the client from downloading, copying and copying image addresses by porting the image into a canvas. Unlike layer-protected images, this prevents the source of the image from being visible through developer tools.


## ProtectImage.js requires 3 steps - that's it

### Step 1: Import ProtectImage.js

Add the following to the `<head>` tag of your page:

```html
<script src="https://cdn.jsdelivr.net/gh/ColonelParrot/ProtectImage.js@latest/src/script.min.js"></script>
```

### Step 2: Add the protected attribute to images you would like to protect

For example:

```html
<img src="your/src" protected/>
```

**If you have a lot of images and find it tedious to add the `protected` attribute to every one of them, skip to Option B of Step 3**

### Step 3: Initialize ProtectImageJS

#### Option A: `.init()` (if you used the `protected` attribute)

In Javascript, add:

```javascript
ProtectImageJS.init()
```

#### Option B: `.selective()`

If you want to add custom images, use `.selective()` and pass an array of images as the parameter like so:

```javascript
ProtectImageJS.selective(document.getElementsByTagName("img"))
```

This will protect every single image on the page

**Note:** It is recommend to wrap ProtectImageJS functions in a `window.onload` event to ensure the image finishes loading and styles are computed.

And you're done!

### See the live demo on JSFiddle [here](https://jsfiddle.net/ColonelParrot/he9ajn28/) (https://jsfiddle.net/ColonelParrot/he9ajn28/)
