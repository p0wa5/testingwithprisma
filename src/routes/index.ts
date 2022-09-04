import type { RequestHandler } from '@sveltejs/kit'
import prisma from '../lib/prisma'

export const posts = await prisma.component.findMany();

export const allPosts:any = posts.map((post) => {
    return {
        text: post.text,
        status: post.done,
    }

    if(!allPosts){
        return{ status: 400 }
    }

    return {
        headers: {'Content-Type': 'application/json'},
        status: 200,
        body: {allPosts}
    }
})

//testing
console.log(allPosts);
