// @ts-nocheck
import express from "express";
import Ride from "./Ride";
import Passanger from "./Passanger";
const app = express();

app.use(express.json());

app.post("/calculate_ride", function (req, res) {
	try {
		const ride = new Ride();
		for (const segment of req.body.segments) {
			ride.addSegment(segment.distance, new Date(segment.date));
		}
		const price = ride.calculate();
		res.json({ price });
	} catch (e) {
		res.status(422).send(e.message);
	}
});

app.post("/passenger", function (req, res) {
	try {
		const passanger = new Passanger().addPassanger(req.body.name, req.body.document, req.body.email);
		res.json(passanger);
	} catch (e) {
		res.status(422).send(e.message);
	}
})

app.listen(3000);
