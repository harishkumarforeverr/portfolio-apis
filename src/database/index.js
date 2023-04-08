const baseUrl="mongodb+srv://harish:Harish@cluster0.izuu3.mongodb.net/portfolio";
 

 
const mongoose = require('mongoose')
const start = async () => {
    return new Promise( async (resolve, reject) => {
    
    try {
      mongoose.Promise = global.Promise;
      await mongoose.connect(baseUrl, {
        useNewUrlParser: true, 
      });
      resolve('Connected to MongoDb');
    } catch (err) {
        reject("Error in Connecting to MongoDb",err);
    }
})
    
  };
  
  

exports.start = start