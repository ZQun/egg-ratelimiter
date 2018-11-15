"use strict";
module.exports = app => {
    //调用中间件
    if (app.config.ratelimiter.app)
        app.config.coreMiddleware.unshift('ratelimiter');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9wbHVnaW4vZWdnLXJhdGVsaW1pdGVyL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBQVMsR0FBRyxDQUFDLEVBQUU7SUFDWCxPQUFPO0lBQ1AsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHO1FBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQ25GLENBQUMsQ0FBQyJ9