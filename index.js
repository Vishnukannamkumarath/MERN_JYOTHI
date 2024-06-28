const express=require('express');
const app=express();
const cors=require('cors');
let p=[{"Product_name":"car","description":"A car is a vehicle used for travelling.","Pname":"BMW"}]
let user=[]
app.use(cors());
app.use(express.json());
app.get('/users',function(req,res){

    res.json(user)

})
// app.get('/car',function(req,res){
    // res.json(p)
// });
app.post('/login',function(req,res){
    console.log(req.body)
    user.push(req.body)

});

app.post('/register',function(req,res){
    console.log(req.body);
    for(let i=0;i<user.length;i++){
        if(user[i].name1==req.body.name1){
            if(user[i].pass==req.body.pass){
                return res.json(user[i])
            }
        }
    }
    return res.json("email not found")
});
app.listen(5001,function(){
    console.log("listening on port 5001");
})
