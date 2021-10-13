import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import HomeComponent from "./HomeComponent.js";


(function ($) {
    $('#wd-home').append(`
        <div class="container">
            <div class="row mt-2">
                <div class="col-2 col-lg-1 col-md-2 col-xl-2 ">
                    ${NavigationSidebar('home')}
                </div>
                <div class="col-6 col-lg-7 col-md-10 col-sm-10 col-xl-6 centerbox">
                    ${HomeComponent()}
                </div>
                <div class="col-4 d-none d-lg-block col-lg-4 col-xxl-4 col-xl-4">
                    ${ExploreComponent()}
                </div>
            </div>
        </div>
    `);

    // const href = window.location.href;
    // const activeName = href.split('#')[1];
    // $(".list-group").children().each((index,item)=>{
    //     if($(item).attr('href') && $(item).attr('href').indexOf(activeName) != -1){
    //         $(item).addClass('active')
    //     }else{
    //         $(item).removeClass('active')
    //     }
    // })

})($);