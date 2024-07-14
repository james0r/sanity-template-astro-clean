// Document Types
import navigation from "./documents/navigation";
import post from "./documents/post";
import page from "./documents/page";
import contact from "./documents/contact";

const documents = [navigation, post, page, contact];

// Singleton Types
import settings from './singletons/settings'

const singletons = [settings]

// Block Types
import body from "./blocks/body";
import sections from "./blocks/sections"

const blocks = [
  body,
  sections
];

// Object Types
import header from "./objects/global/header";
import footer from "./objects/global/footer";
import seo from "./objects/global/seo";
import social from "./objects/global/social";
import notFound from "./objects/global/notFound";
import imageWithAlt from "./objects/global/imageWithAlt";
import contentArea from './objects/sections/contentArea'
import imageContentSplit from './objects/sections/imageContentSplit'

import internalLink from "./objects/global/internalLink";
import externalLink from "./objects/global/externalLink";

const objects = [
  header,
  footer,
  seo,
  social,
  notFound,
  internalLink,
  externalLink,
  imageWithAlt,
  contentArea,
  imageContentSplit
];

export const schemaTypes = [
  ...documents,
  ...singletons,
  ...blocks,
  ...objects
];
