"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/reservations:

const reservation = require('../controllers/reservation')
const {isLogin, isAdmin}= require("../middlewares/permissions")
// URL: /orders

router.route('/')
    .get(isAdmin,reservation.list)
    .post(isLogin,reservation.create)

router.route('/:id')
    .get(isLogin,reservation.read)
    .put(isAdmin,reservation.update)
    .patch(isAdmin,reservation.update)
    .delete(isAdmin,reservation.delete)

/* ------------------------------------------------------- */
module.exports = router