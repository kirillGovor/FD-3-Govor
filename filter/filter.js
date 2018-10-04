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

  

  getInitialState: function(){
    return{
      words:this.props.words,
      Copywords:this.props.words,
      sorted: false,
      contain:"",
    }

  },

sort:function(EO){
  this.setState({sorted:EO.target.checked,})
  console.log(EO.target.checked);
this.generator();

},

inputfilter:function(EO){
  this.setState({contain:EO.target.value,})
  this.generator();
},

generator:function(EO){

  var work=this.props.words;
  if (this.state.contain!=""){
    contain=this.state.contain;
    work=work.filter(function(step,index){
      if (contain==step.text){
        return (step.text);
      }
    });
  }

  if (this.state.sorted==true){
    words.sort(d,d);
  }
  this.setState({words:work})
  


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
        type: 'text', name: 'text', className: 'text', onInput:this.inputfilter, 
      }),
      React.DOM.div({ className: 'divText', }, catalogCode),
      console.log(catalogCode2),
      
    );




  },

});