The [list of elements SVG can contain](https://developer.mozilla.org/en-US/docs/Web/SVG/Element) is long, but for the purpose of data visualisation, the following basic geometric shapes are probably the most important ones.

[`<circle>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) specifies a circle. Its required attributes are the coordinates of the circle’s center in the x (cx) and y direction (cy), and its radius (r).

```xml
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="black"/>
  <circle cx="350" cy="50" r="50" fill="black"/>
  <circle cx="200" cy="200" r="170" fill="black"/>
</svg>
```
<p class="center">
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="black"/>
  <circle cx="350" cy="50" r="50" fill="black"/>
  <circle cx="200" cy="200" r="170" fill="black"/>
</svg>
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

An [`<ellipse>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse) is very similar to a circle. It shares the cx and cy attributes with the circle, but has a separate radius for the x and y direction (rx and ry).

```html
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="40" ry="100" fill="black"/>
	<ellipse cx="300" cy="100" rx="40" ry="100" fill="black"/>
  <ellipse cx="110" cy="120" rx="20" ry="50" fill="white"/>
	<ellipse cx="310" cy="120" rx="20" ry="50" fill="white"/>
</svg>
```

<p class="center">
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="40" ry="100" fill="black"/>
	<ellipse cx="300" cy="100" rx="40" ry="100" fill="black"/>
  <ellipse cx="110" cy="120" rx="20" ry="50" fill="white"/>
	<ellipse cx="310" cy="120" rx="20" ry="50" fill="white"/>
</svg>
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

The [`<line>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) elements specifies a straight line between 2 points. The coordinates of the 2 points are given by the x1, y1, x2 and y2 attributes.

```html
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" x2="100" y1="150" y2="300" stroke="black" stroke-width="3"/>
  <line x1="300" x2="300" y1="150" y2="300" stroke="black" stroke-width="3"/>
  <line x1="100" x2="200" y1="150" y2="50" stroke="black" stroke-width="3"/>
  <line x1="200" x2="300" y1="50" y2="150" stroke="black" stroke-width="3"/>
  <line x1="100" x2="300" y1="300" y2="300" stroke="black" stroke-width="3"/>
</svg>
```

<p class="center">
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" x2="100" y1="150" y2="300" stroke="black" stroke-width="3"/>
  <line x1="300" x2="300" y1="150" y2="300" stroke="black" stroke-width="3"/>
  <line x1="100" x2="200" y1="150" y2="50" stroke="black" stroke-width="3"/>
  <line x1="200" x2="300" y1="50" y2="150" stroke="black" stroke-width="3"/>
  <line x1="100" x2="300" y1="300" y2="300" stroke="black" stroke-width="3"/>
</svg>
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

`<rect>` describes a rectangle by specifying its x and y positions, and its width and height. Notice that in SVG, the coordinates for the y dimension run from top to bottom.

```html
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect x="100" y="200" width="40" height="200" fill="grey" />
  <rect x="150" y="150" width="40" height="250" fill="grey" />
  <rect x="200" y="350" width="40" height="50"  fill="grey" />
  <rect x="250" y="250" width="40" height="150" fill="grey" />
  <rect x="300" y="100" width="40" height="300" fill="red" />
</svg>
```

<p class="center">
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect x="100" y="200" width="40" height="200" fill="grey" />
  <rect x="150" y="150" width="40" height="250" fill="grey" />
  <rect x="200" y="350" width="40" height="50"  fill="grey" />
  <rect x="250" y="250" width="40" height="150" fill="grey" />
  <rect x="300" y="100" width="40" height="300" fill="red" />
</svg>
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

[`<path>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path) is a very flexible element that can be used to draw arbitrary paths. Its d attribute determines how an imaginary pen should move between coordinates to draw the path. For example:

- `M 10,30` means “move the pen to the point (10,30)” (M stands for the MoveTo command)
- `L 90,90` means “draw a straight line from the current point to the (90,90) point” (L is the LineTo command)

Other path commands draw curves (Q) and arcs (A), and have more parameters to determine how the curves should be drawn.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z"
        fill="deeppink"/>
</svg>
```

<p class="center">
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z"
        fill="deeppink"/>
</svg>
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

Finally, SVG can also embed other images with [`<image>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image). These embedded images can be both bitmap images or other SVG’s.