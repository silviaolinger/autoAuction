const uploader = Uploader({
  apiKey: "public_FW25b2gBiUt9ZJeaMf76rGcekrMo"
});

var images

function success(){
  let container = document.getElementById('btn-container');
  let uploadBtn = document.getElementById('upload');
  container.removeChild(uploadBtn);
  let label = document.createElement('label');
  label.setAttribute('style', 'color:green');
  label.textContent = 'Image Upload Successful';
  container.appendChild(label);
}

function uploadFiles() {
uploader
  .open({
    maxFileCount: 10,
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
  })
  .then((files) => {
    if (files.length === 0) {
      alert('No files selected.');
    } else {
      console.log('Files uploaded:');
      images = (files.map((f) => f.fileUrl));
      console.log(images)
      success();
    }
  })
  .catch((err) => {
    console.error(err);
  });
}
  


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
  const photoUrl = images
  console.log(photoUrl)

  if (name && make && details && year && mileage && condition && startBidAmount && endListingDate) {
    const response = await fetch(`/api/listings`, {
      method: 'POST',
      body: JSON.stringify({ photoUrl, name, details, mileage, condition, make, year, startBidAmount, endListingDate }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
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
  .querySelector('.image-upload')
  .addEventListener('click', uploadFiles);

// document
//   .querySelector('.new-bid-form')
//   .addEventListener('click', delButtonHandler);

// document
//   .querySelector('.car-list')
//   .addEventListener('click', delButtonHandler);