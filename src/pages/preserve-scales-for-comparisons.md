Small multiples is a visualisation technique in which small copies of the same chart showing different partitions of the data are arranged in a grid. They can be a great way to avoid packing too much data into a single, overcrowded visualisation.

![Small multiples showing the share of renewables in household energy consumption in the EU and its member states. Source: [buildingsdashboard.eu](https://www.buildingsdashboard.eu/)](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/buildings-dashboard-smallmult.png)

Small multiples showing the share of renewables in household energy consumption in the EU and its member states. Source: [buildingsdashboard.eu](https://www.buildingsdashboard.eu/)

But in order to make accurate and meaningful comparisons, the y axis on the small multiples should be kept constant. Otherwise readers not paying attention to the labels on the y axis will quickly draw false conclusions from the small multiples.

Here is an example of the BBC falling into this pitfall.

![Source: [@RobDunsmore](https://twitter.com/RobDunsmore/status/1347677472335212554)](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/bbc-smallmult-freey.jpg)

Source: [@RobDunsmore](https://twitter.com/RobDunsmore/status/1347677472335212554)

Keeping the x axis constant on all small multiples should be obvious, but this rule is not always respected, as this example shows:

![Source: [One in four elderly black people in England still not vaccinated](https://www.theguardian.com/society/2021/jun/05/one-in-four-elderly-black-people-in-the-uk-still-not-vaccinated?CMP=Share_AndroidApp_Other), theguardian.com](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/smallmult-freex-guardian.png)

Source: [One in four elderly black people in England still not vaccinated](https://www.theguardian.com/society/2021/jun/05/one-in-four-elderly-black-people-in-the-uk-still-not-vaccinated?CMP=Share_AndroidApp_Other), theguardian.com