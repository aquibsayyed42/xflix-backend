const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { v4: uuidv4 } = require("uuid");
const { videoService } = require("../services");


const getVideos = (async (req, res) => {

  const videos = await videoService.getAllVideos(req);
  console.log("Videos length - ",videos.length);
  
  if (!videos || videos.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "Videos not found");
  }

  
  res.status(httpStatus.OK).json({videos: videos});
});


const getVideo = (async (req, res) => {
  const video = await videoService.getVideoById(req.params.videoId);

  if (!video) {
    // throw new ApiError(httpStatus.NOT_FOUND, "Video not found");
    res.status(httpStatus.NO_CONTENT).send();
    
  }

  res.status(httpStatus.OK).json(video);
});

const createVideo = (async (req, res) => {
  const newId = uuidv4();
  const data = { id: newId, ...req.body };
  const newVideo = await videoService.createNewVideo(req.body);

  console.log(newVideo);
  res.status(httpStatus.CREATED).json(newVideo);
});


const updateVideoVote = (async (req, res) => {
  const video = await videoService.updateVideoVote(
    req.params.videoId,
    req.body
  );
  console.log("controller change video", video);
  res.status(httpStatus.NO_CONTENT).send();
});


const updateVideoViews = (async (req, res) => {
  const video = await videoService.updateVideoViews(req.params.videoId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getVideos,
  getVideo,
  createVideo,
  updateVideoVote,
  updateVideoViews,
};
