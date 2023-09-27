const cryptoDistribution = async (amount) => {
  try {
    const res = await fetch(
      'https://api.coinbase.com/v2/exchange-rates?currency=USD'
    );
    const data = await res.json();
    const {
      data: { rates },
    } = data;

    const { BTC: btcRate } = rates;
    const { ETH: ethRate } = rates;

    const btcAmount = (amount * 0.7 * btcRate).toFixed(4);
    const ethAmount = (amount * 0.3 * ethRate).toFixed(4);

    const totalAmount = {
      Bitcoin: btcAmount,
      Ethereum: ethAmount,
    };

    return totalAmount;
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // below is where you can adjust the amount you'd like to invest
  const amountToInvest = 100000;
  const split = await cryptoDistribution(amountToInvest);
  if (split) {
    console.log(
      `You should buy ${split.Bitcoin} of BTC, and ${split.Ethereum} of ETH to maintain a 70/30 split of the $${amountToInvest} you have to invest.`
    );
  } else {
    console.log('Failed to fetch crypto rates.');
  }
})();
