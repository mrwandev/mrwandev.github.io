import os

dir_ = input()
# extention = input()

for file in os.listdir(dir_):
	if file.endswith(".jpg") or file.endswith(".JPG") or file.endswith(".png") or file.endswith(".PNG"):
		os.rename(os.path.join(dir_, file), os.path.join(dir_, file).replace('n_', ''))

pause = input()