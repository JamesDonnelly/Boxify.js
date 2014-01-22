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

 * `width` controls the width of each box.
 * `background` controls the background color of each box (e.g. #f00, red, rgb(255,0,0))
