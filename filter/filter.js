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
  this.setState({sorted:EO.target.checked},this.generator)
  


},

inputfilter:function(EO){
  this.setState({contain:EO.target.value,},this.generator)
 
},

generator:function(EO){

  /*
//фильтр
  var work=this.props.words;


  if (this.state.contain!=""){
    contain=this.state.contain;
    work=work.filter(function(step,index){
      if (contain==step.text){
        return (step.text); //не работает, просто, чтобы ошибку не выводил)
      }
    });
  }


//сортировка

 var woks=[]; // будет сортированный массив
 var k=[];//временная перемен
    for (var i =0;i<work.length;i++){
      woks[i]=work[i].text;
    }

  if (this.state.sorted==true){ 
    woks.sort(function(a,b){
      if(a < b) return -1;
      if(a > b) return 1;
    });

    for (var i =0;i<work.length;i++){
      k[i]=work[i];
      work[i].text=woks[i];
    }
    this.setState({work:{text:woks}}) ;//как правильно закинуть в work.text? Что-то туплю
    this.setState({work:woks})


  }
  else{
    this.setState({work:k})
  }
 
*/



//var woks=;

for (var i =0;i<this.props.words.length;i++){
  woks[i]=this.props.words[i].text;
}
  /////////////////
  let work=woks.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
  if ( this.state.contain )
  work=work.filter( line => line.indexOf(this.state.contain)!=-1 );
  if ( this.state.sorted )
  work.sort();
  this.setState( { work:work } );
////////////
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
      
      
    );




  },

});