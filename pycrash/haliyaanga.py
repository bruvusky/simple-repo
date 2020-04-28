# from pandas import pandas as pd

# import pytz
# import soupsieve
import re

import requests
from bs4 import BeautifulSoup

# import lxml.html as lh


page = requests.get("https://www.soccerstats.com/homeaway.asp?league=england")
soup = BeautifulSoup(page.content, "html.parser")
hometeams = soup.find(id="h2h-team1")
# print(hometeams)
Table_header = hometeams.find("h2").get_text()
print(Table_header)
# col_Names = [item.find("tr").get_text() for item in hometeams]
Home_table = hometeams.find("table", id="btable").get_text()
# print(Home_table)
Tr_elements = hometeams.find("tr", class_="odd").get_text()
print(Tr_elements)
Tr_elements1 = Tr_elements.find("td").get_text()
print(Tr_elements1)

# print(len(Tr_elements1))
# column_header = hometeams.find("tr").get_text()
# print(column_header)
# HTeams_data = [hometeeam.find("td") for hometeeam in hometeams]
# print(HTeams_data)
# for item in Tr_elements:
#    Tr.append
# print(Tr)
# s = Tr_elements
# my_string_updated_all = s.strip()
# print(my_string_updated_all)
# print(list(my_string_updated_all))
# Tr_specifics = hometeams.find("th").get_text()
# print(Tr_specifics)
# Td_elements = Home_table.find(class_="odd").get_text()
# print(Td_elements)

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
