
import PostItem from "./PostItem";
const PostList = (posts) => {
    return (
        // PostItem(posts)

        <>
            {/* { JSON.stringify(posts) } */}
            {
                posts.map((ele, i) => {
                    return (
                        <PostItem post={ele} key={i} />
                    );
                })
            }
        </>
    );
}
export default PostList;