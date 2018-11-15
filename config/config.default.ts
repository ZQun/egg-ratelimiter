export = appInfo => {
    const config: any = exports = {};

    config.proxy = true;

    config.ratelimiter = {
        app: true,
        headers: {
            remaining: 'X-RateLimit-Remaining',
            reset: 'X-RateLimit-Reset',
            total: 'X-RateLimit-Limit'
        },
    }

    return config;
}