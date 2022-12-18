## Instaling

This project use DynamoDB to install dynamoDB use the command below

``` sh
    docker compose up
```

Install dependencies

``` sh 
    npm install
```

## To start project

``` sh
    npm run dev
```

## Endpoints

POST - `localhost:4000/api/book`
```
    {
    "title": "1889",
    "author": "Laurentino Gomes"
    }
```

GET - `localhost:4000/api/book`

DELETE - `localhost:4000/api/book/:id`