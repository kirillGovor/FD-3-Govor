var ishop = React.createClass({

  displayName: 'shop',

  render: function () {

    var catalogCode = this.props.catalog.map(v =>
      React.DOM.tbody({ key: v.code, className: 'block' },
        React.DOM.tr({ className: 'tr' },
          React.DOM.td({ className: 'Count', }, 'Название: ' + v.code,
            React.DOM.img({ className: 'Count', src: v.url, width: 100, height: 100, }),
          ),
          React.DOM.td({ className: 'Count' }, 'Цена:' + v.cost),
          React.DOM.td({ className: 'Count' }, 'Количество: ' + v.kolvo, ),
          React.DOM.td({ className: 'Count' },
            React.DOM.input({ className: 'input', value: 'buy', type: 'submit' }),
          ),
        ),
      )
    );
    return React.DOM.div({ className: 'VotesBlock' },
      React.DOM.div({ className: 'Question' }, this.props.MainText),
      React.DOM.table({ className: 'table' }, catalogCode),
    );
  },

});