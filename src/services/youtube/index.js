import { getChannelId, listVideos, getVideoInfo } from "integrations/youtube";
import { channelAdapter, videosIdAdapter, videoInfoAdapter } from "./adapter";

export const getListVideoInfo = async () => {
  try {
    const channelId = await getChannelId("portadosfundos");
    const parsedChannelId = channelAdapter(channelId);

    const videosIds = await listVideos(parsedChannelId);
    const parsedVideosIds = videosIdAdapter(videosIds);

    const videoInfo = parsedVideosIds.map(async videoId => {
      const res = await getVideoInfo(videoId);
      return videoInfoAdapter(res);
    });

    const resolvedVideoInfo = await Promise.all(videoInfo);
    console.log(resolvedVideoInfo);
    return resolvedVideoInfo;
  } catch (error) {
    console.log("Error: It was not possible to get video list", error);
  }
};
