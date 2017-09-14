let express = require('express');
let bodyParser = require('body-parser');
//--------------------------------------------------------
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
//--------------------------------------------------------
let index = require ('./routers/index.js')
let pasien = require ('./routers/pasien.js')
let dokter = require ('./routers/dokter.js')
//--------------------------------------------------------
app.use('/', index)
app.use('/pasien', pasien)
app.use('/dokter', dokter)

app.listen(3005, function(){
  console.log('Run... Run... Run...');
})
