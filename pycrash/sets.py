s = {"blueberry", "blackberry", "rasberry"}
s.add("blueberry")  # you cannot add what is in already


# print(set)  # spits out in random order.

l = [12, 1, 2, 3, 3, 4, 6, 66, 18, 18, "abc", "abc"]
set_of_no_dublicate = set(l)
# print(set_of_no_dublicate)

no_duplicate_list = list(set_of_no_dublicate)
# print(no_duplicate_list)

library_1 = {"kigogo", "damu nyeusi", "utengano", "an enemy of the people"}
library_2 = {"kigogo", "mstahiki mea", "when the sun goes down"}
all_libraries = library_1.union(library_2)
# print(all_libraries)
in_all_libraries = library_1.intersection(library_2)
# print(in_all_libraries)

diff_libraries = library_2.difference(library_1)
print(diff_libraries)
