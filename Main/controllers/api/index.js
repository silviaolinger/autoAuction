const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bidRoutes = require('./bidRoutes');
const listingRoutes = require('./listingRoutes');

router.use('/users', userRoutes);
router.use('/bids', bidRoutes);
router.use('/listings', listingRoutes);

module.exports = router;
