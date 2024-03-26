"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Pizza Model:

const RoomSchema = new mongoose.Schema({

    roomNumber: {
        type: BigInt,
        required: true,
        unique: true,
    },


    image: String,

    bedType: {
        type: BigInt,
        required: true,
        enum: [1, 2, 3, 4]
    },

    price: {
        type: Number,
        required: true,
    },

   

}, {
    collection: 'rooms',
    timestamps: true
})

// Model:
module.exports = mongoose.model('Room', RoomSchema)