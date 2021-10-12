import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
           <!-- image with overlaid text -->
           <div class="borderbox mt-sm-2">
                ${PostSummaryList()}
           </div>
            
    `);
}
export default ExploreComponent;
