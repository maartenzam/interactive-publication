In order to be understood, a data visualisation and its components need to be perceived by the viewer. Assuming that some people in your audience might suffer from visual impairments, or might even lack sight completely, this means that the information contained in a visualisation needs to be presented in a way that other senses can perceive it.

In practice this means a visualisation and its message should be accessible to screen readers, so that they can be read out loud. How this can be accomplished technically, and how data visualisations should be summarised in a textual way is covered by <span class='internal-link'>[Alt text](alt-text)</span>.

For people with other visual impairments than blindness, the perceptibility of a data visualisation can be improved by optimising its design. Accessible data visualisation design includes:

- font sizes that are big enough. The space for text on a data visualisation is usually limited, which can tempt data visualisation designers to use <span class='internal-link'>[small font sizes](small-fonts)</span>. This renders the text inaccessible for many people. In a digital environment the font size of text should be configurable by the users’ settings.
- the colours used in a visualisation should be colour blind safe: they should be distinguishable by people suffering from different kinds of colour blindness. Tools exist to test for colour blind safety and to compose colour blind safe palettes, see <span class='internal-link'>[Accessible colour palettes](accessible-colour-palettes)</span>.

![Source: Maarten Lambrechts, CC BY 4.0](Colours,%20colour%20blindness%20and%20data%20visualisation%201bdcaf7fa57b4d92a9804910f3066592/viz-palette-1.png)

![The colours of the palette above as [perceived through eyes with protanopia](https://projects.susielu.com/viz-palette?colors=[%22#60f070%22,%22#f0c960%22,%22#6080f0%22,%22#f06085%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22protanopia%22) (red colour blindness)](Colours,%20colour%20blindness%20and%20data%20visualisation%201bdcaf7fa57b4d92a9804910f3066592/protanopia.png)

The colours of the palette above as [perceived through eyes with protanopia](https://projects.susielu.com/viz-palette?colors=[%22#60f070%22,%22#f0c960%22,%22#6080f0%22,%22#f06085%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22protanopia%22) (red colour blindness). Source: Maarten Lambrechts, CC BY 4.0

- to go beyond colour blind safety and to make visualisations perceivable in greyscale, the colour encoding should be complemented with encodings by other visual channels.  A great example of this is a technique called <span class='internal-link'>[direct labelling](direct-labelling)</span>: instead of a separate legend that fully relies on colour to identify features of a visualisation, the position of text elements can be used to identify features more clearly. In the visualisations below, the 3 thicker lines are directly labelled in the chart on the right, and can be identified without any problem by people who can not perceive any colour at all.

<p class='center'>
<img src='Accessibility%20and%20data%20visualisation%207101c5b263ca49408232c0775b9223a3/separate-legend2x-100.jpg' alt='' class='max-400' />
</p>

<p class='center'>
<img src='Accessibility%20and%20data%20visualisation%207101c5b263ca49408232c0775b9223a3/direct-labels_12x-100.jpg' alt='' class='max-400' />
</p>

A separate colour legend vs directly labelled lines. Source: Maarten Lambrechts, CC-BY 4.0


- related to colour blind safety is the contrast between the colour of text and geometrical elements on a visualisation and the colour of their background. The <span class='internal-link'>[contrast ratio ](colour-contrast)</span>between geometrical elements like bars and circles and their background should be bigger than 3:1, the contrast ratio between text and background should be greater than 4,5:1.

<p class='center'>
<img src='Accessibility%20and%20data%20visualisation%207101c5b263ca49408232c0775b9223a3/lines-low-contrast2x.png' alt='' class='max-600' />
</p>

Example of a chart with colours that have too little contrast with the background of the chart. Source: Maarten Lambrechts, CC BY SA 4.0
    
- the graphical elements on a chart should have sufficiently large sizes in order to be perceived. Lines should have a sufficiently large stroke width, dots should have a sufficiently large radius and bars shouldn’t be too thin.

![On this chart, the lines and dots are too thin, and are hard to perceive. Source: Maarten Lambrechts, CC-BY-SA 4.0](Accessibility%20and%20data%20visualisation%207101c5b263ca49408232c0775b9223a3/too-thin2x.png)

On this chart, the lines and dots are too thin, and are hard to perceive. Source: Maarten Lambrechts, CC-BY-SA 4.0

- to help the perception of neighbouring elements in visualisation, elements should be separated from each other using white space.

<p class='center'>
<img src='Colours,%20colour%20blindness%20and%20data%20visualisation%201bdcaf7fa57b4d92a9804910f3066592/stacked-bars-no-outlines.png' alt='' class='max-400' />
</p>

Especially on bright screens, the boundaries of the stacked bars in this visualisation are hard to perceive. Source: Maarten Lambrechts, CC BY SA 4.0

<p class='center'>
<img src='Colours,%20colour%20blindness%20and%20data%20visualisation%201bdcaf7fa57b4d92a9804910f3066592/stacked-bars-protanopia-no-outlines.jpg' alt='' class='max-400' />
</p>

This is the same stacked bar chart as above, as perceived by people suffering from protanopia (red colour blindness). Source: Maarten Lambrechts, CC BY SA 4.0

<p class='center'>
<img src='Colours,%20colour%20blindness%20and%20data%20visualisation%201bdcaf7fa57b4d92a9804910f3066592/stacked-bars-outlines.png' alt='' class='max-400' />
</p>

When the stacked bars receive a white outline, the problem with the boundaries is overcome. Source: Maarten Lambrechts, CC BY SA 4.0

<p class='center'>
<img src='Colours,%20colour%20blindness%20and%20data%20visualisation%201bdcaf7fa57b4d92a9804910f3066592/stacked-bars-protanopia-outlines.png' alt='' class='max-400' />
</p>

Giving the bars an outline also helps colour blind people in perceiving the bars in each stack. Source: Maarten Lambrechts, CC BY SA 4.0

- any text in a visualisation should not overlap other chart elements. When text is placed on top of other elements, it should have its own background colour to assure readability.