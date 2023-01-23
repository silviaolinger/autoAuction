const searchFormHandler = async (event) => {
    event.preventDefault();
  
    const make = document.querySelector('.search-box').value.trim();
    
    document.location.replace(`/api/listings/search/${make}`);
};
  
document
.querySelector('.search-form')
.addEventListener('submit', searchFormHandler);
