import math
import os
import sys

import requests

print(sys.version)
print(sys.executable)


def greet(whotogreet):
    greeting = "hello, {}".format(whotogreet)
    return greeting


r = requests.get("https://coreyms.com")
print(r.status_code)
print("I love python")

name = input("your name?")
print("Hello,", name)

