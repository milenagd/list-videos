import queryString from "query-string";
import { makeRequest } from "integrations/helpers/makeRequest";

const YOUTUBE_URL = process.env.YOUTUBE_URL;
const YOUTUBE_TOKEN = process.env.YOUTUBE_TOKEN;

export const getChannelId = async channelName => {
  const params = {
    part: "snippet",
    forUsername: channelName,
    key: YOUTUBE_TOKEN
  };
  const url = `${YOUTUBE_URL}channels?${queryString.stringify(params)}`;
  const response = await makeRequest(url);
  return response;
};

export const listVideos = async channelId => {
  const params = {
    part: "id",
    type: "video",
    order: "date",
    maxResults: 12,
    key: YOUTUBE_TOKEN,
    channelId
  };
  const url = `${YOUTUBE_URL}search?${queryString.stringify(params)}`;
  const response = await makeRequest(url);

  return response;
};

export const getVideoInfo = async videoId => {
  const params = {
    part: "snippet,statistics",
    id: videoId,
    key: YOUTUBE_TOKEN
  };
  const url = `${YOUTUBE_URL}videos?${queryString.stringify(params)}`;
  const response = await makeRequest(url);
  return response;
};
