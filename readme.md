### Creating SQL Tables

CREATE TABLE Cloths ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), category VARCHAR(10), price FLOAT, descrip VARCHAR(300), imageurl VARCHAR(300), color VARCHAR(20), colorHex VARCHAR(8), createdAt TIMESTAMP, updatedAt TIMESTAMP );


CREATE TABLE Bills ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(200), payment FLOAT, addressname VARCHAR(200), address1 VARCHAR(200), address2 VARCHAR(200), city VARCHAR(200), country VARCHAR(200), createdAt TIMESTAMP, updatedAt TIMESTAMP );

------------------------------------


### Sample data for cloth products
(http://localhost:3000/api/cloths - POST)


{
    "name": "Iterpara Classic Tutum",
    "category": "tshirt",
    "price": 699.99,
    "descrip": "Introducing the Iter Para Classic Tutm, a premium t-shirt that redefines luxury. Crafted from the finest materials, this shirt offers unparalleled comfort and style. Its exquisite design features intricate detailing and a perfect fit that will make you stand out from the crowd.",
    "imageurl": "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1474895_alternate10?$plpDeskRFAlt$",
    "color": "Snow",
    "colorHex": "#d9d9d9"
}

{
    "name": "Posh polo Golf",
    "category": "POLO Tshirt",
    "price": 499.99,
    "descrip": "Introducing the Iter Para Classic Tutm, a premium t-shirt that redefines luxury. Crafted from the finest materials, this shirt offers unparalleled comfort and style. Its exquisite design features intricate detailing and a perfect fit that will make you stand out from the crowd.",
    "imageurl": "https://www.psychobunny.com/cdn/shop/products/B6K001CRPC-BRI_3_26dc0694-35aa-49f5-a2af-91c9c67e466d.jpg",
    "color": "Apple red",
    "colorHex": "#C7372F"
}

---------------------

### Sample data for cloth products
(http://localhost:3000/api/bills - POST)


{
    "name": "John Gurusinghe",
    "payment": 1000.53,
    "addressname": "John Gurusinghe",
    "address1": "Flower Rd.",
    "address2": "Mohodaradeniya",
    "city": "Colombo",
    "country": "Sri Lanka"
}