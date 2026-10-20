import { cache } from "react";
import { sanity } from "./client";
import type { HomePage, SiteSettings } from "./types";

const IMAGE = `{ alt, crop, hotspot, asset->{ _id, metadata { dimensions { width, height } } } }`;

const HOME_PAGE_QUERY = `*[_id == "homePage"][0]{
  ...,
  about { ..., photo ${IMAGE} }
}`;

const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]{
  ...,
  ogImage ${IMAGE}
}`;

async function fetchRequired<T>(query: string, id: string) {
  const document = await sanity.fetch<T | null>(query);
  if (!document) {
    throw new Error(`Sanity document "${id}" is missing. Publish it in the Studio or run the seed import.`);
  }
  return document;
}

export const getHomePage = cache(() => fetchRequired<HomePage>(HOME_PAGE_QUERY, "homePage"));

export const getSiteSettings = cache(() =>
  fetchRequired<SiteSettings>(SITE_SETTINGS_QUERY, "siteSettings")
);
