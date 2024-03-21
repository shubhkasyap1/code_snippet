// server/api/api.js

const express = require('express');
const codeSnippetRoutes = require('../routes/codeSnippetRoutes');

const router = express.Router();

router.use('/api', codeSnippetRoutes);

module.exports = router;
