import { get } from "lodash";

export const channelAdapter = payload => {
  const items = get(payload, "items", []);
  if (items.length > 0) {
    const mainItem = items[0];
    const channelId = get(mainItem, "id");
    return channelId;
  }
  return "";
};

export const searchAdapter = payload => {
  const items = get(payload, "items", []);
  const nextPageToken = get(payload, "nextPageToken", "");
  const pageInfo = get(payload, "pageInfo");
  const videos = items.map(item => {
    const snippet = get(item, "snippet");
    const info = {
      id: get(item, "id.videoId"),
      title: get(snippet, "title"),
      description: get(snippet, "description"),
      thumbnails: get(snippet, "thumbnails.default")
    };
    return info;
  });
  return { pageInfo, nextPageToken, videos };
};
export const videoStatisticsAdapter = payload => {
  const items = get(payload, "items");
  const item = items[0];
  const statistics = get(item, "statistics");

  return get(statistics, "viewCount", 0);
};
