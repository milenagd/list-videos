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

export const listVideos = async (channelId, nextPageToken = "", q = "") => {
  const params = {
    part: "id,snippet",
    channelId: channelId,
    maxResults: 12,
    order: "date",
    type: "video",
    key: YOUTUBE_TOKEN,
    pageToken: nextPageToken,
    q: q
  };
  const url = `${YOUTUBE_URL}search?${queryString.stringify(params)}`;
  const response = await makeRequest(url);

  return response;
};

export const getVideoStatistics = async videoId => {
  const params = {
    part: "statistics",
    id: videoId,
    key: YOUTUBE_TOKEN
  };
  const url = `${YOUTUBE_URL}videos?${queryString.stringify(params)}`;
  const response = await makeRequest(url);
  return response;
};
