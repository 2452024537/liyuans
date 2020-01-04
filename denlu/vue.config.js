module.exports = {
       devServer:{
            proxy:{
               "/api":{
                target: 'http://localhost:3002',
                changeOrigin: true, //允许跨
                pathRewrite: {
                '^/api': '/'
                }
               }
            }
       }
}