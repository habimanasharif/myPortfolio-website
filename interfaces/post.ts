export type Post = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: {
        picture:string;
        name:string;
    };
    excerpt: string;
    ogImage: {
      url: string;
    };
    content: string;
    preview?: boolean;
  };