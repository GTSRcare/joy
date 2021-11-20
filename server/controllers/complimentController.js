const db = require('../models/dbModel.js');

const complimentController = {};

complimentController.getCompliments = async (req, res, next) => {
  let { tag, user } = req.query;
  if (res.locals.user_id) user = res.locals.user_id;
  if (!user) {
    //some error?
  }
  if (!tag) {
    const queryString = `
    SELECT compliments.*, category.title AS tag FROM compliments
    LEFT JOIN category ON compliments.category_id = category.id
    WHERE compliments.users_id = ${user}`;
  } else {
    const queryString = `
    SELECT compliments.*, category.title AS tag FROM compliments
    LEFT JOIN category ON compliments.category_id = category.id
    WHERE compliments.users_id = ${user}
    AND category.title = ${tag}`;
  }
  try {
    const response = db.query(queryString);
    res.locals.compliments = response.rows;
    return next();
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.getCompliments error: ${err}`,
    });
  }
};

complimentController.getTags = async (req, res, next) => {
  const user = res.locals.user_id;
  const queryString = `
  SELECT category.title AS tag FROM category
  OUTER JOIN compliments ON compliments.category = category.id
  WHERE compliments.users_id = ${user}`;
  try {
    const response = db.query(queryString);
    res.locals.tags = response.rows.map((obj) => obj.tag);
    return next();
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.getTags error: ${err}`,
    });
  }
};

complimentController.postCompliment = async (req, res, next) => {
  const { category, sender, message } = req.body;
  const { user } = req.query;
  //TODO look up date obj to do this properly
  const date = new Date();
  try {
    const categoryId = await db.query(
      `SELECT id FROM category WHERE title = ${category}`
    );
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.getTags error: ${err}`,
    });
  }

  const queryString = `
  INSERT INTO compliments (category, message, sender, date, user_id)
  VALUES ($1, $2, $3, $4, $5)`;
  const values = [category, message, sender, date, user];
  try {
    const newCompliment = await db.query(queryString, values);
    res.locals.newCompliment = newCompliment;
    return next;
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.getTags error: ${err}`,
    });
  }
};

complimentsController.updateCompliment = async (req, res, next) => {
  const { user, id } = req.query;
  const { message, sender, category } = req.body;
  const toUpdate = [];
  if (message) toUpdate.push(`message='${message}'`);
  if (sender) toUpdate.push(`sender='${sender}'`);
  if (category) {
    const categoryId = await db.query(
      `SELECT id FROM category WHERE title = ${category}`
    );
    toUpdate.push(`category='${categoryId}'`);
  }

  const queryString = `
  UPDATE compliments
  SET ${toUpdate.join()},
  WHERE compliment.id = ${id}`;

  const updated = db.query(queryString);
  return next();
};

complimentController.deleteCompliment = async (req, res, next) => {
  const { user, id } = req.query;
  const queryString = `
  DELETE FROM compliments 
  WHERE compliment.id =${id} 
  AND users_id = ${user}`;

  const deleted = await db.query(queryString);
  return next();
};
module.exports = complimentController;
