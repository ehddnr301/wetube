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
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
