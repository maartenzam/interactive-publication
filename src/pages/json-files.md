JSON, or Javascript Object Notation, is another human readable, open standard file format that is widely used to exchange data. Although its name indicates that it originated from the JavaScript programming language, it is used by many other programming languages, and many tools are able to read and write JSON files (which can but do not have to have a `.json` file extension).

JSON files can be opened and edited with any text editor, and its structure consists of key-value pairs.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
```

From the example json above, you can see that the values can be 

- a string, see for example the value of firstName
- a number, see the value of age
- an object with child properties. These child properties are enclosed in curly brackets, see for example the value of address
- a list of values or objects. These lists are called arrays and they are enclosed in square brackets, see the value of phoneNumbers for example (the value of children is an empty array)