# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stock.create([
  { name: 'Avengers' },
  { name: 'Ninja Turtles' }
])

Price.create([
  {average_amount: 51.32, stock_id: 1},
  {average_amount: 60.12, stock_id: 1},
  {average_amount: 78.00, stock_id: 1},
  {average_amount: 100.43, stock_id: 2},
  {average_amount: 132.12, stock_id: 2},
  {average_amount: 135.60, stock_id: 2},
])