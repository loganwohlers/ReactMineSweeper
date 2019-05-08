# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Game.destroy_all

user1 = User.create(username: 'claire')
user2 = User.create(username: 'logan')
user3 = User.create(username: 'brian')
user4 = User.create(username: 'chris')

game1 = Game.create(user: user1, difficulty: 'beginner', score: 20)
game2 = Game.create(user: user3, difficulty: 'intermediate', score: 30)
game3 = Game.create(user: user2, difficulty: 'difficult', score: 50)
game4 = Game.create(user: user1, difficulty: 'beginner', score: 10)
game5 = Game.create(user: user4, difficulty: 'intermediate', score: 25)
game6 = Game.create(user: user2, difficulty: 'intermediate', score: 60)
