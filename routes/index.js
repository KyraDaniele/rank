const express = require('express'),
    router = express.Router(),
    RankModel = require('../models/rankModel');

router.get('/', async function(req, res, next) {
    const rankData = await RankModel.getAll();
    console.log('rank data', rankData);

    res.render('template', {
        locals: {
            title: 'Ranking System',
            data: rankData
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

// router.post('/add', async (req, res) => {
//     const {ranking} = req.body;
//     const ranks = await RankModel.getRank(ranking);
//     console.log('ranks', ranks);
//     if (ranks.rowCount != 1) {
//         res.sendStatus(500);
//     } else {
//     res.redirect('/');
//     }
// });

module.exports = router;
