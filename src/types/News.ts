export type NewsItemType = {
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

export type NewsType = {
  status: "loading" | "success" | "error";
  items: NewsItems;
};
