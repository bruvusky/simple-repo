# lists is an example of mutable since it can change.
# this is used for flexible data.
# dict
# ordered dict
# a tuple is immutable since it can't change.
# used for data security
# ints is another example
# floats
# boolean
# strings
t = (1, 2, 3, [2, 3, 4])
print(t)
t[3][0] = 6
print(t)
