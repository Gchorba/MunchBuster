exports.render = function(req, res) {
    res.render('index', {
    	title: 'MunchBusters',
    	user: req.user ? req.user.username : ''
    });

    //res.render('delivery');
};
