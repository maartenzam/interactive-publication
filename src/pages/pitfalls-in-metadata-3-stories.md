Metadata, “data about the data”, is crucial to interpret data correctly and to draw valid conclusions from it. Below are 3 stories that show what can happen when metadata is lacking or when it is being ignored.

## Foreign born population of Brussels

“62 percent of people in Brussels not born in Belgium” is a pretty spectacular statistic. It deserves its place in the headline of a newspaper article.

![A web browser displaying an article called '62 procent Brusselaars niet hier geboren' ('62 percent of people in Brussels not born here') on the website tijd.be](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/tijd-metadata-ml.png)

Source: [62 procent Brusselaars niet hier geboren](https://www.tijd.be/nieuws/archief/62_procent_Brusselaars_niet_hier_geboren/9692893.html), tijd.be

According to the article, Brussels is the city with the second highest percentage of residents born abroad, after Dubai with 83%, but before Toronto, Auckland and Sydney. Even considering Brussels being the headquarter of the European Union, this is still a strikingly high number.

The author of the article (me, Maarten Lambrechts, your trainer) found the statistic in a very trusted source: the [World Migration Report 2015](https://publications.iom.int/books/world-migration-report-2015-migrants-and-cities-new-partnerships-manage-mobility), published by the International Organisation for Migration from the UN. The report contains the following chart:

![A vertical bar chart titled 'Foreign-born population in major cities, with Brussels as the second highest value (62%) only behind Dubai'](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/pop_brussels-worldmigrationreport2015.png)

Source: [World Migration Report 2015](https://publications.iom.int/system/files/pdf/wmr2015_en.pdf), iom.int

The story proved “too good to be true”, and the source mentioned below the chart (”Compiled by IOM from various sources”) should have been a red flag. 

The source for the share of the foreign-born population in Brussels is the article [Belgium: A Country of Permanent Immigration](https://www.migrationpolicy.org/article/belgium-country-permanent-immigration). That article mentions:

> In the two biggest cities, demographic data is proof of the permanent diverse nature of Belgium: in Antwerp, nearly 38 percent of its population is **of foreign origin**, while approximately 18 percent have a foreign nationality; in Brussels, **nearly 62 percent is of foreign origin** and approximately 31 percent have a foreign nationality.
> 

So the original source uses “of foreign origin”, and not “foreign-born”. The article does not mention the definition of “of foreign origin”, but a widely used definition in Belgium is that you are of foreign origin if you have at least one parent who didn’t possess Belgian nationality at the moment he or she first registered in the country.

So the number for Brussels published in the World Migration Report was wrongly considered to be about the foreign-born population. The newspaper article based on it contained false claims as a result, and had to be rectified.

The authors of the World Migration Report didn’t read the metadata of the source they were using, and as a result they **misinterpreted the** **definition** of “of foreign origin” used in the source.

## Kidnappings in Nigeria

In April 2014, 276 school girls were kidnapped from a school in Chibok in eastern Nigeria by terrorist group Boko Haram. US based data journalism medium FiveThirtyEight tried to put this horrific event in a historical context, and took a look at the bigger picture.

![A web browser displaying the article 'Kidnapping of Girls in Nigeria Is Part of a Worsening Problem' on fivethirtyeight.com](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/fivethirtyeight-kidnappings-edited.png)

Source: [Kidnapping of Girls in Nigeria Is Part of a Worsening Problem](https://fivethirtyeight.com/features/nigeria-kidnapping/), fivethirtyeight.com

The worsening trend mentioned in the headline of the article is illustrated with the following chart:

![A bar chart with title 'Abduction Trends' and subtitle 'Daily kidnappings in Nigeria, 1982-2014](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/chalabi-datalab-kidnap.webp)

Source: [Kidnapping of Girls in Nigeria Is Part of a Worsening Problem](https://fivethirtyeight.com/features/nigeria-kidnapping/), fivethirtyeight.com

The article quickly received criticism because of the source used for the data in this chart and the analysis in the article. The numbers were taken from the [Global Database of Events, Language and Tone](https://www.gdeltproject.org/) (GDELT), a database that collects data on events and locations on a daily basis in an automated way from thousands of broadcast, print and online news sources.

So instead of showing the “daily kidnappings in Nigeria”, the chart above is showing the “daily news reports about kidnappings in Nigeria”. These are of course very different metrics. A rising trend can be attributed to a higher number of kidnappings, but also to a higher number of news reports in general, or to news media paying more attention to the phenomenon.

And even more problematic is the assumption that one event or location in the database relates to a single kidnapping. It is very likely that multiple news reports in the database refer to the same events.

As a result, the article needed to be updated, mentioning “This post should refer to media reports of kidnappings, not kidnappings.”

![A web browser displaying the article 'Kidnapping of Girls in Nigeria Is Part of a Worsening Problem' on fivethirtyeight.com](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/fivethirtyeight-gdelt-original.png)

Source: [Kidnapping of Girls in Nigeria Is Part of a Worsening Problem](https://fivethirtyeight.com/features/nigeria-kidnapping/), fivethirtyeight.com

The follow up article, [Mapping Kidnappings in Nigeria](https://fivethirtyeight.com/features/mapping-kidnappings-in-nigeria/), contained a map of the Nigerian kidnappings in the GDELT database and contains an even stronger rectification. It states: “This article contains many errors, some of them fundamental to the analysis”.

So the journalist of FiveThirtyEight took the records in the GDELT database at face value, without taking into account **how the data in the database is collected, and what each record in the database represents**. This is crucial information about the data (**=metadata**) in order to correctly interpret the data.

## Crashing Mars orbiter

On September 23 1999, and after a 283 day journey through space,  NASA’s Mars Climate Orbiter, worth 125 million dollars, performed a maneuver high in orbit of the red planet, causing it to burn up in the Martian atmosphere. 

![Rendering of the Mars Climate Orbiter above a white and orange planet](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/Mars_Climate_Orbiter_-_artist_depiction_-_climate-orbiter-browse.jpg)

Source: [NASA/JPL](https://commons.wikimedia.org/wiki/File:Mars_Climate_Orbiter_-_artist_depiction_-_climate-orbiter-browse.jpg), public domain

In a statement published one week after the loss of the Orbiter, NASA attributed the fatal maneuver to a unit conversion problem. The team at Lockheed Martin responsible for providing acceleration commands had sent those commands to NASA using imperial units (in pound-seconds), while NASA’s Jet Propulsion Laboratory assumed it to use metric units (newton-seconds). This prevented the correct navigation commands to be sent to the satellite.

The **units** numerical values in data are expressed in is a crucial part of metadata. Without units, numerical data is senseless, and assuming certain units are used can lead to serious issues, as the Orbiter’s story illustrates.