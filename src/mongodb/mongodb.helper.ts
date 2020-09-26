import mongoose, {connect} from 'mongoose'

class MongoHelper {
    
    static mongoClient (mongoUri:string):Promise<typeof mongoose> {
        try{
            return connect(mongoUri, { useUnifiedTopology: true })
        }catch(e){
            console.log('Could not connect to mongodb!🔥')
            process.exit(1)
        }
    }
}

export default MongoHelper
