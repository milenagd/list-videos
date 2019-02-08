import {
  getChannelId,
  listVideos,
  getVideoStatistics
} from "integrations/youtube";
import {
  channelAdapter,
  searchAdapter,
  videoStatisticsAdapter
} from "./adapter";

export const getChannel = async () => {
  try {
    if (!localStorage.getItem("channelId")) {
      const channelId = await getChannelId("vagastecnologia");
      const parsedChannelId = channelAdapter(channelId);
      localStorage.setItem("channelId", parsedChannelId);
      return parsedChannelId;
    }
    return localStorage.getItem("channelId");
  } catch (error) {}
};

export const searchVideos = async (query = "") => {
  try {
    const channel = await getChannel();
    const nextPageToken = localStorage.getItem("next") || "";
    const resultVideos = await listVideos(channel, nextPageToken, query);
    const parsedResult = searchAdapter(resultVideos);
    localStorage.setItem("next", parsedResult.nextPageToken);
    return parsedResult;
  } catch (error) {}
};

export const getStatistics = async videoId => {
  try {
    const response = await getVideoStatistics(videoId);
    const parsedResponse = videoStatisticsAdapter(response);
    return parsedResponse;
  } catch (error) {}
};
