const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// localhost:3001/api/tags

// find and get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
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
