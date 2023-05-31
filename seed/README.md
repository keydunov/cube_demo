The demo dataset has the following entity-relationship diagram:

![dataset-erd](/seed/seed-data-schema.png)

DBML for ERD diagram

```
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table line_items {
  id integer [primary key]
  
  order_id integer
  product_id integer

  price integer
  created_at timestamp
}

Table orders {
  id integer [primary key]

  user_id integer

  status string
  created_at timestamp
  completed_at timestamp
}

Table products {
  id integer [primary key]

  name string
  product_category string
  created_at timestamp
}

Table users {
  id integer [primary key]

  city string
  age integer
  gender string
  state string
  first_name string
  last_name string
  created_at timestamp
}

Ref: line_items.order_id > orders.id
Ref: orders.user_id > users.id
Ref: line_items.product_id > products.id
```