// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';
import React from 'react';
import fetch from 'jest-fetch-mock';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.fetch = fetch;
// Fail tests on any warning
//
/* eslint-disable no-console */
console.error = (message) => { throw new Error(message); };
