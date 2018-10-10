var ishop = React.createClass({

  displayName: 'shop',

  getInitialState: function () {
    return {
      ishop: this.props.catalog,
      delited: "",
    }

  },



  delete: function (EO) {
    event.stopPropagation();
    let contain = this.state.ishop.slice();
    contain=contain.filter(function(number) {
      return (number.code !=EO.target.id) ;
    });
    this.setState({ ishop: contain });
  },

  color:function(EO){
    event.stopPropagation();
    let contain = this.state.ishop.slice();
    for (i = 0; i <= contain.length - 1; i++) {
      if (contain[i].code == EO.target.id) {
      var color = document.getElementById("color"+contain[i].code);
      color.style.background="orange";
      }
      else{
        var color = document.getElementById( "color"+contain[i].code );
        color.style.background="white";
      }
    }
    this.setState({ ishop: contain });
  },
//id:"color"+v,
//onClick: this.color,



  render: function () {
    var catalogCode = this.state.ishop.map(v =>
      React.DOM.tbody({ id:v.code, onClick: this.color, key: v.code, className: 'block',  },

        React.DOM.tr({id:"color"+v.code, onClick: this.color, className: 'tr', },
          React.DOM.td({ id:v.code, onClick: this.color, className: 'Count', }, v.code,

          ),
          React.DOM.td({id:v.code, onClick: this.color,}, React.DOM.img({  id:v.code, onClick: this.color, className: 'Count', src: v.url, width: 100, height: 100, }), ),

          React.DOM.td({  id:v.code, onClick: this.color,className: 'Count' }, v.cost),
          React.DOM.td({ id:v.code, onClick: this.color, className: 'Count' }, v.kolvo, ),
          React.DOM.td({ id:v.code, onClick: this.color, className: 'Count' },
            React.DOM.input({ id: v.code, className: 'input', value: 'delete', type: 'submit', onClick:this.delete, }),
          ),
        ),
      )
    );
    

    
    return React.DOM.div({ className: 'VotesBlock' },
        React.DOM.div({ className: 'Question' }, this.props.MainText),
        React.DOM.table({ className: 'table' }, 
        React.DOM.tbody({ className: 'block' },
        React.DOM.tr({ className: 'tr', },
        React.DOM.td({ className: 'Count', key:"MainTr"+1 }, 'Название: '),
        React.DOM.td({ className: 'Count', key:"MainTr"+2}, 'Изображение: '),
        React.DOM.td({ className: 'Count',key:"MainTr"+3 }, 'Цена: '),
        React.DOM.td({ className: 'Count',key:"MainTr"+4 }, 'Количество: '),
        React.DOM.td({ className: 'Count',key:"MainTr"+5 }, 'Свойства: '),
      ),), catalogCode),
      
    );
  },

});