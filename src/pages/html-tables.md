Tables in HTML are defined with `<table>` tags. The header of a table, containing the column names, is contained in the `<thead>` tag, the body of the table in the `<tbody>` tag. Each row in a table goes in a `<tr>` tag (for “table row”) and each cell in a row of a table is contained in a `<td>` tag (”td” stands for “table data”).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Webdev 101</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }
    </style>
  </head>
  <body>
    <h1>Tables</h1>
		<p>Here is a table in HTML:</p>
        <table>
            <thead>
                <tr>
                    <th>Module</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>5. Colours, colour blindness and data visualisation</td>
                    <td><input type="checkbox" checked></td>
                </tr>
                <tr>
                    <td>6. Making data visualisations understandable</td>
                    <td><input type="checkbox" checked></td>
                </tr>
                <tr>
                    <td>7. HTML 101</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <td>8. Accessible HTML</td>
                    <td><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>
  </body>
</html>
```

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/tables.html'>See the <code>tables.html</code> page live in your browser</a>, or <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/tables.html'>inspect its source HTML</a>.

</aside>