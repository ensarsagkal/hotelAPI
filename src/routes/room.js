"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/rooms:

const room = require('../controllers/room')
const permission= require("../middlewares/permissions")  
// URL: /rooms

router.route('/')
    .get(permission.isLogin, room.list)
    .post(permission.isAdmin,room.create)

router.route('/:id')
    .get(permission.isLogin,room.read)
    .put(permission.isAdmin,room.update)
    .patch(permission.isAdmin,room.update)
    .delete(permission.isAdmin,room.delete)

/* ------------------------------------------------------- */
module.exports = router