If you have worked with any colour picker before, you are probably familiar with the hexadecimal (or ‘hex’) and the rgb (red-green-blue) notation for colours. Both ways of describing a colour specify the amounts of red, green and blue should be mixed together to end up with a certain colour. 

Colours in rgb are notated as follows:

- rgb(0, 0, 0) contains no red, no green and no blue, resulting in <span class='coloured-span' style='background-color: #000000'>pure black</span>
- <span class='coloured-span' style='background-color: #ff0000'>rgb(255,0,0)</span> is pure red, <span class='coloured-span' style='background-color: #00ff00; color: black'>rgb(0,255,0)</span> is pure green and <span class='coloured-span' style='background-color: #0000ff'>rgb(0,0,255)</span> is pure blue
- rgb(255, 255, 255) is full red, full green and full blue, resulting in pure white
- equal amounts of each of the primary colors result in shades of grey: <span class='coloured-span' style='background-color: #404040'>
rgb(64,64,64)</span>, <span class='coloured-span' style='background-color: #808080'>rgb(128,128,128)</span>, <span class='coloured-span' style='background-color: #C0C0C0'>rgb(192,192,192)

In hexadecimal notation, where the decimal numbers (0 - 9) are extended with the letters A to F to represent the numbers 10 to 15, the numbers run from 00 (equal to zero) to FF (equal to 255):

- pure black, rgb(0,0,0), becomes <span class='coloured-span' style='background-color: #000000'>000000</span>
- <span class='coloured-span' style='background-color: #ff0000'>FF0000</span> is pure red, <span class='coloured-span' style='background-color: #00ff00; color: black'>00FF00</span> is pure green and <span class='coloured-span' style='background-color: #0000ff'>0000FF</span> is pure blue
- FFFFFF is pure white
- <span class='coloured-span' style='background-color: #333333'>333333</span>, <span class='coloured-span' style='background-color: #aaaaaa'>AAAAAA</span> and <span class='coloured-span' style='background-color: #f2f2f2; color: black'>F2F2F2</span> are shades of gray

RGB and the hexadecimal notation are very common ways of describing colour. But they have big disadvantage: they were invented to display colours on screens, and so they are more computer readable than human readable. For example, there is no intuitive way of knowing which color rgb(166, 13, 242) is, for example. This colour only has a value of 13 for green and higher values for red and blue, so you might suspect that it is some kind of purple. But would it be a saturated and very bright purple, or a soft and subtle purple?

Because RGB does not reflect well how humans perceive colour, an alternative way of describing colours was designed. In the HSL colour system

- **Hue** is the colour we perceive, for example “red”, “yellow” or “orange”
- **Saturation** can be thought of as the amount of grey, with 0% saturation meaning pure grey and 100% saturation means no grey and a fully saturated colour.
- **Lightness** can be thought of as the amount of white in a colour. A lightness of 100% means pure white, a lightness of 0% means pure black.

Hue is expressed in degrees, with values between 0 and 360°, which both represent red. As a result, hue can be represented by a circle, or colour wheel.

On the circle, saturation can be mapped from 0% saturation (pure grey) in the center of the color wheel, to 100% saturation (fully saturated color on the edge of the circle).

Then, finally, lightness can be added if the circle is put in 3D, with 0% lightness (black) at the bottom, to 100% lightness (white) at the top.

![The HSL colour cylinder. By [SharkD](https://commons.wikimedia.org/wiki/File:HSL_color_solid_cylinder_saturation_gray.png), CC BY-SA 3.0](Data%20visualisation%20design%20in%20practice%201%20design%20tri%201d0d3c62419c4546846d9a92f783836c/1280px-HSL_color_solid_cylinder_saturation_gray.png)

The HSL colour cylinder. By [SharkD](https://commons.wikimedia.org/wiki/File:HSL_color_solid_cylinder_saturation_gray.png), CC BY-SA 3.0

rgb(166, 13, 242), the colour we used as an example earlier, is expressed in HSL as hsl(280°, 90, 50). You can see that it has a high value for s, so it is a saturated purple. The value for l is 50%, so it is not a very dark nor a very light purple. <span class='coloured-span' style='background-color: #a60df2'>The colour looks like this</span>.

If you would want to use this colour, but reduce its saturation for a design that is a bit more subtle, you can just adjust the S value in HSL to end up with <span class='coloured-span' style='background-color: #914db3'>this less saturated purple, hsl(280°, 40, 50)</span>. This is equivalent to <span class='coloured-span' style='background-color: #914db3'>rgb(145, 77 ,179)</span>.

Notice that to reduce the saturation of the colour in RGB, you need to adjust all 3 values for red, green and blue, which is not very intuitive. This illustrates how HSL was invented to better reflect how we perceive colours.

In the following palette, hue is constant (280°), as is lightness (50%), while saturation increases from 10 to 100%. 

<span class='coloured-span' style='background-color: #808080'>0</span>
<span class='coloured-span' style='background-color: #84738c'> 10</span>
<span class='coloured-span' style='background-color: #886699'> 20</span>
<span class='coloured-span' style='background-color: #8c59a6'> 30</span>
<span class='coloured-span' style='background-color: #914db3'> 40</span>
<span class='coloured-span' style='background-color: #9540bf'> 50</span>
<span class='coloured-span' style='background-color: #9933cc'> 60</span>
<span class='coloured-span' style='background-color: #9d26d9'> 70</span>
<span class='coloured-span' style='background-color: #a219e6'> 80</span>
<span class='coloured-span' style='background-color: #a60df2'> 90</span>
<span class='coloured-span' style='background-color: #aa00ff'> 100</span>

In the following sequence, hue (280°) and saturation (50°) are constant, and lightness is varied:

<span class='coloured-span' style='background-color: #000000'>0</span>
<span class='coloured-span' style='background-color: #1e0d26'> 10</span>
<span class='coloured-span' style='background-color: #3c194d'> 20</span>
<span class='coloured-span' style='background-color: #5a2574'> 30</span>
<span class='coloured-span' style='background-color: #773399'> 40</span>
<span class='coloured-span' style='background-color: #9540bf'> 50</span>
<span class='coloured-span' style='background-color: #aa66cc'> 60</span>
<span class='coloured-span' style='background-color: #bf8cd9'> 70</span>
<span class='coloured-span' style='background-color: #d5b3e6'> 80</span>
<span class='coloured-span' style='background-color: #ead9f2'> 90</span>
<span class='coloured-span' style='background-color: #ffffff'> 100</span>

And finally hue is varied, in 36° steps, while lightness and saturation are kept constant at 50%.

<span class='coloured-span' style='background-color: #bf4040'>0</span>
<span class='coloured-span' style='background-color: #bf8c40'> 36</span>
<span class='coloured-span' style='background-color: #a6bf40'> 72</span>
<span class='coloured-span' style='background-color: #59bf40'> 108</span>
<span class='coloured-span' style='background-color: #40bf73'> 144</span>
<span class='coloured-span' style='background-color: #40bfbf'> 180</span>
<span class='coloured-span' style='background-color: #4073bf'> 216</span>
<span class='coloured-span' style='background-color: #5940bf'> 252</span>
<span class='coloured-span' style='background-color: #bb40bf'> 298</span>
<span class='coloured-span' style='background-color: #bf4077'> 334</span>
<span class='coloured-span' style='background-color: #bf4040'> 360</span>

From these series you can see how HSL makes it easy to generate tints of colours and colour palettes that go together well.

RGB values can be converted into HSL values by using relatively simple formulas, and many tools exist that can do that for you. The easiest one to find is the one that is built into Google: simply Google a hexadecimal colour, like [#855ca1](https://www.google.com/search?q=%23855ca1), or an RGB colour, like [rgb(237, 148, 38)](https://www.google.com/search?q=rgb(237%2C148%2C38)). This will open the searched colour in a colour picker, in which you can adjust colours visually. Colours can be adjusted in RGB (both in decimal as in hexadecimal values), in HSL, in HSV (which stands for hue, saturation and value, and is similar to HSL) and CMYK (a colour model used for print).

![The Google colour picker. Source: Maarten Lambrechts, CC BY SA 4.0](Data%20visualisation%20design%20in%20practice%201%20design%20tri%201d0d3c62419c4546846d9a92f783836c/google-colorpicker.png)

The Google colour picker. Source: Maarten Lambrechts, CC BY SA 4.0

Notice how in HSL, the hue value moves between 0 and 360 when you move the colour slider horizontally. The saturation and lightness remain the same. The saturation increases when the white circle is moved from left to right, and the lightness increases when the white circle is moved from bottom to top.