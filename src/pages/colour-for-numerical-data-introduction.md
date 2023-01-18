Numbers can be converted into colours to communicate numeric data. But before dealing with the **how** and talk about methods to do that, here is the place to talk about the **why**.

The reason for this is that decoding numeric values from colours is not efficient. Take for example the following 2 colours:

![2-colors@2x.png](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/2-colors2x.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

Now try to answer the following questions

- which colour represents the highest value?
- if the colour on the left represents a value of 1, what is the value of the second colour?

There is no way to accurately answer these questions, because there is no colour scale to map colours to values.

But there is more: even if there is a colour scale, it is still difficult to extract the exact value of the colours.

![Source: Maarten Lambrechts, CC BY 4.0](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/colors-with-legend2x.png)

Source: Maarten Lambrechts, CC BY 4.0

If the numbers would be encoded in the length of bars, or in the surface area of squares, estimating proportions and the value of the second colour would be much easier. So, when reading any of the following, keep in mind that there are better, more effective ways of encoding numbers than turning them into colours:

- Colour for numerical data: <span class='internal-link'>[#EndRainbow](colour-for-numerical-data-endrainbow)</span>
- Colour for numerical data: <span class='internal-link'>[perceptual uniformity](colour-for-numerical-data-perceptual-uniformity)</span>
- Colour for numerical data: <span class='internal-link'>[colour scales](colour-for-numerical-colour-scales)</span>