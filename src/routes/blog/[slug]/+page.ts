import type { Load } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types/blog';
import { error } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
    const postFiles = import.meta.glob('/src/lib/posts/*.md');
    const match = postFiles[`/src/lib/posts/${params.slug}.md`];
    if (!match) {
        throw error(404, 'Post not found');
    }
    const postModule = await match() as { metadata: BlogPost['metadata'], default: BlogPost['content'] };
    return {
        post: {
            metadata: postModule.metadata,
            content: postModule.default
        } as BlogPost
    };
};