names = [15, 10, 20, 6, 7, 9]
names.sort()
print(names)

digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(digits[-1])  # last element
print(digits[-len(digits)])  # to get first element
print(digits[:3])  # same as [0:3]
print(digits[:10:2])  # striding , making jumps in lips of 2 going forward
print(digits[::-2])  # spits the list backwards in strides of 2

for i in range(len(digits)):
    print(digits[0:i])
window_size = 7
for i in range(len(digits) - (window_size - 1)):
    print(digits[i : i + window_size])

problems = "broke, short, dirty, pale"
print(problems)
l = problems.split(", ")
print(l)

joined = " and ".join(l)
print(joined)

csv = ",".join(l)
print(csv)
