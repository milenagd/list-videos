import { get } from "lodash";

export const channelAdapter = payload => {
  const items = get(payload, "items", []);
  if (items.length > 0) {
    const mainItem = items[0];
    const channelId = get(mainItem, "id");
    console.log("chanelId", channelId);
    return channelId;
  }
  return "";
};

export const videosIdAdapter = payload => {
  const items = get(payload, "items", []);
  return items.map(item => item.id.videoId);
};

export const videoInfoAdapter = payload => {
  const items = get(payload, "items");
  const item = items[0];
  const snippet = get(item, "snippet");
  const statistics = get(item, "statistics");
  return {
    id: get(item, "id"),
    title: get(snippet, "title"),
    thumbnails: get(snippet, "thumbnails.default"),
    description: get(snippet, "description"),
    viewCount: get(statistics, "viewCount")
  };
};
