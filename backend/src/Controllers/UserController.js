const {User} = require('../Model')
const { body, validationResult } = require('express-validator');


module.exports = {
  async create(req, res) {
    const user = await User.create(req.body); 
    return res.status(201).json({msg : "Usuario criado com sucesso!"});
  },

  async login(req,res) {
    const { email, password } = req.body;
  
    user = await User.findOne({ where: { email } });

    if(!user.validPassword(password))
      return res.status(400).json([{ msg: "Invalid password" }])
    

    return res.json({
      id : user.id,
      JWT: user.generateToken()
    });

  }
}