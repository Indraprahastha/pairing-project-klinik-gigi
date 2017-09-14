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
// router.get('/profil/:id', (req, res)=>{
//   models.Datapasien.findById(req.params.id)
//   .then((datapasien) => {
//     res.render('pasien-profil', {datapasien:datapasien})
//   })
// })

router.get('/profil/:id', function(req, res) {

  // versi bener
  models.Diagnosa.findAll({
    include: [{
      model: models.Datapasien,
      model: models.Datadokter
    }],
    where: {
      id_pasien: `${req.params.id}`
    }
  }).then(function(Datapasien) {
    models.Datapasien.findAll({
      where: {
        id: `${req.params.id}`
      }
    }).then(function(Datapasien_satu){
      res.render('pasien-profil',{Datapasien:Datapasien,Datapasien_satu:Datapasien_satu});
      // res.send(Datapasien)
    })
    // console.log("-----------", Datapasien);
    // res.send(Datapasien)
    // res.render('subject-enrolledstudents',{})

  });


  // models.Datapasien.findAll({
  //   where: {
  //     id: `${req.params.id}`
  //   },
  //   include: [models.Diagnosa]
  // }).then(function(Datapasien) {
  //   console.log("-----------", Datapasien[0].Diagnosas);
  //   // res.render('subject',{dataSubjects:Subject});
  //   res.send(Datapasien)
  //   // res.render('subject-enrolledstudents',{})
  //
  // });
});

//--------------------------------------------- add data pasien
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
router.get('/delete/:id', (req, res) => {
  models.Datapasien.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    res.redirect('/pasien')
  })
})


module.exports = router
