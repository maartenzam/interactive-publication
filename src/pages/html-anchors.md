The “hyper” in the “hypertext” of HTML refers to the fact that HTML can contain links to other HTML documents. These links (”hyperlinks”) are created with `<a>` tags (the “a” stands for “anchor”), and the `href` attribute of  an `<a>` tag specifies the location of the document referenced by the link. Hyperlinks can also be used to point to elements within the same web page, to files to download and to email addresses to send emails to, for example.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Webdev 101</title>
  </head>
  <body>
    <h1>Anchors</h1>
		<p>A link in html is created with an a tag (for "anchor"). Read <a href="https://en.wikipedia.org/wiki/HTML_element#Anchor">more about anchors on their Wikipedia page</a>.</p>
        <p>Notice that the url of the link above ends in "#Anchor". This will cause the browser to scroll down on the referenced page up to the element with the <code>id</code> attribute with value "Anchor".</p>
  </body>
</html>
```

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/anchors.html'>See this <code>anchors.html</code> page live</a>, or <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/anchors.html'>inspect the source HTML</a>.
</aside>