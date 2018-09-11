import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// This sets up the adapter to be used by Enzyme for react testing
configure({ adapter: new Adapter() });
// setup jest-fetch-mock
global.fetch = require('jest-fetch-mock')

// mock local storage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  global.localStorage = localStorageMock
