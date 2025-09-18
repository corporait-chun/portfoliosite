export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  url: string;
  isLatest?: boolean;
}

export interface BlogData {
  posts: BlogPost[];
  upcomingPosts: string[];
}
