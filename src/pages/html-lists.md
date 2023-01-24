HTML can contain two types of lists: ordered lists (`<ol>`) will be automatically numbered, and unordered lists (`<ul>`) will be be turned into bullet lists by default. Both types of lists contain a list of list items defined with `<li>` tags.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Webdev 101</title>
  </head>
  <body>
    <h1>The POUR principles</h1>
		<p>The 4 POUR principles are:</p>
        <ol>
            <li>Perceivable</li>
            <li>Operable</li>
            <li>Understandable</li>
            <li>Robust</li>
        </ol>
        <p>The additional CAF principles are:</p>
        <ul>
            <li>Compromising</li>
            <li>Assistive</li>
            <li>Flexible</li>
        </ul>
  </body>
</html>
```

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/lists.html'>Check the <code>lists.html</code> page to see this live in your browser</a>, or <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/lists.html'>inspect its source HTML here</a>.

</aside>