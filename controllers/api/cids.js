const Cid = require('../../models/cid');
import { useNavigate } from 'react-router-dom';

module.exports = {
    index,
    addToTable,
    editData,
    updateData,
    // deleteData
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

async function editData(req, res) {
    const selectedData = await Cid.findById(req.params.id)
    //navigate to edit page?
    res.json(selectedData)
}

async function updateData(req, res) {
    const data = await Cid.findById(req.params.id)

}