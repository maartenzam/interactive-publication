Vector images contain elements described with coordinates in a 2-dimensional plane. For example, a circle in a vector image can be described with the location of its centre (in the x an y direction), its radius and its fill colour.

```html
<circle cx="100" cy="50" r="50" fill="orange">
</circle>
```

Compared to raster graphics, vector graphics are more precise (the location of visual elements can be exactly described) and as such it is a popular file format in engineering and architecture software. But it is also popular online, because it lends itself well for interaction and animation. When a graphic can be decomposed in simple geometric elements, like circles, lines and polygons, vector graphics usually have smaller file sizes than raster graphics.

For editing vector images, you need vector editing software, like Adobe Illustrator or Inkscape. Vector image file formats include WMF, EPS, PDF and AI files.

On the web the <span class='internal-link'>[vector image](vector-images)</span> standard is SVG (Scalable Vector Graphics). The content of SVG files is human readable, and SVG files can be opened and edited with any text editor.

```html
<svg width="400" height="400">
  <rect fill="#fff" stroke="black" x="-70" y="-70" width="390" height="390"/>
	<rect x="25" y="25" width="200" height="200" fill="lime" stroke-width="4" stroke="pink" />
	<circle cx="125" cy="125" r="75" fill="orange" />
	<polyline points="50,150 50,200 200,200 200,100" stroke="red" stroke-width="4" fill="none" />
	<line x1="50" y1="50" x2="200" y2="200" stroke="blue" stroke-width="4" />
</svg>
```

<p class="center">
<svg width="400" height="400">
  <rect fill="#fff" stroke="black" x="-70" y="-70" width="390" height="390"/>
	<rect x="25" y="25" width="200" height="200" fill="lime" stroke-width="4" stroke="pink" />
	<circle cx="125" cy="125" r="75" fill="orange" />
	<polyline points="50,150 50,200 200,200 200,100" stroke="red" stroke-width="4" fill="none" />
	<line x1="50" y1="50" x2="200" y2="200" stroke="blue" stroke-width="4" />
</svg>
</p>

The resulting svg graphic from the snippet above