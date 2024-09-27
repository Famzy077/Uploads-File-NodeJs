const File = require('../model/filesShema')

const createFiles = async(req, res) => {
    try {
        let fileRespose = await file.findOne()
        res.render('/file', {
        files: fileRespose
    })} catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {createFiles}