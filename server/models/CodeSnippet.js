// server/models/CodeSnippet.js

const mongoose = require('mongoose');

const codeSnippetSchema = new mongoose.Schema({
  username: String,
  language: String,
  stdin: String,
  code: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CodeSnippet = mongoose.model('CodeSnippet', codeSnippetSchema);

module.exports = CodeSnippet;
