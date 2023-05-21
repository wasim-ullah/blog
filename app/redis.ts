import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://usw1-mint-bulldog-33614.upstash.io" as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

export default redis;
