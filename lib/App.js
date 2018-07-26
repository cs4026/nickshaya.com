'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PicturesMenu = require('./Menu/PicturesMenu');

var _PicturesMenu2 = _interopRequireDefault(_PicturesMenu);

var _JuneS = require('./media/Sprawl/JuneS2020.JPG');

var _JuneS2 = _interopRequireDefault(_JuneS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./home.css');

var series = ["I am Sick and Tired (or I was)", "Messing with Nostalgia", "Present (1x1)", "Sprawl", "What The Cat Dragged In"];

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.goTo = _this.goTo.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'goTo',
    value: function goTo(index) {
      var location = series[index];
      location = location.split(" ").join("-");
      this.props.history.push('/pictures/' + location);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(
          'div',
          { className: 'left' },
          _react2.default.createElement(
            'div',
            { className: 'menucenter' },
            _react2.default.createElement(_PicturesMenu2.default, { goTo: this.goTo, series: series })
          ),
          _react2.default.createElement(
            'div',
            { className: 'twins' },
            _react2.default.createElement('img', { className: 'img', src: _JuneS2.default, alt: 'hi' })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//<img className="Graphic" src={graphic} alt="graphic"/>