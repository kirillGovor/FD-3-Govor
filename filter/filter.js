var filter = React.createClass({

  displayName: 'filter',


  propTypes: {
    
    words: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        
      }),
    ),

  },

  sort:function(){
this.setState({text:this.state.code})
console.log(text);
  },





  render: function () {
    var catalogCode = this.props.words.map(v =>
      React.DOM.p({ className: 'text', key: v.code, }, v.text),
    );

    catalogCode2={catalogCode,sorted:this.props.sorted='false',contain:this.props.contain = '',}
  //  this.state.words={catalogCode}
   // console.log(catalogCode[0].props.children);
    return React.DOM.div(null,
      React.DOM.input({
        type: 'checkbox', name: 'check', className: 'Check',onClick:this.sort,//defaultChecked:'false'
      }),
      React.DOM.input({
        type: 'text', name: 'text', className: 'text', 
      }),
      React.DOM.div({ className: 'divText', }, catalogCode),
      console.log(catalogCode2),
      
    );




  },

});