import React from 'react';
import loginReducer from '../../store/login.js';
import {trueFalse} from '../../store/login.js';


describe('login reducers', () => {
  it('state should start as empty array', () => {
    const newState = loginReducer([], 'aaaaa');
    expect(newState).toEqual([]);
  })

  it('should set to true', () => {
    let created = loginReducer([], trueFalse(true)) ;
    expect(created).toBe(true);
  })

})