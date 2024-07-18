// * не смог настроить CORS так, чтобы работала auth в user.js

function cors(req, res, next) {
    // * добавление if решило проблему с CORS
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
        res.header('Access-Control-Allow-Origin', '*');
    }
    res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

    next();   // вызывает след мидлвару
}

module.exports = cors