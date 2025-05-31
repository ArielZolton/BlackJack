
## SQL Concepts

Table -> spreedsheet sheet
Row -> record
Primary Key (PK) -> unique fingerprint
Foreign Key (FK) -> URL hyperlink between tables (sheets)

1-to-1, 1-to-many, many-to-many,

user -> assets (1 to many)

user -> adress (1 to 1)


## SQL QUERIES

Highlight in PG ADMIN the pieces that you want to run

```sql
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL
);

SELECT * FROM users; -- visualize

INSERT INTO users (name, email) VALUES
	('Alice', 'alice@example.com'),
	('Bob', 'bob@example.com');

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE order_items (
	order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
	product_id INTEGER REFERENCES products(id),
	qty INTEGER CHECK (qty > 0),
	PRIMARY KEY (order_id, product_id)
);


-- ---------- USERS ----------
INSERT INTO users (name, email) VALUES
  ('Charlie','charlie@example.com'),       -- id = 3
  ('Diana','diana@example.com');           -- id = 4


-- ---------- PRODUCTS ----------
INSERT INTO products (title, price) VALUES
  ('Mechanical Keyboard',  129.99),        -- id = 1
  ('Wireless Mouse',        49.50),        -- id = 2
  ('27‑inch Monitor',      299.00),        -- id = 3
  ('USB‑C Hub',             34.95),        -- id = 4
  ('Laptop Stand',          42.00),        -- id = 5
  ('Noise‑Cancel Headset', 199.99);        -- id = 6

SELECT * FROM products WHERE price > 50;
SELECT * FROM products;

-- ---------- ORDERS ----------
INSERT INTO orders (user_id) VALUES
  (1),           -- id = 1  (Alice)
  (2),           -- id = 2  (Bob)
  (1);           -- id = 3  (Alice again)


SELECT * FROM orders;

-- ---------- ORDER_ITEMS ----------
-- order 1  (Alice’s first purchase)
INSERT INTO order_items (order_id, product_id, qty) VALUES
  (1, 15, 1),   -- Mechanical Keyboard
  (1, 16, 1),   -- Wireless Mouse
  (1, 18, 2);   -- two USB‑C Hubs

-- order 2  (Bob)
INSERT INTO order_items (order_id, product_id, qty) VALUES
  (2, 23, 2),   -- two Monitors
  (2, 19, 1);   -- Laptop Stand

-- order 3  (Alice’s second purchase)
INSERT INTO order_items (order_id, product_id, qty) VALUES
  (3, 20, 1);   -- Noise‑Cancel Headset

SELECT o.id, o.created_at, u.name, u.email
FROM orders o
JOIN users u ON u.id = o.user_id;

SELECT u.name, oi.qty, p.title, p.price
FROM users u
JOIN orders o ON o.user_id = u.id
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id;


SELECT u.name, SUM(oi.qty*p.price) AS total_spent
FROM users u
JOIN orders o ON o.user_id = u.id
JOIN order_items oi ON oi.order_id = o.id
JOIN products p ON p.id = oi.product_id
GROUP BY u.name
ORDER BY total_spent DESC;


SELECT * FROM products;
UPDATE products SET price = price*0.9 WHERE id = 1;

SELECT * FROM users;
DELETE FROM users WHERE id = 2;
```