Geographical vector data describes features with their geographical location, and eventual other data associated to the features.

The simplest form of vector data are point features. These only require a pair of longitude and latitude coordinates to put them on a map, and the file format can be as simple as a <span class='internal-link'>[CSV file](csv-files)</span> with columns containing the longitude and latitude of the points. Other geographical features are lines and polygons, which require multiple coordinates to describe their geography.

Popular formats to store and exchange these geographical features are GeoJSON and KML. GeoJSON is a <span class='internal-link'>[JSON](json-files)</span> based, standardised file format. Because it is JSON based, it is both human and machine readable, and it is widely supported among mapping software. It is also popular for online maps, as it is easy to work with in JavaScript.

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```

KML is the <span class='internal-link'>[XML](xml-files)</span> based standardised file format for geographical data. The format was developed to be used in Google Earth, but is also supported in other software. KML files have a `.kml` extension, when the file is zipped, it has a `.kmz` extension.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
<Placemark>
  <name>New York City</name>
  <description>New York City</description>
  <Point>
    <coordinates>-74.006393,40.714172,0</coordinates>
  </Point>
</Placemark>
</Document>
</kml>
```

The shapefile is a widely used file format for geographical vector data. But shapefiles have some disadvantages, of which the most important are

- it is a multifile format. One shapefile requires a `.shp`, a `.shx` and a `.dbf` file.
- it has many limitations regarding the attribute table in which the features’ non-geographical data are stored
- it is not an open format