const Sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const {Location, Photo} = require('../Model')

module.exports = {
  async index(req, res) {
    const locations = await Location.findAll({include : [Photo]});

    return res.status(200).json(locations);
  },

  
  async store(req, res) {
    const location = await Location.create(req.body); 

    if (req.files) {
      const locationImages = req.files;

      locationImages.forEach(async (imageFile) => {
        const {filename : image} = imageFile;
        const [name, ext] = image.split('.');
        const fileName = `${name}.jpg`;

        await Sharp(imageFile.path)
        .resize(500)
        .jpeg({quality : 70})
        .toFile(
            path.resolve(imageFile.destination, 'resized', fileName)
        );

        fs.unlinkSync(imageFile.path);

        await Photo.create({imageSrc : fileName, location_id : location.id}); 
      });
    }

    console.log(location);
    return res.send(location)
  },

  async edit(req, res) {
    // View da edição
  },

  async update(req, res) {

  },

  async destroy(req, res) {
    
  }
}