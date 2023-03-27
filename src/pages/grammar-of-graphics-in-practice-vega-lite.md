## What is Vega-Lite?

[Vega-Lite](https://vega.github.io/vega-lite/) is an open source language to store and exchange descriptions of visualisations. These descriptions are called specifications. Vega-Lite uses the <span class='internal-link'>[JavaScript Object Notation (JSON)](json-files)</span> for its specifications.

Vega-Lite was designed as a more concise and convenient version of the even more flexible but harder to work with [Vega language](https://vega.github.io/vega/). Both Vega and Vega-Lite can be used to specify the interactive behaviour of a visualisation too. Vega and Vega-Lite were developed at [the Interactive Data Lab of the University of Washington](http://idl.cs.washington.edu/).

Vega-Lite is not a library or a software program that you can use on its own to produce data visualisations. Vega-Lite specifications only describe how a visualisation should be constructed from the data, based on the logic and the building blocks of the Grammar of Graphics.

Under the hood, many visualisation tools are using Vega and Vega-Lite, and many programming languages have plugins to work with Vega-Lite specifications and generate visualisations based on them. Check the [Vega-Lite Ecosystem](https://vega.github.io/vega-lite/ecosystem.html) for an overview of tools and plugins that use Vega-Lite.

## Getting started with Vega-Lite

The documentation of the full Vega-Lite specification is published at [vega.github.io/vega-lite/docs](https://vega.github.io/vega-lite/docs/). In this module, we will link back to parts of this documentation for reference.

The main tool to edit Vega-Lite specifications and generate visualisations based on them is the [online Vega-Lite editor](https://vega.github.io/editor/#/examples/vega-lite/bar). To use the editor, no software needs to be installed on your computer: everything runs in the browser.

In the Vega-Lite editor, you can view and edit the Vega-Lite JSON specification in the left pane, and the resulting visualisation is shown on the right. This means that on top of Vega-Lite, the Vega-Lite editor is using an additional library to generate the chart from the Vega-Lite specification.

![A browser window showing the Vega Editor with the specification and a preview of a vertical bar chart](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-editor.png)

Source: Maarten Lambrechts, CC BY SA 4.0

With the “Export” button in the top menu, you can export the visualisation or the specification in various formats, and with the “Examples” button you have access to the almost 200 visualisations and their specifications in the [Vega-Lite examples gallery](https://vega.github.io/vega-lite/examples/).

## Introduction to JSON

Because Vega-Lite specifications are written in JSON, a basic understanding of JSON is needed before starting to work with Vega-Lite.

JSON, or Javascript Object Notation, is a human readable, open standard file format that is widely used to exchange data. Although its name indicates that it originated from the JavaScript programming language, it is used by many other programming languages, and many tools are able to read and write JSON files (which can (but don’t have to) have a `.json` file extension).

JSON files can be opened and edited with any text editor, and its structure consists of key-value pairs separated with a colon:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
```

From the example JSON above, you can see that the values can be 

- a string, see for example the value of `firstName`
- a number, see the value of `age`
- an object with child properties. These child properties are enclosed in curly brackets `{ }`, see for example the value of `address`
- a list of values or objects. These lists are called arrays and they are enclosed in square brackets `[ ]`, see the value of `phoneNumbers` for example (the value of `children` is an empty array)

To work with Vega-Lite, you will need to edit JSON manually. Because the JSON syntax is pretty sensitive to errors, you should pay attention to

- always use double quotation marks for property names and string values
- always close any opened quotation marks
- always close any opened curly or square brackets

The Vega-Lite editor can help you to avoid or spot errors. It uses different font colours to show semantic meaning (strings are blue and numbers are green, for example) and it will notify you in case of errors.

Clicking right in the editor pane and selecting “Format Document” will apply indenting and line breaks which makes the JSON you are editing more readable.

![ ](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-format-document.png)

The menu that appears when clicking right in the editor pane. Source: Maarten Lambrechts, CC BY SA 4.0

## Making a visualisation with Vega-Lite

In this module, we are going to create the same visualisation as in <span class='internal-link'>[Grammar of graphics in practice: Tableau](grammar-of-graphics-in-practice-tableau)</span>.

![A bubble chart of countries, with life expectancy on the y axis and GDP/capita on the x axis](Grammar%20of%20Graphics%20in%20practice%20Tableau%2075769011e12544f993c61105e5caa3e8/gapminder_basic.png)

Source: Maarten Lambrechts, CC BY SA 4.0

This time [the data is hosted on Google Sheets,](https://docs.google.com/spreadsheets/d/1XNMXXIEnuTF-Wu-N7fs368qZGfGlBdCknAspt_wzGJE/edit?usp=sharing) and we can use the `url` property of Vega-Lite’s top level `data` property to load data from a url.

The JSON snippet below is the “minimum viable specification” to load data in the Vega-Lite editor.

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpzJYEJv9hkwx3ZLaimdpZmrHK_hyPGXlAho_BaM2p_qsWRygvorbif1KvyPP_k0mt6j04vIL0ANUT/pub?gid=43247911&single=true&output=csv",
    "format": {
      "type": "csv"
    }
  },
  "mark": {"type": "circle"}
}
```

You can copy/paste the above snippet [in the Vega-Lite editor](https://vega.github.io/editor/#), and inspect the loaded data in the Data Viewer in the bottom right.

![A browser window showing Vega Editor with the specification to load the data, with the data visible in the Data Viewer](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-data.png)

Source: Maarten Lambrechts, CC BY SA 4.0

In this snippet

- the `$schema` property specifies the version of Vega-Lite that is being used. In this case is this version 5.
- every Vega-Lite specification needs a <code>[data](https://vega.github.io/vega-lite/docs/data.html)</code> property that specifies the data to use for the visualisation. In this case, the data is loaded from a <code>[url](https://vega.github.io/vega-lite/docs/data.html#url)</code> and it is in the `csv` format.
- Vega-Lite specifications are invalid without a <code>[mark](https://vega.github.io/vega-lite/docs/mark.html)</code> property. In the visualisation pane on the right, this mark is visible as a single, little circle (you might have to click on the “Run” button in the top left of the editor).

To visualise the data, we need to map the variables in the data to the aesthetics of geometric objects. Or, in Vega-Lite language, we need to **encode fields** into the **properties** of the **marks**. You can do that by adding an <code>[encoding](https://vega.github.io/vega-lite/docs/encoding.html)</code> property to the specification, and specify which field you want to encode into which property.

Start by encoding the `lifeexp` field to the `y` property of the marks:

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpzJYEJv9hkwx3ZLaimdpZmrHK_hyPGXlAho_BaM2p_qsWRygvorbif1KvyPP_k0mt6j04vIL0ANUT/pub?gid=43247911&single=true&output=csv",
    "format": {
      "type": "csv"
    }
  },
  "mark": {"type": "circle"},
  "encoding": {
    "y": {
          "field": "lifeexp",
          "type": "quantitative"
        }
  }
}
```

The result is a first (but still rather unimpressive) visualisation:

<p class='center'>
<img src='Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-y.png' alt='A chart with a y axis for the lifeexp variable, with blue dots plotted on top of each other' class='max-100' />
</p>

Source: Maarten Lambrechts, CC-BY-SA 4.0

Note that in the encoding for `y`, we need to set the type of the `lifeexp` field to “quantitative”. This makes sure that the numeric values in that field are correctly parsed as numbers, and the y scale is a numerical one.

Let’s add the encoding for the `x` property.

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpzJYEJv9hkwx3ZLaimdpZmrHK_hyPGXlAho_BaM2p_qsWRygvorbif1KvyPP_k0mt6j04vIL0ANUT/pub?gid=43247911&single=true&output=csv",
    "format": {"type": "csv"}
  },
  "mark": {"type": "circle"},
  "encoding": {
    "y": {"field": "lifeexp", "type": "quantitative"},
    "x": {"field": "income", "type": "quantitative"}
  }
}
```

The result is a little scatter plot:

<p class='center'>
<img src='Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-x-y.png' alt='A scaatter plot with blue dots, with the variable lifeexp on the y axis and the income on the x axis' class='max-400' />
</p>

Source: Maarten Lambrechts, CC BY SA 4.0

Before we add more encodings, let’s make the plot a bit bigger by specifying [a `width` and a `height` property](https://vega.github.io/vega-lite/docs/size.html).

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 800,
  "height": 500,
  "data": {
    "url": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpzJYEJv9hkwx3ZLaimdpZmrHK_hyPGXlAho_BaM2p_qsWRygvorbif1KvyPP_k0mt6j04vIL0ANUT/pub?gid=43247911&single=true&output=csv",
    "format": {"type": "csv"}
  },
  "mark": {"type": "circle"},
  "encoding": {
    "y": {"field": "lifeexp", "type": "quantitative"},
    "x": {"field": "income", "type": "quantitative"}
  }
}
```

Note that the order in which properties are added to the Vega-Lite specification does not matter. What does matter, however, is the hierarchy in the specification. For example, the `url` and `format` properties need to be specified as (direct) children of the `data` property.

When the expected JSON hierarchy is not respected, the Vega-Lite editor will signal an error.

![The Vega Editor showing some JSON and the warning 'Property format is not allowed'](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-error.png)

The format property should be a child of the data property, and not be a sibling of it. The Vega-Lite editor will show any errors in the editor pane. Source: Maarten Lambrechts, CC BY SA 4.0

Let’s return to the plot and add fill and size encodings.

```json
...
"encoding": {
    "y": {"field": "lifeexp", "type": "quantitative"},
    "x": {"field": "income", "type": "quantitative"},
    "fill": {"field": "continent"},
    "size": {"field": "population", "type": "quantitative"}
  }
...
```

The continent field is categorical, and we don’t need to set its `type` to be correctly parsed. If you would still like to do so, you should set the `type` property to a value of “nominal”.

The chart now looks like this, with legends for the fill and size encodings added to the plot automatically:

![A bubble chart with coloured and sized circles, with a legend for each](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-all-encodings.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

Now it’s time to work on the [scales](https://vega.github.io/vega-lite/docs/scale.html) and [axes](https://vega.github.io/vega-lite/docs/axis.html). Let’s turn the x scale into [a logarithmic one](https://vega.github.io/vega-lite/docs/scale.html#log), specify the start and end values of the axes, and limit the number of ticks.

```json
...
"encoding": {
    "y": {
      "field": "lifeexp",
      "type": "quantitative",
      "scale": {"zero": false},
      "axis": {"tickCount": 4}
    },
    "x": {
      "field": "income",
      "type": "quantitative",
      "scale": {"type": "log", "domain": [500, 120000]},
      "axis": {"tickCount": 3}
    },
    "fill": {"field": "continent"},
    "size": {"field": "population", "type": "quantitative"}
  }
...
```

Setting the `zero` property to false on a scale relieves it from the requirement to start at zero, the start and end value of a scale can be set with the `domain` property. And finally, the number of ticks on an axis can be set with the `tickCount` property:

![The same bubble chart as above, but with a logarithmic x axis](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-scales-axes.png)

Now, let’s also configure the scales and [legends](https://vega.github.io/vega-lite/docs/legend.html) for the size and fill encodings, and move the legends to the top of the plot:

```json
...
"encoding": {
    "x": {
      "field": "income",
      "type": "quantitative",
      "scale": {"type": "log", "domain": [500, 120000]},
      "axis": {"tickCount": 3}
    },
    "y": {
      "field": "lifeexp",
      "type": "quantitative",
      "scale": {"zero": false},
      "axis": {"tickCount": 4}
    },
    "fill": {
      "field": "continent",
      "title": "Continent",
      "legend": {"orient": "top"}
    },
    "size": {
      "field": "population",
      "type": "quantitative",
      "title": "Population",
      "scale": {"range": [0, 10000]},
      "legend": {
        "values": [10000000, 100000000, 500000000, 1000000000],
        "orient": "top"
      }
    }
  }
...
```

![The same bubble plot as above, but with bigger bubbles and with the legend on top instead of to the right](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-all-scales.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

As a last step, we can configure the visual properties that don’t carry any data encoding directly in the mark property:

```json
...
"mark": {
    "type": "circle",
    "strokeWidth": 1,
    "stroke": "black",
    "opacity": 1
    },
  "encoding": {
		...
  }
...
```

![The same bubble chart as above, but with the bubbles having a black outline](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-mark-properties.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

This is pretty close to the original chart. If you would like, you could set the colours for the fill encoding by adding [a scale property to it and set the colours to use in its range property](https://vega.github.io/vega-lite/docs/scale.html#2-setting-the-range-property-to-an-array-of-valid-css-color-strings).

The full specification of this plot is contained in the JSON file linked to below. You can download it, open it with any text editor, and copy/paste the specification in the Vega-Lite editor to reconstruct the same plot.

[bubble-plot-vega-lite.json](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/bubble-plot-vega-lite.json)

## Extra

To facet the plot, the only thing you have to do is to add an additional <code>[facet](https://vega.github.io/vega-lite/docs/facet.html)</code> encoding.

```json
...
"encoding": {
    "facet": {"field": "continent"},
		"x": {...},
		"y": {...},
    "fill": {...},
    "size": {...}
  }
...
```

![5 small multiple bubble charts, one for each continent](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-faceted.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

For faceted plots, you should adjust the `width` and `height` properties, because they apply to every faceted small multiple plot.

Adding tooltips to a Vega-Lite plot can be done by setting the <code>[tooltip](https://vega.github.io/vega-lite/docs/tooltip.html)</code> property in the `mark` specification to true (this will show the values of the fields encoded in the mark), or you can set the tooltip property to `{"content": "data"}` to show all fields in the data (in this case, this will also reveal the country name of each country).

```json
...
"mark": {
    "type": "circle",
    "strokeWidth": 1,
    "stroke": "black",
    "opacity": 1,
    "tooltip": {"content": "data"}
 }
...
```

![The bubble chart revealing the data for India in a tooltip](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-tooltip.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

Finally, to demonstrate some of the data transformations built into Vega-Lite, and to show how layering works in Vega-Lite, we add vertical and horizontal lines to the plot to annotate the median values for life expectancy and income.

To do so, we need to add a  <code>[layer](https://vega.github.io/vega-lite/docs/layer.html)</code> property, with as value an array of marker specifications. So the structure of the specification needs to change from this…

```json
...
"mark": {
	"type": "circle"
	...
}
"encoding": {
	...
}
...
```

… to this:

```json
...
"layer": [
	{
		"mark": {
			"type": "circle"
			...
		}
		"encoding": {
			...
		}
	}
]
```

With this new structure we can start to add additional layers:

```json
...
"layer": [
	/* Layer 1 specification */
	{
		"mark": {
			"type": "circle"
			...
		}
		"encoding": {
			...
		}
	},
	/* Layer 2 specification */
	{
		"mark": {
			"type": "rule"
			...
		}
		"encoding": {
			...
		}
	},
/* Layer 3 specification */
	{
		"mark": {
			"type": "rule"
			...
		}
		"encoding": {
			...
		}
	}
]
```

With layers 2 and 3 specified as follows…

```json
...
"layer": [
	/* Layer 1 specification */
	{
		"mark": {
			"type": "circle"
			...
		}
		"encoding": {
			...
		}
	},
	/* Layer 2 specification */
	{
      "mark": {
        "type": "rule",
        "color": "black",
        "size": 1.5,
        "strokeDash": [10, 5]
      },
      "encoding": {
        "y": {
					"aggregate": "median",
					"field": "lifeexp",
					"type": "quantitative"}
      }
    },
    {
      "mark": {
        "type": "rule",
        "color": "black",
        "size": 1.5,
        "strokeDash": [10, 5]
      },
      "encoding": {
        "x": {
					"aggregate": "median",
					"field": "income",
					"type": "quantitative"
				}
      }
    }
]
```

…the plot looks like this, with dashed horizontal and vertical lines indicating the median values for life expectancy and income:

![The same bubble chart as above, but with dashed black lines indicating the medians for life expectancy and for income](Grammar%20of%20Graphics%20in%20practice%20Vega-Lite%200cbc23e356d84ae3b4d5d1927c695bce/vega-lite-transforms-layers.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

The crux here is in the <code>[aggregate](https://vega.github.io/vega-lite/docs/aggregate.html)</code> property: with it, you can summarise the values in a field to an aggregated value. In this case we are using “median” for the median values, but you could also set it to “average” for the average values, for example.