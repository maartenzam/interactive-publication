Publishing data visualisations as JPG or PNG is convenient: most people are familiar with these file formats, and CMS’s know how to deal with these files. But there are some drawbacks when it comes to accessibility.

Visually impaired people make use of screenreader software to access the content of web pages. These screen readers use the structure and the content of the HTML page to read its content out loud. But text elements on a visualisation (its title, axis titles, data labels, annotations, ...) are baked into the pixels of the JPG and PNG images, and are therefore inaccessible to screen readers. This means that visually impaired people have no access to the content of bitmap images.

This is why good CMS’s give you the possibility to provide an alt attribute to `<img>` tags. “alt” stands for “Alternative text”, and this attribute serves multiple purposes:

- The alt text will display in the browser in case the image cannot be loaded
- The alt text will be read out loud by screen readers
- The alt text is used by search engines to index images and web pages

In fact, the alt attribute is compulsory in HTML (but it can be left blank). So, for accessibility reasons, the HTML used above should be edited to:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Webdev 101</title>
  </head>
  <body>
    <h1>Learning about HTML</h1>
    <p>HTML is fun: set the src attribute of an img tag to an image hosted somewhere, and your page will display it.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Playfair_TimeSeries-1.png"
					alt="A line chart showing the exports to and from Denmark and Norway for the UK for the 1700 - 1780 time period. The chart was produced by William Playfair, and it is one of the first line charts ever made."/>
  </body>
</html>
```

Providing a description of the main message of a visualisation as an alternative text to the JPG or PNG file should be the bare minimum to make your visualisations more accessible.