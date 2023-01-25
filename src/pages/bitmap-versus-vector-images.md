A major advantage of <span class="internal-link">[vector images](vector-images)</span> over <span class="internal-link">[bitmap images](bitmap-images)</span> is that vector graphics can be zoomed in without any loss of quality: because all the visual elements are described in coordinates, software rendering vector graphics can always produce crisp images, independent of the zoom level.

When you zoom in on raster images, at some point the individual pixels will become visible, and the picture will become pixelated.

<p class='center'>
<img src='File%20formats,%20dimensions%20and%20units%20d1757276a4214716bd793dd0f19ac95c/Vector_vs_raster.png' alt='What vector (left) and raster (right) graphics look like when zoomed in. Source: [Rex](https://nl.wikipedia.org/wiki/Bestand:Vector_vs_raster.png), public domain' class='max-600' />
</p>

What vector (left) and raster (right) graphics look like when zoomed in. Source: [Rex](https://nl.wikipedia.org/wiki/Bestand:Vector_vs_raster.png), public domain

SVG is part of the html specification, so they are native to the web. As such, they can be styled with <span class='internal-link'>[CSS](styling-and-css)</span> (Cascading Style Sheets: files that describe how HTML elements are displayed on the screen) and manipulated with JavaScript, which makes them a good fit for interactive data visualisation. Check for example the blue circle in the output on the right of [this JSBin](https://jsbin.com/copokiv/1/edit?html,js,output): it is an SVG circle, which, through JavaScript, reacts to a click by changing its colour.