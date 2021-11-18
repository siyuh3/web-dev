import React, {useEffect, useState} from "react";
let helloUrl = 'https://web-deb-node.herokuapp.com/hello'
if (process.env.DEV === "TRUE"){
    helloUrl = 'http://localhost:4000/api/movies';
}
const HelloApiClient = () => {
    const [hello, setHello] = useState('');
    useEffect(() => {
        fetch(helloUrl)
            .then(response => response.text())
            .then(text => setHello(text));
    }, []);
    return (
        <h1>{hello}</h1>
    );
};
export default HelloApiClient;
