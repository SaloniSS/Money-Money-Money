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

price = scrape("https://www.amazon.com/SQUISHMALLOWS-Tabby-Unicorn-Purple-Rainbow/dp/B084H1ZSHT/ref=sr_1_1?dchild=1&keywords=squishmallow&qid=1589072038&sr=8-1")
print(price)