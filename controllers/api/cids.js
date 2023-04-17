const Cid = require('../../models/cid');

module.exports = {
    addToTable,
    // editCid,
    // deleteCid
}

async function addToTable(req, res) {
    const newCid = new Cid({
        title: req.body.title,
        fileType: req.body.fileType,
        cid: req.body.cid
    })
    newCid.save();
}