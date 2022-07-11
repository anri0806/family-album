puts "...seeding"

u1 = User.create(username: "Amy", relationship: "Mother", password: "123")

Picture.create(image: "/images/picture1.jpg", caption: "She is trying to take picture of me! ", created_at: "2022-5-1" ,user_id: u1.id)
Picture.create(image: "/images/picture2.jpg", caption: "Precious brother time at Central Park", created_at: "2022-5-7" , user_id: u1.id)
Picture.create(image: "/images/picture3.jpg", caption: "Luke's first finger painting!", created_at: "2022-5-7" , user_id: u1.id)

puts "🌱 done"