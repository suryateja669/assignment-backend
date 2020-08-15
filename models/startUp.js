const mongoose=require('mongoose');

const startUpSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        }
    }
)

const StartUp=new mongoose.model('StartUp',startUpSchema);

module.exports=StartUp;