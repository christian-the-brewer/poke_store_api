const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
	{
		products: [{
			name: String,
			price: Number,
			quantity: Number,
		}],
		active: Boolean,
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Cart', cartSchema)