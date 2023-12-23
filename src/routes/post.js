import Page from "../components/Page";
import {getPost} from "../api/requests";

import Post from "../components/Post";

export async function loader({ params }) {
    const post = await getPost(params.postId);
    return { post };
  }

export default function PostRoute() {
    return (<Page>
        <Post ></Post>
    </Page>)
}