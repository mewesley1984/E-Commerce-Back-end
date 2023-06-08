const router = require("express").Router();
const { Tag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: { all: true } });
    return res.status(200).json(tags);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: { all: true },
    });

    return res.json(tags);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const createdTag = await Tag.create(req.body);

    return res.json(createdTag);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.json(updatedTag);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value

  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(deletedTag);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;
