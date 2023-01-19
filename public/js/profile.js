const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#car-name').value.trim();
  const make = document.querySelector('#car-make').value.trim();
  const model = document.querySelector('#car-model').value.trim();
  const year = document.querySelector('#car-year').value.trim();
  const starting_price = document.querySelector('#car-starting-price').value.trim();
  const auction_end_date = document.querySelector('#car-auction-end-date').value.trim();

  if (name && make && model && year && starting_price && auction_end_date) {
    const response = await fetch(`/api/cars`, {
      method: 'POST',
      body: JSON.stringify({ name, make, model, year, starting_price, auction_end_date }),
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

document
  .querySelector('.new-bid-form')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.car-list')
  .addEventListener('click', delButtonHandler);