When showing data about people, like in the example above showing arrested people in Hong Kong, visualization designers and data journalists often use design strategies that presumably help the audience relate to those people. The term anthropographics has been recently coined to refer to this practice and the resulting visualizations.

The goal of using more relatable depictions of human beings in data visualisation is to promote social feelings or prosocial behaviour. It is a way to evoke empathy with the subjects of your data visualisation.

The design space of antropographics is very large: humans can be represented in a wide variety of ways.

![](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/southkorea-clusters-antropographics.png)

People icons used in a graphic on covid-19 clusters. Source: [The Korean clusters](https://graphics.reuters.com/CHINA-HEALTH-SOUTHKOREA-CLUSTERS/0100B5G33SB/index.html), graphics.reuters.com

Anthropographics don’t have to be visual necesarily: revealing some details about a person can already be enough to make an abstract visualisation more relatable.

![](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/stories-behind-a-line.png)

Stories Behind a Line tells the story of how seven migrants reached Europe after travelling long distances. The migrants are anonymous, but revealing their initials, their age and city and country of origin (see the top left), makes the stories a lot more personal. Source: [storiesbehindaline.com](http://www.storiesbehindaline.com/)

Below, different properties of anthropographics are discussed and illustrated.

## Granularity

Granularity refers to the extent to which the persons in the visualized dataset are mapped to separate data items – and equivalently, to separate marks on the visualization.

![A schematic diagram how a bar chart showing counts has low granularity, while a visual where each element represents a single person has maximum granularity](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/granularity.png)

Source: Luiz Morais, Yvonne Jansen, Nazareno Andrade, Pierre Dragicevic. [Showing Data about People: A Design Space of Anthropographics](https://hal.archives-ouvertes.fr/hal-02931257/document). IEEE Transactions on Visualization and Computer Graphics, Institute of Electrical and Electronics Engineers, In press. hal-02931257v2

In a visualization with low granularity, each mark corresponds to a group of persons who have one or more attribute values in common.

![Screenshot from a video showing a world map and people icons plotted on top of it, each representing millions of people](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/popular-mechanics-100ppl.jpg)

Low granularity anthropographics from the video [What If Only 100 People Existed on Earth?](https://www.youtube.com/watch?v=UbffuGZHeR0&t=329s&ab_channel=RealLifeLore) by RealLifeLore

In a visualization with maximum granularity, each data item corresponds to a single person.

![A group of people icons, each representing a single, real person](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/bloomberg-hongkong-overview.png)

Source: [How Hong Kong’s National Security Law Is Changing Everything](https://www.bloomberg.com/graphics/2021-hong-kong-national-security-law-arrests/), bloomberg.com

## Specificity

The specificity of a visualization corresponds to how distinctive the entire set of attributes of people in the visualized dataset is. The more the attributes allow to distinguish between data items (either individuals or groups of people) the higher the visualization’s specificity.

![A diagram illustrating how similar looking circles have a low specifity for representing people, while pictures with names of people have a high specifity](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/specifity.png)

Source: Luiz Morais, Yvonne Jansen, Nazareno Andrade, Pierre Dragicevic. [Showing Data about People: A Design Space of Anthropographics](https://hal.archives-ouvertes.fr/hal-02931257/document). IEEE Transactions on Visualization and Computer Graphics, Institute of Electrical and Electronics Engineers, In press. hal-02931257v2

In a visualization with **low specificity**, items tend to be visually very similar to each other and most of them cannot be distinguished.

![](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/tree-ring-immigration.png)

A visualisation showing where immigrants in the US originated from. Each dot represents 100 people, and the colours and angle from the center represent the region of the world people came from. The visualisation has a low specifity: apart from where people came from, no other attibutes are used to distinguish between them. Source: [Simulated Dendrochronology of U.S. Immigration 1790-2016](https://web.northeastern.edu/naturalizing-immigration-dataviz/)

![A close-up on the dots of the visualisation above. They are clustered in concentric rings, all of them have similar shapes, are green or blue, except one that is red](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/tree-ring-immigration-detail.png)

Source: [Simulated Dendrochronology of U.S. Immigration 1790-2016](https://web.northeastern.edu/naturalizing-immigration-dataviz/)

In a visualization with **high specificity**, the attributes in the visualized dataset allow the reader to perfectly distinguish all data items.

![A graphic titled 'The World's 25 Richest Millenial Billionaires, showing each of them with pictures, a flag of their home country, and a logo of the company they own](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/The-Worlds-25-Millennial-Billionaires_V4_Millennial-Billionaire.jpg)

Source: [visualcapitalist.com](https://www.visualcapitalist.com/worlds-25-richest-millennial-billionaires/)

## Realism

Realism refers to the degree of resemblance of the visualization’s marks to actual persons.

![A diagram showing that dots have low realism, while drawings and pictures have high realism](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/realism.png)

Source: Luiz Morais, Yvonne Jansen, Nazareno Andrade, Pierre Dragicevic. [Showing Data about People: A Design Space of Anthropographics](https://hal.archives-ouvertes.fr/hal-02931257/document). IEEE Transactions on Visualization and Computer Graphics, Institute of Electrical and Electronics Engineers, In press. hal-02931257v2

A visualization with low realism represents people or groups of people using symbolic marks that are non-anthropomorphic, that is, they bear no resemblance with a human. Such marks include dots, bars, abstract glyphs, or shapes that evoke inanimate objects. A visualization with high realism is made of realistic anthropomorphic marks, which closely resemble an actual person.

[Wee People](https://github.com/propublica/weepeople) is a font that renders silhouettes of people, so it has an intermediate level of realism. 

![The set of 52 silhouettes of people, all with different poses, of the Wee People font](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/wee-people.png)

Source: [Our Font Is Made of People](https://source.opennews.org/articles/our-font-made-people/)

You can see the Wee People in action in [What Happened to All the Jobs Trump Promised?](https://projects.propublica.org/graphics/trump-job-promises)

![A circular group of many Wee People silhouettes, with a caption saying 'Each silhouette represents about 4,000 jobs'](Journalistic%20techniques%20for%20data%20storytelling%208bdd09bf88074238b1fe53b3a2116e1e/wee-people-propublica.png)

Source: [What Happened to All the Jobs Trump Promised](https://projects.propublica.org/graphics/trump-job-promises), propublica.org