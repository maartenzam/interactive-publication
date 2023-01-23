When you click a link and your web browser navigates to a new page, a lot of things happen behind the scenes. In order to understand how graphics work online, you should have an understanding of these processes.

In its most basic form, when a web browser opens a page, it is sending a request to a web server to send the content of the requested page. If the request is valid, the web server will respond by sending the content of the page to the browser, after which the browser can display it.

![Source: Maarten Lambrechts, CC BY SA 4.0](Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/simple-request2x.png)

Source: Maarten Lambrechts, CC BY SA 4.0

**HTML** (HyperText Markup Language) is the language for describing the structure of a web page. The building blocks of HTML are called elements, and each element consists of an opening and closing tag, with the content of the element in between.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Webdev 101</title>
  </head>
  <body>
    <h1>Learning about HTML</h1>
    <p>HTML is fun: set the src attribute of an img tag to an image hosted somewhere, and your page will display it.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Playfair_TimeSeries-1.png" />
  </body>
</html>
```

![The HTML above displayed in a browser. Source: Maarten Lambrechts, CC BY SA 4.0](Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/learning-html.png)

The HTML above displayed in a browser. Source: Maarten Lambrechts, CC BY SA 4.0

When the browser is loading this very basic web page, it is actually making a second request: it requests the image file from the server at upload.wikimedia.org. That server will respond by sending the image to the browser, so the browser can display it.

![Source: Maarten Lambrechts, CC BY SA 4.0](Online%20graphics%20d2d7b9f6c2b748a9a12dc8a006f8330a/image-request2x.png)

Source: Maarten Lambrechts, CC BY SA 4.0

<aside>
🔎 If you want to see where an image on a webpage is hosted, you can click right on it and click “Open Image in New Tab”, and then inspect the url in the address bar. If you try this with the images in Notion, you have to select “View original” instead of “Open image in New Tab”.

</aside>

The `<img>` tag supports 5 file formats: JPG, PNG, WEBP, GIF (see <span class='internal-link'>[bitmap images](bitmap-images)</span>) and SVG (see <span class='internal-link'>[vector images](vector-images)</span>). Many data visualisations published online will use JPG or PNG as the file format: the data visualisations are created in a data visualisation tool, then exported to JPG or PNG and finally published by uploading the files to a CMS (Content Management System).