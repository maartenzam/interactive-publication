Free, open source

[vega.github.io](https://vega.github.io/)

Vega and its smaller and simpler sister Vega-Lite are languages to specify how a visualisation is composed from data. It uses the same foundations as ggplot2 in R and Altair in Python, so it specifies how columns in the data should relate to properties of graphical marks, like points or bars. On top of that, it can also describe interactive features of visualisations.

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple bar chart with embedded data.",
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "nominal", "axis": {"labelAngle": 0}},
    "y": {"field": "b", "type": "quantitative"}
  }
}
```

<p class='center'>
<img src='Data%20visualisation%20design%20in%20practice%202%20tools%20208f06b06b0f4b21ad8ecf3047f02ce0/vega-bar.png' alt='' class='max-600' />
</p>

Source: [vega.github.io/editor](https://vega.github.io/editor/#/)

Vega and Vega Lite are written in <span class='internal-link'>[JSON](json-files)</span> and on their own, they are not enough to turn data into a visualisation. The creators of Vega developed another library to embed visualisations based on Vega into web pages, called [Vega Embed](https://github.com/vega/vega-embed).

See <span class='internal-link'>[Grammar of Graphics in practice: Vega-Lite](grammar-of-graphics-in-practice-vega-lite)</span> for an introduction to Vega-Lite.