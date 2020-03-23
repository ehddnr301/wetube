import routes from "../routes";
import { Request, Response, NextFunction } from "express";
import Video, { IVideo } from "../models/Video";

export const home = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req: Request, res: Response) => {
  const {
    query: { term: searchingBy }
  } = req;
  let videos: IVideo[] = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req: Request, res: Response) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req: Request, res: Response) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const creator = req.user["id"];
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;
  try {
    console.log(id);
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req: Request, res: Response) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
