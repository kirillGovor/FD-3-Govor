var ishopFunctionality = React.createClass({

    displayName: 'ishopFunctionality',


    propTypes: {
  
      words: React.PropTypes.arrayOf(
        React.PropTypes.shape({
  
  
  
        }),
      ),
  
    },
  
  
  
    getInitialState: function () {
      return {
        ishop: this.props.catalog,
        delited:"",
      }
  
    },



    delete: function (EO) {
        this.setState({ deleted: EO.target.checked }, this.generator)
    
    
    
      },



      render: function () {
        var catalogCode = this.props.catalog.map(v =>
          React.DOM.tbody({ key: v.code, className: 'block' },
          
            React.DOM.tr({ className: 'tr' },
              React.DOM.td({ className: 'Count', }, v.code,
              
              ),
              React.DOM.td({} , React.DOM.img({ className: 'Count', src: v.url, width: 100, height: 100, }),),
              
              React.DOM.td({ className: 'Count' },  v.cost),
              React.DOM.td({ className: 'Count' }, v.kolvo, ),
              React.DOM.td({ className: 'Count' },
                React.DOM.input({ className: 'input', value: 'delete', type: 'submit',onClick: this.delete }),
              ),
            ),
          )
        );
        return React.DOM.div({ className: 'VotesBlock' },
          React.DOM.div({ className: 'Question' }, this.props.MainText),
          React.DOM.table({ className: 'table' },    React.DOM.tbody({className: 'block' },
          React.DOM.td({ className: 'Count', }, 'Название: '),
          React.DOM.td({ className: 'Count', }, 'Изображение: '),
          React.DOM.td({ className: 'Count', }, 'Цена: '),
          React.DOM.td({ className: 'Count', }, 'Количество: '),
          React.DOM.td({ className: 'Count', }, 'Свойства: '),
        ),catalogCode),
        );
      },
    





});