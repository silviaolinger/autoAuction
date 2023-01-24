// function to delete bid
const delBidHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const status = event.target.getAttribute('stat');
    // cannot delete if the auction status is closed
    if (status === 'Closed') {
      alert('Sorry this auction is closed');
      return;
    }
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/bids/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete listing');
    }
  }
};

document.querySelector('#user-bids').addEventListener('click', delBidHandler);
