import os

dir_ = input()
# extention = input()

textFile = open("text.txt", "a")

for file in sorted(os.listdir(dir_)):
	if file.endswith(".jpg") or file.endswith(".JPG") or file.endswith(".png") or file.endswith(".PNG"):
		# print('<img class="meme" src="' + os.path.join(file) + '">')
		textFile.write('"' + os.path.join(file) + '"' + ', ')

pause = input()