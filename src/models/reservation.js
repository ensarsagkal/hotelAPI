"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Order Model:

const ReservationSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },

   arrivalDate:{
    type:Date,
    required:true,

   },
   departureDate:{
    type:Date,
    required:true,
    validate: {
        validator: function(date) {
            // departureDate'in arrivalDate'den sonra olduğunu kontrol et
            return date.getTime() > this.arrivalDate.getTime();
        },
        message: 'departureDate must be later than arrivalDate'
    }

   },

    night: {
        type: Number,
        default: 1
    },

    price: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        default: function(){ return this.night * this.price }, // Create
        transform: function(){ return this.night * this.price }, // Update
    }

}, {
    collection: 'reservations',
    timestamps: true
})

// Model:
module.exports = mongoose.model('Reservation', ReservationSchema)