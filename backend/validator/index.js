exports.userSignuoValidator = (req,res,next) =>{
    req.check('name','Name is required').notEmpty();
    req.check('email', 'Email must between 3 30 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contaon @ and .')
        .isLength({
            min:4,
            max:30
        });
    req.check('password','Password is required and minimum length 6').notEmpty().isLength({min:6});
        const errors = req.validationErrors()
        if(errors){
            const firsterror = errors.map(error => error.msg)[0]
            return res.status(400).json(({
                errors: firsterror
            }))
        }
        next()
}