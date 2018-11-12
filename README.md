# egg-ratelimiter

Rate limiter for Egg.js backed by Redis.

## Install

```bash
$ npm i egg-ratelimiter --save
```

## Configuration

Change `${app_root}/config/plugin.js` to enable ratelimiter plugin:

```js
exports.ratelimiter = {
  enable: true,
  package: 'egg-ratelimiter',
};
```

Configure ratelimiter information in `${app_root}/config/config.default.js`:

**Single Client**

```javascript
config.redis = {
  client: {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    password: 'auth',
    db: 0,
  },
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
