import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class KnodeInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }
  componentDidMount() {    
    this.getInfo(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.getInfo(nextProps);
  }
  async getInfo(props) {
    const { match: {params: {id}} } = props;
    if(!id) {
      throw Error('未提供 id');
    }

    const res = await axios.get(`/api/knode/${id}`);
    this.setState({data: res.data});
  }
  getLinks() { 
    let linkList = (<span></span>);
    if(this.state.data.links) {
      linkList = this.state.data.links.map((item, index)=>(
        <Link to={`/Knode/${item}`} key={`link-${index}`}><li>{item}</li></Link>
      ));
    } 

    return linkList; 
  }
  render() {
    return (
      <div>
        <h1>{this.state.data.title}</h1>
        <ul>{this.getLinks()}</ul>
      </div>
    );
  }
}

export default KnodeInfo