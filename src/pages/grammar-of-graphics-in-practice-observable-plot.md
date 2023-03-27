## What is Observable Plot?

[Observable Plot](https://observablehq.com/@observablehq/plot) is a JavaScript library for data visualisation based on the Grammar of Graphics. It can be used as a stand alone JavaScript library, but it was developed by and it is conveniently integrated in [the Observable platform](https://observablehq.com/).

Observable is a platform to make interactive notebooks based on JavaScript. It is focussed on data analysis and data visualisation, and Observable Plot was developed to let users of the platform quickly add data visualisations to their Observable notebooks. 

## Getting started with Observable Plot

Getting started with Observable and Observable Plot is as easy as creating an account on the platform. Click the “Sign up for free” button on the left or the “Sign up” button in the top right of the Observable home page to create an account.

![A web browser showing the Observable homepage](Grammar%20of%20Graphics%20in%20practice%20Observable%20Plot%207301fc85520e4ef980fd7561ba2acef6/observable-homepage.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

Before making any visualisations with Observable Plot, you should get used to the way Observable notebooks work. Start by creating a new notebook from your Observable home screen by clicking the “New” button under Recent notebooks, or navigate directly to [observablehq.com/new](https://observablehq.com/new).

In the dialogue that pops up you can select a template with prefilled content. Leave the blank template selected and click the Create notebook button in the bottom right.

![Screenshot of the Observable notebook templates](Grammar%20of%20Graphics%20in%20practice%20Observable%20Plot%207301fc85520e4ef980fd7561ba2acef6/observable-notebook-templates.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

A blank notebook will open, with a single cell with “# Untitled” as content.

![Screenshot of an empty Observable notebook, with 'Untitled as title'](Grammar%20of%20Graphics%20in%20practice%20Observable%20Plot%207301fc85520e4ef980fd7561ba2acef6/observable-untitled.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

Change the “Untitled” title to something else (keep the “#” in place) and click the blue arrow on the right of the cell.

![Screenshot of an empty Observable notebook ttitled Making visualisations with the Grammar of Graphics](Grammar%20of%20Graphics%20in%20practice%20Observable%20Plot%207301fc85520e4ef980fd7561ba2acef6/observable-title.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

You have just edited a cell and ran it in Observable. Cells are the building blocks of Observable notebooks, and can contain HTML, JavaScript or Markdown.

<aside>
❗ <b>HTML</b> (HyperText Markup Language) is the language for describing the structure and content of a web page (see the <span class='internal-link'><a href='tag/html-101'>HTML 101</a></span>) for an introduction).

<b>Markdown</b> is a language that was developed to make writing HTML easier. In Observable, it allows you to quickly add headers, lists with bullet points, bold and italic text, and more. See the <a href='https://observablehq.com/@observablehq/markdown-quick-reference'>Markdown quick reference notebook</a> for more information.

</aside>

In this tutorial, you are going to use JavaScript cells only (accept for the first cell, which contains the title of the notebook as Markdown).

## Making visualisations with Observable Plot

<aside>
🔗 You can find an Observable version of this tutorial in <a href='https://observablehq.com/d/15ae37db391bac47'>this notebook</a>. You can edit the cells in this notebook even without an Observable account, but your edits will not be saved. When you do have an Observable account, you can duplicate the notebook. To do so, click the “Fork” button in the top right of the notebook. This will create a copy of the notebook in your own account.

</aside>

To make a visualisation with Observable Plot, you can connect to online data sources, but you can also upload files to Observable. We are going to use the latter option.

Download the file linked below.

[bubble-chart-data.csv](Grammar%20of%20Graphics%20in%20practice%20Observable%20Plot%207301fc85520e4ef980fd7561ba2acef6/bubble-chart-data.csv)

Next click the paper clip icon at the top of the icons on the right side of your notebook, and click the “+” button next to “File attachments”.

<p class='center'>
<img src='Grammar%20of%20Graphics%20in%20practice%20Observable%20Plot%207301fc85520e4ef980fd7561ba2acef6/observable-file-attachment.png' alt='The Data dialogue in Observable, showing the options File attachments, Databases and Cloud files' class='max-400' />
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

Then upload the CSV file you just downloaded. When the file is uploaded, add a new cell by clicking the title of your notebook and click on the little “+” sign that appears on the left of it. Click “JavaScript” to create a new JavaScript cell.

![The Observable dialogue for creating a new cell](Grammar%20of%20Graphics%20in%20practice%20Observable%20Plot%207301fc85520e4ef980fd7561ba2acef6/observable-new-cell.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

In the new JavaScript cell, copy/paste the snippet below:

```jsx
countries = FileAttachment("bubble-chart-data.csv").csv({typed: true})
```

This snippet

- gets the content of the attached bubble-chart-data.csv file you just uploaded with the Observable function  `FileAttachment()`
- parses the content of the file as csv with the `FileAttachment().csv()` method
- with the `{typed: true}` option, you make sure that numbers in the data are correctly parsed as numbers
- creates a new variable called `countries` and assigns the parsed content of the CSV file to it

When you click the blue arrow on the right of the cell, the JavaScript snippet will be run, and you will be able to see the output of the cell right above it. In this case, `countries` is an array of 184 JavaScript objects. Click the little black triangle before “Array(184)” to get a preview of the content of the array.

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=countries' width='100%' height='450px' style='border: none;'></iframe>

[https://observablehq.com/embed/15ae37db391bac47?cells=countries]()

<aside>
❗ Try running the same cell with the <code>typed</code> option set to <code>false</code>. Can you spot the difference in the output?
</aside>

You can get a cleaner preview of the data by turning it into a table with the Observable `Inputs.table()` function. Create a new cell and add the following snippet to it. When you run this new cell, a table with the data will be generated.

```jsx
Inputs.table(countries)
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=table' width='100%' height='450px' style='border: none;'></iframe>

Notice that cells can reference the content of other cells. In this case, the countries variable was created in a cell, and was referenced in another cell.

With the data in place, you can start building up the plot. Observable Plot is available in all Observable notebooks, so you can use its `Plot.plot()` function directly to generate a plot. Add the following snippet to a new cell and click the blue arrow to run it:

```jsx
Plot.plot({
  marks: [
    Plot.dot(countries, {x: "income", y: "lifeexp"})
  ]
})
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=basicPlot' width='100%' height='500px' style='border: none;'></iframe>

Here is what this snippet is doing:

- it creates a new Observable Plot visualisations with `Plot.plot()`
- this visualisation has 1 layer of marks (”marks” is the name of the geometric objects in Observable Plot). This layer uses the dot geometry created by `Plot.dot()`
- the dot marks layer uses `countries` as data
- and the columns “income” and “lifeexp” in the data are mapped to the `x` and `y` aesthetics of the dots. In Observable Plot’s language the columns are **encoded** in the x and y **channels** of the dot **marks**.

Now, let’s add the additional encodings for the fill and r channels (r stands for the radius of the dots):

```jsx
Plot.plot({
  marks: [
    Plot.dot(countries, {
      x: "income",
      y: "lifeexp",
      fill: "continent",
      r: "population",
    })
  ]
})
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=moreEncodings' width='100%' height='500px' style='border: none;'></iframe>

Channels do not have to be encoded from the data, you can also set them to fixed values. For example, you can give the dots a 1 pixel wide black stroke:

```jsx
Plot.plot({
  marks: [
    Plot.dot(countries, {
      x: "income",
      y: "lifeexp",
      fill: "continent",
      r: "population",
      stroke: "black",
      strokeWidth: 1
    })
  ]
})
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=blackStrokes' width='100%' height='500px' style='border: none;'></iframe>

Next, you need to convert the x scale from a linear one to a logarithmic one. You can configure scales by adding a property with the name of the channel of the scale (”x” in this case) and set an object with option properties as its value. In this case, we set the `type` option to “log”.

```jsx
Plot.plot({
  marks: [
    Plot.dot(countries, {
      x: "income",
      y: "lifeexp",
      fill: "continent",
      r: "population",
      stroke: "black",
      strokeWidth: 1
    })
  ],
  x: {type: "log"}
})
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=logarithmicX' width='100%' height='500px' style='border: none;'></iframe>

You can add more configuration options for the x and y scale: you can add grid lines and axis labels, limit the number of tick values displayed and set a domain (the minimum and maximum values of a scale) explicitly, for example.

```jsx
scaleOptions = Plot.plot({
  marks: [
    Plot.dot(countries, {
    x: "income",
    y: "lifeexp",
    fill: "continent",
    r: "population",
    stroke: "black",
    strokeWidth: 1
  })
  ],
  x: {type: "log", grid: true, ticks: 3, label: "Income (GDP/capita) →"},
  y: {grid: true, ticks: 4, domain: [50, 85], label: "↑ Life expectancy (years)"}
})
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=scaleOptions' width='100%' height='500px' style='border: none;'></iframe>

For colour scales, you can set the range of colours to use. You can also add a colour legend. Unfortunately a legend for the size scale is not (yet) available in Observable Plot.

```jsx
colorLegend = Plot.plot({
  marks: [
    Plot.dot(countries, {
    x: "income",
    y: "lifeexp",
    fill: "continent",
    r: "population",
    stroke: "black",
    strokeWidth: 1
  })
  ],
  x: {type: "log", grid: true, ticks: 3, label: "Income (GDP/capita) →"},
  y: {grid: true, ticks: 4, domain: [50, 85], label: "↑ Life expectancy (years)"},
  color: {legend: true, range: ["#FF265C", "#FFE700", "#4ED7E9", "#70ED02", "purple"]}
})
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=colorLegend' width='100%' height='550px' style='border: none;'></iframe>

## Extra

You can add basic tooltips to marks, by using their `title` channel:

```jsx
Plot.plot({
  marks: [
    Plot.dot(countries, {
    x: "income",
    y: "lifeexp",
    fill: "continent",
    r: "population",
    stroke: "black",
    strokeWidth: 1,
    title: "country"
  })
  ],
  x: {type: "log", grid: true, ticks: 3, label: "Income (GDP/capita) →"},
  y: {grid: true, ticks: 4, domain: [50, 85], label: "↑ Life expectancy (years)"},
  color: {legend: true, range: ["#FF265C", "#FFE700", "#4ED7E9", "#70ED02", "purple"]}
})
```

Hover over the dots in the plot below to reveal the country names.

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=tooltips' width='100%' height='550px' style='border: none;'></iframe>

Finally, you can facet a plot in Observable Plot specifying a `facet` option. When using facets, you might want to modify the `width` and `height` options of the plot.

```jsx
Plot.plot({
  facet: {
    data: countries,
    x: "continent"
  },
  width: 1000,
  height: 300,
  marks: [
    Plot.dot(countries, {
    x: "income",
    y: "lifeexp",
    fill: "continent",
    r: "population",
    stroke: "black",
    strokeWidth: 1,
    title: "country"
  })
  ],
  x: {type: "log", grid: true, ticks: 3, label: "Income (GDP/capita) →"},
  y: {grid: true, ticks: 4, domain: [50, 85], label: "↑ Life expectancy (years)"},
  color: {legend: true, range: ["#FF265C", "#FFE700", "#4ED7E9", "#70ED02", "purple"]}
})
```

<iframe src='https://observablehq.com/embed/15ae37db391bac47?cells=facets' width='100%' height='350px' style='border: none;'></iframe>

## Resources

Here are some links to learn more about Observable and Observable Plot:

- The notebook to [get started in Observable](https://observablehq.com/@observablehq/getting-started)
- The [gallery of Observable tutorials](https://observablehq.com/tutorials)
- The gallery of tutorials also includes [a tutorial on Observable Plot](https://observablehq.com/@observablehq/plot?collection=@observablehq/plot)
- The [Plot Cheatsheets](https://observablehq.com/@observablehq/plot-cheatsheets) gives an overview of all marks, scales and theming available in Observable Plot
- The [complete Observable Plot documentation is published here](https://github.com/observablehq/plot).