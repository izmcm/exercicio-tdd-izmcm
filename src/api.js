const express = require('express');
const app = express();

app.get('/converterTemperatura', (req,res) => {
	valor = parseInt(req.query.valor)
	
	res.json({
		resposta: 30,
		status:'ok'
	});
});

app.listen(5000, (err)=>{
    if(err) {
        console.log('Failed localhost:5000');
    } else{
        console.log('Running...')
    }
})

module.exports = app;
