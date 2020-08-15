const StartUp=require('../../models/startUp');

module.exports.home=function(req,res){
    StartUp.find({},function(err,data){
        if(err){return console.log('error findng the companies!')}
        console.log(data)
       return  res.json({ startUps: data.map(data1 => data1.toObject({ getters: true })) });
        
    })

}


module.exports.create=function(req,res){
            StartUp.create({name:req.query.name,location:req.query.location},function(err,data){
                if(err){
                   return res.status(200).json({
                    "message":"API not Working properly"
                })
               // return console.log('error creating the startUp!',err)
            }
            console.log(data);
               return res.status(200).json({
                    "message":"API Working properly",
                    data1:data,

                })
                // return console.log('startUP created successfully!');
            
            })
        
}