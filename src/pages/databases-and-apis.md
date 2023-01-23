## Databases

Bigger and more complex data that requires secure access can be stored in a database. A database is a collection of data stored on a database server (or on servers in the cloud) and that is made accessible through a database management system (DBMS).

For the purpose of data visualisation, interacting directly with a database is usually not needed. To retrieve the needed data out of a database, the database is queried, and the needed data is then exported to a format more suited for exchanging data, which may be <span class='internal-link'>[CSV](csv-files)</span> and <span class='internal-link'>[XLSX](excel-files)</span> files.

## API’s

Data in a database may also be exposed in the form of an API. API stands for Application Programming Interface, and it is a way of letting different computer systems interact with each other.

Web API’s play an important role in online and interactive data visualisation. When visualisations are not published in the form of static images, but are instead generated “on the fly” from dynamic data, they are most likely making use of an API to retrieve data.

When a user loads an HTML page containing a dynamic visualisation, or when a user interacts with a dynamic visualisation, the browser will send a request to the web server that implements the web API. The server will react by sending a response to the browser containing the data to generate or update the dynamic visualisation.

The response the server sends to the browser can have different formats, but <span class='internal-link'>[XML](xml-files)</span> and <span class='internal-link'>[JSON](json-files)</span> files are very popular API response formats. A trick to get access to the data driving a dynamic visualisation on a webpage is to inspect what API request a web page is making and using that information to get the data. See the <span class='internal-link'>[Accessing data of a dynamically generated visualisation](accessing-data-of-a-dynamically-generated-visualisation)</span> page.