# egg-ratelimiter

Rate limiter for Egg.js backed by Redis.

- 暂时仅支持typescript
- js版敬请关注，后续将完善在Controller控制器内分别配置访问速率限制

## Install

```bash
$ npm i egg-ratelimiter --save
```

## Configuration

Change `${app_root}/config/plugin.js` to enable ratelimiter plugin:

```typescript
export = {
  ratelimiter: {
    enable: true,
    package: 'egg-ratelimiter',
  }
}
```

Configure ratelimiter information in `${app_root}/config/config.default.ts`:

**Instructions**

```typescript
config.ratelimiter = {
    db: {},
    router: [
      {
        path: '/',//限制路由路径
        max: 5,
        duration: 7000, //ms
        errorMessage: 'Custom request overrun error message'//自定义请求超限错误信息
      },
      {
        path: '/abc',
        max: 5,
        duration: 7000, //ms
        errorMessage: 'Custom request overrun error message'
      }
    ]
}

//如果不在db中初始化redis，则需要启用egg-redis
config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: null,
      db: 0,
    },
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
