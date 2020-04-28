import datetime
import pytz

today = datetime.date.today()


print(today)

birthday = datetime.date(1995, 8, 3)
print(birthday)
# finding age in days
since_birth = (today - birthday).days
print(since_birth)
# adding 10 days to current day
time_delta = datetime.timedelta(days=10)
print(today + time_delta)

print(today.month)
print(today.day)
print(
    today.weekday()
)  # this is the fifth day of the week since monday is = 0, tue = 1 , ....

print(datetime.time(7, 2, 20, 15))
# datetime.date(Y,M ,D)
# datetime._time(h, m, s, ms)
# datetime.datetime(Y, M, D, h, m, s, ms)
# adding ten hrs to cuurent day
hour_delta = datetime.timedelta(hours=10)
print(datetime.datetime.now())
print(datetime.datetime.now() + hour_delta)

datetime_today = datetime.datetime.now(tz=pytz._UTC)

date_timepacific = datetime_today.astimezone(pytz.timezone("Africa/Nairobi"))
print(date_timepacific)

# for tz in pytz.all_timezones:
#   print(tz)

# String formatting with dates
# 2020-04-24 ---> April 4, 2020
print(date_timepacific.strftime("%B, %d , %Y"))  # strftime where f = formatting
# conversion of (April 4, 2020 )to a datetime Object (2020, 4, 24)
# strptime where p = parsing

date_time_thing = datetime.datetime.strptime("April, 24, 2020", "%B, %d, %Y")
print(date_time_thing)
