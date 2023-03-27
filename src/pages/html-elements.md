The building blocks of HTML are called **elements**, and each element consists of an opening and closing tag, with the **content** of the element in between. Tags are enclosed in less than (`<`) and greater than (`>`) characters.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Webdev 101</title>
  </head>
  <body>
    <h1>Learning about HTML</h1>
    <p>HTML is fun: set the src attribute of an img tag to an image hosted somewhere, and your page will display it.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Playfair_TimeSeries-1.png" width="600px"/>
  </body>
</html>
```

![A browser window showing a basic HTML page with the heading 'Learning about HTML'](HTML%20101%20669091b94f10444db4b140f91662a708/learning-html.png)

The HTML above displayed in a browser. Source: Maarten Lambrechts, CC BY SA 4.0

<aside>
🔗 You can see this most basic of web pages live in your browser by <a href='https://officepublicationseu.github.io/accessible-html-dataviz/basic-html.html'>navigating to the <code>basic-html.html</code> page</a>. You can <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/basic-html.html'>inspect the source HTML of that page here</a>.
</aside>

All elements of a web page are contained in the parent `<html>` tag. The `<head>` tag is a direct child element of `<html>` and contains metadata about the HTML page. Its content is not displayed directly by web browsers, but the `<title>` element in `<head>` is displayed in the title bar of web browsers, or as the title of a browser’s tab. It can also read out loud by screen readers.

The content of the page displayed by browsers is contained in the `<body>` tag, which should also be a direct child element of `<html>`.

HTML elements can be **nested**: elements can be part of the content of other elements. In the HTML snippet above, the `<head>` element is nested in the `<html>` element, and the `<title>` element in its turn is nested in the `<head>` element. A nested element is called a child of the parent element it is nested in.

HTML elements can also have **attributes**. Attributes contain additional information about elements, and are not displayed. Attributes are used to style elements and to target them to define interactive behaviour, for example. In the snippet above, the `<img>` tag has a `src` attribute that specifies where the image should be loaded from.

The most basic HTML elements are paragraphs and headers. Paragraphs are specified with `<p>` tags, and headers with the `<h1>` to `<h6>` tags. With the header tags, you can create structure and hierarchy in the content of your web page. With header tags, you can generate a table of content automatically, for example.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Webdev 101</title>
  </head>
  <body>
    <h1>1. Intro to HTML</h1>
		<h2>Images</h2>
    <p>With img tags you can embed images.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Playfair_TimeSeries-1.png" width="600px"/>
		<h2>Paragraphs</h2>
		<p>With p tags you define paragraphs.</p>
		<h2>Headers</h2>
		<p>With h1 to h6 tags you define headers.</p>
		<h1>Other elements</h1>
		<p>A lot of other HTML elements exist.</p>
  </body>
</html>
```

![A web browser showing a web page with the header '1. Intro to HTML' and with smaller headers, paragraphs and an image](HTML%20101%20669091b94f10444db4b140f91662a708/html-paragraphs-headers-page.png)

Source: Maarten Lambrechts, CC BY SA 4.0

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/paragraphs-headers.html'>See this <code>paragraphs-headers.html</code> page live</a>, or <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/paragraphs-headers.html'>inspect the source HTML here</a>.
</aside>