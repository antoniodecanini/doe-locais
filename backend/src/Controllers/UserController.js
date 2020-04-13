const {User} = require('../Model')

module.exports = {
  async create(req, res) {
    User.findOne({ where: { email : req.body.email } })
    .then(async function(hasUser) {
      if (!hasUser) {
        const user = await User.create(req.body); 
        return res.send(user)
      } else {
        console.log("Email já cadastrado!")
      }
    }); 
  },

  async login(req,res) {
    const { email, password } = req.body;

    console.log('loginroute');
  
    User.findOne({ where: { email } })
    .then(function(user) {
      if (!user) {
        return res.status(400).json({ error: "Invalid password" });
      } else if (!user.validPassword(password)) {
        return res.status(400).json({ error: "Invalid password" });
      } else {  
        console.log('ok, logado');
        return res.json({
            id : user.id,
            JWT: user.generateToken()
        });
      }
    });
  }
}