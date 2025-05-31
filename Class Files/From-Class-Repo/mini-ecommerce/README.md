# Ecommerce

## Entities/Model

- User
  - id
  - email
  - password
  - username
  - Address
  - telephone
  - payment details \*(very delicate info)
  - previous purchases (a link to order)
- Order
  - status: paid, fullfilled, in-cart
  - purchased date
  - user
  - amount
- Product
  - id
  - name
  - qty
  - unit of meassure, kg, each,
  - details / description
  - img
  - price
  - Category
