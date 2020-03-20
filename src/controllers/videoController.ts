import routes from "../routes";
import { Request, Response, NextFunction } from "express";

import Video from "../models/Video";

export const home = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req: Request, res: Response) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getUpload = (req: Request, res: Response) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req: Request, res: Response) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail("324393"));
};

export const videoDetail = (req: Request, res: Response) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req: Request, res: Response) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req: Request, res: Response) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
