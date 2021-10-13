const NavigationSidebar = (p) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
            <!-- continue the rest of the list -->
                <a id="" class="list-group-item ${p == 'home' ? 'active' : ''}" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a class="list-group-item ${p == 'explore' ? 'active' : ''}" href="../ExploreScreen/explore.html">
                    <i class="fa fa-hashtag"></i>
                    <span>Explore</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fa fa-bell"></i>
                    <span>Notifications</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="fa fa-envelope"></i>
                    <span>Messages</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="bi bi-bookmark-fill"></i>
                    <span>Bookmarks</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="bi bi-list-ul"></i>
                    <span>Lists</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="bi bi-person-fill"></i>
                    <span>Profile</span>
                </a>
                <a class="list-group-item" href="#">
                    <i class="bi bi-three-dots"></i>
                    <span>More</span>
                </a>
            
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);}

    // $(document).ready(()=>{
    //     const href = window.location.href;
    //     const activeName = href.split('#')[1];
    //     if(href.indexOf('.html#') != -1){
    //         $(".list-group").children().each((index,item)=>{
    //             if($(item).attr('href') && $(item).attr('href').indexOf(activeName) != -1){
    //                 $(item).addClass('active').siblings().removeClass('active')
    //             }else{
    //                 $(item).removeClass('active')
    //             }
    //         })
    //     }else{
    //         console.log($($(".list-group").children()[1]).addClass('active')).siblings().removeClass('active')
    //     }
    // })

export default NavigationSidebar;