const {body} = require('express-validator');
const {User} = require('../Model')


Validation = [
        body('firstName').not().isEmpty().trim().escape().withMessage('O Primeiro nome nao pode ser vazio'),
        body('lastName').not().isEmpty().trim().escape().withMessage('O Ultimo nome nao pode ser vazio'),
        body('email').custom( async (value) => {
            user = await User.findOne({ where: { email : value } })

            if(user !== null)
                throw new Error('Email already exists');
        }),
        body('email').isEmail().normalizeEmail().withMessage('Email invalido'),
        body('password').not().isEmpty().trim().escape().withMessage('Senha Invalida'),
        body('phone').isMobilePhone().withMessage('Celular Invalido')
    ];

module.exports = Validation