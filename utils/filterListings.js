function filterListingsByEndDate(listings) {
    var currentDate = new Date();
  
    var filteredListings = listings.filter(function(listing) {
      var endListingDate = new Date(listing.endListingDate);
      return endListingDate > currentDate;
    });
  
    return filteredListings;
}
module.exports = filterListingsByEndDate;