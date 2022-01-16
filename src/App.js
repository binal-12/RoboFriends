import React, { Component } from 'react'
import Cardlist from './Cardlist'
import Searchbar from './Searchbar'
import { robots } from './robots'
import 'tachyons'
import './App.css'

class App extends Component{
    render(){
        return(
            <div className='tc'>
                <h1 className="f1 m3 p3">RoboFriends</h1>
                <Searchbar />
                <Cardlist robots={robots}/>
            </div>
        )
    }
}

export default App