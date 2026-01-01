import os,json,shutil
from Vars import *
Tables=[]
for i in os.listdir():
	if i.endswith(".json"):Tables.append(i[:-5])

if Tables == []:
	print("No data available")
else:
	print("Creating pages")
	for i in Tables:
		Entries=[]
		with open("%s.json"%(i)) as f:d=json.load(f)
		for n,l in zip(list(d.keys()), list(d.values())):Entries.append(E0%(n,l))
		with open("%s.html"%(i),"w") as f:f.write(P0%(i,i,"".join(Entries).rstrip()))
		print(i+".html created")

	Entries=[]
	for i in Tables:Entries.append(E1%(i,i))
	with open("index.html","w") as f:f.write(P1%("".join(Entries).rstrip()))
	print("Main page updated")

	print("Finished")

shutil.rmtree("__pycache__")
