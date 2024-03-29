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
const upload = require('../middlewares/upload')
router.route('/')
    .get(permission.isLogin, room.list)
    .post(permission.isAdmin,upload.array('images'),room.create)

router.route('/:id')
    .get(permission.isLogin,room.read)
    .put(permission.isAdmin,upload.array('images'),room.update)
    .patch(permission.isAdmin,upload.array('images'),room.update)
    .delete(permission.isAdmin,room.delete)

/* ------------------------------------------------------- */
module.exports = router