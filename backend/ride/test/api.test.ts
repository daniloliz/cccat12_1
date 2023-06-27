import axios from "axios";

axios.defaults.validateStatus = function () {
	return true;
};

test("Deve fazer o cálculo do preço de uma corrida durante o dia", async function () {
	const input = {
		segments: [
			{ distance: 10, date: "2021-03-01T10:00:00" }
		]
	};
	const response = await axios.post("http://localhost:3000/calculate_ride", input);
	const output = response.data;
	expect(output.price).toBe(21);
});

test("Se a distância for inválida deve lançar um erro", async function () {
	const input = {
		segments: [
			{ distance: -10, date: "2021-03-01T10:00:00" }
		]
	};
	const response = await axios.post("http://localhost:3000/calculate_ride", input);
	expect(response.status).toBe(422);
	const output = response.data;
	expect(output).toBe("Invalid distance");
});

test("O passageiro se cadastra na plataforma fornecendo seu nome, email e cpf", async function () {
	const input = { 
		name: "Danilo", document: "070.526.139-56", email: "danilo.com"
	};
	const response = await axios.post("http://localhost:3000/passenger", input);
	const output = response.data;
	expect(output.passanger_id).toBe("123")
})

test("O passageiro se cadastra na plataforma fornecendo seu nome, email mas com cpf inválido", async function () {
	const input = { 
		name: "Danilo", document: '223', email: "danilo.com"
	};
	const response = await axios.post("http://localhost:3000/passenger", input);
	expect(response.status).toBe(422);
	const output = response.data;
	expect(output).toBe("Invalid Document")
})
