const router = require('express').Router();
let Company = require('../models/company.model');

router.route('/').get((req, res) => {
  Company.find()
    .then(companys => res.json(companys))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const rate = Number(req.body.rate);

  const newCompany = new Company({
    name,
    rate,
  });

  newCompany.save()
  .then(() => res.json('Company added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;