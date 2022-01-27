import React, { Component } from 'react'
import Cardlist from './Cardlist'
import Searchbar from './Searchbar'
import { robots } from './robots'
import 'tachyons'
import './App.css'

class App extends Component{

    constructor(){
        super()
        this.state = {
            'robots' : robots,
            'searchfield' : ""
        } 
    }

    onSearchChange = (event) => {
        this.setState({ 'searchfield' : event.target.value })
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className="f1 m3 p3">RoboFriends</h1>
                <Searchbar onSearch={this.onSearchChange}/>
                <Cardlist robots={filteredRobots}/>
            </div>
        )
    }
}

export default App