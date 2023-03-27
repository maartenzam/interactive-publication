Vector graphics like SVG have a big advantage over <span class='internal-link'>[bitmap images](bitmap-images)</span>: they remain crisp and clear, even when zoomed in. But they have another advantage, related to accessibility: SVG has `text` elements that you can use to position text in an SVG graphic, and these text elements are accessible to screen readers and search engines.

<aside>
🔎 Compare the 2 images below. They look identical, but one is  a PNG and the other one is an SVG. Click on the “Open this image in a new tab” link below each image to open them in separate tabs. Then try to select the text in the image. You’ll notice that the text in the SVG is accessible: you can select it, and copy paste it if you want.

</aside>

<p class='center'>
<img src='Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/life-expectancy2x.png' alt='A PNG image titled A 10 year gap in life expectancy, showing a bar for Norway and one for Bulgaria with their labels' class='max-600' />
</p>
<p><a href="Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/life-expectancy2x.png" target="_blank">Open this image in a new tab</a></p>


<p class='center'>
<img src='Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/life-expectancy.svg' alt='SVG version of the bar chart' class='max-600' />
</p>

<p class="center">
<a href="Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/life-expectancy.svg" target="_blank">Open this image in a new tab</a>
<p>

When Google’s search engine encounters the SVG version of the visualisation above, it will “know” that it is an image about life expectancy in Norway and Bulgaria in 2020, and that the source of the data is Eurostat. For the PNG image, this information should be provided in the alt attribute.

SVG is part of HTML, so adding a `<text>` element is as easy as adding an opening `<text>` tag, give it an x and y position in the SVG coordinate system, put the text content in and close the element with `</text>`.

```xml
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <text x="100" y="100">Here is some text</text>
	<text x="150" y="150" rotate="20">Text can be rotated...</text>
	<text x="150" y="200" fill="red" font-size="32" font-weight="bold">and also styled</text>
</svg>
```

![text.svg](Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/text.svg)

Source: Maarten Lambrechts, CC-BY-SA 4.0

One thing to keep in mind when using text in SVG is that the user needs to have the font that text elements in the SVG should be displayed in installed on their computer. This is not the case for bitmap images: the text and their font are baked into the JPG or PNG file at the moment they are created. There are ways to embed fonts in SVG files, but a simpler approach is to use web fonts and CSS to apply a font to SVG text elements (see <span class='internal-link'>[Styling and CSS](styling-and-css)</span>).