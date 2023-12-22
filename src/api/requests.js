import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'


class Post {
    constructor(title, content, published, author, reply_link) {
        this.title = title;
        this.content = content;
        this.published = published;
        this.author = author;
        this.reply_link = reply_link;
    }
}


export async function getPosts() {
    const apiKey = 'AIzaSyATSLdFfEua2XNH5WdaIFfMYM55b1s_rhw';
    const blogId = '3040540087092322309';
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=20`;

    TimeAgo.addDefaultLocale(en)
    var timeAgo = new TimeAgo('en-US')
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            const posts = data.items.map(item => {
                const { title, content, published, author, replies } = item;
                const reply_link = replies.totalItems > 0 ? replies.selfLink : null;
                return new Post(title, content, timeAgo.format(new Date(published)), author.displayName, reply_link);
            });
            return posts;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
