let TWEET_API = process.env.PORT ? 'https://web-deb-node.herokuapp.com/api/tweets' : 'http://localhost:4000/api/tweets';
// if (process.env.PORT === "TRUE"){
//     TWEET_API = 'http://localhost:4000/api/tweets';
// }
export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
                dispatch({
                    type: 'fetch-all-tweets',
                    tweets
                })
        );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );


export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));

export const likeTweet = (dispatch, tweet) =>{
    console.log(tweet);
    return fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));}

