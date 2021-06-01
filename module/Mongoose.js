'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const psiSchema = Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    slug:{
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    gender: String,
    image:   String,
    powers: [String]
  });
const psiDB = mongoose.model('psi',psiSchema)

module.exports=psiDB

