import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
const connectDB =  async ()=>{
    
    try{
        const conn = await mongoose.connect(process.env.MONGODB_KEY,{
          
            useNewUrlParser: true,
           
        })
        
        console.log(`db connected successfully! `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1)
    }

}

export default connectDB