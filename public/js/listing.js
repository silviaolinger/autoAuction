var coll = document.getElementsByClassName('collapsible');
var j;
// js for image carousel
for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}
// New bid event handler
const newBidFormHandler = async (event) => {
  event.preventDefault();
  const amount = parseInt(document.querySelector('#new-bid').value.trim());
  const textPrice = document.querySelector('#price').textContent;
  const price = parseFloat(textPrice.replace(/,/g, ""))
  const path = window.location.pathname;
  const listingId = parseInt(path.substring(path.lastIndexOf('/') + 1));
  // logic to prevent placing bid lower than current price
  if (amount > price) {
    console.log(amount)
    const response = await fetch('/api/bids', {
      method: 'POST',
      body: JSON.stringify({ amount, listingId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } else {
    alert('bid must be higher than current price');
  }
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// js for dots under image
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

document
  .querySelector('.new-bid-form')
  .addEventListener('submit', newBidFormHandler);
