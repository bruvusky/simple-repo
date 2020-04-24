groceries = {"bananas": 5, "oranges": 4}
print(groceries.get("hello"))

contacts = {
    "samson": {"phone": 703340635, "email": "bruvusky@gmail.com"},
    "seth": {"phone": 716475056, "email": "brine@gmail.com"},
}
print(contacts.get("samson"))

sentence = "i like the name brian, because the name brian is the best"

word_count = {"i": 1, "like": 1, "the": 3}

# dict.item()
# print(word_count.items())

# dict.key()
# print(list(word_count.keys()))
# dict.values()
# print(list(word_count.values()))
# print(word_count)
# print(word_count.pop("the"))
# print(word_count)
# print(word_count)
# print(word_count.popitem())
# print(word_count)
# print(word_count)
word_count["Aron"] = 4
# print(word_count)

# dict.clear used to clear a dictionary
print(sorted(list(word_count.values())))
