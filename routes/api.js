'use strict';

var expect = require('chai').expect;
//var MongoClient = require('mongodb');
//var ObjectId = require('mongodb').ObjectID;
let mongodb = require('mongodb')
let mongoose = require('mongoose')

const CONNECTION_STRING = process.env.DB;
//let uri = 'mongodb+srv://M4v3r1ck:' + process.env.PW + '@cluster0.1cvj2.mongodb.net/issue_tracker?retryWrites=true&w=majority'

module.exports = function (app) {

  mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
  
  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      
    })
    
    .post(function (req, res){
      let project = req.params.project;
      
    })
    
    .put(function (req, res){
      let project = req.params.project;
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      
    });
    
};
