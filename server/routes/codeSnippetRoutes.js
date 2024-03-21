// server/routes/codeSnippetRoutes.js

const express = require('express');
const CodeSnippet = require('../models/CodeSnippet');

const router = express.Router();

router.post('/code-snippets', async (req, res) => {
  try {
    const { username, language, stdin, code } = req.body;
    const newSnippet = new CodeSnippet({ username, language, stdin, code });
    await newSnippet.save();
    res.status(201).json({ message: 'Snippet submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
