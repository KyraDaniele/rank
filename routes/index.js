const express = require('express'),
    router = express.Router(),
    RankModel = require('../models/rankModel');

router.get('/', async function(req, res, next) {
    const rankData = await RankModel.getAll();
    // console.log('rank data', rankData);

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


module.exports = router;
