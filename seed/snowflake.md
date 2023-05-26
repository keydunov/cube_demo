Create warehouse, database and schema.

```sql
CREATE warehouse cube_demo_wh;
CREATE DATABASE cube_demo;
CREATE SCHEMA cube_demo.ecom;
```

Create `line_items` table.

```sql
CREATE TABLE cube_demo.ecom.line_items 
( id INTEGER,
  order_id INTEGER,
  product_id INTEGER,
  price INTEGER,
  created_at TIMESTAMP
);
```

Load data into `line_items` table.

```sql
COPY INTO cube_demo.ecom.line_items (id, order_id, product_id, price, created_at)
FROM 's3://cube-tutorial/line_items.csv'
FILE_FORMAT = (TYPE = 'CSV' FIELD_DELIMITER = ',' SKIP_HEADER = 1); 
```

Create `orders` table.

```sql
CREATE TABLE cube_demo.ecom.orders 
( id INTEGER,
  user_id INTEGER,
  status VARCHAR,
  completed_at TIMESTAMP,
  created_at TIMESTAMP
);
```

Load data into `orders` table.

```sql
COPY INTO cube_demo.ecom.orders (id, user_id, status, completed_at, created_at)
FROM 's3://cube-tutorial/orders.csv'
FILE_FORMAT = (TYPE = 'CSV' FIELD_DELIMITER = ',' SKIP_HEADER = 1); 
```

Create `users` table.

```sql
CREATE TABLE cube_demo.ecom.users 
( id INTEGER,
  user_id INTEGER,
  city VARCHAR,
  age INTEGER,
  gender VARCHAR,
  state VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  created_at TIMESTAMP
);
```

Load data into `users` table.

```sql
COPY INTO cube_demo.ecom.users (id, city, age, gender, state, first_name, last_name, created_at)
FROM 's3://cube-tutorial/users.csv'
FILE_FORMAT = (TYPE = 'CSV' FIELD_DELIMITER = ',' SKIP_HEADER = 1); 
```

Create `products` table.



```sql
CREATE TABLE cube_demo.ecom.products 
( id INTEGER,
  name VARCHAR,
  product_category VARCHAR,
  created_at TIMESTAMP
);
```

Load data into `products` table.


```sql
COPY INTO cube_demo.ecom.products (id, name, created_at, product_category)
FROM 's3://cube-tutorial/products.csv'
FILE_FORMAT = (TYPE = 'CSV' FIELD_DELIMITER = ',' SKIP_HEADER = 1); 
```