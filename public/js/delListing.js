const delListingHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id)
      const response = await fetch(`/api/listings/${id}`, {
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
  .querySelector('#user-listings')
  .addEventListener('click', delListingHandler);