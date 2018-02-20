import os
from bs4 import BeautifulSoup, element
path = os.path.abspath("./portfolio/newportfolio.html")
template = open(path, "r")
soup = BeautifulSoup(template, "html.parser")
listofApps = soup.find("ul", class_="portfolio_ul")
for app in listofApps.children:
    print(type(app))
    if isinstance(app, element.NavigableString):
        continue
    paragraphs = app.find_all("p")
    title = app.find("h3").string
    fileTitle = title.replace(" ", "").replace("/","")
    url = paragraphs[0].find("a")['href']
    audience = paragraphs[1].contents[1].lstrip(' ')
    description = paragraphs[2].contents[1].lstrip(' ')
    output = open("./app_dev/_posts/2018-02-13-"+fileTitle+".md", "w")
    output.write("---\n")
    output.write("layout: article\n")
    output.write("title: \""+title+"\"\n")
    output.write("description: \""+description+"\"\n")
    output.write("current-url: "+url+"\n")
    output.write("audience: \""+audience+"\"\n")
    output.write("Launched: Jan 2018\n")
    output.write("tags: \n")
    output.write("  - Static Site - Jekyll\n\n")
    output.write("---\n")
    output.close()

