// API key for upload-io
const uploader = Uploader({
  apiKey: 'public_FW25b2gBiUt9ZJeaMf76rGcekrMo',
});
// init images var
var images;
// Display image upload success message
function success() {
  let container = document.getElementById('btn-container');
  let uploadBtn = document.getElementById('upload');
  container.removeChild(uploadBtn);
  let label = document.createElement('label');
  label.setAttribute('style', 'color:green');
  label.textContent = 'Image Upload Successful';
  container.appendChild(label);
}
// function to upload images
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
        images = files.map((f) => f.fileUrl);
        success();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// New listing event handler
const newFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#car-name').value.trim();
  const make = document.querySelector('#car-make').value.trim();
  const details = document.querySelector('#car-details').value.trim();
  const year = document.querySelector('#car-year').value.trim();
  const mileage = document.querySelector('#car-mileage').value.trim();
  const condition = document.querySelector('#car-condition').value.trim();
  const startBidAmount = document
    .querySelector('#car-starting-price')
    .value.trim();
  const endListingDate = document
    .querySelector('#car-auction-end-date')
    .value.trim();
  const photoUrl = images;

  if (
    name &&
    make &&
    details &&
    year &&
    mileage &&
    condition &&
    startBidAmount &&
    endListingDate
  ) {
    const response = await fetch(`/api/listings`, {
      method: 'POST',
      body: JSON.stringify({
        photoUrl,
        name,
        details,
        mileage,
        condition,
        make,
        year,
        startBidAmount,
        endListingDate,
      }),
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

document
  .querySelector('.new-car-form')
  .addEventListener('submit', newFormHandler);

document.querySelector('.image-upload').addEventListener('click', uploadFiles);
