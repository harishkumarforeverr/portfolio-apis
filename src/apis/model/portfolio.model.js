// import mongoose from 'mongoose';
// const { Schema } = mongoose;
const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Schema = mongoose.Schema;

const viewsSchema = new Schema({ 
  count: { type: Number, default: 0, require:true}, 
},{ versionKey: false, timestamps: true, collection: "views" });


viewsSchema.plugin(autopopulate);
var viewModel = mongoose.model('views', viewsSchema);
module.exports = viewModel