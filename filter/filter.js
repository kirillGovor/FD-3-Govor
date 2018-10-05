var filter = React.createClass({

  displayName: 'filter',


  propTypes: {

  

  },



  getInitialState: function () {
    return {
      work: this.props.words,
      sorted: false,
      contain: "",
    }

  },

  sort: function (EO) {
    this.setState({ sorted: EO.target.checked }, this.generator)



  },

  inputfilter: function (EO) {
    this.setState({ contain: EO.target.value, }, this.generator)

  },

  generator: function (EO) {
    /////////////////
    let work = this.props.words.slice(); // делаем плоскую копию всех слов, т.к. возможно будем сортировать массив
    if (this.state.contain)
      work = work.filter(work => work.indexOf(this.state.contain) != -1);
    if (this.state.sorted)
      work.sort();
      
    this.setState({ work: work });
   
    ////////////
  },






  render: function () {
    var catalogCode = this.state.work.map(v =>
      React.DOM.p({ className: 'text',key:v }, v),
    );

    catalogCode2 = { catalogCode, sorted: this.props.sorted = 'false', contain: this.props.contain = '', }
    return React.DOM.div(null,
      React.DOM.input({
        type: 'checkbox', name: 'check', className: 'Check', onClick: this.sort,//defaultChecked:'false'
      }),
      React.DOM.input({
        type: 'text', name: 'text', className: 'text', onInput: this.inputfilter,
      }),
      React.DOM.div({ className: 'divText', }, catalogCode),


    );




  },

});