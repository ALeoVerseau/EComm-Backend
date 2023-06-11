const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// localhost:3001/api/categories

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category = await Category.findAll({include: [{ model: Product}]});
    res.status(200).json(category)
  } catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const getOneCategory = await Category.findOne(req.params.id , 
      {include: [{ model: Product}]});
    res.status(200).json(getOneCategory)
  } catch (err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory); 
  } catch (err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id, 
      },
    });
    res.status(200).json(updateTag)
  } catch (err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy ({
      where: {
        id: req.params.id, 
      },
    });
    res.status(200).json(deleteCategory)
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;
