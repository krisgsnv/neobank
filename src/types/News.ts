import { type StatusType } from "./Application";

export interface NewsItemType {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source?: {
    id?: string;
    name?: string;
  };
  author?: string;
  publishedAt?: string;
  content?: string;
};

export type NewsItems = NewsItemType[] | null;

export interface NewsType {
  status: StatusType;
  items: NewsItems;
};
