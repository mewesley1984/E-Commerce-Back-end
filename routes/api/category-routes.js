const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: { all: true }})
    res.status(200).json(categories);
  } catch (err) {
    res.sendStatus(500)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: {all: true}
    })

    res.json(category)
  } catch (error) {
    res.sendStatus(500)
  }
});

router.post('/', async (req, res) => {

  try {
    const newCategory = await Category.create(req.body);
    return res.json(newCategory)
  } catch (error) {
    return res.sendStatus(500);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {

  try {
    const updatedCategory = Category.update
    (req.body, {
      where: {
        id: req.params.id,
      }
    });
    return res.json(updatedCategory);
  } catch (error) {
    return res.sendStatus(500);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {

  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(deleteCategory);
  } catch (error) {
    return res.sendStatus(500);
  }
  // delete a category by its `id` value
});

module.exports = router;
