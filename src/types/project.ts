export interface Project {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  technologies: string[];
  link?: string;
  github?: string;
  body: string;
  createdAt: string;
  updatedAt: string;
} 