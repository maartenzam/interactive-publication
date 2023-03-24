In order to be meaningfully visualised, larger datasets often have to be aggregated: totals, means or medians are calculated to summarise the data. The aggregation method you choose can give very different results and views on the data.

When you use totals, results might not be comparable because of correlation with population, for example (see the <span class='internal-link'>[normalising data](normalising-data)</span> page). And when using the mean, you need to take into account its sensitiveness to outliers. When <span class='internal-link'>[outliers](outliers)</span> are present in the data, you should consider using the median instead (see the <span class='internal-link'>[median versus the mean](the-mean-versus-the-median)</span> page).

When using visual summary techniques like histograms, the output can vary widely depending on the numbers of bins used. For example, taking the data on the eruptions of the Old Faithful geyser from the <span class='internal-link'>[distributions](distributions)</span> page, the bimodality in the data is much clearer when using 8 bins compared to using 10 bins. This means that the number of bins can be used to amplify or hide patterns in the data, for good or for bad.

![ ](Ethics%20in%20data%20visualisation%201a9252053a714191a1f8cc31071467fa/faithfull-histo-8.png)

Histogram of the minutes between eruptions of Old Faithful using 8 bins. Source: Maarten Lambrechts, CC BY SA 4.0

![ ](Ethics%20in%20data%20visualisation%201a9252053a714191a1f8cc31071467fa/faithfull-histo-10.png)

Histogram of the minutes between eruptions of Old Faithful using 10 bins. Source: Maarten Lambrechts, CC BY SA 4.0

In the same way, using different binning methods on choropleth maps can produce visually very different results (see the <span class='internal-link'>[choropleth classification methods](choropleth-classification-methods)</span> page). The binning method can be chosen to show or hide outliers, for example.

![A choropleth map showing regional GDP in EU regions](Ethics%20in%20data%20visualisation%201a9252053a714191a1f8cc31071467fa/gdp-map-equal-count-9.png)

Regional gdp/capita numbers using an equal interval classification. Source: Maarten Lambrechts, CC BY SA 4.0

![A choropleth map showing the same data as in the map above, but with different class breaks. Two regions, Luxembourg and a region in the south of Ireland, stand out as outliers](Ethics%20in%20data%20visualisation%201a9252053a714191a1f8cc31071467fa/gdp-map-prettybreaks-9.png)

Regional gdp/capita numbers using a pretty breaks classification. Source: Maarten Lambrechts, CC BY SA 4.0