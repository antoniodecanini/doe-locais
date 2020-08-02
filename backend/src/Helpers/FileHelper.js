const {IMAGES_ALLOWED_MYME_TYPES,IMAGES_MAX_FILE_SIZE} = require('../constants')
const Sharp = require('sharp');
const path = require('path');
const fs = require('fs');


const validateFileSize = function(fileSize){
    return fileSize <= IMAGES_MAX_FILE_SIZE
}

const validateMimeType = function(mimeType){
    return IMAGES_ALLOWED_MYME_TYPES.includes(mimeType)
}

const validateFiles = function(files){

    return files.every(file => {
        return validateFileSize(file.size) && validateMimeType(file.mimetype)
    });
}


const handleFileUpload = async function(files){

    let UploadedFiles = [];

   if(!validateFiles(files))
        return false

        files.forEach( imageFile => {
        const {filename : image} = imageFile;
        const [name, ext] = image.split('.');
        const fileName = name + Math.floor(Date.now() / 1000) + '.jpg';

        Sharp(imageFile.path)
        .resize(500)
        .jpeg({quality : 70})
        .toFile(
            path.resolve(imageFile.destination, 'resized', fileName),
            (err,info) => {
                try{
                    fs.unlinkSync(imageFile.path);
                }catch(e){
                    
                } 
            }
        );

        UploadedFiles.push(fileName)
    
    });
    
    return UploadedFiles;
}


module.exports = {validateFiles,handleFileUpload}