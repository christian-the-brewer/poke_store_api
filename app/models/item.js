//item model from poke api
const mongoose = require('./connection')
const { Schema, model } = mongoose
const itemSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		cost: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		pokemonType: {
			type: String,
		},
		stock: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = model('Item', itemSchema)
