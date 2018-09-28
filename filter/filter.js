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

sort:function(){
this.generator();
},

inputfilter:function(){
  this.generator();
},

generator:function(){

  this.state.contain=
  this.setState({text:this.state.code})
  //this.setState.words.sort();
  //console.log(this.props.words[1].text);
  //console.log(this.state.words[1].text);
  
  if(this.state.sorted==false){
  for (var a = 0, endI = this.state.words.length - 1; a < endI; a++) { //сортировка пузырьком чисел
    for (var j = 0, endJ = endI - a; j < endJ; j++) {
        if (this.state.words[j].text > this.state.words[j+1].text) {
            var swap = this.state.words[j].text;
            this.state.words[j].text = this.state.words[j+1].text;
            this.state.words[j+1].text = swap;
        }
    }
  }
  this.setState({sorted: true})
  }
  else
    {
      this.state.words=this.props.Copywords
      this.state.sorted=false;
    }
  if (this.state.sontain!=""){

  //  var positiveArr = this.state.words.filter(function(el) {
      
      
    //});


  }


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
        type: 'text', name: 'text', className: 'text', onInput:this.sort, 
      }),
      React.DOM.div({ className: 'divText', }, catalogCode),
      console.log(catalogCode2),
      
    );




  },

});