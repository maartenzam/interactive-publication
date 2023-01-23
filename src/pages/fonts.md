One advantage of bitmap images, like jpg or png files, have over vector file formats is that they always contain text in the font selected by the designer. But a big drawback of bitmap images when it comes to text is that the text is not accessible.

In contrast, text in vector graphics is accessible. But  when a vector file is viewed on a computer that does not have the font of the text installed, the text will be rendered using a default font, different from the intended one. This is common when graphic files like Adobe Illustrator files are exchanged: when a used font is missing on the computer used to open the file, Illustrator will show a warning.

<p class='center'>
<img src='Data%20visualisation%20design%20in%20practice%201%20design%20tri%201d0d3c62419c4546846d9a92f783836c/illustrator-missing-fonts.png' alt='' class='max-600' />
</p>

Source: [astutegraphics.com](https://astutegraphics.com/)

When a missing font is open and freely available, the solution is as easy as downloading and installing the font. But if you, as the creator of the graphic, want to make sure the text looks as you intended, you can embed fonts in the file you use to save and share the file.

Embedding fonts is common in PDF files and Adobe software files, but fonts can also be embedded in Word and Powerpoint files, for example.

![The options for embedding fonts when saving a Microsoft Word document. Source: [support.microsoft.com](https://support.microsoft.com/en-us/office/benefits-of-embedding-custom-fonts-cb3982aa-ea76-4323-b008-86670f222dbc#OfficeVersion=Windows)](Data%20visualisation%20design%20in%20practice%201%20design%20tri%201d0d3c62419c4546846d9a92f783836c/embed-fonts-word.png)

The options for embedding fonts when saving a Microsoft Word document. Source: [support.microsoft.com](https://support.microsoft.com/en-us/office/benefits-of-embedding-custom-fonts-cb3982aa-ea76-4323-b008-86670f222dbc#OfficeVersion=Windows)

Online, the situation is a bit different. SVG graphics that are part of the HTML of a web page can make use of web fonts. These are fonts that don’t have to be installed on the user’s computer: web browsers load these fonts from a web server and use CSS (see <span class='internal-link'>[Styling and CSS](styling-and-css)</span>) to style the text and display it using the loaded fonts.