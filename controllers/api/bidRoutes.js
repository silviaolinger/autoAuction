const router = require('express').Router();
const { Bid } = require('../../models');
const withAuth = require('../../utils/auth');

// create a new bid
router.post('/', withAuth, async (req, res) => {
  try {
    const newBid = await Bid.create({
      ...req.body,
      userId: req.session.user_id,
    });
    res.status(200).json(newBid);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a bid
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BidData = await Bid.destroy({
      where: {
        id: req.params.id,
        // make sure user is owner of bid being deleted
        user_id: req.session.user_id,
      },
    });

    if (!BidData) {
      res.status(404).json({ message: 'No Bid found with this id!' });
      return;
    }
    res.status(200).json(BidData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
