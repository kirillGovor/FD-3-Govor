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

    }

  },



  delete: function (EO) {
   
    EO.stopPropagation();
    EO.nativeEvent.stopImmediatePropagation();
    let contain = this.state.ishop.slice();
    contain=contain.filter(function(number) {
      return (number.code !=EO.target.id) ;
    });
    this.setState({ ishop: contain, },this.color());
  },

  color:function(EO){
    if (EO==undefined){
      let contain = this.state.ishop.slice();
      this.setState({ ishop: contain });
    }
    else{
    let contain = this.state.ishop.slice();
    for (i = 0; i <= contain.length - 1; i++) {
      if (contain[i].code == EO.target.id) {
      var color = document.getElementById("color"+contain[i].code);
      color.style.background="orange";
      }
      else{
        var color = document.getElementById( "color"+contain[i].code );
        color.style.background="white";
      }
    }
    this.setState({ ishop: contain });
  }
  },
//id:"color"+v,
//onClick: this.color,



  render: function () {
  

    
    return React.DOM.div({ className: 'VotesBlock' },
        React.createElement(ishopFunctionality,{MainText:text,catalog:this.props.catalog, color:this.color,delete:this.delete,ishop: this.state.ishop,}),
        React.DOM.div({ className: 'Question' },),
        React.DOM.table({ className: 'table' }, 
    ),
      
    );
  },

});