const express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')
var UserModel = require('../models/user.model')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',function (req,res,next) {
    UserModel.find()
                .then((users)=>{res.json(users)})
                .catch((err)=>{res.json(err)})

})

router.get('/:userID',function (req,res) {
    UserModel.findById(req.params.userID)
                .then((user)=>{res.json(user)})
                .catch((err)=>{res.json(err)})
})

router.post('/',jsonParser,function (req,res) {

    const newUser = new UserModel(req.body)

    newUser.save()
                .then((user)=>{res.json(user)})
                .catch((err)=>{res.json(err)})
    
})

router.put('/:userID',function (req,res,next) {
    UserModel.findByIdAndUpdate(req.params.userID,req.body,{new:true})
                .then((user)=>{res.json(user)})
                .catch((err)=>{res.json(err)})
})

router.delete('/:userID',function (req,res,next) {
    UserModel.findByIdAndRemove(req.params.userID)
                .then((user)=>{res.json(user)})
                .catch((err)=>{res.json(err)})
})




module.exports = router;