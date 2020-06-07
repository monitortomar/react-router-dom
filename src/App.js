import React from 'react'
import { Route } from 'react-router-dom'


const HomePage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )

}

const TopicPage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Topic Page</h1>
        </div>
    )

}

const TopicDetailsPage = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Topic Details Page</h1>
        </div>
    )

}

const App = () => (
    <div>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/topic' component={TopicPage}></Route>
        <Route path='/topic/:topicID' component={TopicDetailsPage}></Route>
    </div>
)

export default App   