const router = require('express').Router();

const mainRouter = require('./main.routes');
const categoryRouter = require('./category.routes');
const NotFound = require('./404.routes');

router.use('/', mainRouter);
router.use('/category', categoryRouter);
router.use('*', NotFound);

module.exports = router;
