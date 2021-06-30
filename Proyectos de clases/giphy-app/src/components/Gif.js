import React,{Component}from 'react';
import PropTypes from 'prop-types';



class Gif extends Component{

    constructor(props){
      super(props);
      this.state={
          gif: ""
      }
    }
    
    apiCall(url,consecuencia){
      fetch(url)
        .then (response => response.json())
        .then (data => consecuencia(data))
        .catch(error => console.log(error))
    
    }
    
    componentDidMount(){
      
      this.gifnuevo()
    
    }
    gifnuevo(){
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=lxzEWIMMUF5hO2cy4BNxZYyki23VIgLC&tag=&rating=g",this.mostrargif)
    }
    mostrargif = (data)=> {
        //console.log(data)
      this.setState(
          {
             gif:data.data.image_url
         }
      )
    }
    
    componentDidUpdate(){
        alert("Otro gif!")
    
    }
    render(){
       
        let contenido;
        if(this.state.gif == ""){
            contenido = <p>Cargando...</p>
        }else{
            contenido= <img src= {this.state.gif}></img>
        }
        return(
            <div>
               {contenido}
               <button onClick={()=> this.gifnuevo()}>RANDOM GIF</button>



            </div>
        )
    }
    
    
    }
    
    export default Gif;