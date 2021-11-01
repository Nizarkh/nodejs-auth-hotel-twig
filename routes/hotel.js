var express = require('express');
const Hotel = require('../models/hotel');
var router = express.Router();
var day = require('../models/hotel')
/* GET users listing. */
router.get('/', function(req, res, next) {
    Hotel.find(function(err, data) {
       res.render('ListHotel.twig',{data})
    });
});


router.get('/add', function(req, res, next) {
    res.render('addHotel.twig')
});

router.post('/addHotel', function(req, res, next) {
    var Hotel1 = new Hotel({
        HotelName: req.body.hotelName,
        Capacite: req.body.capacite,
        Location: req.body.location,
        Etoile: req.body.etoile

    });
    Hotel1.save();
    res.redirect("/hotel/");
});

router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    Hotel.findOneAndRemove({ _id: id }, function(err) {
        if (err) throw err;
    })
    res.redirect("/hotel/");

});


router.get('/modifier/:id', function(req, res, next) {
    var id = req.params.id;
    Hotel.findById({ _id: id }, function(err, data) {
            res.render('update.twig', {data })
        })
        

});
router.post('/updates/', function(req, res, next) {
    var id = req.body.id;
    Hotel.findById({ _id: id }, function(err, data) {
        data.HotelName = req.body.hotelName
        data.Capacite = req.body.capacite
        data.Location = req.body.location
        data.Etoile = req.body.etoile
        data.save();
    })
    res.redirect("/hotel/");

});


module.exports = router;