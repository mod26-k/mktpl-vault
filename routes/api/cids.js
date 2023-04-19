const express = require('express');
const router = express.Router();
const cidsCtrl = require('../../controllers/api/cids.js')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', cidsCtrl.index)
router.post('/', cidsCtrl.addToTable)

//edit ---create edit page
router.get('/edit/:id', cidsCtrl.editData)
router.put('/', cidsCtrl.updateData)

//delete
router.delete('/:id', cidsCtrl.deleteData)

module.exports = router;