const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// localhost:3001/api/tags

// find and get all tags
router.get('/', async (req, res) => {
  try {
    const findTag =  await Tag.findAll({
      include: [{ model: Product }]
    });;
    res.status(200).json(findTag);
  } catch (err){
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

// localhost:3001/api/tag/:id
// finds and gets a single tag through an id
router.get('/:id', async (req, res) => {
  try {
    const findOneTag = await Tag.findOne({
      include: [{ model: Product }]
    });
    res.status(200).json(findOneTag)
  } catch (err){
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

// creates a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag); 
  } catch (err){
    res.status(500).json(err);
  }
});

// updates an existing tag by it's id
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id, 
      },
    });
    res.status(200).json(updateTag)
  } catch (err){
    res.status(500).json(err);
  }
});

// deletes a tag by it's id
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await ProductTag.destroy ({
      where: {
        id: req.params.id, 
      },
    });
    res.status(200).json(deleteTag)
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;
