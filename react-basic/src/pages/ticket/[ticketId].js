import {useRouter} from 'next/router';
import axios from 'axios';
import { render } from 'react-dom';
import React, { Component } from 'react';
export default class TicketDetail extends Component{
    constructor(){
        super()
        this.state ={
            response: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            this.setState({response: res.data});
            }).catch((err)=>{
            console.log("Err", err);
          });
    }

    render(){
        const {response} = this.state;
        return (
        <div className="clr-00" >{JSON.stringify(response)}</div>
        );
    }
    
}


