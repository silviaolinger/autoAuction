module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  // Retrieve all bids and starting amount and sort to return highest value
  current_price: (startBidAmount, Bids) => {
    let price = []
    console.log( "hello", Bids);
    Bids.forEach( bids => {
      price.push(parseInt(bids.amount))
    });
    console.log(price);
    price.push(parseInt(startBidAmount))
    console.log(price);
    price.sort(function(a, b){return b-a});
    console.log(price);
    return price[0]
  }
};
