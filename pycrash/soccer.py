import requests

import csv
from bs4 import BeautifulSoup

page = requests.get("https://www.soccerstats.com/homeaway.asp?league=england")
soup = BeautifulSoup(page.content, "html.parser")

home_table = soup.find("table", id="btable")
# print (home_table)

headers = []
for th in home_table.find("tr", class_="even").find_all("th"):
    headers.append(th.text.strip())
print(headers)


rows = []
for tr in home_table.find_all("tr", class_="odd"):
    cells = []
    # grab all td tags in this table row
    tds = tr.find_all("td")
    # if len(tds) == 0:
    # [1:]
    # if no td tags, search for th tags
    # can be found especially in wikipedia tables below the table
    # ths = tr.find_all("th")
    # for th in ths:
    # cells.append(th.text.strip())
    # else:
    # use regular td tags
    for td in tds:
        cells.append(td.text.strip())
    rows.append(cells)
    print(cells)
