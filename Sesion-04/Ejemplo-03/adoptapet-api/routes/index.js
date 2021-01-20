var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
});

router.use('/usuarios', require('./usuarios'));

module.exports = router;
