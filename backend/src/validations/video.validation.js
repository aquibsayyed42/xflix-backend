const Joi = require("joi");
const { objectId, link } = require("./custom.validation");

const getVideo = {
	params: Joi.object().keys({
	 videoId:Joi.string().custom(objectId)
	}),
  };

const video = {
	body: Joi.object().keys({
		videoLink: Joi.string().custom(link).required(),
		title: Joi.string().required(),
		genre: Joi.string().required(),
		contentRating: Joi.string().required(),
		releaseDate: Joi.string().required(),
		previewImage: Joi.string().required(),
	}),
};

const videoVotes = {
	body: Joi.object().keys({
		vote: Joi.string().valid("upVote", "downVote").required(),
		change: Joi.string().valid("increase", "decrease").required(),
	}),
};

module.exports = {
	getVideo,
	video,
	videoVotes,
}