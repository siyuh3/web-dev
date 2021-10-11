import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
//implement a function called the same as the file that
// renders a list of people as shown here on the right
//The WhoToFollowList function should iterate over the
// who array and use the function WhoToFollowListItem to
// generate the list shown above
const WhoToFollowList = () => {
    return (`
            <ul class="list-group rightblock">
            <li class="list-group-item">
                <b>Who to follow</b>
            </li>
            ${
            
              who.map(w=>{return(WhoToFollowListItem(w));
              }).join('')
             }
            
            <!-- continue here -->
            <!-- continue here -->
            </ul>
`); }
export default WhoToFollowList;