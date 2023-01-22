var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const newBidFormHandler = async (event) => {
  event.preventDefault();

  
  const amount = parseInt(document.querySelector('#new-bid').value.trim());
  const price = parseInt(document.querySelector('#price').textContent);
  const path = window.location.pathname
  const listingId = parseInt(path.substring(path.lastIndexOf('/')+1))
  console.log(amount, price, listingId);
  if (amount>price) {
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
    alert("bid must be higher than current price")
  }
};

document
  .querySelector('.new-bid-form')
  .addEventListener('submit', newBidFormHandler);
