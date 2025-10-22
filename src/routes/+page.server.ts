import type { PageServerLoad } from './$types';
import type { BlogPostMetadata } from '$lib/types/blog';

type ListedBlogPost = Omit<BlogPostMetadata, 'description'>; 

export const load: PageServerLoad = async () => {
    const allPostFiles = import.meta.glob('/src/lib/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const posts: ListedBlogPost[] = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = (await resolver()) as {
                metadata: BlogPostMetadata;
            };
            const slug = path.slice('/src/lib/posts/'.length, -'.md'.length);

            return {
                slug,
                title: metadata.title,
                date: metadata.date,
                author: metadata.author,
            };
        })
    );

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        posts,
    };
};