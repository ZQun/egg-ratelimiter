export = app => {
    //调用中间件
    if(app.config.ratelimiter.app) app.config.coreMiddleware.unshift('ratelimiter')
};