In total, Chartability contains 50 tests to identify accessibility failures in data experiences. But 14 of those 50 tests are considered critical. In the intermediate Chartability audit, a data visualisation (or other kind of data experience) is tested against those 14 critical accessibility features.

Organised by the <span class='internal-link'>[POUR-CAF principles](tag/accessibility-and-data-visualisation)</span>, the 14 critical tests are the following.

### Perceivable

- **Low contrast**: geometries and large text must have a contrast ratio bigger than 3:1 contrast against background, regular text must have a contrast ration greater than 4,5:1
- **Content is only visual**: all information in a chart (all annotations, visually apparent trends of features and all major narrative elements) must be available to screen readers (this should be tested for with all major screen readers).
- **Small text size**: any text must not be smaller than 9pt in print and 12px on screen. Ideally only minor text is rendered at 9pt (axis labels for example) while all other text is larger.
- **Visual presents seizure risk**: a chart must not pose a seizure risk when static or active. Chart must avoid red flashes and should avoid animating with red or have a significant portion of the display area use the colour red.

### Operable

- **Interaction modality only has one input type:** if a chart is interactive with a mouse (or another input device) it must also be made interactive for use with a keyboard. Test navigating to the chart with keyboard, using tab and arrow keys. Focusing should mirror hovering, selecting (enter or spacebar) should mirror clicks. The chart must also be tested with a touch device and screen reader, as these devices may have different experiences than a keyboard.
- **No interaction cues or instructions**: if a chart has any interactive capabilities at all, it must be explained somewhere for users to understand. All keyboard controls must also be explained as well.
- **Controls override assistive technology controls**: custom keyboard and touch controls must not override screen reader settings. Any custom key controls must only apply when the chart or elements have focus (no page or app overrides).

### Understandable

- **No explanation for purpose or for how to read**: a chart should explain its purpose and how to read, use, and interpret it.
- **No title, summary or caption**: a title, summary, context, or caption must be provided.
- **Reading level inappropriate**: all text (and alt text) provided must target a reading grade level of 9 or lower. Tools may be used to automate reading level estimation.

### Robust

This principle does not have a critical test associated to it.

### Compromising

- **No table**: a table must be provided that contains a human-readable version of the data the chart is based on. This may be excluded if the chart title, summary, context, or annotations are sufficient at conveying all relevant information contained in the chart.

### Assistive

- **Data density is inappropriate**: data must be presented at an appropriate density. If too many elements are competing for the same space, clustering or patterns (or lack of) must be explained, the chart must be aggregated to a higher level with less elements, or the chart must be divided into smaller charts with less data. Visual density should serve a purpose, such as retaining the data's signal (when appropriate).
- **Navigation and interaction is tedious**: large blocks of repeated content must be skippable and interactions where the user is required to perform significant labor must not be considered essential (in content or function). The number of interactions or time required to perform a single task should be measured and compared across modalities (mouse pointer versus sequential keyboard versus search versus voice, etc).

### Flexible

- **User style change not respected**: styling changed by the user must be respected. Chart must not interfere with or override styling changes made by the user (such as importing a custom style sheet for use in an HTML application or web site).

## Full audit

A full accessibility audit with Chartability means testing for all 50 tests. This can take a considerable amount of time, and might involve expert knowledge and the use of specialised testing tools. This falls outside of the scope of this training. But the full list of tests is available in [The Chartability Workbook](https://chartability.github.io/POUR-CAF/), which can also be downloaded as [standalone Word file](https://chartability.github.io/POUR-CAF/Chartability_Worksheet_V2.docx).