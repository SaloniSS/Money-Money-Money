# Money Money Money

## Created By

- [Megan Tran](https://github.com/meganjtran)
- [Reshmi Ranjith](https://github.com/ReshmiCode)
- [Saloni Shivdasani](https://github.com/SaloniSS)
- [Vincent Vu](https://github.com/vincent-vu280)

## Links

[Extension Store Listing](https://chrome.google.com/webstore/detail/money-money-money/ehdcenmhmjlkmlnmlglncndglmoglojd)  
[Website](https://www.moneymoneymoney.tech)  
[Demo Video](https://www.youtube.com/watch?v=r2eyxjckIYY)  
[Devpost Submission](https://devpost.com/software/moneymoneymoney)  

## Submission
Submitted for Hacklarious - MLH Summer League 2020

### Awards
- Best Demo Video

## Usage

Refer to the README.md in each folder to get detailed description.

## Detailed Description

### Inspiration

Most of us have been guilty of impulse-buying something we don’t need online. When shopping online, it’s easy to get lost since there’s so many weird and interesting things that you can buy. MoneyMoneyMoney is here to help ground your decisions by comparing the costs of a potential purchase to the cost of something you’re more familiar with.

### What it does

The extension takes the price of the amazon item you’re looking at and converts it into the equivalent number of chipotle burritos, cups of boba, boxes of chicken nuggets, or rolls of toilet paper (maybe not as accurately for that last one right now!). When checking out, the extension also sends multiple (slightly passive aggressive) pop-ups asking if you really want to complete your purchase.

### How we built it

- **Backend:** Our extension was created through a React base. We utilized Python and one of its libraries, SelectorLib, to create an API for web-scraping Amazon’s product pages to get prices based on productIDs. This information was transferred to the server, a Flask app. 
- **DevOps:** The server is hosted on Google App Engine and the frontend website is hosted on Firebase and redirected to Domain.com.
- **Frontend:** For the extension, we used react along with semantic ui for the design and functionality. This was incorporated with Chrome Extension apis and functions to convert it into an extension. For the website, we used a static react page.

### Challenges we ran into

Understanding how flask server deployments work was a challenge.  We also had to learn how servers handle production and development modes of backend code, which took reading and lots of trial and error. Even then, the hosted code would sometimes crash and would need to be redeployed.

### Accomplishments that we're proud of

Our extension is fully functional and we are extremely proud to have pulled that off. We’re not used to doing online hackathons, so being able to work together so well and create something together is something we’re very proud of. 
Also, in our last hackathon, we struggled a lot with creating a good video to demo our code, but this time, we are proud that we could create an entertaining video to present our hard work.

### What we learned

We learned that we had to use the Google Storage API to save data for the extension rather than using global variables or state in React. We also learned about conditional rendering for providing different information on different product pages, which required a lot of research.

### What's next for MoneyMoneyMoney

More items! We want to let users be able to search a bigger database for items they could use to compare prices, or add their own custom items! We would also like to keep a running total of money spent that can be converted into the different items so that users can be aware of their long-term spending.
