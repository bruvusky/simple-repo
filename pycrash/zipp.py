# used to get enough variables from a scope.
list1 = [1, 2, 3, 4, 5, 6, 7]
list2 = ["one", "two", "three", "four", "five", "six", "seven"]

zipped = list(zip(list1, list2))
print(zipped)

# unzipping

unzip = list(zip(*zipped))

print(unzip)

for (l1, l2) in zip(list1, list2):
    print(l1)
    print(l2)

items = ["apples", "bananas", "orange"]
counts = [3, 6, 4]
prices = [0.99, 0.25, 0.50]

sentences = []

for (item, count, price) in zip(items, counts, prices):
    item, count, price = str(item), str(count), str(price)
    sentence = "I bought  " + count + "  " + item + "   at  " + price + "  cents each."
    sentences.append(sentence)
print(sentences)
