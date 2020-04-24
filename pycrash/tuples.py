# list [1,2,3,4]
# tuples(1,2,3,4) whatever in the tuple cannot  be changed.
credit_card1 = (32680696, "gaddom gattolari", "11/20", 134)
credit_card2 = (32640696, "gaddom gattolari", "11/23", 454)
cards = [credit_card1, credit_card2]
# print(cards)

person = ("brian gekara", 25, "chipo-kuku")
name, age, favfood = person

# print(name)
# print(age)
# print(favfood)

person = ("brian gekara", 25, "chipo-kuku")
person1 = ("brine aron", 21, "kuku")

people = [person, person1]
for name, age, favfood in people:
    print(name)
    print(age)
    print(favfood)
