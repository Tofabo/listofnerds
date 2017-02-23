var mongoose = require('mongoose');
var Nerd = mongoose.model('Nerd');

module.exports = (function () {
    return {
        add: function (req, res) {
            var newNerd = new Nerd(req.body);
            newNerd.save(function (err) {
                if (err) {
                    return res.json({ status: false, error: "We encountered a problem please try again later!" });
                }
                res.json({ status: true });
            })
        },
        getall: function (req, res) {
            Nerd.find({ delete: 1 }, function (err, nerds) {
                if (err) {
                    return res.json({ status: false, error: "We encountered a problem please try again later!" });
                }
                else {
                    res.json({ status: true, nerds: nerds });
                }
            })
        },
        like: function (req, res) {
            Nerd.update({ _id: req.body.id }, { $inc: { likes: 1 } }, function (err) {
                if (err) {
                    return res.json({ status: false, error: "We encountered a problem please try again later!" });
                }
                res.json({ status: true });
            })
        },
        changestatus: function (req, res) {
            Nerd.findOne({ _id: req.body.id }, function (err, nerd) {
                if (err) {
                    return res.json({ status: false, error: "We encountered a problem please try again later!" });
                }
                console.log(nerd, "in back end controller");
                if (nerd.status == "active") {
                    nerd.status = "inactive";
                }
                else {
                    nerd.status = "active";
                }
                nerd.save(function (err2) {
                    if (err2) {
                        return res.json({ status: false, error: "We encountered a problem please try again later!" });
                    }
                    res.json({ status: true });
                })
            })
        },
        delete: function(req, res){
            Nerd.update({ _id: req.body.id }, {$set: {delete: 0}}, function(err){
                if (err) {
                    return res.json({ status: false, error: "We encountered a problem please try again later!" });
                }
                res.json({ status: true });
            })
        },
    }
})()
