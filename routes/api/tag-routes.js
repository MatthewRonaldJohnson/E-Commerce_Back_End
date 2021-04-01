const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.json(tagData)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id);
    res.json(tag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.json(newTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).json(err)
  }
});

router.put('/:id', async ({body, params: {id}}, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(body, { where: { id } })
    res.json(updatedTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.delete('/:id',async ({ params: { id } }, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({ where: { id } })
    res.json(deletedTag)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

module.exports = router;
