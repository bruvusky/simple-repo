from pandas import pandas as pd

# import pytz
# import soupsieve

import requests
from bs4 import BeautifulSoup

import lxml.html as lh

url = "https://www.soccerstats.com/homeaway.asp?league=england"
page = requests.get(url)
doc = lh.fromstring(page.content)
tr_elements = doc.xpath("//tr")
# Tr_data = [len(T) for T in tr_elements[:10]]
# print(Tr_data)
col = []
i = 0
for t in tr_elements[0]:
    i += 1
name = t.text_content()
print ' %d: "%s" ' % (i, name)
col.append((name, []))

# soup = BeautifulSoup(page.content, "html.parser")
# hometeam = soup.find(id="btable")
# print(hometeam)
# Home_header = hometeam.find(class_="even").get_text()
# print(Home_header)
# tr_elements = soup.find("//tr").get_text()
# print(tr_elements)
# column_header = [H_item.find(class_="even").get_text() for H_item in Home_header]
# print(column_header)
# Items = hometeam.find_all(id="btable")
# print(Items)
# print(hometeam.find(class_="even").get_text())
# Teams = [hometeeam.find_all(class_="odd").get_text() for hometeeam in hometeam]
# print(Teams)
# print(Items.find_all (id="td").get_text())
# print(Items[3].find(class_="even").get_text())
# print(Items[3].find(class_="temp").get_text())

# period_Names = [item.find(class_="period-name").get_text() for item in Items]
# Short_Description = [item.find(class_="short-desc").get_text() for item in Items]
# Temperature = [item.find(class_="temp").get_text() for item in Items]

# print(period_Names)
# print(Short_Description)
# print(Temperature)

# weatherstuff = pd.DataFrame({"Period": period_Names, "Description": Short_Description,})
# print(weatherstuff)
