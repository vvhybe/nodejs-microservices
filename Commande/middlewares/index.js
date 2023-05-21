const consoleMiddleware = (req, res, next)=>{
    const ts = Date.now();
    res.on("finish", ()=>{
        const te = Date.now() - ts;
        console.log(`[${req.method}] ${req.originalUrl} (${te}ms)`);
    })
    next();
}

module.exports = consoleMiddleware;