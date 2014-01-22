# Boxify.js

Boxify.js is a jQuery plugin which lets you easily add Pinterest-like boxes to your website.

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
