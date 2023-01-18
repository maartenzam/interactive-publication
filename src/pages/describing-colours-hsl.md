While the RGB colour model is based on how light of different wavelengths add together, the HSL colour model is based on a different mechanism for composing colours.

HSL stands for **Hue, Saturation and Lightness**, in which

- Hue is the colour we perceive, for example “red”, “yellow” or “orange”
- Saturation can be thought of as the amount of grey, with 0% saturation meaning pure grey and 100% saturation means no grey and a fully saturated colour.
- Lightness can be thought of as the amount of white in a colour. A lightness of 100% means pure white, a lightness of 0% means pure black.

Hue is expressed in degrees, with values between 0 and 360°, which both represent red. As a result, hue can be represented by a circle, or colour wheel.

On the circle, saturation can be mapped from 0% saturation (pure grey) in the center of the color wheel, to 100% saturation (fully saturated color on the edge of the circle).

Then, finally, lightness can be added if the circle is put in 3D, with 0% lightness (black) at the bottom, to 100% lightness (white) at the top.

![The HSL colour cylinder. By [SharkD](https://commons.wikimedia.org/wiki/File:HSL_color_solid_cylinder_saturation_gray.png), CC BY-SA 3.0](Colour%20the%20basics%20a90e331756d2497aa8b2b3ce26b9e3de/1280px-HSL_color_solid_cylinder_saturation_gray.png)

The HSL colour cylinder. By [SharkD](https://commons.wikimedia.org/wiki/File:HSL_color_solid_cylinder_saturation_gray.png), CC BY-SA 3.0

RGB and HSL are just different coordinate systems to navigate the same colour space. So why a second color model to describe the same colours? Well, the problem of RGB is that it works well to let screens display colours, but it works very different from how we perceive colours. Take for example <span class='coloured-span' style='background-color: #a60df2'>this saturated purple, rgb(166, 13, 242) or hsl(280°, 90, 50)</span>. If we want to use this colour, but reduce its saturation for a more subtle design, we can just adjust the S value in HSL to end up with <span class='coloured-span' style='background-color: #914db3'>this less saturated purple, hsl(280°, 40, 50)</span>. This is equivalent to <span class='coloured-span' style='background-color: #914db3'>rgb(145, 77 ,179)</span>.

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