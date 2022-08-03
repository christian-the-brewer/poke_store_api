//item model from poke api
const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
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
        quantity: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)
	
module.exports = mongoose.model('Item', itemSchema)
