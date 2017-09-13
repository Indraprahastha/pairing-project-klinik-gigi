const express = require('express')
const router = express.Router()
const models = require('../models')

//--------------------------------------------- tampilkan pasien

router.get('/', function(req, res) {
  models.Datapasien.findAll().then(function(Datapasien) {
    res.render('pasien',{datapasien:Datapasien});
    // res.send(Datapasien)
  });
});

//---------------------------------------- input diagnosa pasien
router.get('/inputdiagnosa/:id', (req, res)=>{
  models.Datapasien.findById(req.params.id)
  .then((datapasien) => {
    models.Diagnosa.findAll()
    .then((datadiagnosa) => {
      models.Datadokter.findAll()
      .then((datadokter) => {
        res.render('pasien-inputdiagnosa', {datapasien:datapasien, datadokter:datadokter, datadiagnosa:datadiagnosa})
      })
    })
  })
})

router.post('/inputdiagnosa/:id', (req, res)=>{
  models.Diagnosa.create({
    id_pasien: req.params.id,
    id_dokter: req.body.id_dokter,
    gigi: req.body.gigi,
    gejala: req.body.gejala,
    tindakan: req.body.tindakan,
    resep: req.body.resep
  })
  .then(() => {
    res.redirect('/pasien')
  })
})

//-------------------------------------------- edit data pasien
router.get('/edit/:id', (req, res)=>{
  models.Datapasien.findById(req.params.id)
  .then((datapasien) => {
    res.render('pasien-edit', {datapasien:datapasien})
  })
})

router.post('/edit/:id', (req,res) => {
  models.Datapasien.update({
    nama: req.body.nama,
    alamat: req.body.alamat,
    pekerjaan: req.body.pekerjaan,
    tlp: req.body.tlp,
    email: req.body.email
  },{
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/pasien')
  })
})
//-------------------------------------------- view data pasien
router.get('/profil/:id', (req, res)=>{
  models.Datapasien.findById(req.params.id)
  .then((datapasien) => {
    res.render('pasien-profil', {datapasien:datapasien})
  })
})

//-------------------------------------------- ????????????????
router.get('/add', function(req, res) {
  res.render('pasien-add',{err: false});
})
router.post('/add',function (req, res) {
  models.Datapasien.create({
    nama : req.body.nama,
    alamat : req.body.alamat,
    pekerjaan : req.body.pekerjaan,
    tlp : req.body.tlp,
    email : req.body.email
  })
  .then(() => {
    res.redirect('/pasien')
  })
})

//-------------------------------------------- ????????????????



module.exports = router
