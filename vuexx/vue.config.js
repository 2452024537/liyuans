const listData = require('./mock/chuizi.json')
const loginData = require('./mock/loginData.json')
const fs = require('fs')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
      // 列表接口
      app.get('/api/list', (req, res) => {
        res.json({
          list: listData
        })
      })

      // 查询详情接口  querystring 对参数 查询字符串
      app.get('/api/detail', (req, res) => {
        let { id } = req.query
        res.json({
          list: listData.data.skuInfo.filter(item => item.skuId == id)
        })
      })

      // 查询登陆接口 post请求方式
      app.get('/api/login', (req, res) => {
        const { user, pwd } = req.query
        console.log(user, pwd, 'pwd----------1')
        const flag = loginData.some(item => {
          return item.user == user && item.pwd == pwd
        })
        if (flag){
          res.json({
            msg: 'success',
            errorno: 0 
          })
        } else {
          res.json({
            msg: 'fail',
            errorno: -1
          })
        }
      })
      // 注册接口
      app.get('/api/register', (req, res) => {
        const { user, pwd } = req.query
        const userData = loginData
        // 注册的时候要判断json中是否有已经有注册的账号信息，如果有，提醒用户重新输入，如果没有，写入在json中
        const flag = loginData.some(item => {
          return item.user == user
        })
        if (flag) {
          res.json({
            msg: '信息已经存在，请重新注册'
          })
        } else {
          userData.push({
            user: user,
            pwd: pwd
          })
         const isWriteFileFlag = fs.writeFileSync('./mock/loginData.json', JSON.stringify(userData))
         if (!isWriteFileFlag) {
           res.json({
             msg: '注册成功，可以登陆了'
           })
         }
        }
      })
    }
  }
}