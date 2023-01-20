const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#car-name').value.trim();
  const make = document.querySelector('#car-make').value.trim();
  const details = document.querySelector('#car-details').value.trim();
  const year = document.querySelector('#car-year').value.trim();
  const mileage = document.querySelector('#car-mileage').value.trim();
  const condition = document.querySelector('#car-condition').value.trim();
  const startBidAmount = document.querySelector('#car-starting-price').value.trim();
  const endListingDate = document.querySelector('#car-auction-end-date').value.trim();

  if (name && make && details && year && mileage && condition && startBidAmount && endListingDate) {
    const response = await fetch(`/api/listings`, {
      method: 'POST',
      body: JSON.stringify({ name, details, mileage, condition, make, year, startBidAmount, endListingDate }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create car');
    }
  }
};

const bidFormHandler = async (event) => {
  event.preventDefault();

  const car_id = document.querySelector('#bid-car-id').value.trim();
  const bid_amount = document.querySelector('#bid-amount').value.trim();

  if (car_id && bid_amount) {
    const response = await fetch(`/api/bid`, {
      method: 'POST',
      body: JSON.stringify({ car_id, bid_amount }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to place bid');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/listing/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete listing');
    }
  }
};

document
  .querySelector('.new-car-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.new-bid-form')
//   .addEventListener('click', delButtonHandler);

// document
//   .querySelector('.car-list')
//   .addEventListener('click', delButtonHandler);