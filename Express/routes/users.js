const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.send("User New Form")
})

router.post('/' , (req, res) => {
    res.send('create User')
})

router.get("/:id", (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
})
router.put("/:id", (req, res) => {
    res.send(`put User With ID ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    res.send(`delete User With ID ${req.params.id}`)
})

// router.get("/new", (req, res) => {
//     res.send("User New Form")
//     })

module.exports = router
