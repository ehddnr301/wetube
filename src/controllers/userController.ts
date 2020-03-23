import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import { Request, Response, NextFunction } from "express";

export const githubLogin = passport.authenticate("github");

export const postGithubLogIn = (req: Request, res: Response) => {
  res.redirect(routes.home);
};

export const getJoin = (req: Request, res: Response) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = new User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req: Request, res: Response) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLoginCallback = async (
  _: any,
  __: any,
  profile: UserResponse,
  cb: any
) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
export const logout = (req: Request, res: Response) => {
  req.logout();
  res.redirect(routes.home);
};

export const userDetail = (req: Request, res: Response) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req: Request, res: Response) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req: Request, res: Response) =>
  res.render("changePassword", { pageTitle: "Change Password" });
