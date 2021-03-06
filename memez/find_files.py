import os

dir_ = input()
extension = input()

dir_path = os.path.dirname(os.path.realpath(dir_)) 

# textFile = open("text.txt", "w")
for root, dirs, files in os.walk(dir_path): 
    for file in files:
        if file.endswith(extension+extension):
            # textFile.write('<img class="meme" src="' + os.path.join(file) + '">\n')
            # print('<img class="meme" src="' + os.path.join(file) + '">')
            print(os.path.join(file))

pause = input()