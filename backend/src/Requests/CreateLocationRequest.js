const {body} = require('express-validator');
const {User} = require('../Model')


Validation = [
    body('name').not().isEmpty().trim().escape().withMessage('O Primeiro nome nao pode ser vazio'),
    body('user_id').custom( async (user_id) => {
        user = await User.findOne({ where: { id : user_id } })

        if(user === null)
            throw new Error('Usuario Invalido');
    }).withMessage('Usuario Invalido'),
    body('width').not().isEmpty().isNumeric().withMessage('Largura Invalida'),
    body('height').not().isEmpty().isNumeric().withMessage('Altura Invalida'),
];

module.exports = Validation