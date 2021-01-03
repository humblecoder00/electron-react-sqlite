// import React from 'react'

// export default function App() {
//     const title = "Hello Saturn"
//     const enhancedTitle = title + " There - React App, perfect"

//     const sendNotification = () => {
//         // alert('Hello world!')
//         // ipcRenderer.send('notify', 'This is my custom message!')
//         // window.sendNotification('My custom message')
//         e_notification.sendNotification('My custom message again')
//     }

//     return (
//         <>
//         <h1>{enhancedTitle}</h1>
//         <button onClick={sendNotification}>Send notification</button>
//         </>
//     )
// }

import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import HomePage from './pages/HomePage'
import Home from './pages/Home'

export default () => {
    return (
        <>
            <Switch>
                {/* <Route path="/" component={HomePage} /> */}
                <Route path="/" component={Home} />
            </Switch>
        </>
    )
}