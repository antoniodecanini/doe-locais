const {body} = require('express-validator');
const {User} = require('../Model')


Validation = [
        body('email').custom( async (value) => {
            user = await User.findOne({ where: { email : value } })

            if(user === null)
                throw new Error('Invalid Email or Password');
        }),
        body('password').not().isEmpty().trim().escape().withMessage('Senha Invalida'),
    ];

module.exports = Validation