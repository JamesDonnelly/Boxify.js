# Boxify.js

Boxify.js is a jQuery plugin which lets you easily add Pinterest-like boxes to your website.

![Boxify.js](http://i.imgur.com/h0u3TZG.png)

## Adding Boxify.js to your website

Simply copy over Boxify.min.js into your website folder. You'll also need to include jQuery if you aren't already using that:

```
<script type="text/javascript" src="/path/to/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/path/to/boxify.min.js"></script>
```

## Using Boxify

In order to get Boxify to work you'll need to wrap your content in markup similar to the following:

```
<section id="boxy">
  <figure>
    <img src="..." />
    <figcaption>
      ...
    </figcaption>
  </figure>
</section>
```

You can then call Boxify.js using:

```
<script type="text/javascript">
	$(window).load(function() {
		$('#boxy').boxify();
	});
</script>
```

## Custom Styling

There are two methods of styling Boxify boxes:

### Global Styling

The constructor accepts an object with optional properties:

 * `background` controls the background of each box;
 * `border-color` controls the border color;
 * `color` controls the text color;
 * `margin` controls the margin;
 * `padding` controls the padding;
 * `width` controls the width.
 * 
 
For example:

```
// This sets our boxes to have a red background and a width of 300px
$('#boxy').boxify({
	background: "#f00",
	width: "300px"
});
```

### Individual Box Styling

Each individual box accepts a `data-*` attribute to style it individually:

 * `data-background` sets the background color;
 * `data-border-color` sets the border color;
 * `data-color` sets the text color.

For example:

```
<figure data-background="#f00" data-color="white">
	...
</figure>
```
