# BMBackend
#### Black Metal World Map backend

API & database handling for the black metal world map app

Band data was scraped from metal-archives.com and turned into a local database.

The database currently features over 140000 bands.

## Used in conjunction with the BMFront Vue 3 app:

https://github.com/Hexexe/BMFront

## Project setup
```
npm install
```

## Run locally
```
npm run dev
```

## API routes
The band api is broken down into 2 sections: Database calls and web scraping

Default URI for the api:
```
http://localhost:5000/api
```

### Database calls:

Get all bands from database
```
GET http://localhost:5000/api/bands
```

Get all bands by country
```
GET http://localhost:5000/api/bands/country/:country
```

Get all bands by country and genre
```
GET http://localhost:5000/api/bands/country/:country/genre/:genre
```

Get all bands by country and status
```
GET http://localhost:5000/api/bands/country/:country/status/:status
```

Get all bands by country and name
```
GET http://localhost:5000/api/bands/country/:country/:name
```

Get all bands by name
```
GET http://localhost:5000/api/bands/:name
```

Get all bands by name and status
```
GET http://localhost:5000/api/bands/:name/status/:status
```

Get all bands by genre and name
```
GET http://localhost:5000/api/bands/genre/:genre/:name
```

Get all bands by genre and status
```
GET http://localhost:5000/api/bands/genre/:genre/status/:status
```

Get all bands by genre
```
GET http://localhost:5000/api/bands/genre/:genre
```

Get all bands by status
```
GET http://localhost:5000/api/bands/status/:status
```

Get all a preview list of black metal bands by country
```
GET http://localhost:5000/api/bands/preview/:country
```

### Scraper calls

Get additional information about a band
```
POST http://localhost:5000/api/band/data
```
The POST request has to include a link to a band profile in metal-archives.com, it then scrapes the site for additional
data about the band and feeds it to the web application.

#### Examples

Get a list of finnish bands in 'Depressive' genre
```
GET http://localhost:5000/api/bands/country/Finland/genre/Depressive
```

First 2 results:
```
    {
        "id": 35399,
        "link": "https://www.metal-archives.com/bands/Desolate_Tapes/3540443642",
        "name": "Desolate Tapes",
        "country": "Finland",
        "genre": "Depressive Black Metal",
        "status": "Active"
    },
    {
        "id": 50356,
        "link": "https://www.metal-archives.com/bands/Forest_Cult/3540398017",
        "name": "Forest Cult",
        "country": "Finland",
        "genre": "Depressive Black Metal",
        "status": "Active"
    }
```

Get a list of currently active bands, which have the word 'Winter' in their name
```
GET http://localhost:5000/api/bands/Winter/status/Active
```

First 2 results:
```
    {
        "id": 626,
        "link": "https://www.metal-archives.com/bands/A_Thousand_Winters/3540404293",
        "name": "A Thousand Winters",
        "country": "Italy",
        "genre": "Folk Metal",
        "status": "Active"
    },
    {
        "id": 6029,
        "link": "https://www.metal-archives.com/bands/Ancient_Winter/3540438319",
        "name": "Ancient Winter",
        "country": "Italy",
        "genre": "Black Metal",
        "status": "Active"
    }
```
