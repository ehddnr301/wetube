import routes from "../routes";
import { Request, Response, NextFunction } from "express";

export const getJoin = (req: Request, res: Response) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req: Request, res: Response) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in``
    res.redirect(routes.home);
  }
};

export const getLogin = (req: Request, res: Response) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = (req: Request, res: Response) => {
  res.redirect(routes.home);
};

export const logout = (req: Request, res: Response) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

export const userDetail = (req: Request, res: Response) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req: Request, res: Response) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req: Request, res: Response) =>
  res.render("changePassword", { pageTitle: "Change Password" });
