const mongoose = require('./connection')

const cartSchema = new mongoose.Schema(
	{
		products: [{
			name: String,
			cost: Number,
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