import routes from "./routes";
import * as multer from "multer";
import { Request, Response, NextFunction } from "express";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");