const Cid = require('../../models/cid');

module.exports = {
    index,
    addToTable,
    // editCid,
    // deleteCid
}

async function index(req, res) {
    const storedData = await Cid.findById(req.params.id)
    res.json(storedData)
}

function addToTable(req, res) {
    const newCid = new Cid({
        title: req.body.title,
        fileType: req.body.fileType,
        cid: req.body.cid
    })
    newCid.save();
    res.json(newCid)
}

// function editCid()