export type Post = {
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  createdAt: Date;
};
