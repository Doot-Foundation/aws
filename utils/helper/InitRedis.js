const HOST = process.env.REDIS_REST_HOST;
const PASSWORD = process.env.REDIS_REST_TOKEN;

const { Redis } = require("@upstash/redis");

const redis = new Redis({
  url: HOST,
  token: PASSWORD,
});

module.exports = { redis };
