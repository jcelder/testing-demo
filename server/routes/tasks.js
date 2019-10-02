const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.route(['/', '/:id'])
  .get(controllers.tasks.get)
  .post(controllers.tasks.post)
  .put(controllers.tasks.put)
  .delete(controllers.tasks.delete);

module.exports = router;
