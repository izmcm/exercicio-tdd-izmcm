const api = require('../api');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

// FROM CELSIUS
describe('Testando conversão de C para F', () => {
	var tempFrom = 20;
	var tempTo = 68;
	var from = "C"
	var to = "F";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, () => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

			res.should.have.status(200);
			res.body.should.have.property('resposta').eql(tempTo);
			done();
		});
	});
});

describe('Testando conversão de C para K', () => {
	var tempFrom = 20;
	var tempTo = 293,15;
	var from = "C"
	var to = "K";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, () => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

			res.should.have.status(200);
			res.body.should.have.property('resposta').eql(tempTo);
			done();
		});
	});
});

describe('Testando conversão de C para C', () => {
	var tempFrom = 25;
	var tempTo = 20;
	var from = "C"
	var to = "C";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, () => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

			res.should.have.status(200);
			res.body.should.have.property('resposta').eql(tempTo);
			done();
		});
	});
});

//



