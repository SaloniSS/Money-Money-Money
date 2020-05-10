from flask import Flask
import json
import scrape
app = Flask(__name__)

@app.route('/<id>')
def getPrice(id):
    amazon = "https://www.amazon.com/dp/"
    url = amazon+id
    response = scrape.scrape(url)
    DictToString = json.dumps(response)
    StringToJson = json.loads(DictToString)
    price = StringToJson["Price"]
    return price[1:]

if __name__ == '__main__':
   app.run()