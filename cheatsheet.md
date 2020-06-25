#A Short Course on Mongo DB
## Presented by Bruce Van Horn II 
-----------------------------------
For more great courses, and free coding videos, check us out at https://maddevskilz.com.  

Follow us on Twitter @DevSkilz.
Find us on [GitHub](https://github.com/orgs/MadDevSkilz) for all code samples, including this document.

Subscribe to our [YouTube Channel](https://www.youtube.com/channel/UC__4QEJOZ4fe2_OA4-_PjBw)

You may distribute this unexpurgated document at will, but only amongst your most esteemed colleagues.

------------------------------------
## Installation with Package Managers

Windows:  ```choco install mongodb```

MacOS: ```brew install mongodb```

Linux: ```apt install mongodb```

All three require elevated privileges.  Use sudo on mac and linux.  On Windows, run PowerShell "As Administrator".

If you need chocolatey, visit http://chocolatey.org.
If you need brew, visit https://brew.sh

------------------------------------
##Basics

Create / Switch To Database
```

use planetsdb

```

Show Current Database
```

db

```

List Available Databases
```

db.adminCommand( { listDatabases: 1 } )

```

List Collections in the Currently Selected Database
```

db.getCollectionNames()

```

Insert a Document
```

db.planets.insert(
  {
     "planetName": "Mercury", 
     "planetType":"D",
     "mass": 3.248e23,
     "radius": 3760,
     "distanceFromEarth": 67.24e6, 
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Wolf 359", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "Pierre",
          "lastName": "Gassendi",
          "year": 1631,
          "origin": "France"
       }
  }
)

```

Query All Documents in a Database
```

db.planets.find().pretty()

```

Query All Documents with a Filter
```

db.planets.find({planetName:"Mercury", planetType: "D" }).pretty()

```

Find a Single Document (Your object ID will be different than this one)
```

db.planets.findOne({"_id": ObjectId("5e434995a2b79b2c2423d4df")})

```

Insert Many Documents at Once
```

db.planets.insertMany([
  {
     "planetName": "Venus", 
     "planetType":"D",
     "mass": 4.8675e24,
     "radius": 6051.8,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "Unknown",
          "lastName": "Unknown",
          "year": 0,
          "origin": "Unknown"
       }
  }, {
     "planetName": "Earth", 
     "planetType":"X",
     "mass": 5.972e24,
     "radius": 6378.1,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "Adam",
          "lastName": "Unknown",
          "year": -10000,
          "origin": "Mesopotamia"
       }
  }
  ,{
     "planetName": "Mars", 
     "planetType":"K",
     "mass": 6.4171e23,
     "radius": 3396.2,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "Unknown",
          "lastName": "Unknown",
          "year": 0,
          "origin": "Unknown"
       }
  }
  , {
     "planetName": "Jupiter", 
     "planetType":"J",
     "mass": 1.8982e27,
     "radius": 71492,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154",
		"Wolf 359"
      ],
      "discoveredBy": {
          "firstName": "Unknown",
          "lastName": "Unknown",
          "year": 0,
          "origin": "Unknown"
       }
  }
  , {
     "planetName": "Saturn", 
     "planetType":"J",
     "mass": 5.6834e26,
     "radius": 60268,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "Unknown",
          "lastName": "Unknown",
          "year": 0,
          "origin": "Unknown"
       }
  }
  , {
     "planetName": "Uranus", 
     "planetType":"T",
     "mass": 8.6810e25,
     "radius": 2559,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "William",
          "lastName": "Herschel",
          "year": 1781,
          "origin": "England"
       }
  }
  ,{
     "planetName": "Neptune", 
     "planetType":"T",
     "mass": 1.02413e26,
     "radius": 24764,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "Urbain",
          "lastName": "Le Verrier",
          "year": 1845,
          "origin": "France"
       }
  }
  ,
  {
     "planetName": "Pluto", 
     "planetType":"D",
     "mass": 1.303e22,
     "radius": 1188.3,
     "nearbyStars": [
        "Sol", 
        "Proxima Centauri", 
        "Laland 21185", 
        "Sirius A", 
        "Sirius B", 
        "Luyten 726-8", 
        "Ross 154"
      ],
      "discoveredBy": {
          "firstName": "Clyde",
          "lastName": "Tombaugh",
          "year": 1930,
          "origin": "United States"
       }
  }]
)

```

Find Earth (so we can update)
```

db.planets.find({planetName: "Earth"})

```

Update Earth's Record (Set the planet type to "M" instead of "X")
Your object ID will be different from this one.  Use what appears as
a result of the last query you ran.
```

db.planets.update({_id: ObjectId("5ee2889012011293fa878c6e")}, {$set: {planetType: 
'M'}})

```

Update Many Records At Once (Change all planets of type T to type L)
```

db.planets.update({planetType: "T"}, {$set: {planetType: 'L'}}, {multi:true})

```

Deleting a Document (Sorry about this Pluto)
Note:  You need to do a find on Pluto to get its Object ID.  Yours will be different than mine.
```

db.planets.remove({_id:  ObjectId("5ee2937056db3ff71c60f01c")})

```
###More Advanced Queries

Query all planets with a mass greater than 5e26
```

db.planets.find({mass: {$gt: 5e26}}).pretty()

```

Query all planets with a mass less than or equal to 5e26
```

db.planets.find({mass: {$lte: 5e26}}).pretty()

```

Wildcard Test Search:  Query all documents with nearby stars starting with 'Sirius'
```

db.planets.find({nearbyStars:/Sirius.*/}).pretty()

```

Searching in Sub Documents:  Find all planets with the "discovered by" person's last name is "Unknown"
```

db.planets.find({"discoveredBy.lastName": "Unknown"}).pretty();


```

###Sorting
Sorting is acheived by adding a .sort() function to the end of a find command, and passing in the fields you want to sort on.
Find all planets and sort them by planetName in ascending order:
```
db.planets.find().sort({planetName: 1})

```
Now in descending order:
```
db.planets.find().sort({planetName: -1})

```

Contents copyright 2020 by Bruce M. Van Horn II

You may distribute this document to anyone who can learn from it, just don't alter it or pass it off as your own work.
