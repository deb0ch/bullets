
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const mockTasks = [
    {
        "_id" : String("5a7c927160cd5b18bcb0e965"),
        "text" : "Yop yop yop lol lolilol",
        "parent" : null,
        "checked" : false,
        "createdAt" : new Date("2018-02-08T18:09:53.001Z"),
        "__v" : 0
    },
    {
        "_id" : String("5a7ca7d8f80ed51979c89c7d"),
        "text" : "Yololilol",
        "parent" : String("5a7c927160cd5b18bcb0e965"),
        "checked" : false,
        "createdAt" : new Date("2018-02-08T19:41:12.565Z"),
        "__v" : 0
    },
    {
        "_id" : String("5a7ce79a2e950e1ac61479de"),
        "text" : "Blah blah blah is the new Black black black...",
        "parent" : String("5a7c927160cd5b18bcb0e965"),
        "checked" : false,
        "createdAt" : new Date("2018-02-09T00:13:14.297Z"),
        "__v" : 0
    },
    {
        "_id" : String("5a7d6acdb3fefa1bd9a35b75"),
        "text" : "Groar",
        "parent" : String("5a7c927160cd5b18bcb0e965"),
        "checked" : false,
        "createdAt" : new Date("2018-02-09T09:33:01.780Z"),
        "__v" : 0
    },
    {
        "_id" : String("5a7d6b27b3fefa1bd9a35b76"),
        "text" : "Teeeeeeeeeexte !",
        "parent" : String("5a7ce79a2e950e1ac61479de"),
        "checked" : false,
        "createdAt" : new Date("2018-02-09T09:34:31.700Z"),
        "__v" : 0
    },
    {
        "_id" : String("5a7d6b27b3fefa1bd1234567"),
        "text" : "Looooooool !",
        "parent" : null,
        "checked" : true,
        "createdAt" : new Date("2018-02-09T09:34:31.700Z"),
        "__v" : 0
    }
];

ReactDOM.render(<App tasks={mockTasks}/>,
                document.getElementById('root'));

// registerServiceWorker();
