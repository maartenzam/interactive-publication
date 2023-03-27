The 3 storis in the <span class='internal-link'>[pitfalls in metadata: 3 stories](pitfalls-in-metadata-3-stories)</span> page illustrate the importance of metadata. Without a good description of the data, misunderstandings about the data will emerge, wrong conclusions will be drawn and even accidents can happen.

As a consequence, whenever data is published in any way, it should be accompanied by metadata. Good metadata will determine the validity of conclusions drawn from the data, will describe limitations on the use of the data and will determine the comparability of the data with other datasets and systems.

![ ](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/eurostat-metadata.png)

Links to the metadata in Eurostat’s Data Browser highlighted on a Eurostat data set page. Source: [Eurostat](https://ec.europa.eu/eurostat/databrowser/view/migr_imm12prv/default/table?lang=en)

So what should good and complete metadata contain?

## Definitions

As the story about the foreign-born population in Brussels illustrates, metadata should at least contain **clear descriptions of the definitions used**.

For example, even a simple concept as an unemployed person is ambiguous. This is the definition of an unemployed person as used by Eurostat:

> Someone aged between 15 and 74 without work during the reference week, but available to start work within the next two weeks and who actively sought employment some time during the past four weeks.
> 

And this is the definition as used by the French statistical office INSEE in their census:

> Someone aged 15 years or more who either declared themself to be unemployed unless they also explicitly declared that they are not looking for work, or who declared themselves to be neither in employment, nor unemployed, but who nevertheless declared to look for an employment.
> 

As you can see, both definitions are quite different, and as a result unemployment rates calculated from the number of unemployed people using either of these definitions will lead to different numbers (and this is even without talking about differences in the definition of the “labour force” which is usually used as the denominator in the employment rate).

An important part of the definitions used in the data, are the units the numerical values are expressed in. One option to avoid any misunderstanding regarding the units, even when separate metadata are missing, is to make the units part of the data, in a separate column in the data table. When data are expressed in multiple units in a single dataset, a column specifying the units is absolutely required.

## How was data collected?

Are there more women than men living in your country? To answer this question, data can be collected in different ways.

In countries with an official **population registry**, counting the men and the women in the registry can answer the question accurately (not taking into account unregistered people and assuming the registry contains information about people’s gender).

A **survey** can sample the population of the country. Survey workers can go door to door, or they can call people over the phone to ask them how many men and women are part of their household. This can give you a count of the number of men and women in the survey. From this survey estimate you can derive an estimate of the total number of men and women in the whole population of the country. But survey estimates will always have a some level of uncertainty. The confidence interval around your estimate can be wide or narrow, depending on the sample size and survey methodology, but uncertainty is inherent to survey results.

And if data would be collected through an **online poll**, the results will have an even higher degree of uncertainty, or they could even be completely unusable. If you would ask the visitors of a website what the number of men and women in the households of the visitors are, the results will be very different for a sports news website versus a fashion website.

So, data can be collected in very different ways: it can be collected by machines in an automated way (sensors, web scrapers, ...), data can be self reported, data can be modelled, ... And the way data is collected always has consequences for how it should be interpreted. Therefore, this information should be part of the metadata.

## By whom and for what purpose was the data collected?

Data is always collected with a certain purpose. In the case of the FiveThirtyEight article on kidnappings in Nigeria, the data came from a global dataset of news reports meant to be “a realtime open data global graph over human society as seen through the eyes of the world's news media” and making the data available as “an open data firehose to enable research over human society”. The data was definitely not collected with the purpose of  tracking trends in phenomena like kidnappings in Nigeria in mind. The methodology for collecting the data does not allow for that.

So understanding for what purpose the data was collected is very important for understanding its usage limits. Special attention should go to data collected by private entities. Take for example this headline taking from cnbc.com:

![Screenshot of an article titled 'Owning cryptocurrency may make you more desirable on teh dating scene, study finds' on cnbc.com](Pitfalls%20in%20metadata%203877fd81800c4080bf3c917e31a308a9/cnbc-crypto.png)

Source: [Owning cryptocurrency may make you more desirable on the dating scene, study finds](https://www.cnbc.com/2022/02/03/owning-crypto-may-make-you-more-desirable-on-the-dating-scene-study-finds.html), cnbc.com

In the build up to Valentine’s Day, a study concluded that “33% of Americans said they would be more likely to go on a date with someone who mentioned crypto assets in their online dating profile”. But the survey this conclusion is based on was conducted by eToro, a platform for trading and investing in cryptocurrencies. No further examination of the study methodology and sample size is needed to conclude that the use of this data should be limited to serve the marketing purposes of eToro itself only.

Reusing data for other purposes than it was initially collected for, creates unique opportunities but entails a range of risks. Data collectors and the people from which the data was collected from originally may not have given consent for their data to be used in a particular way. And the original data collection process and metadata may not be fully transparent, which means that the data quality and underlying assumptions can not be judged reliably.

## Operational and technical metadata

Metadata can also contain information of how data was accessed from its raw source, how data was subsequently processed and what measures were taken to avoid data processing errors and invalid data points, for example. This **operational metadata** can be important for understanding the origin of unexpected values, and users can use this information to replicate the data collection process, if they like.

The methodologies used for processing data are especially important in economical time series analysis. Many of these time series are adjusted for seasonality, for inflation and/or for purchasing power. Publishing the used methodologies as a data publisher, and consulting this metadata as an end user, is important to interpret the data correctly.

**Technical metadata** describes the file formats and the software and technology used to access, process and store the data. This may also include a description of the data structure (database and tables, ...) and the software (and software version) to use for reading the data.