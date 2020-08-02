const {handleFileUpload} = require('../Helpers/FileHelper')


const {Location, Photo} = require('../Model')

module.exports = {
  async index(req, res) {
    const locations = await Location.findAll({include : [Photo]});

    return res.status(200).json(locations);
  },

  
  async store(req, res) {

    const location = await Location.create(req.body); 

   if(req.files.length > 0){

      const UploadedFiles = await handleFileUpload(req.files)

      if(UploadedFiles === false)
        return res.status(500).json({msg : "Error with format or size with your files"})
      
      UploadedFiles.forEach(async (filename) => { await Photo.create({imageSrc : filename, location_id : location.id}); })
   }

    return res.status(201).json({ msg : "Location criada com sucesso"})
  },

  async edit(req, res) {
    // View da edição
  },

  async update(req, res) {

  },

  async destroy(req, res) {
    
  }
}