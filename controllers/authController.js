const jwt = require('jsonwebtoken');
require('dotenv').config()

const createUser = (prismaClient)=>{

    return async (req, res) => {
        console.log(req.body)
        try {
            await prismaClient.user.create({
                data:{
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            });
            res.send({success: "User Created Successfully"});
        } catch (error) {
            res.send(error);
        }
    };
}

const loginUser = (prismaClient)=>{

    return async (req, res) => {
        try {
            // check is the user with th given email exists
            let user = await prismaClient.user.findUnique({
                where:{
                    email: req.body.email
                }
            })

            if(user){
                // compare the password in the body with the one saved in the DB
                if(user.password === req.body.password){
                    // Log them in....and provide them an access token
                    let payload = {
                        userId: user.id,
                        email: user.email
                    }

                    let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'})

                    res.send({success: "login successful", token})
                }else{
                    res.send({error: "invalid password, please try again!"})
                }

            }else{
                res.send({error: "user doesn't exist"})
            }

        } catch (error) {
            res.send(error);
        }
    };
}

module.exports = {
    loginUser,
    createUser
}