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

  //Creating the Issue Model
  let issueSchema = new mongoose.Schema({
    issue_title: {type: String, required: true},
    issue_text: {type: String, required: true},
    created_by : {type: String, required: true},
    assigned_to : String,
    status_text : String,
    open: {type: Boolean, required: true},
    created_on: {type: Date, required: true},
    updated_on: {type: Date, required: true},
    project: String
  })

  let Issue = mongoose.model('Issue', issueSchema)
  
  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      
    })
    
    .post(function (req, res){
      let project = req.params.project;
      let newIssue = new Issue({
        issue_title: req.body.issue_title,
        issue_text: req.body.issue_text,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to || '',
        status_text: req.body.status_text || '',
        open: true,
        created_on: new Date().toUTCString(),
        updated_on: new Date().toUTCString(),
        project: project
      })
      
      newIssue.save((error, savedIssue) => {
        if(!error && savedIssue){
          //console.log('Saved Issue is')
          //console.log(savedIssue)
        }
      })
    })
    
    .put(function (req, res){
      let project = req.params.project;
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      
    });
    
};
