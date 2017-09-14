const express = require('express')
const router = express.Router()
const models = require('../models')

//--------------------------------------------- tampilkan dokter

router.get('/', function(req, res) {
  models.Datadokter.findAll().then(function(Datadokter) {
    res.render('dokter',{Datadokter:Datadokter});
  });
});

// //---------------------------------------- input diagnosa pasien
// router.get('/inputdiagnosa/:id', (req, res)=>{
//   models.Datapasien.findById(req.params.id)
//   .then((datapasien) => {
//     models.Diagnosa.findAll()
//     .then((datadiagnosa) => {
//       models.Datadokter.findAll()
//       .then((datadokter) => {
//         res.render('pasien-inputdiagnosa', {datapasien:datapasien, datadokter:datadokter, datadiagnosa:datadiagnosa})
//       })
//     })
//   })
// })
//
// router.post('/inputdiagnosa/:id', (req, res)=>{
//   models.Diagnosa.create({
//     id_pasien: req.params.id,
//     id_dokter: req.body.id_dokter,
//     gigi: req.body.gigi,
//     gejala: req.body.gejala,
//     tindakan: req.body.tindakan,
//     resep: req.body.resep
//   })
//   .then(() => {
//     res.redirect('/pasien')
//   })
// })
//
//-------------------------------------------- edit data dokter
router.get('/edit/:id', (req, res)=>{
  models.Datadokter.findById(req.params.id)
  .then((Datadokter) => {
    res.render('dokter-edit', {Datadokter:Datadokter})
  })
})

router.post('/edit/:id', (req,res) => {
  models.Datadokter.update({
    nama: req.body.nama,
    noizin: req.body.noizin,
    alamat: req.body.alamat,
    nik: req.body.nik,
    email: req.body.email,
    tlp: req.body.tlp
  },{
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/dokter')
  })
})
// //----------------------------------------- view data dokter
// router.get('/profil/:id', (req, res)=>{
//   models.Datapasien.findById(req.params.id)
//   .then((datapasien) => {
//     res.render('pasien-profil', {datapasien:datapasien})
//   })
// })
//
//--------------------------------------------- add data dokter
router.get('/add', function(req, res) {
  res.render('dokter-add',{err: false});
})
router.post('/add',function (req, res) {
  models.Datadokter.create({
    nama: req.body.nama,
    noizin: req.body.noizin,
    alamat: req.body.alamat,
    nik: req.body.nik,
    email: req.body.email,
    tlp: req.body.tlp
  })
  .then(() => {
    res.redirect('/dokter')
  })
})

//----------------------------------------------- delete dokter
router.get('/delete/:id', (req, res) => {
  models.Datadokter.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/dokter')
  })
})


module.exports = router
