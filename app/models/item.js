//item model from poke api
const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
	{
		image: {
			type: String,
			required: true,
		},
		cost: {
			type: Number,
			required: true,
		},
        name: {
			type: String,
			required: true,
		},
        description: {
			type: String,
			required: true,
		},
        stock: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)
	
module.exports = mongoose.model('Item', itemSchema)
