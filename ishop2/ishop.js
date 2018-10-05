var ishop = React.createClass({

  displayName: 'shop',

  getInitialState: function () {
    return {
      ishop: this.props.catalog,
      delited: "",
    }

  },



  delete: function (EO) {
    let contain = this.state.ishop.slice();
    for (i = 0; i <= contain.length - 1; i++) {
      if (contain[i].code == EO.target.id) {
        if (i == contain.length - 1) {
          contain.pop();
        }
        else {
          contain.splice(i, contain.length - i - 1, contain[i + 1]);
        }
      }
    }
    this.setState({ ishop: contain });
  },

  color:function(EO){
    let contain = this.state.ishop.slice();
    for (i = 0; i <= contain.length - 1; i++) {
      if (contain[i].code == EO.target.id) {
      var color = document.getElementById("color"+i);
      color.style.background="orange";
      }
      else{
        var color = document.getElementById( "color"+i );
        color.style.background="white";
      }
    }
    this.setState({ ishop: contain });
  },
//id:"color"+v,
//onClick: this.color,



  render: function () {
    var catalogCode = this.state.ishop.map(v =>
      React.DOM.tbody({ key: v.code, className: 'block',  },

        React.DOM.tr({ className: 'tr' },
          React.DOM.td({ className: 'Count', }, v.code,

          ),
          React.DOM.td({}, React.DOM.img({ className: 'Count', src: v.url, width: 100, height: 100, }), ),

          React.DOM.td({ className: 'Count' }, v.cost),
          React.DOM.td({ className: 'Count' }, v.kolvo, ),
          React.DOM.td({ className: 'Count' },
            React.DOM.input({ id: v.code, className: 'input', value: 'delete', type: 'submit', onClick: this.delete }),
          ),
        ),
      )
    );
    return React.DOM.div({ className: 'VotesBlock' },
      React.DOM.div({ className: 'Question' }, this.props.MainText),
      React.DOM.table({ className: 'table' }, React.DOM.tbody({ className: 'block' },
        React.DOM.td({ className: 'Count', }, 'Название: '),
        React.DOM.td({ className: 'Count', }, 'Изображение: '),
        React.DOM.td({ className: 'Count', }, 'Цена: '),
        React.DOM.td({ className: 'Count', }, 'Количество: '),
        React.DOM.td({ className: 'Count', }, 'Свойства: '),
      ), catalogCode),
    );
  },

});