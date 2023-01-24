With the technique described above, screen readers will have some idea of what the visualisation is showing. But they don’t have access to the actual content of the visualisation: the list of screen readers and their market shares. Because a role of “img” was set on the SVG, screen readers will not attempt to traverse the content of the SVG, and stick to reading out only its title and description.

But because SVG is part of HTML and SVG contains text elements that can be read by screen readers, all text in SVG can be made accessible and read out to the user.

<aside>
🔗 You can see this in action on <a href='https://officepublicationseu.github.io/accessible-html-dataviz/svg-inline.html'>the <code>svg-inline.html</code> page</a>, in which the <code>svg</code> element did not have a <code>role</code> of “img” set to it. This means that some screen readers will not correctly treat it as an image, and might not read out the content of the <code>title</code> and <code>desc</code> elements. So it is safer to set the `role` attribute to “img” and use the technique described below.

</aside>

Note that the order in which the screen readers and their market shares are read out depends on the order in which they appear in the HTML. From a visual standpoint, the order of the `<text>` and `<rect>` elements in the HTML does not matter: they are positioned at the correct location on the graphic by their `x` and `y` attributes. But for screen readers, the order does matter. If you would, for example, first add all the `<text>` elements with the screen reader names, and then all the numbers of their market shares, the screen reader output does not make much sense anymore.

<aside>
🔗 You can try this on <a href='https://officepublicationseu.github.io/accessible-html-dataviz/svg-inline-wrong-order.html'>the <code>svg-inline-wrong-order.html</code> page</a>.

<a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/svg-inline-wrong-order.html'>Check the HTML source for this page here</a>.
</aside>

To give screen reader users a little more information and control over navigating the content of the chart, you can give the elements in the chart semantic meaning by assigning them some ARIA roles. To do so, you can wrap all the `<text>` and `<rect>` elements of the bar chart in a `<g>` element (”g” stands for “group” and the `<g>` element is used to group elements in SVG together). You can then give it a `role` of “list” and an `aria-label` to give it a description to be read out.

The bar and text elements for each screen reader should then also be wrapped in `<g>` elements and given a `role` of “listitem”.

```html
<g id="bars" role="list" aria-label="bar graph">
        <g role="listitem">
          <text x="95" y="56" text-anchor="end">JAWS</text>
          <rect x="100" y="40" height="20" width="700"></rect>
          <text x="805" y="56">70%</text>
        </g>

        <g role="listitem">
          <text x="95" y="96" text-anchor="end">NVDA</text>
          <rect x="100" y="80" height="20" width="588"></rect>
          <text x="693" y="96">58.8%</text>
        </g>
				...
</g>
```

With this in place, screen readers will announce a list and the number of list items it contains when they reach the content of the SVG. Screen reader users can then decide to enter the list and have all list items be read out, or skip the content of the chart and continue with the rest of the web page.

<aside>
🔗 You can try this with a screen reader on <a href='https://officepublicationseu.github.io/accessible-html-dataviz/svg-inline-group-list.html'>the <code>svg-inline-group-list.html</code> page</a>. <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/svg-inline-group-list.html'>Check the HTML source of the page here</a>.

</aside>