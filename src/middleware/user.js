const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) =>  {
    const token = req.headers["authorization"]
    
    if(!token) {
        res.status(400).json({ msg: "Token inválido ou não fornecido." })
    }

    jwt.verify(token, 'minhasenha', (err, decoded) => {
        if(err){
            res.status(400).json({ msg: "Token inválido ou não fornecido." })
        }

        req.session = decoded
        next()
    })

    
}



// next: permite que passe para o próximo processo




module.exports = authMiddleware;