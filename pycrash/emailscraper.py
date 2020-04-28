import re

text = "What Faul from fenandez. Email me at b-ruvusky254@g-m-ail.com , also this is te-re-se234@gmail.com, your_name.8-8-8@company.net"

pattern = re.compile("[a-zA-Z0-9\.\-\_]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z\.\-]+")

result = pattern.findall(text)
print(result)
