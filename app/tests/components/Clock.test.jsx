var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    describe('Existance', () => {
        it('should exist', () => {
            expect(Clock).toExist();
        });
    });
    describe('Functionality: formatSeconds()', () => {
        it('should format correctly', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            expect(clock.formatSeconds(615)).toBe('10:15');
        });
        it('should format correctly when seconds < 10, minutes < 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            expect(clock.formatSeconds(61)).toBe('01:01');
        });
    });
    describe('Renderability', ()=>{
        it('should render clock to ouput with correct numbering', () =>{
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds = {62}/>)
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();
            expect(actualText).toBe('01:02');
        });
    });

});