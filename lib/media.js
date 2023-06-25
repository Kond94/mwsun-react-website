import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  let imageUrl = "/images/img.png";
  if (media !== null) {
    const { url } = media;
    imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  }

  return imageUrl;
}
