Apart from the attributes that determine their position, size and shape, <span class='internal-link'>[SVG elements](svg-elements-geometric-shapes)</span> can also have attributes specify their styling. For example, circles can have a fill colour, a stroke colour, a stroke width and an opacity.

```html
<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="60" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="90" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="140" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="170" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="215" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="260" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="310" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="370" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
</svg>
```

<p class="center">
<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="60" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="90" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="140" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="170" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="215" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="260" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="310" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
  <circle cx="370" cy="50" r="20" fill="#805aad" stroke="white" stroke-width="2" opacity="0.8"/>
</svg>
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

In the example above, all circles have their styling set by their attributes. But in this way, changing the styling for all circles becomes cumbersome: if you want to change the colour of the circles, you need to edit the attribute of each circle separately. It is not rare to have tens or even hundreds of SVG elements in a visualisation, in which case manually editing the styles is not an option.

This is were **CSS** (Cascading Style Sheet) comes in. CSS is the language used to style elements in HTML, and to style SVG in HTML. With CSS, we can set the styling for all the circle elements in an SVG in one place. So, when you want the fill colour of the circles to change, you only have to change it in one place.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Using css</title>
    <style>
        .circle {
            fill: #805aad;
            stroke: white;
            stroke-width: 2;
            opacity: 0.8;
        }
    </style>
  </head>
  <body>
    <h1>Using CSS for styling SVG</h1>
    <svg width="400" height="100">
        <circle cx="50" cy="50" r="20" class="circle"/>
        <circle cx="60" cy="50" r="20" class="circle"/>
        <circle cx="90" cy="50" r="20" class="circle"/>
        <circle cx="140" cy="50" r="20" class="circle"/>
        <circle cx="170" cy="50" r="20" class="circle"/>
        <circle cx="215" cy="50" r="20" class="circle"/>
        <circle cx="260" cy="50" r="20" class="circle"/>
        <circle cx="310" cy="50" r="20" class="circle"/>
        <circle cx="370" cy="50" r="20" class="circle"/>
      </svg>
  </body>
</html>
```

![css-demo.png](Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/css-demo.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/svg-css.html'>See the `svg-css.html` page live in your browser</a>, or <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/svg-css.html'>inspects its HTML</a>.
</aside>

CSS can be written directly in an HTML file, as above, but usually it is loaded from a separate CSS file.

![Source: Maarten Lambrechts, CC BY SA 4.0](Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/css-request2x.png)

Source: Maarten Lambrechts, CC BY SA 4.0