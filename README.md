# mrwandev.github.io
<h1 align="center">big title</h1>
<p align="center">smol <a href="http://mrwandev.github.io">link</a> yeeeee.</p>

<p align="center">
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/v/auto-py-to-exe.svg" alt="PyPI Version"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/pyversions/auto-py-to-exe.svg" alt="PyPI Supported Versions"></a>
    <a href="https://pypi.org/project/auto-py-to-exe/"><img src="https://img.shields.io/pypi/l/auto-py-to-exe.svg" alt="License"></a>
    <a href="http://pepy.tech/project/auto-py-to-exe"><img src="http://pepy.tech/badge/auto-py-to-exe" alt="Downloads"></a>
    <a href="https://pyinstaller.readthedocs.io/en/stable/requirements.html"><img src="https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey" alt="Supported Platforms"></a>
</p>

## Getting Started

### Prerequisites
 - Python : Python 2.7 / 3.5-3.7 (see [here](https://github.com/pyinstaller/pyinstaller/issues/4311) for 3.8)

*To have the interface displayed in the images, you will need chrome. If chrome is not installed or --no-chrome is supplied, the default browser will be used.*

### Installation and Usage
#### Installing Via [PyPI](https://pypi.org/project/auto-py-to-exe/)
You can install this project using PyPI:
```
$ pip install auto-py-to-exe
```
Then to run it, execute the following in the terminal:
```
$ auto-py-to-exe
```

### Installing Via [GitHub](https://github.com/brentvollebregt/auto-py-to-exe)
```
$ git clone https://github.com/brentvollebregt/auto-py-to-exe.git
$ cd auto-py-to-exe
$ python setup.py install
```
Then to run it, execute the following in the terminal:
```
$ auto-py-to-exe
```

#### Running Locally Via [Github](https://github.com/brentvollebregt/auto-py-to-exe) (no install)
You can run this project locally by following these steps:
1. Clone/download the [repo](https://github.com/brentvollebregt/auto-py-to-exe)
2. Open cmd/terminal and cd into the project
3. Execute ```python -m pip install -r requirements.txt```

Now to run the application, execute ```python -m auto_py_to_exe```. A Chrome window in app mode will open with the project running inside.

> Make sure you are in the directory below auto_py_to_exe (you will be after step 3) when calling `python -m auto_py_to_exe` or you will need to reference the folder auto_py_to_exe absolutely/relatively to where you currently are.

## Using the Application
1. Select your script location (paste in or use a file explorer)
    - Outline will become blue when file exists
2. Select other options and add things like an icon or other files
3. Click the big blue button at the bottom to convert
4. Find your converted files in /output when completed

*Easy.*

### Arguments
Usage: `auto-py-to-exe [-nc] [-c [CONFIG]] [-o [PATH]] [filename]`

| Argument                       | Type       | Description                                                                                                     |
|--------------------------------|------------|-----------------------------------------------------------------------------------------------------------------|
| filename                       | positional | Pre-fill the "Script Location" field in the UI.                                                                 |
| -nc, --no-chrome               | optional   | Open the UI using the default browser (which may be Chrome). Will not try to find Chrome.                       |
| -nu, --no-ui                   | optional   | Don't try to open the UI in a browser and simply print out the address that the application can be accessed at. |
| -c [CONFIG], --config [CONFIG] | optional   | Provide a configuration file (json) to pre-fill the UI. These can be generated in the settings tab.             |
| -o [PATH], --output-dir [PATH] | optional   | Set the default output directory. This can still be changed in the ui.                                          |

> If you are running this package locally, you will need to call ```python -m auto_py_to_exe``` instead of ```auto-py-to-exe```

### Configurations
Instead of inserting the same data into the UI over and over again, you can export the current state of the UI by going to the section "Configuration Import and Export" at the bottom of the advanced tab and exporting a JSON string to the clipboard or a file. This can then be imported into the UI again to re-populate all fields.

## Video
If you need something visual to help you get started, [I made a video for the original release of this project](https://youtu.be/OZSZHmWSOeM); some things may be different but the same concepts still apply.

## Issues Using the Tool
If you're having issues with the packaged executable or using this tool in general, I recommend you read [my blog post on common issues when using auto-py-to-exe](https://nitratine.net/blog/post/issues-when-using-auto-py-to-exe/?utm_source=auto_py_to_exe&utm_medium=readme_link&utm_campaign=auto_py_to_exe_help). This post covers things you should know about packaging Python scripts and fixes for things that commonly go wrong.

## Testing
Tests are located in `tests/` and are run using pytest:

```
$ pip install pytest
$ pip install -e .
$ pytest
```

## Screenshots

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| [![Empty interface](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png)](https://nitratine.net/posts/auto-py-to-exe/empty-interface.png) | [![Filled out](https://nitratine.net/posts/auto-py-to-exe/filled-out.png)](https://nitratine.net/posts/auto-py-to-exe/filled-out.png) |
| [![Converting](https://nitratine.net/posts/auto-py-to-exe/converting.png)](https://nitratine.net/posts/auto-py-to-exe/converting.png) | [![Completed](https://nitratine.net/posts/auto-py-to-exe/completed.png)](https://nitratine.net/posts/auto-py-to-exe/completed.png) |
