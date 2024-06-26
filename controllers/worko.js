const Worko = require("../models/worko");

module.exports.index = async (req, res) => {
  try {
    const allWorkos = await Worko.find({});
    res.render("worko/index.ejs", { allWorkos });
  } catch (err) {
    req.flash("error", "Error fetching Workos");
    res.redirect("/worko/user");
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("worko/new.ejs");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  try {
    let worko = await Worko.findById(id);
    if (!worko) {
      req.flash("error", "Worko you requested for does not exist");
      return res.redirect("/worko/user");
    }

    let originalImageUrl = worko.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

    res.render("worko/edit.ejs", { worko, originalImageUrl });
  } catch (err) {
    req.flash("error", "Error fetching Worko");
    res.redirect("/worko/user");
  }
};

module.exports.showWorko = async (req, res) => {
  let { id } = req.params;
  try {
    let worko = await Worko.findById(id).populate("owner");
    if (!worko) {
      req.flash("error", "Worko you requested for does not exist");
      return res.redirect("/worko/user");
    }
    res.render("worko/show.ejs", { worko });
  } catch (err) {
    req.flash("error", "Error fetching Worko");
    res.redirect("/worko/user");
  }
};

module.exports.createWorko = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  let newWorko = new Worko(req.body.worko);
  newWorko.owner = req.user._id;
  newWorko.image = { url, filename };

  try {
    req.flash("success", "New Worko Created!");
    await newWorko.save();
    res.redirect("/worko/user");
  } catch (err) {
    req.flash("error", "Error creating Worko");
    res.redirect("/worko/user");
  }
};

module.exports.updateWorko = async (req, res) => {
  let { id } = req.params;
  try {
    let worko = await Worko.findByIdAndUpdate(id, { ...req.body.worko });

    if (req.file) {
      let url = req.file.path;
      let filename = req.file.filename;
      worko.image = { url, filename };
      await worko.save();
    }

    req.flash("success", "Worko Updated!");
    res.redirect(`/worko/user/${id}`);
  } catch (err) {
    req.flash("error", "Error updating Worko");
    res.redirect("/worko/user");
  }
};

module.exports.destroyWorko = async (req, res) => {
  let { id } = req.params;
  try {
    await Worko.findByIdAndDelete(id);
    req.flash("success", "Worko Deleted");
    res.redirect("/worko/user");
  } catch (err) {
    req.flash("error", "Error deleting Worko");
    res.redirect("/worko/user");
  }
};
