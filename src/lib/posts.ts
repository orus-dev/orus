export type PostPreview = {
  title: string;
  description: string;
  author: string;
  date: string;
  readingTime: number;
  tags: string[];
  image: string;
  url: string;
  category: "news" | "guides" | "journal" | "research";
};
