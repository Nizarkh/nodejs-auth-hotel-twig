var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation')
/* GET users listing. */
router.get('/', function(req, res, next) {
    Reservation.find(function(err, data) {
       res.render('ListResrvation.twig',{data})
    });
});


router.get('/add', function(req, res, next) {
    res.render('addReservation.twig')
});

router.post('/addReservation', function(req, res, next) {
    var Res1 = new Reservation({
        num_res: req.body.num_res,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
        hotel: mongoose.Schema.Types.ObjectId(req.body.hotelId)
        //var hotelId = mongoose.Schema.Types.ObjectId(req.body.hotelId);

  
    //hotel : { type: Schema.ObjectId, ref: 'Hotel' }
    });
    Res1.save();
    res.redirect("/reservation/");
});


module.exports = router;