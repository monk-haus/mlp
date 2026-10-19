import { homePage } from "./homePage";
import { siteSettings } from "./siteSettings";
import { legend } from "./objects/legend";
import { styledHeading } from "./objects/styledHeading";

export const SINGLETON_TYPES = new Set<string>([homePage.name, siteSettings.name]);

export const schemaTypes = [homePage, siteSettings, styledHeading, legend];
