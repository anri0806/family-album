puts "...seeding"

u1 = User.create(username: "Amy", relationship: "Mother", password: "123")

Picture.create(image: "/images/picture1.jpg", date: "3/1/2022", user_id: u1.id)
Picture.create(image: "/images/picture2.jpg", date: "3/3/2022", user_id: u1.id)
Picture.create(image: "/images/picture3.jpg", date: "3/3/2022", user_id: u1.id)

puts "🌱 done"