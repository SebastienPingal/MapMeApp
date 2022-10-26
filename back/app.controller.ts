import { NextFunction, Request, Response } from "express";
require("dotenv").config();
let axios = require("axios");

export class MapController {
	static async askRoute(req: Request, res: Response, next: NextFunction) {
		try {
			const origin = req.params.origin // "93+avenue+felix+faure+nanterre";
			const destination = req.params.destination //"la+defense";
			const key = process.env.MAPS_API_KEY;
			const baseUrl =
				"https://maps.googleapis.com/maps/api/directions/json?";
			const urlRequest = `${baseUrl}origin=${origin}&destination=${destination}&key=${key}`;

			console.log('req.params')
			let config = {
				method: "get",
				url: urlRequest,
				headers: {},
			};

			// await axios(config)
			// 	.then(function (response:Response) {
			// 		console.log(JSON.stringify(response.data));
			// 	})
			// 	.catch(function (error :Error) {
			// 		console.log(error);
			// 	});
		} catch (error) {
			console.log("#".repeat(100));
			next(error);
		}
	}
}