var filter = React.createClass({

  displayName: 'filter',


  propTypes: {
    catalog: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
      }),
    ),

  },







  render: function () {
    var catalogCode = this.props.catalog.map(v =>
      React.DOM.p({ className: 'text', key: v.code, }, v.text),
    );
   // console.log(catalogCode[0].props.children);
    return React.DOM.div(null,
      React.DOM.input({
        type: 'checkbox', name: 'check', className: 'Check',defaultChecked:'false'
      }),
      React.DOM.input({
        type: 'text', name: 'text', className: 'text',
      }),
      React.DOM.div({ className: 'divText', }, catalogCode),
      
    );




  },

});