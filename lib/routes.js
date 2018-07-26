'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _Nav = require('./Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _PicturesPage = require('./PicturesPage/PicturesPage');

var _PicturesPage2 = _interopRequireDefault(_PicturesPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _history2.default },
    _react2.default.createElement(
      'div',
      { className: 'app' },
      _react2.default.createElement(_reactRouter.Route, { path: '/', render: function render(props) {
          return _react2.default.createElement(_Nav2.default, props);
        } }),
      _react2.default.createElement(
        'div',
        { className: 'everythingelse' },
        _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', render: function render(props) {
            return _react2.default.createElement(_App2.default, props);
          } }),
        _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/pictures/:name', render: function render(props) {
            return _react2.default.createElement(_PicturesPage2.default, props);
          } })
      )
    )
  );
};

exports.default = Routes;