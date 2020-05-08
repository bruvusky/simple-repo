from bs4 import BeautifulSoup
import csv
import requests

page = requests.get("https://www.soccerstats.com/homeaway.asp?league=england")
soup = BeautifulSoup(page.content, "html.parser")

table = soup.find("table")

output_rows = []
for table_row in table.findAll("tr"):
    columns = table_row.findAll("td")
    output_row = []
    for column in columns:
        output_row.append(column.text)
    output_rows.append(output_row)

with open("output.csv", "wb") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(output_rows)
