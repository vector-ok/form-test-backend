const userModel = require('./models')

exports.createUser = (req, res) => {
    console.log('data received ', 'req.body');
    const userModel = new UserModel({
        username: req.body.username,
        password: req.body.password
    })
    userModel.save()
    .then(() => {
        res.status(201).json({
            message: 'Post successful' 
        })
    }).catch((error) => {
        res.status(500).json{{
            message: 'Oops! something went wrong!'
        }}
    })
}