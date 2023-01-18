Picking the right dimensions for your visualisations is not easy. Here are some basic rules you can follow to pick dimensions and file formats.

## Vector graphics if you can

The first and most important rule is to use <span class="internal-link">[vector graphics](vector-images)</span> when you can. They are resolution independent and can be converted to raster graphics when needed (converting from raster to vector graphics is much harder). Many data visualisation tools export vector graphics, for which SVG is the most common file format.

## Raster graphics if you must

Sometimes vector graphics are not an option, and you need to work with <span class="internal-link">[raster images](raster-images)</span>. Here are some guidelines for that situation.

Print publications are often printed on 300 dpi. The needed resolution for your raster graphics depends on the physical size of printed graphic (in centimeters), but the best option is to use a pixel count that is as high as possible. Ask your printer what dimensions (in pixels) the graphic should have, or **try a few proof prints** to make sure the resolution works for the print.

For **print**, you should avoid lossy compressed JPG files, and **use a lossless format** instead (PNG, TIFF). **Online**, use compressed **JPG files** for displaying images to improve loading times. You can try different compression rates and compare the results to pick the best one.

WebP is supported by all major modern browsers now, so you can consider it for compressed images instead of JPG for even better loading times. But not all graphics editing software support the export of WebP images yet.

Displays with high pixel density are becoming more common, so the graphics you produce **should look good on these displays too**. Browsers know how to detect the pixel density of the device they are running on, and you can use that information to display images with a fitting size. A common pattern is to show a regular version of your graphic on screens with normal pixel densities (commonly 96 ppi) and a bigger image (doubling the number of rows and columns, resulting in 4 times more pixels, often indicated with “@2x” in the file names) for screens with high pixel densities like retina displays. 

Technically, this means measuring the device’s [devicePixelRatio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio), and providing an image with fitting dimensions. Html provide mechanisms to serve images of different sizes for different window dimensions and pixel densities to create [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). This makes sure that no images with higher than required size (in kilobytes) are loaded, and that the displayed images do not look blurry or pixelated on high pixel density displays.

When you are designing graphics on a display with normal pixel densities, take into account that graphics that look ok on your screen **can look blurry on screens with higher pixel densities**.

When you scale your graphics for higher or lower pixel density displays, make sure to scale all elements in your graphic accordingly. When you create a “@2x” graphic, doubling the width and height of the original image, font sizes, circle sizes, stroke widths, ... should all double in size.