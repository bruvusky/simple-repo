names = ["victor", " jenny", "licy", "brian"]
newlist = []
for person in names:
    newlist.append(person)
print(newlist)
print([person for person in names])
newlist = []
for person in names:
    newlist.append(person + "  gave me")
print(newlist)
print([person + "  dumped me." for person in names])

Moviesandratings = {"Dhoom": 7, "Agent 47": 9, "lastship": 4, "wrongturn": 5}
l = []
for movie in Moviesandratings:
    if Moviesandratings[movie] > 5:
        l.append(movie)
print(l)

print([movie for movie in Moviesandratings if Moviesandratings[movie] > 5])
