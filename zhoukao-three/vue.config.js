const banner = require('./src/mock/banner.json');
const lianbs = require('./src/mock/lianbs.json');
exports.module = {
    devServer:{
        before(app){
        //轮播
        app.get('/banners',(req,res) => {
            res.send({
                val:banner
            })
        }),
         //列表
         app.get('/lianbss',(req,res) => {
            res.send({
                val:lianbs
            })
        })
        }
    }
}