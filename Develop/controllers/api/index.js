const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ListingRoutes = require('./ListingRoutes');
const BidRoutes = require ('./BidRoutes');

router.use('/users', userRoutes);
router.use('/Listing', ListingRoutes);
router.use('/Bid', BidRoutes);

module.exports = router;
