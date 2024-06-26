const Worko = require("./models/worko"); 
const ExpressError = require('./utils/ExpressError');
const { WorkoUserSchema } = require('./schema');

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to create a worko.");
    return res.redirect("/login");
  }
  next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const worko = await Worko.findById(id);
    if (!worko) {
      req.flash("error", "Worko not found.");
      return res.redirect(`/worko/user/${id}`);
    }
    if (!req.user || !req.user._id.equals(worko.owner._id)) {
      req.flash("error", "You are not the owner of this worko.");
      return res.redirect(`/worko/user/${id}`);
    }
    next();
  } catch (err) {
    console.error("Error in isOwner middleware:", err);
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
};

module.exports.validateWorko = (req, res, next) => {
  const { error } = WorkoUserSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
