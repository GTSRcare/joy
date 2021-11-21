const db = require('../models/dbModel.js');

const complimentController = {};

complimentController.getCompliments = async (req, res, next) => {
  let { tag, user } = req.query;
  if (res.locals.user_id) user = res.locals.user_id;
  let queryString;
  if (!user) {
    return next({
      log: 'complimentController.getCompliments error: User id was not provided.',
      status: 400,
      message: { err: 'Failed to fetch compliments. User id not provided.' },
    });
  }
  if (!tag) {
    queryString = `
    SELECT compliments.*, category.title AS tag FROM compliments
    LEFT JOIN category ON compliments.category_id = category.id
    WHERE compliments.users_id = ${user}`;
  } else {
    queryString = `
    SELECT compliments.*, category.title AS tag FROM compliments
    LEFT JOIN category ON compliments.category_id = category.id
    WHERE compliments.users_id = ${user}
    AND category.title = '${tag}'`;
  }
  try {
    const response = await db.query(queryString);
    res.locals.complimentsList = response.rows;
    console.log(res.locals.complimentsList);
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
  const queryString = `SELECT title AS tag FROM category`;
  // `SELECT category.title AS tag FROM category
  // OUTER JOIN compliments ON compliments.category = category.id
  // WHERE compliments.users_id = ${user}`;
  try {
    const response = await db.query(queryString);
    console.log(response);
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
  let categoryId;
  //TODO look up date obj to do this properly
  const date = new Date();
  try {
    categoryId = await db.query(
      `SELECT id FROM category WHERE title = '${category}'`
    );
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.postCompliment error: ${err}`,
    });
  }

  const queryString = `
  INSERT INTO compliments (category_id, message, sender, date, users_id)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *`;
  const values = [categoryId.rows[0].id, message, sender, date, user];
  try {
    const newCompliment = await db.query(queryString, values);
    console.log(newCompliment);
    res.locals.compliment = newCompliment.rows[0];
    console.log(res.locals.compliment);
    return next();
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.getCompliment error: ${err}`,
    });
  }
};

complimentController.updateCompliment = async (req, res, next) => {
  const { user, id } = req.query;
  const { message, sender, category } = req.body;
  const toUpdate = [];
  console.log(category);
  if (message) toUpdate.push(`message='${message}'`);
  if (sender) toUpdate.push(`sender='${sender}'`);
  if (category) {
    try {
      const categoryId = await db.query(
        `SELECT id FROM category WHERE title = '${category}'`
      );
      console.log(categoryId);
      toUpdate.push(`category_id='${categoryId.rows[0].id}'`);
    } catch (err) {
      return next({
        status: 500,
        message: `complimentsController.updateCompliment error: ${err}`,
      });
    }
  }

  const queryString = `
  UPDATE compliments
  SET ${toUpdate.join()}
  WHERE compliments.id = ${id}
  RETURNING *`;
  try {
    const updated = await db.query(queryString);
    res.locals.compliment = updated.rows[0];
    return next();
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.updateCompliment error: ${err}`,
    });
  }
};

complimentController.deleteCompliment = async (req, res, next) => {
  const { user, id } = req.query;
  const queryString = `
  DELETE FROM compliments 
  WHERE compliments.id =${id} 
  AND users_id = ${user}`;

  try {
    const deleted = await db.query(queryString);
  } catch (err) {
    return next({
      status: 500,
      message: `complimentsController.deleteCompliment error: ${err}`,
    });
  }

  return next();
};
module.exports = complimentController;
