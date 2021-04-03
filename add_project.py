import bs4

name = "gpa"
# load the file
with open("test.html") as inf:
    txt = inf.read()
    soup = bs4.BeautifulSoup(txt)

# create new link

root = soup.new_tag("div",**{'class':"project-tile"})

obj = soup.new_tag("div",**{'class':"project-object"})
cont = soup.new_tag("div",**{'class':"project-container" ,'onclick':"toggle_project_info(this)"})
img = soup.new_tag("img", **{'alt':"gpa", 'class':"project-object-img"},src=f"resources/img/projects/{name}.png")
ovly = soup.new_tag("div",**{'class':'project-object-img-overlay'})
p =soup.new_tag("p",**{'class':'project-object-name'})
p.insert(0,bs4.NavigableString(name))
cont.append(img)
cont.append(ovly)
cont.append(p)
obj.append(cont)

info = soup.new_tag("div",**{'class':"project-info"})
txt = soup.new_tag("div",**{'class':"text"})
em = soup.new_tag("embed",**{'class':"readme"},src=f"resources/readmes/{name}.html")
txt.append(em)
info.append(txt)
root.append(obj)
root.append(info)
print(root)

soup.html.body.section.div.append(root)

print(soup.html.body.section.div)

# save the file again
with open("test.html", "w") as outf:
    outf.write(str(soup))