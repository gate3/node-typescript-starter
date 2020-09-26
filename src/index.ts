import {config} from 'dotenv'
config();

import MongoHelper from './mongodb/mongodb.helper';

const {MONGO_URI, MONGO_DB_NAME} = process.env;

(async () => {
    if (MONGO_URI != null && MONGO_DB_NAME != null) {
        const mongoClient = await MongoHelper.mongoClient(MONGO_URI);
        if(mongoClient == null) throw new Error('Could not connect to mongoose!🔥')
        console.log('Mongodb connection successful!🇳🇬')
    }
})()
