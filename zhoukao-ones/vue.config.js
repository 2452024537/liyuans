let denl = require('./src/mock/denl.json');
let shou = require('./src/mock/shou.json');
let fs = require('fs');
module.exports = {
       devServer:{
               before(app){
                     app.get('/denl',(req,res) => {
                         let {user,pass} = req.query;
                         let dens = denl.some( item => item.user == user && item.pass == pass);
                         if(dens){
                             res.json({
                                 mas:"success",
                             })
                         }
                         else{
                             res.json({
                                 mas:"error",
                             })
                         }

                     })
                     app.get('/zuce',(req,res) => {
                         let {user,pass} = req.query;
                         let zuce = denl;
                         let zucs = denl.some( item => item.user == user && item.pass == pass);
                         if(zucs){
                            res.json({
                                mass:"请重新注册"
                            })
                         }
                         else{
                            zuce.push({
                                user:user,
                                pass:pass
                            })
                            let den = fs.writeFileSync('./src/mock/denl.json',JSON.stringify(zuce))
                            if(!den){
                               res.json({
                                   mass:"注册成功"
                               })
                            }
                         }

                     })
                     app.get('/shous',(req,res) => {
                         res.send({
                             shous:shou
                         })
                     })
               }
       }
}