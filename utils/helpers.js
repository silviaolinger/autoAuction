module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
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
    return parseInt(price[0]).toLocaleString();
  },

  first_photo: (photoUrl) => {
    console.log(photoUrl)
    let single = `${photoUrl}`.split(',');
    console.log(single)
    return single[0]
  },

  time_remaining: (endListingDate) => {
    let endDate = endListingDate
    let currentDate = new Date();
    let remaining = endDate.getTime() - currentDate.getTime()
    return convertMiliseconds(remaining)
  },

  open_closed: (endListingDate) => {
  let int = miliseconds(endListingDate);
  if (int < 0){
    return 'Closed';
  } else {
    return 'Open';
  }
}
};

function miliseconds(endListingDate) {
  let endDate = endListingDate
  let currentDate = new Date();
  let remaining = endDate.getTime() - currentDate.getTime()
  return remaining;
};

function convertMiliseconds(miliseconds, format) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
  
  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);
  
  switch(format) {
	case 's':
		return total_seconds;
	case 'm':
		return total_minutes;
	case 'h':
		return total_hours;
	case 'd':
		return days;
	default:
		return `${days}: days, ${hours}: hours, ${minutes}: minutes, ${seconds}: seconds`;
  }
};