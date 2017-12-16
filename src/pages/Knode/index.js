import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Knode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }
  async componentDidMount() {
    const res = await axios.get('/api/knode/all');
    this.setState({lists: res.data});
  }
  knodeList() {
    return this.state.lists.map((item, index)=>(
      <Link to={`/Knode/${item._id}`} key={`list-${index}`}><li>{item.title} ({item._id})</li></Link>
    ));
  }
  render() {
    return (
      <div>
        <ul>{this.knodeList()}</ul>
      </div>
    );
  }
}
