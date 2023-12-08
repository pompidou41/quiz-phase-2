const router = require('express').Router();

const mainRouter = require('./main.routes');
const categoryRouter = require('./category.routes');

router.use('/', mainRouter);
router.use('/category', categoryRouter);

module.exports = router;
