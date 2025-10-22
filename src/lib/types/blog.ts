export type BlogPostMetadata = {
    title: string;
    date: string;
    author: string;
    slug: string;
    description?: string;

};

export type BlogPost = {
    metadata: BlogPostMetadata;
    content: import('svelte').ComponentType;
};