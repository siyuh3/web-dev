const NavigationSidebar = () => {
    return(`
            
            <!--
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
            
                <a id="" class="list-group-item active" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a class="list-group-item" href="../ExploreScreen/explore.html">
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
            
            
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            -->
            <ul class="list-group">
                <li class="list-group-item" >
                    <i class="fab fa-twitter"></i>
                </li>
                
                <li class="list-group-item active">
                <i class="fas fa-home"></i>
                <a href="../HomeScreen/home.html">
                    
                    <span>Home</span>
                </a>
                </li>
                <li class="list-group-item a" >
                <i class="fa fa-hashtag"></i>
                <a href="../ExploreScreen/explore.html">
             
                    <span>Explore</span>
                </a>
                </li>
                <li class="list-group-item" >
                 <i class="fa fa-bell"></i>
                <a href="#">
                   
                    <span>Notifications</span>
                </a>
                </li>
                <li class="list-group-item">
                <i class="fa fa-envelope"></i>
                <a href="#">
                    
                    <span>Messages</span>
                </a>
                </li>
                <li class="list-group-item">
                <i class="bi bi-bookmark-fill"></i>
                <a  href="#">
                    
                    <span>Bookmarks</span>
                </a>
                </li>
                <li class="list-group-item">
                <i class="bi bi-list-ul"></i>
                <a  href="#">
                    
                    <span>Lists</span>
                </a>
                </li>
                <li class="list-group-item">
                <i class="bi bi-person-fill"></i>
                <a  href="#">
                    
                    <span>Profile</span>
                </a>
                </li>
                <li class="list-group-item">
                <i class="bi bi-three-dots"></i>
                <a  href="#">
                    
                    <span>More</span>
                </a>
                </li>
            
            </ul>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <!--
            <ul class="list-group">
                 <li class="list-group-item"><a class="text-white" href="/">Link 1</a></li>
                 <li class="list-group-item  active"><a class="text-white" href="../HomeScreen/home.html">Link 2</a></li>
                 <li class="list-group-item"><a class="text-white" href="../ExploreScreen/explore.html">Link 3</a></li>
            </ul>
            -->
                
            
    `);}
$(function(){
    var current_page_URL = location.href;
    $( "a" ).each(function() {
        if ($(this).attr("href") !== "#") {
            var target_URL = $(this).prop("href");
            if (target_URL == current_page_URL) {
                $('.list-group a').parents('li, ul').removeClass('active');
                $(this).parent('li').addClass('active');
                return false;
            }
        }
    });
});
export default NavigationSidebar;