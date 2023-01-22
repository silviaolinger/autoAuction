const router = require('express').Router();
const { Listing, User, Bid } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth,async (req, res) => {
  try {
    const newListing = await Listing.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newListing);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const listingData = await Listing.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Bid,
          attributes: ['amount', 'createdDate'],
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ]
        },
      ],
    });

    const listing = listingData.get({ plain: true });
    console.log("testing", listing)
    res.render('listing', {
      ...listing,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/cars:id', withAuth, async (req, res) => {
  try {
    const ListingData = await Listing.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ListingData) {
      res.status(404).json({ message: 'No Listing found with this id!' });
      return;
    }

    res.status(200).json(ListingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
