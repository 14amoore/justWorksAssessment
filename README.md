# Justworks Take Home Assessment
This repo was created as part of completing the Justworks take home assessment.

## Prompt:
This endpoint provides up-to-the-minute crypto exchange rates relative to US dollars:
https://api.coinbase.com/v2/exchange-rates?currency=USD

Crypto is all the rage these days and I don't want to miss out! I want to keep 70% of my
crypto holdings in BTC and 30% in ETH.

Write a function that takes the amount I have to spend in USD as a parameter and returns
the number of Bitcoin and Ethereum to buy.

I have $X I want to keep in BTC and ETH, 70/30 split. How many of each should I buy?

### Instructions to run:
Simply clone this repo and run `node index.js` from the root of the project by typing it into your terminal and hitting return.


I've set the initial amount to invest at $100K. To change the amount, open index.js and enter whatever amount you would like.

### Potential next steps:
What I do not know are the investment minimums for Bitcoin and Ethereum. Because of this there are no warnings about a potential investment being too small. A way to go further would be to get information on the smallest portion of Bitcoin and Ethereum can be bought and add warnings to the code so users would know if the amount the plan to invest is too small.