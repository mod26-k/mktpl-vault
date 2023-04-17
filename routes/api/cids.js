const express = require('express');
const router = express.Router();
const cidsCtrl = require('../../controllers/api/cids')

router.post('/cids', cidsCtrl.addToTable)

module.exports = router;