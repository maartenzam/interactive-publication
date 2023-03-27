The way elements are arranged in a visualisation can determine its aspect ratio. And when the layout is made “fluid”, you can ensure that the visualisation is presented in an optimal way on all screen sizes.

The following icons show the number of deaths in a mass shooting in Las Vegas in 2017. On desktop, the icons are spread over 2 rows.

![A sequence of 58 silhouettes of people, representing 58 people who died in a mass shooting in Las Vegas, running over two rows](Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/las-vegas-shooting-nytimes-desktop.png)

Source: [nytimes.com](https://www.nytimes.com/interactive/2017/10/06/us/las-vegas-gun-deaths.html)

On smaller screens, the icons are not scaled, but they are distributed over more rows.

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/las-vegas-shooting-nytimes-mobile.png' alt='The same number of silhouettes, but this time running over 4 rows' class='max-400' />
</p>

Source: [nytimes.com](https://www.nytimes.com/interactive/2017/10/06/us/las-vegas-gun-deaths.html)

The same fluid layout can be applied to small multiple visualisations (small multiple visualisations are small copies of the same chart showing data for different categories).

![A sequence of 7 area charts showing the undernourishment rate in 7 regions in the world, all next to each other](Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/undernourishment-worldbank-desktop.png)

Small multiple charts are arranged next to each other on screens that are wide enough. Source: [Sustainable Development Goals Atlas 2020](https://datatopics.worldbank.org/sdgatlas/goal-2-zero-hunger/), The World Bank

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/undernourishment-worldbank-mobile.png' alt='The same small multiple area charts as above, but presented with only 2 per row' class='max-600' />
</p>

On smaller screens, the small multiples are arranged over multiple rows. Source: [Sustainable Development Goals Atlas 2020](https://datatopics.worldbank.org/sdgatlas/goal-2-zero-hunger/), The World Bank

Notice that spreading the small multiples over multiple rows most likely will cause the visualisations not to be visible all at once. To compare the charts, users will have to scroll up and down.

Also notice that the elements surrounding the visualisations (the buttons for switching between relative and absolute numbers, and the legend that explains the downward and upward trends) are also fluidly positioned. On big screens they are positioned next to each other, while on mobile they are placed on top of each other. This is a technique commonly used in visualisations with a lot of user interaction controls and in dashboards.

![A screenshot of the homepage of the OECDs Better Life Index, with visualisations on the left, and interactive controls on the right](Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/oecd-better-life-desktop.png)

The controls in the OECD Better Life Index are positioned on the side of the visualisations… Source: [www.oecdbetterlifeindex.org](https://www.oecdbetterlifeindex.org/)

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/oecd-better-life-mobile.png' alt='A screenshot of the homepage of the OECDs Better Life Index viewed on a smaller screen' class='max-600' />
</p>

… while they are positioned below the visualisations on smaller screens. Source: [www.oecdbetterlifeindex.org](https://www.oecdbetterlifeindex.org/)

Besides adopting a fluid layout of chart and user interface elements, the design of a visualisation can also be adapted to create a high layout from a wide one. One example of this is to integrate the category labels of a bar chart directly in the visualisation instead of positioning them next to bars.

![A visualisation of when first black people were elected in different positions in the US. The chart has a wide layout, with labels next to the lines](Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/nytimyes-glass-ceilings-desktop.png)

A layout for wide screens, with the labels to the right of the visualisation… Source: [nytimes.com](https://www.nytimes.com/interactive/2016/07/25/us/politics/political-firsts.html)

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/nytimes-glass-ceilings-mobile.png' alt='The same chart as above, but with a condensed, less wide layout' class='max-400' />
</p>

…and a high layout for tall screens, with the labels integrated. Source: [nytimes.com](https://www.nytimes.com/interactive/2016/07/25/us/politics/political-firsts.html)