const db = require("../config/db.config.js");
const User = db.user;


exports.create = (req , res) => {
    User.create({
        name : req.body.name,
        email : req.body.email,
        address : req.body.address,
        mobile_number : req.body.mobile_number
    }).then((user) => {
        res.status(200).json({
            status : true,
            message : 'User created succcessfully'
        })
    })
}

exports.findAll = (req , res) => {
    User.findAll().then((user) => {
        res.status(200).json({
            status : true,
            data : user,
        })
    })
}

exports.findByPk = (req , res) => {
    User.findByPk(req.params.userId).then((user) => {
        res.status(200).json({
            status : true,
            data : user
        })
    })
}

exports.update = (req , res) => {
    const id = req.params.userId;
    User.update(
        {
            name : req.body.name,
            email : req.body.email,
            address : req.body.address,
            mobile_number : req.body.mobile_number 
        },
        { where: { id: req.params.userId } }
    ).then(() => {
        res.status(200).json({
            status : true,
            message : "User updated successfully with id = " + id
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.userId;
    User.destroy({
      where: { id: id },
    }).then(() => {
      res.status(200).json({
          status: true,
          message: "User deleted successfully with id = " + id
      });
    });
  };