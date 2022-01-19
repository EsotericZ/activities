-- Write your schema here --
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    price INT NOT NULL DEFAULT 0,
    in_stock BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)    
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(30) NOT NULL
    PRIMARY KEY (id)
);