import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import { addThing, addThingAsync } from '../store/thing';

import '../style/style.css'

import Signup from './signup';
import { signup } from '../store/login';

class Dashboard extends Component {

  // componentDidMount() {
  //   superagent
  //     .get('http://localhost:3002/usernames/jane')
  //     // .auth('jane', 'jane')
  //     .then(res => console.log(res));
  // }

  createRandomThing() {
    return { name: 'thing' + Math.floor(Math.random() * 100) };
  }
  render() {
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <h2>Thing count: {this.props.things.length}</h2>
        <button
          onClick={() => this.props.addThing(this.createRandomThing())}>
          Add Random Thing
        </button>
        <br />
        <button
          onClick={() => this.props.addThingAsync(this.createRandomThing())}>
          Add Random Thing Async
        </button>

        {this.props.things.length ?
          
          <ul>
            {this.props.things.map(thing => <li key={thing.id}>{thing.name}</li>)}
          </ul>
          
          :
          
          <h2>No things :(</h2>

          }

          {/* <button onClick={() => <Signup/>}>Signup</button> */}
          <Signup/>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ thingState }) => ({ things: thingState });
const mapDispatchToProps = { addThing, addThingAsync };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);