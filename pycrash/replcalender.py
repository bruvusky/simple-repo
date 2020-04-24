import calendar
import datetime
import time
import turtle

print(calendar.calendar(2020))
print(calendar.weekday(2020, 4, 21))
is_leapyear = calendar.isleap(2019)
print(is_leapyear)

how_many_leap_years = calendar.leapdays(2000, 3000)
print(how_many_leap_years)

a = 5
print(a)
b = "Hellow brian?"
print(b)

brian_turtle = turtle.Turtle()


def square():
    brian_turtle.forward(100)
    brian_turtle.right(90)
    brian_turtle.forward(100)
    brian_turtle.right(90)
    brian_turtle.forward(100)
    brian_turtle.right(90)
    brian_turtle.forward(100)


square()
brian_turtle.forward(28)
square()

b = 23
float(b)

list = [1, 2, 3, 4, 5]
list2 = [1, 23.0, "mam", [7, 0, 3, 3, 4, 0, 6, 3, 5]]
print(list2)
print(list2[0])
print(list2[1])
print(list2[2])
print(list2[3])
