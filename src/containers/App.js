import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Component } from 'react';
import './App.css'
import Scroll from '../components/Scroll'
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then (response =>response.json())
        .then(users => this.setState({robots:users}))
        
    }

    randId = () => {
        let robots = this.state.robots;
        this.setState({robots : robots.map(robot => 
           {return {...robot, id : Math.random().toString(36).substring(2, 3)} }
          )})
      }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){

        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().startsWith(this.state.searchfield.toLowerCase())
        })


        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                    <style>
                        @import url('http://fonts.cdnfonts.com/css/sega-logo-font');
                    </style>
                    <h1 className='f1'>
                        RoboFriends
                    </h1>
                    <div>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <button onClick={this.randId}>Random Bots</button>
                    </div>
                    <Scroll>
                        <CardList robots = {filteredRobots}/>
                    </Scroll>
                    
                </div>
            )
        }
    }
    
}
 
export default App;