const router = require('express').Router();
const { Bid } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBid = await Bid.create({
      ...req.body,
      userId: req.session.user_id,
    });
    console.log(newBid)
    res.status(200).json(newBid);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const BidData = await Bid.destroy({
      where: {
        id: req.params.id,
        userId: req.session.user_id,
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
