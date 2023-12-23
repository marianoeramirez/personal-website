import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { commonConfig } from '../config/commonConfig';


class Post {
    constructor(id, title, content, published, author, reply_link) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.published = published;
        this.author = author;
        this.reply_link = reply_link;
    }
}


TimeAgo.addDefaultLocale(en)
var timeAgo = new TimeAgo('en-US')

export async function getPosts() {
    const url = `https://www.googleapis.com/blogger/v3/blogs/${commonConfig.blogId}/posts?key=${commonConfig.apiKey}&maxResults=20`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            const posts = data.items.map(item => {
                const { id, title, content, published, author, replies } = item;
                const reply_link = replies.totalItems > 0 ? replies.selfLink : null;
                return new Post(id, title, content, timeAgo.format(new Date(published)), author.displayName, reply_link);
            });
            return posts;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getPost(postId) {
    const url = `https://www.googleapis.com/blogger/v3/blogs/${commonConfig.blogId}/posts/${postId}?key=${commonConfig.apiKey}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            const { id, title, content, published, author, replies } = data;
            const reply_link = replies.totalItems > 0 ? replies.selfLink : null;
            return new Post(id, title, content, timeAgo.format(new Date(published)), author.displayName, reply_link);
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
