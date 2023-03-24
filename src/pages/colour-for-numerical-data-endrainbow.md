A popular way of representing numbers with colours is the rainbow colour scale. But there are many problems associated with this colour palette.

Take this map, showing the annual precipitation in the state of Texas.

![A map of Texas with a rainbow colour scale applied to it, but without a legend](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/precipitation-map-nolegend.gif)

Map by Jenny Weisburg, source: [Reddit](https://www.reddit.com/r/MapPorn/comments/5a8qbh/precipitation_in_texas_898_x_713/) 

As we discussed, without a legend, it is impossible to decode the numbers from the colours on this map. But there is more: you can’t even identify the relatively drier and wetter areas in Texas, because there is no natural order in the colours. Is purple wetter than yellow?

Here is the map, this time with the legend:

![The same map as above, but this time with a colour scale showing the classes of precipitation](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/precipitation-map-legend.gif)

Map by Jenny Weisburg, source: [Reddit](https://www.reddit.com/r/MapPorn/comments/5a8qbh/precipitation_in_texas_898_x_713/) 

With the legend, the reader now has access to the values, and it is possible now to identify the wetter and drier areas in Texas.

But watch what happens when the map is printed in black and white:

![The same map as above, but in greyscale. The different classes cannot be told apart anymore because they are in similar greys](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/precipitation-map_bw.gif)

Map by Jenny Weisburg, source: [Reddit](https://www.reddit.com/r/MapPorn/comments/5a8qbh/precipitation_in_texas_898_x_713/) 

The map no longer makes sense, and even with the legend present, it is impossible to interpret it correctly.

Alternative colour palettes exist that don’t suffer from these issues. Consider this precipitation map:

![A precipitation map of the area around Houston, with a yellow - blue colour scheme, without a legend](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/rainmap_ny_nolegend.jpg)

Source: [Maps: Tracking Harvey’s Destructive Path Through Texas and Louisiana](https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html), New York Times

The map does not need a legend to identify the wet and dry areas: darker values are associated with higher values, and the blue colours have an association with water.

A legend just helps to get access to the actual numbers:

![The same map as above but with a legend](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/rainmap_nyt.png)

Source: [Maps: Tracking Harvey’s Destructive Path Through Texas and Louisiana](https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html), New York Times

The map even survives black and white printing very well:

![The same map as above, but in greyscale. Despite the lack of colour, the map remains visible](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/rainmap_nyt_bw.png)

Source: [Maps: Tracking Harvey’s Destructive Path Through Texas and Louisiana](https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html), New York Times