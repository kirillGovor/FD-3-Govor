var ishopFunctionality = React.createClass({

    displayName: 'ishopFunctionality',

    propTypes: {
      delete: React.PropTypes.func.isRequired,
      color: React.PropTypes.func.isRequired,
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
        
      }
  
    },
  
  

    
  render: function () {
    var catalogCode = this.props.ishop.map(v =>
      React.DOM.tbody({ id:v.code, onClick: this.color, key: v.code, className: 'block',  },

        React.DOM.tr({id:"color"+v.code, onClick: this.props.color, className: 'tr', },
          React.DOM.td({ id:v.code, className: 'Count', }, v.code,
          ),
          React.DOM.td({id:v.code,}, React.DOM.img({  id:v.code,className: 'Count', src: v.url, width: 100, height: 100, }), ),
          React.DOM.td({  id:v.code,className: 'Count' }, v.cost),
          React.DOM.td({ id:v.code, className: 'Count' }, v.kolvo, ),
          React.DOM.td({ id:v.code, className: 'Count' },
            React.DOM.input({ id: v.code, className: 'input', value: 'delete', type: 'submit', onClick:this.props.delete }),
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


