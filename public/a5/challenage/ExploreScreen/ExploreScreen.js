import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="container">
            <div class="row mt-2">
                <div class="col-2 col-lg-1 col-md-2 col-xl-2 ">
                    ${NavigationSidebar()}
                </div>
                <div class="col-6 col-lg-7 col-md-10 col-sm-10 col-xl-6 centerbox">
                    ${ExploreComponent()}
                </div>
                
                
                <div class="col-4 d-none d-lg-block col-lg-4 col-xxl-4 col-xl-4">
                    ${WhoToFollowList()}
                </div>
            </div>
        </div>
    `);
    const href = window.location.href;
    const activeName = href.split('#')[1];
    $(".list-group").children().each((index,item)=>{
        if($(item).attr('href') && $(item).attr('href').indexOf(activeName) != -1){
            $(item).addClass('active')
        }else{
            $(item).removeClass('active')
        }
    })
})($);
