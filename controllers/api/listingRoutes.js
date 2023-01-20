const router = require('express').Router();
const { Listing } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
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

router.delete('/:id', withAuth, async (req, res) => {
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

      router.get('/:make', async (req, res) => {
        const make = req.params.make;
                try {
                    const result = await Listing.findAll({
                      where:{ make: make
                    }

                  });
                
                  if(!result) 
                  {
                    res.json("There is no Listing with this make")
                  }
                  res.json(result);
                  
                } catch (error) {
                  res.status(404).json({ message: 'No Listing found with this make',error });
                }
              })
              
module.exports = router;
