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
    let price = [];
    Bids.forEach((bids) => {
      price.push(parseInt(bids.amount));
    });
    price.push(parseInt(startBidAmount));
    price.sort(function (a, b) {
      return b - a;
    });
    return parseInt(price[0]).toLocaleString();
  },
  // Only display the first photo a user uploaded
  first_photo: (photoUrl) => {
    let single = `${photoUrl}`.split(',');
    return single[0];
  },
  // Convert end date to miliseconds then to days,hours,minutes,seconds
  time_remaining: (endListingDate) => {
    let endDate = endListingDate;
    let currentDate = new Date();
    let remaining = endDate.getTime() - currentDate.getTime();
    return convertMiliseconds(remaining);
  },
  // Return open or closed string if the time remaining is negative
  open_closed: (endListingDate) => {
    let int = miliseconds(endListingDate);
    if (int < 0) {
      return 'Closed';
    } else {
      return 'Open';
    }
  },
};

function miliseconds(endListingDate) {
  let endDate = endListingDate;
  let currentDate = new Date();
  let remaining = endDate.getTime() - currentDate.getTime();
  return remaining;
}
// Convert miliseconds to days,hours,minutes,seconds
function convertMiliseconds(miliseconds, format) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  switch (format) {
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
}
