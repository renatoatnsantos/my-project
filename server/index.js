const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('port' , process.env.PORT || 3000)

app.listen(app.get('port') , (err)=>{
    if (err) throw err;
    console.log('Server o/')
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));