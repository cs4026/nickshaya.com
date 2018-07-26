'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var a = '35390005.JPG';

var Sprawl = ['35390005.JPG', '35390026.JPG', 'FirstJune025.JPG', 'FirstJune026.JPG', 'FullSizeRender 10.jpg', 'FullSizeRender 35.jpg', 'FullSizeRender 37.jpg', 'FullSizeRender.jpg', 'IMG_0604.JPG', 'IMG_1299.JPG', 'IMG_1604.JPG', 'IMG_3713.JPG', 'IMG_3716.JPG', 'IMG_5390.JPG', 'IMG_5400.JPG', 'IMG_5409.JPG', 'IMG_5467.JPG', 'IMG_5531.JPG', 'IMG_9100 2.JPG', 'JulyIsh2-18-003.JPG', 'JulyIsh2-18-012.JPG', 'JulyIsh2-18-021.JPG', 'JulyIsh2-18-025.JPG', 'JulyIsh2-18-028.JPG', 'JulyIsh2018-011.JPG', 'JulyIsh2018-027.JPG', 'JulyIsh2018-030.JPG', 'JuneS013.JPG', 'JuneS2-0033.JPG', 'JuneS2-007.JPG', 'JuneS2-022.JPG', 'JuneS2-023.JPG', 'JuneS2020.JPG', 'Screen Shot 2018-07-09 at 9.17.58 AM.png', 'Screen Shot 2018-07-13 at 6.36.19 PM.png', 'SpringBW2018-005.jpg', 'SpringBW2018-013.jpg', 'cropped-025.jpg', 'cropped-036.jpg', 'edited-2018013.jpg', 'edited-2018018.jpg', 'edited-2018028.jpg', 'edited-2018032.jpg', 'editedFirstJune027.jpg', 'editedFirstJune032.jpg', 'editedGrad5-012.jpg', 'editedGrad5-013.jpg', 'editedGrad5-016.jpg', 'editedGrad5-023.jpg', 'editedGrad5-032.jpg', 'editedJerseyCity001.jpg', 'editedJuneS2-001.jpg', 'editedJuneS2-0034.jpg', 'editedJuneS2-0037.jpg', 'editedJuneS2-009.jpg', 'editedMWN-Med-1002-3.jpg', 'editedSpringBW2018-036.jpg', 'editedSpringBW2018-037.jpg', 'editedSpringBW2018-040.jpg', 'editedSpringEtc2018-007.jpg', 'editedbirthday2018-2032 copy.jpg', 'editedbirthday2018-2032.jpg', 'editedbirthday2018-2034.jpg', 'editedbirthday2018-2036.jpg', 'editedbirthday2018018.jpg', 'editedbirthday2018021.jpg', 'editedbirthday2018036.jpg', 'editedgrad1024.jpg', 'editedgrad2004.jpg', 'editedgrad2006.jpg', 'editedgrad2010.jpg', 'editedgrad2011.jpg', 'editedgrad2012.jpg', 'editedgrad2019.jpg', 'editedgrad2028.jpg', 'editedgrad2033.jpg', 'editedgrad3002.jpg', 'editedgrad3003.jpg', 'editedgrad3010.jpg', 'editedgrad3035.jpg', 'editedgrad4002.jpg', 'editedgrad4004.jpg', 'editedgrad4005.jpg', 'editedgrad4009.jpg', 'editedgrad4010.jpg', 'editedgrad4028.jpg', 'editedgrad4050.jpg', 'film022.jpg', 'winter17054.jpg', 'winter17056.jpg', 'winter17080.jpg'];

// Sprawl.forEach(image=>{
//   console.log(`../media/Sprawl/${image}`);
//   require( `../media/Sprawl/${image}`)
// })


//import

var PicturesPage = function (_React$Component) {
  _inherits(PicturesPage, _React$Component);

  function PicturesPage(props) {
    _classCallCheck(this, PicturesPage);

    return _possibleConstructorReturn(this, (PicturesPage.__proto__ || Object.getPrototypeOf(PicturesPage)).call(this, props));
  }

  _createClass(PicturesPage, [{
    key: 'render',
    value: function render() {
      return this.props.match.params.name;
    }
  }]);

  return PicturesPage;
}(_react2.default.Component);

exports.default = PicturesPage;