from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in lead_gender/__init__.py
from lead_gender import __version__ as version

setup(
	name="lead_gender",
	version=version,
	description="App to add gender field to Lead with color coding",
	author="Your Company",
	author_email="your@email.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)