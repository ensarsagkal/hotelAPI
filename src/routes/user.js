"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const user= require("../controllers/user")
const permission= require("../middlewares/permissions")  

router.route("/")
.get(permission.isLogin,user.list)
.post(permission.isAdmin,user.create)


router.route("/:id")
.get(permission.isLogin,user.read)
.put(permission.isLogin,user.update)
.patch(permission.isLogin,user.update)
.delete(permission.isAdmin,user.delete)
/* ------------------------------------------------------- */
module.exports = router