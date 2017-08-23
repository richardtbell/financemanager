import 'babel-polyfill';
import { JSDOM } from 'jsdom';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
chai.use(dirtyChai);

global.expect = chai.expect;
global.assert = chai.assert;

const dom = new JSDOM('<!doctype html><html><body></body></html>');

const { window } = dom;
const { document: doc } = window;

const win = doc.defaultView;

global.document = doc;
global.window = win;
global.HTMLElement = win.HTMLElement;

Object.keys(window).forEach((key) => {
      if (!(key in global)) {
                global[key] = window[key];
                    }
});
