let express = require('express')
let router = express.Router()

router.get('/', function (req,res){
  res.render('index',{pembuka:'Haloo Selamat Datang Di Aplikasi Status Klinik', pilih: 'Silahkan pilih menu diatas'})
})

module.exports = router
