const router = require('express').Router();
router.get('/', (req, res) => res.send("Tasks list"));
module.exports = router;
