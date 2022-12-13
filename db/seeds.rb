puts "...seeding"

u1 = User.create(username: "Amy", relationship: "Mother", password: "123", created_at: "2022-4-5")
u2 = User.create(username: "Susan", relationship: "Grandmother", password: "abc", created_at: "2022-4-8" )
u3 = User.create(username: "Dylan", relationship: "Father", password: "11111", created_at: "2022-11-8" )

p1 = Picture.create(image: "/images/picture1.jpg", caption: "She is trying to take picture of me! ", created_at: "2022-7-10" ,user_id: u1.id)
p2 = Picture.create(image: "/images/picture2.jpg", caption: "Precious brother time at Central Park", created_at: "2022-7-7" , user_id: u1.id)
p3 = Picture.create(image: "/images/picture3.jpg", caption: "Luke's first finger painting!", created_at: "2022-7-7" , user_id: u1.id)
p4 = Picture.create(image: "/images/picture4.jpg", caption: "Hanging out with cousins", created_at: "2022-7-1" , user_id: u1.id)
p5 = Picture.create(image: "/images/picture5.jpg", caption: "Counsins", created_at: "2022-6-20" , user_id: u1.id)
p6 = Picture.create(image: "/images/picture6.jpg", caption: "Luke is an artist!", created_at: "2022-6-15" , user_id: u2.id)
p7 = Picture.create(image: "/images/picture7.jpg", caption: "His favorites", created_at: "2022-6-13" , user_id: u2.id)
p8 = Picture.create(image: "/images/picture8.jpg", caption: "Emma found a cute flower!", created_at: "2022-6-5" , user_id: u1.id)
p9 = Picture.create(image: "/images/picture9.jpg", caption: "He loves playing with water!", created_at: "2022-6-5" , user_id: u1.id)
p10 = Picture.create(image: "/images/picture10.jpg", caption: "That happy face!", created_at: "2022-6-5" , user_id: u1.id)
p11 = Picture.create(image: "/images/picture11.jpg", caption: "He is so focused!", created_at: "2022-6-4" , user_id: u2.id)
p12 = Picture.create(image: "/images/picture12.jpg", caption: "Emma's work", created_at: "2022-6-4" , user_id: u2.id)
p13 = Picture.create(image: "/images/picture13.jpg", caption: "Precious family time", created_at: "2022-6-4" , user_id: u1.id)
p14 = Picture.create(image: "/images/picture14.jpg", caption: "His favorite toys", created_at: "2022-5-28" , user_id: u2.id)
p15 = Picture.create(image: "/images/picture15.jpg", caption: "he wanted to try this like a big kid at the park!", created_at: "2022-5-21" , user_id: u1.id)
p16 = Picture.create(image: "/images/picture16.jpg", caption: "school field trip", created_at: "2022-5-18" , user_id: u1.id)
p17 = Picture.create(image: "/images/picture17.jpg", caption: "summer camp", created_at: "2022-5-15" , user_id: u1.id)
p18 = Picture.create(image: "/images/picture18.jpg", caption: "summer camp", created_at: "2022-5-15" , user_id: u1.id)
p19 = Picture.create(image: "/images/picture19.jpg", caption: "loves costumes!", created_at: "2022-5-10" , user_id: u2.id)


Comment.create(content: "Very cute!", created_at: "2022-7-10", user_id: u2.id, picture_id: p1.id)
Comment.create(content: "She is so into taking pictures now.", created_at: "2022-7-10", user_id: u1.id, picture_id: p1.id)
Comment.create(content: "He is an artist!", created_at: "2022-7-7", user_id: u2.id, picture_id: p3.id)

puts "🌱 done"