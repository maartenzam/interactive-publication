Responsive web design is an approach to web design that aims to make web pages look and function well on all screen sizes and devices. Responsive web design involves restructuring the content of a web page (for example placing elements on top of each other on small screens instead of next to each other on wider screens), adjusting font sizes and flexible image sizes.

Like modern web sites with a responsive design, data visualisations should ideally also be responsive and adapt their design to the device they are viewed on. If not, the data visualisations will be partially or completely unaccessible to both visually impaired users as well as to other viewers of your visualisation.

Responsive data visualisation entails many aspects of data visualisation design:

- a visualisation should **fit the screen** it is viewed on. This means that like images on a web page, their dimensions should be flexible
- a visualisation should take into account the **aspect ratio** of the screen it is viewed on. Desktop screens are usually used in landscape mode (wider than high), mobile phones are mostly used in portrait mode (higher than wide)
- visualisations that show **many data points** can become hard to read on smaller screens because the data marks (bars, circles, lines, …) will have less space and might start to overlap.
- **text** on a visualisation (annotations, labels, …) will have less space on smaller screens
- **interaction** is more difficult on mobile and smaller screens: targeting elements with touch is hard when the target elements are small.
- when a visualisation is created “on the fly” in the browser, the **data loaded** to generate the visualisation shouldn’t be too big, especially for users with mobile data connections. Heavy computational operations to generate visualisations are also problematic for low capacity mobile phones.