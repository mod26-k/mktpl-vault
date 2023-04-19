const express = require('express');
const router = express.Router();
const cidsCtrl = require('../../controllers/api/cids')

router.post('/', cidsCtrl.index)
router.post('/', cidsCtrl.addToTable)

module.exports = router;