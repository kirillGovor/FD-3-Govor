var ishopFunctionality = React.createClass({

    displayName: 'ishopFunctionality',


 
  
  

    
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
    
    },




});