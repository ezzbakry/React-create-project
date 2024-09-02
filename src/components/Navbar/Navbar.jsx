import { Component } from "react";
 
export default class Navbar extends Component{
    constructor(){
        
        
        
        super()
        // this.state={
        //     name:"ezz"
        // }
        // console.log("con called")

    }
    // componentDidMount(){
    //     console.log("cdm called")
    // }
    // componentDidUpdate(){
        
    //     console.log("update")
    // }

    // change=()=>{
    //     this.setState({name:(this.state.name=="ezz")?"ahmed":"ezz"})

    // }
    render(){
        // console.log("render called")
        return(
        <>
        <div>hello Navbar</div>
        {/* <button onClick={this.change}>change</button> */}
        
        </>
        );
         
        
    }
}