const express = require('express');
//router
const router = express.Router();




//routes

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'my api'
    })
})




module.exports = router;