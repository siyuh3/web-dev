import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                  <!-- search field and cog -->
                <div class="col-10 mb-2 searchbox">
                    <i class="bi bi-search text-secondary"></i>
                    <input class="form-control" placeholder="Search Twitter">

                </div>
                <div class="col-2 pull-right">
                    <i class="fa fa-cog fa-2x" style="color: #4e9dd0"></i>
                </div>
                       <!-- search field and cog -->
            </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html, ">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html,">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-md-block">
                    <a class="nav-link " href="entertainment.html ">Entertainment</a>
                </li>
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           <div class="overlap1">
                <img class="mt-sm-2"
                     src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                     alt="largeImg" width="100%" height="100%">
                <span class="overlap2"><b>SpaceX's Starship</b></span>
           </div>
           <!-- image with overlaid text -->
           <div class="borderbox mt-sm-2">
                ${PostSummaryList()}
           </div>
            
    `);
}
export default ExploreComponent;
