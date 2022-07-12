puts "...seeding"

u1 = User.create(username: "Amy", relationship: "Mother", password: "123")
u2 = User.create(username: "Susan", relationship: "Grandmother", password: "abc" )

p1= Picture.create(image: "/images/picture1.jpg", caption: "She is trying to take picture of me! ", created_at: "2022-5-1" ,user_id: u1.id)
p2 = Picture.create(image: "/images/picture2.jpg", caption: "Precious brother time at Central Park", created_at: "2022-5-7" , user_id: u1.id)
p3 = Picture.create(image: "/images/picture3.jpg", caption: "Luke's first finger painting!", created_at: "2022-5-7" , user_id: u1.id)

Comment.create(content: "Very cute!", created_at: "2022-5-1", user_id: u2.id, picture_id: p1.id)
Comment.create(content: "She is so into taking pictures now.", created_at: "2022-5-1", user_id: u1.id, picture_id: p1.id)
Comment.create(content: "He is an artist!", created_at: "2022-5-8", user_id: u2.id, picture_id: p3.id)

puts "🌱 done"