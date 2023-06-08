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

router.post("/", (req, res) => {
  // create a new tag
  try {
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  try {
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;
