const router = require('express').Router()
const userRoutes = require('./userRoute')
const thoughtRoutes = require('./thoughtRoute')

router.use('/users', userRoutes)


module.exports = router
