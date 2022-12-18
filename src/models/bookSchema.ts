import * as dynamoose from "dynamoose";
import { v4 as uuidv4 } from 'uuid';

dynamoose.aws.ddb.local();

const booksSchema = new dynamoose.Schema({
id: {
type: String,
hashKey: true,
default: uuidv4(),
},
title: {
type: String,
required: true,
},
author:{
type: String,
required: true,
}
},
{
timestamps: true,
});

const BookScheema = dynamoose.model('Book', booksSchema);

export default BookScheema
