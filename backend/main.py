from flask import Flask
import json
from selectorlib import Extractor
import requests
app = Flask(__name__)

e = Extractor.from_yaml_file('selectors.yml')

def scrape(url):
    headers = {
        'authority': 'www.amazon.com',
        'user-agent': 'Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36'
    }
    r = requests.get(url, headers=headers)
    return e.extract(r.text)

@app.route('/<id>')
def getPrice(id):
    amazon = "https://www.amazon.com/dp/"
    url = amazon+id
    response = scrape(url)
    DictToString = json.dumps(response)
    StringToJson = json.loads(DictToString)
    price = StringToJson["Price"]
    return price[1:]

if __name__ == '__main__':
   app.run()