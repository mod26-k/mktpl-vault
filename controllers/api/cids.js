const Cid = require('../../models/cid');

module.exports = {
    index,
    addToTable,
    editData,
    updateData,
    deleteData,
}

async function index(req, res) {
    const storedData = await Cid.find({uploadedBy: req.user._id})
    res.json(storedData)
}

function addToTable(req, res) {
    const newCid = new Cid({
        title: req.body.title,
        fileType: req.body.fileType,
        cid: req.body.cid,
        uploadedBy: req.user._id
    })
    newCid.save();
    res.json(newCid)
}

async function editData(req, res) {
    const selectedData = await Cid.findById(req.params.id)
    res.json(selectedData)
}

async function updateData(req, res) {
    const data = await Cid.findById(req.body._id)
        data.title = req.body.title
        data.fileType = req.body.fileType
        data.cid = req.body.cid
        await data.save();
        res.json(data)
}

async function deleteData(req, res) {
    try {
        await Cid.findByIdAndDelete(req.params.id)
        res.status(200).json('successfully deleted')
    } catch (error) {
        res.status('204').json(error)
    }
}