var ishop = React.createClass({

  displayName: 'shop',

  propTypes: {
    ishop:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.string.isRequired,
        kolvo: React.PropTypes.number.isRequired,
        cost: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
       
      })
    )
  },

  getInitialState: function () {
    return {
      ishop: this.props.catalog,
      delited: "",


      atr:null,


    }

  },



  delete: function (contain) {
    let catalog = this.state.ishop.slice();
    catalog=catalog.filter(number => number!= contain);
    this.setState({ ishop: catalog },);
  },


  color:function(contain){

    this.setState({atr:contain.code})
    

  },


  render: function () {
   
      var catalogCode = this.state.ishop.map(v =>
        React.createElement(Tovar,{key:v.code,
        block:v.block,code:v.code,cost:v.cost,url:v.url,kolvo:v.kolvo,background:v.background,
        color:this.color,
        delete:this.delete,ishop: v,
        
        atr:this.state.atr,
        }),
      
      );

    
    return  React.DOM.div({ className: 'VotesBlock' },
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