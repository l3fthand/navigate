import React, {Component} from 'react';
import Product from './Product';
import './App.css';

class App extends Component{
    constructor(props){
    super(props);
    this.state={
        data:[]
    }
  }

  componentDidMount(){
      fetch(' https://frontend-navigatetravel.ntstage.com/api')
      .then(res=>res.json())
      .then((data)=>{
          this.setState({data})
      })
    
  }
    render(){
        return(
            
        <div className="container">
            <div className="prices">
                <div className="left">
                    <img src={'./logo.png'} alt=""/>
                    <div className="typeContainer">
                        <div className="types" style={{backgroundImage: 'url(' + require('./catamaran.jpg') + ')'}}>
                            <span>Premier</span>
                        </div>
                        <div className="types" style={{backgroundImage: 'url(' + require('./premier.jpeg') + ')'}}>
                            <span>Premier Plus</span>
                        </div>
                        <div className="types"style={{backgroundImage: 'url(' + require('./premierPlus.jpg') + ')'}}>
                        <span>Catamaran</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {
                        this.state.data.map((i)=>{
                            let props = {
                                ...i,
                            }
                            return <Product {...props}/>
                        })
                    }
                </div>
            </div>
        </div>
        )
    }
}

export default App;