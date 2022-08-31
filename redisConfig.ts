import  Redis from "ioredis";
import { promisify } from "util";

const redisClient = new Redis();

const saveXMLElement = (xml: XMLDocument) => {
    redisClient.set('getAllXml', xml.toString())
}

const getSavedXMLElement = () => {
    return redisClient.get('getAllXml')
}

export { redisClient, saveXMLElement, getSavedXMLElement }