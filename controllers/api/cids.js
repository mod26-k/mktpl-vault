const Cid = require('../../models/cid');

module.exports = {
    index,
    addToTable,
    editData,
    updateData,
    deleteData,
}

async function index(req, res) {
    const storedData = await Cid.find({})
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

async function editData(req, res) {
    const selectedData = await Cid.findById(req.params.id)
    res.json(selectedData)
}

async function updateData(req, res) {
    const data = await Cid.findById(req.params.id)
    data.save();
    res.json(data)
}

async function deleteData(req, res) {
    try {
        const selectedData = await Cid.findById(req.params.id)
        console.log(selectedData)
        selectedData.Cid.remove(req.params.id)
        await selectedData.save()
        await Cid.deleteOne(req.params.id)
    } catch (error) {
        res.status(204).json(error)
    }
}