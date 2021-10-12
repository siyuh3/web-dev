import PostList from "../PostList/PostList.js"

const HomeComponent = () => {
    return (`
            <div class="mt-sm-2">
                ${PostList()}
           </div>
    `);
}

export default HomeComponent;