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
});