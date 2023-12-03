const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        orderItems: [
            {
                image: { type: String, },
                name: { type: String, required: true },
                price: { type: Number, required: true },
                qty: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                },
            }
        ],
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;