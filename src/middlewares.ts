import routes from "./routes";
import multer from "multer";
import { Request, Response, NextFunction } from "express";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

export const onlyPublic = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
