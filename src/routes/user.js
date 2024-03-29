"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const user= require("../controllers/user")
const permission= require("../middlewares/permissions")  

router.route("/")
.get(permission.isAdmin,user.list)
.post(permission.isLogin,user.create)


router.route("/:id")
.get(permission.isLogin,user.read)
.put(permission.isLogin,user.update)
.patch(permission.isLogin,user.update)
.delete(permission.isAdmin,user.delete)
/* ------------------------------------------------------- */
module.exports = router