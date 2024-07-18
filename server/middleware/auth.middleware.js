// мидлвара, чтобы при заходе на страницу уже сразу было известно, авторизован пользователь или нет

const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]  // получим вторую часть токена, потому что первая часть: слово "bearer"
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }

        // раскодируем токен
        const decoded = jwt.verify(token, config.get('secretKey'))
        req.user = decoded
        next()

    } catch (e) {
        return res.status(401).json({message: 'Auth error'})
    }
}