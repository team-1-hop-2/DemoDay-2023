const IMGModel = require('./models')

async function generateId() {
    let id = ''
    let findId = await IMGModel.findById(id)
    while(findId){
        const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < 5; i++) {
            id += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
        }
        findId = await IMGModel.findById(id)
    }
    return id
}

exports.uploadIMG = async (request, response, next) => {
    const id = await generateId()
    const image_data = await IMGModel.create({_id:id,...request.body})
    response
    .status(201)
    .json({message: "Post request successful.", data: image_data})
}


exports.getIMG = async (request, response, next) => {
    const { id } = request.params
    const image_data = await IMGModel.findById(id)
    response
    .status(201)
    .json({data: image_data})
}