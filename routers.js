const { resolveSoa } = require("dns")
const express = require ("express")
const { saveUsers, getUser, editUsers, findUserById, DeleteUser, AllUsers } = require("./controllers")

const router = express.Router()

router.post("/create-user", saveUsers)
router.get("/get-user", getUser)
router.patch("/edit-user/:id", editUsers)
router.get('/get-info-by-id/:id', findUserById)
router.delete('/delete-user/:id', DeleteUser)
router.get('/users-list', AllUsers)
exports.router = router


