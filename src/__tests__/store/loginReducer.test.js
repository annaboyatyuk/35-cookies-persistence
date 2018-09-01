import React from 'react';
import loginReducer from '../../store/login.js';
import {trueFalse, loginUser} from '../../store/login.js';


describe('login reducers', () => {
  it('state should start as empty array', () => {
    const newState = loginReducer([], 'aaaaa');
    expect(newState).toEqual([]);
  })

  it('should set to true', () => {
    let created = trueFalse(true) ;
    expect(created.payload).toBe(true);
  })



})