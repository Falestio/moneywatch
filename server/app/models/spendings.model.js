const mongoose = require('mongoose');

const SpendingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 1
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Spending', SpendingSchema);