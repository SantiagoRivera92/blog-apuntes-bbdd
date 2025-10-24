import type { Load } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types/blog';
import { error } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
    const postFiles = import.meta.glob('/src/lib/posts/*.md');
    const iterablePostFiles = Object.entries(postFiles);

    // Find current post
    const match = postFiles[`/src/lib/posts/${params.slug}.md`];
    if (!match) {
        throw error(404, 'Post not found');
    }
    const postModule = await match() as { metadata: BlogPost['metadata'], default: BlogPost['content'] };

    // Load all posts for category index
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = (await resolver()) as { metadata: BlogPost['metadata'] };
            const slug = path.slice('/src/lib/posts/'.length, -'.md'.length);
            return {
                slug,
                title: metadata.title,
                date: metadata.date,
                author: metadata.author,
                categories: metadata.categories ?? [],
            };
        })
    );
    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        post: {
            metadata: postModule.metadata,
            content: postModule.default
        } as BlogPost,
        allPosts,
    };
};