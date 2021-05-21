# ProtectImage.js

<img src="https://user-images.githubusercontent.com/65585002/115808078-ca1a5c80-a3b7-11eb-9b13-5ba146baef3a.png" height="200" align="right" alt="ProtectImage.js">
ProtectImage.js is a Javascript library that helps prevent image theft by disabling traditional user interactions to download/copy images. This is useful for copyrighted images.
<hr>


ProtectImage.js uses HTML5 [CanvasAPI](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and the `protected` attribute in images to protect your images. It disables and prevents the client from downloading, copying and copying image addresses by porting the image into a canvas. Unlike layer-protected images, this prevents the source of the image from being visible through developer tools.


## ProtectImage.js requires 3 steps - that's it

### Step 1: Import ProtectImage.js

Add the following to the `<head>` tag of your page:

```html
<script src="https://cdn.jsdelivr.net/gh/ColonelParrot/ProtectImage.js@v1.2/src/ProtectImage.min.js"></script>
```

### Step 2: Add the protected attribute to images you would like to protect

For example:

```html
<img src="your/src" protected/>
```

**If you have a lot of images and find it tedious to add the `protected` attribute to every one of them, skip to Option B of Step 3**

### Step 3: Initialize ProtectImageJS

#### Option A: `ProtectImageJS.getLabelledImages()` (if you used the `protected` attribute)

In Javascript, use:

```javascript
ProtectImageJS.protect(ProtectImageJS.getLabelledImages())
```

`ProtectImageJS.getLabelledImages()` finds all images with the `protected` attribute.

#### Option B: Retrieve all image tags manually

If you want to protect a custom array of images, get all elements like so:

```javascript
ProtectImageJS.protect(document.querySelectorAll("img"))
```

This will protect every single image on the page.

**Note:** It is recommend to wrap ProtectImageJS functions in a `window.onload` event to ensure the image finishes loading and styles are computed.

And you're done!

### See the live demo on JSFiddle [here](https://jsfiddle.net/ColonelParrot/g4qvtLer/) (https://jsfiddle.net/ColonelParrot/g4qvtLer/)
