/* eslint-disable no-unused-expressions */
//URLSearchParams() 构造器创建并返回一个新的URLSearchParams 对象。 开头的'?' 字符会被忽略。
import React, { useState, useEffect } from 'react';


function usingURLSearchParams(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');

    // Pass in a string literal
    var url = new URL('https://example.com?foo=1&bar=2');
    // Retrieve from window.location
    var url2 = new URL(window.location);

    // Retrieve params via url.search, passed into ctor
    var params = new URLSearchParams(url.search);
    var params2 = new URLSearchParams(url2.search);

    // Pass in a sequence
    var params3 = new URLSearchParams([["foo", 1], ["bar", 2]]);

    // Pass in a record
    var params4 = new URLSearchParams({ "foo": 1, "bar": 2 });

    var paramsString = "q=URLUtils.searchParams&topic=api"
    var searchParams = new URLSearchParams(paramsString);

    for (let p of searchParams) {
        console.log(p);
    }

    searchParams.has("topic") === true; // true
    searchParams.get("topic") === "api"; // true
    searchParams.getAll("topic"); // ["api"]
    searchParams.get("foo") === null; // true

    searchParams.append("topic", "webdev");
    searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"

    searchParams.set("topic", "More webdev");
    searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
    
    searchParams.delete("topic");
    searchParams.toString(); // "q=URLUtils.searchParams"


    function handleStatusChange(status) {
        setFruit("apple");
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
                  </button>
        </div>
    )
}

export default usingURLSearchParams
