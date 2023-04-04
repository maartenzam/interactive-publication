<p><span class='internal-link'><a href='adobe-illustrator'>Adobe Illustrator</a></span> is widely used to make charts and graphics for printed publications by visualisation designers. This is also the case in news rooms, where visual journalists were more and more confronted with the need to create visualisations that work well online and on all screen sizes.</p>

That is why the graphics team at the New York Times developed a tool to export more accessible and responsive graphics from Adobe Illustrator. This tool is called [ai2html](http://ai2html.org/), and was released as an open source plugin for Illustrator.

Out of the box, Adobe Illustrator can export <span class='internal-link'>[bitmap images](bitmap-images)</span> like JPG and PNG files as well as <span class='internal-link'>[vector files](vector-images)</span> like PDF and SVG. This has the drawback that when the graphic is scaled, the text scales with the graphic and can become too small to read or disproportionally big. The main feature of ai2html is that exports graphics as HTML: all non-text elements are exported as a JPG or PNG file, while all text elements are overlaid on top of the image as HTML text.

This means that the text can stay the same font size when the underlying image is scaled. And this also means that the text in the visualisations is not baked into the images and is accessible to assistive technologies like screen readers. Another advantage is that text can be wrapped over multiple lines more easily (this is much harder with text in SVG).

With ai2html it is also easy to design different versions of your visualisation for different screen sizes. When you have multiple artboards in your Illustrator file, ai2html can export all of them (into a single HTML document, or into a separate HTML document for each of them). When this HTML is inserted into your web page, CSS media queries can be used to hide and show the relevant artboard/HTML on different screen sizes.

![A horizontal bar chart titled 'Marine species face a higher threat of extinction', showing the share of threatened species of different groups of animals. The groups are illustrated by silhouettes and the colours indicate terrestrial, freshwater and marine groups of species](Accessibility%20in%20data%20visualisation%20tools%206c7b042656f64445977564c856e9a8b9/ai2html-marine-species-desktop.png)

This bar chart was made with ai2html and is part of the article [Marine species under threat](https://datatopics.worldbank.org/sdgatlas/goal-14-life-below-water/) of the [Sustainable Development Goals Atlas 2020](https://datatopics.worldbank.org/sdgatlas/) of the World Bank. Below is the mobile version of the chart. Try the visualisation on different screen sizes, and also try the screen reader accessibility of the chart. Source:  [Sustainable Development Goals Atlas 2020](https://datatopics.worldbank.org/sdgatlas/), World Bank

<p class='center'>
<img src='Accessibility%20in%20data%20visualisation%20tools%206c7b042656f64445977564c856e9a8b9/ai2html-marine-species-mobile.png' alt='A version of the chart above, designed for mobile screens. The main changes are the ommition of the species icons, and the x axis that only runs up to a value of 40 instead of the original 100' class='max-400' />
</p>

Source:  [Sustainable Development Goals Atlas 2020](https://datatopics.worldbank.org/sdgatlas/), World Bank

<aside>
❓ With CSS media queries, you can change the appearance of elements on a web page based on the width of the browser window (amongst other things). So you can hide and display HTML elements on different screen sizes by using media queries.

</aside>

The following CSS snippet will toggle the visibility of 2 HTML elements with id’s “small-artboard” and “big-artboard”. When the browser window is smaller than 640 pixels, the small art board will be shown, but when the browser window is wider, the big art board will be shown.

```css
@media (max-width: 640px) {
  #small-artboard {
    visibility: visible;
  }
	#big-artboard {
		visibility: hidden
	}
}
@media (min-width: 640px) {
  #small-artboard {
    visibility: hidden;
  }
	#big-artboard {
		visibility: visible
	}
}
```