let denl = require('./mock/denl.json');
const fs = require('fs');
module.exports = {
       devServer:{
              before(app){
                   app.get('/denls',(req,res)=>{
                       const { user,pass } = req.query;
                       console.log(user,pass)
                       let fnn = denl.some( item => {
                           return item.user == user && item.pass == pass
                       })
                       if(fnn){
                          res.json({
                              msg:"success",
                              error:1
                          })
                       }
                       else{
                         res.json({
                             msg:"fail",
                             error:-1
                         })
                       }
                   })
                   app.get('/zuces',(req,res)=>{
                    const { user,pass } = req.query;
                    console.log(user,pass);
                    let fww = denl;
                    let fnn = denl.some( item => {
                        return item.user == user && item.pass == pass
                    })
                    if(fnn){
                       res.json({
                           msg:"请重新注册",
                           error:1
                       })
                    }
                    else{
                      fww.push({
                          user:user,
                          pass:pass
                      })
                      let fnns = fs.writeFileSync('./mock/denl.json',JSON.stringify(fww));
                      if(!fnns){
                          res.json({
                              mag:"注册成功"
                          })
                      }
                    }
                })
              }
            }
}