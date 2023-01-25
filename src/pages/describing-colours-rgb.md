RGB stands for **R**ed **G**reen **B**lue, the primary colors in the so called additive color model. Where the primary colors overlap in the additive model, you get secondary colors. And where all 3 primary colors overlap, you get white.

![Source: [commons.wikimedia.org/wiki/File:AdditiveColor.svg](https://commons.wikimedia.org/wiki/File:AdditiveColor.svg), public domain](Colour%20the%20basics%20a90e331756d2497aa8b2b3ce26b9e3de/AdditiveColor.svg.png)

Source: [commons.wikimedia.org/wiki/File:AdditiveColor.svg](https://commons.wikimedia.org/wiki/File:AdditiveColor.svg), public domain

RGB is modelled after how light of different wave lengths mix. White light consists of light with wave lengths in the visible spectrum, as was demonstrated in Newton’s prism experiment.

![White light is refracted in a prism. Source: [commons.wikimedia.org/wiki/File:Light_dispersion_conceptual_waves.gif](https://commons.wikimedia.org/wiki/File:Light_dispersion_conceptual_waves.gif), public domain](Colour%20the%20basics%20a90e331756d2497aa8b2b3ce26b9e3de/Light_dispersion_conceptual_waves.gif)

White light is refracted in a prism. Source: [commons.wikimedia.org/wiki/File:Light_dispersion_conceptual_waves.gif](https://commons.wikimedia.org/wiki/File:Light_dispersion_conceptual_waves.gif), public domain

Practically, RGB has its roots in photography. But today it is mostly used in electronic devices, both for inputting images (cameras, scanners) as for displaying images (tv screens, monitors, mobile phones).

The smallest units that display a colour on digital screens are called pixels. Each pixel contains 3 subpixels that emit red, green and blue light. By letting these subpixels emit light in different proportions, light with a different colour is emitted from each pixel as a result.

![Sub-pixels of an LCD screen, on the right: an orange and a blue color; on the left: a close-up. [CC BY-SA 3.0 Stan Zurek](https://en.wikipedia.org/wiki/RGB_color_model#/media/File:RGB_pixels.jpg)](Colour%20the%20basics%20a90e331756d2497aa8b2b3ce26b9e3de/RGB_pixels.jpg)

Sub-pixels of an LCD screen, on the right: an orange and a blue color; on the left: a close-up. [CC BY-SA 3.0 Stan Zurek](https://en.wikipedia.org/wiki/RGB_color_model#/media/File:RGB_pixels.jpg)

![RGB pixels arranged on a color wheel. [László Németh, CC0](https://commons.wikimedia.org/wiki/File:RGB_color_wheel_10.svg)](Colour%20the%20basics%20a90e331756d2497aa8b2b3ce26b9e3de/1024px-RGB_color_wheel_10.svg.png)

RGB pixels arranged on a color wheel. [László Németh, CC0](https://commons.wikimedia.org/wiki/File:RGB_color_wheel_10.svg)

To describe a color in RGB, 3 numbers are needed, representing the quantity of red, green and blue in the color. In most cases the quantity of each color is encoded in 8 bits, which means that each color is represented by a number between 0 to 255. This results in a palette with 256 x 256 x 256 = 16.777.216 different colours!

In HTML documents, scalable <span class='internal-link'>[vector graphics](vector-images)</span> and <span class='internal-link'>[css styling](styling-and-css)</span>, colours are described as follows:

- rgb(0, 0, 0) contains no red, no green and no blue, resulting in <span class='coloured-span' style='background-color: #000000'>pure black</span>
- <span class='coloured-span' style='background-color: #ff0000'>rgb(255,0,0)</span> is pure red, <span class='coloured-span' style='background-color: #00ff00; color: black'>rgb(0,255,0)</span> is pure green and <span class='coloured-span' style='background-color: #0000ff'>rgb(0,0,255)</span> is pure blue
- rgb(255, 255, 255) is full red, full green and full blue, resulting in pure white
- equal amounts of each of the primary colors result in shades of grey: <span class='coloured-span' style='background-color: #404040'>
rgb(64,64,64)</span>, <span class='coloured-span' style='background-color: #808080'>rgb(128,128,128)</span>, <span class='coloured-span' style='background-color: #C0C0C0'>rgb(192,192,192)

RGB colors in 8 bits are also notated with [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) numbers. In the hexadecimal numeral system, the decimal numbers (0 - 9) are extended with the letters A to F to represent the numbers 10 to 15. In this notation 0 is notated as 00, and 255 is represented by FF. So

- pure black, rgb(0,0,0), becomes <span class='coloured-span' style='background-color: #000000'>000000</span>
- <span class='coloured-span' style='background-color: #ff0000'>FF0000</span> is pure red, <span class='coloured-span' style='background-color: #00ff00; color: black'>00FF00</span> is pure green and <span class='coloured-span' style='background-color: #0000ff'>0000FF</span> is pure blue
- FFFFFF is pure white
- <span class='coloured-span' style='background-color: #333333'>333333</span>, <span class='coloured-span' style='background-color: #aaaaaa'>AAAAAA</span> and <span class='coloured-span' style='background-color: #f2f2f2; color: black'>F2F2F2</span> are shades of gray