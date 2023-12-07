const router = require('express').Router();

const mainRouter = require('./main.routes');
const categoryRouter = require('./category.routes');
// const questionRouter = require('./questions.routers');

router.use('/', mainRouter);
router.use('/category', categoryRouter);
// router.use('/category', questionRouter);

module.exports = router;
