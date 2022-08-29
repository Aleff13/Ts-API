import  Redis from "ioredis";
import { promisify } from "util";

const redisClient = new Redis();

export { redisClient }