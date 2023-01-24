SVG is a popular format to publish data visualisations on the web. Just like PNG and JPG files, SVG files can be embedded in web pages with an `<img>` tag.

When an SVG is embedded in a page in that way, its content is not available to screen readers, and all the guidelines about alt text for images (see <span class='internal-link'>[Accessible images](accessible-images)</span>) remain valid: an alt text with a description of the image needs to be provided.

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/svg-embedded.html'>The <code>svg-embedded.html</code> page</a>[]() contains a bar chart as an embedded SVG file. Screen readers will read the alt text, but not the text content of the SVG file. <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/svg-embedded.html'>Check the source HTML of the page here</a>.

</aside>

But because SVG is part of HTML, the SVG code can also be written directly in the HTML of the page itself. This makes its text content accessible to screen readers. An `<svg>` element can have `<title>` and `<desc>` children elements to give it a title and a description.

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/svg-inline.html'>The <code>svg-inline.html</code> page</a> contains the same bar chart as above, but this time as inline HTML. The SVG has a <code>title</code> and <code>desc</code> elements set, of which the content is read out by Chromevox. ChromeVox will also read all <code>text</code> elements of the SVG. <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/svg-inline.html'>Check the source HTML of the page here</a>.

</aside>

 Unfortunately, support for SVG in screen readers is not universal yet. To make sure that the SVG is correctly announced as an image, and that the title and description are read out, you should

- give the `<svg>` a `role` attribute with value “img”
- add `<title>` and `<desc>` child elements to the `<svg>` and give them a unique `id` property
- add an `aria-labelledby` attribute to the `<svg>` element that contains the id’s of the `<title>` and `<desc>` elements

```html
<svg role="img" aria-labelledby="titleID descID">
	<title id="titleID">This is the title of the SVG</title>
	<desc id="descID">This is the longer description of the SVG</desc>

	<!-->The rest of the content of the svg goes here<-->

</svg>
```

The `role` and `aria-labelledby` attributes are part of the Accessible Rich Internet Applications (ARIA) specifications, a set of specifications that can be used to improve the accessibility of web pages. HTML has a lot of accessibility baked into it, but for complex applications and for browsers and screen readers lacking support for some of the HTML elements and attributes, it is sometimes needed to customise the behaviour of a web page when read on assistive technology like screen readers.

When setting the ARIA attribute `role` to a value of “img”, you assure that browsers and screen readers will treat it as an image. Screen readers will announce it as being an image, and read out the text provided by the `<title>` and `<desc>` elements. However, not all screen readers have support to read out the content of these elements. But most of them support the `aria-labelledby` attribute. `aria-labelledby` references other elements that should be used to be read out to describe the element the using the `aria-labelledby` attribute.

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/svg-inline-aria.html'>The <code>svg-inline-aria.html</code> page</a> contains the same inline SVG as above, but enriched with the `role` and `aria-labelledby` attributes. <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/svg-inline-aria.html'>Check the source HTML here</a>.
</aside>