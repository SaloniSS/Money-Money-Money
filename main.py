#pip installed requests & selectorlib

from selectorlib import Extractor
import requests

e = Extractor.from_yaml_file('selectors.yml')

def scrape(url):
    headers = {
        'authority': 'www.amazon.com',
        'user-agent': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36'
    }
    r = requests.get(url, headers=headers)
    return e.extract(r.text)


URL = "https://www.amazon.com/Squishmallow-Violet-Octopus-Stuffed-Plush/dp/B082FTSGMS/ref=sr_1_11?crid=3SIV28NNUYU3V&dchild=1&keywords=squishmallow&qid=1589051521&s=toys-and-games&sprefix=squish%2Ctoys-and-games%2C217&sr=1-11"
print (scrape(URL))
