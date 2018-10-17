'use strict';

var ishop = React.createClass({

  displayName: 'shop',

  propTypes: {
    ishop: React.PropTypes.arrayOf(React.PropTypes.shape({
      code: React.PropTypes.string.isRequired,
      kolvo: React.PropTypes.number.isRequired,
      cost: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired

    }))
  },

  getInitialState: function getInitialState() {
    return {
      ishop: this.props.catalog,
      delited: "",

      atr: null

    };
  },

  delete: function _delete(contain) {
    var catalog = this.state.ishop.slice();
    catalog = catalog.filter(function (number) {
      return number != contain;
    });
    this.setState({ ishop: catalog });
  },

  color: function color(contain) {

    this.setState({ atr: contain.code });
  },

  render: function render() {
    var _this = this;

    var catalogCode = this.state.ishop.map(function (v) {
      return React.createElement(Tovar, { key: v.code,
        block: v.block, code: v.code, cost: v.cost, url: v.url, kolvo: v.kolvo, background: v.background,
        color: _this.color,
        delete: _this.delete, ishop: v,

        atr: _this.state.atr
      });
    });

    return React.DOM.div({ className: 'VotesBlock' }, React.DOM.div({ className: 'Question' }, this.props.MainText), React.DOM.table({ className: 'table' }, React.DOM.tbody({ className: 'block' }, React.DOM.tr({ className: 'tr' }, React.DOM.td({ className: 'Count', key: "MainTr" + 1 }, 'Название: '), React.DOM.td({ className: 'Count', key: "MainTr" + 2 }, 'Изображение: '), React.DOM.td({ className: 'Count', key: "MainTr" + 3 }, 'Цена: '), React.DOM.td({ className: 'Count', key: "MainTr" + 4 }, 'Количество: '), React.DOM.td({ className: 'Count', key: "MainTr" + 5 }, 'Свойства: '))), catalogCode));
  }

});