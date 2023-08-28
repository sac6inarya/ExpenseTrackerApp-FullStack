const { Expense } = require("../models/index");

exports.fetchAllExpenses = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      console.log("All expenses fetched");
      res.send(result);
    })
    .catch((err) => console.error(err));
};
exports.fetchExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((result) => {
      console.log("Expense fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error();
    });
};
exports.deleteExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((result) => result.destroy())
    .then((result) => {
      console.log("Expense deleted");
      res.json(result);
    })
    .catch((err) => console.error(err));
};
exports.editExpense = (req, res, next) => {
  const id = req.params.id;
  const updatedValues = req.body;
  Expense.findByPk(id)
    .then((result) => {
      result.update(updatedValues);
      console.log("Expense updated");
      res.json(result);
    })
    .catch((err) => console.error(err));
};
