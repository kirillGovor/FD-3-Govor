import React from 'react';
import PropTypes from 'prop-types';

class Tovar extends React.Component{

    

    static propTypes = {
      
        
    }

   state = {
        
            catalog: this.props.catalog,
        

    }



    delete = (EO) => {
        
        EO.stopPropagation()
        let contain = this.props.ishop
        this.props.delete(contain);
       
      }





      color =(EO) =>{
        let contain = this.props.ishop;
        this.props.color(contain);
      }

    render () {


        if (this.props.atr == this.props.ishop.code){
        return React.DOM.tbody({ id: this.props.code, onClick: this.color, key: this.props.code, className: 'block', },
            React.DOM.tr({ id: "color" + this.props.code, onClick: this.color,
             className: 'background',        },
                React.DOM.td({ id: this.props.code, className: 'Count', }, this.props.code,
                ),
                React.DOM.td({ id: this.props.code, }, React.DOM.img({ id:this.props.code, className: 'Count', src: this.props.url, width: 100, height: 100, })),
                React.DOM.td({ id: this.props.code, className: 'Count' }, this.props.cost),
                React.DOM.td({ id: this.props.code, className: 'Count' }, this.props.kolvo),
                React.DOM.td({ id: this.props.code, className: 'Count' },
                    React.DOM.input({ id: this.props.code, className: 'input', value: 'delete', type: 'submit', onClick: this.delete }),
                ),
            ),
        )
    }

    else{

        return React.DOM.tbody({ id: this.props.code, onClick: this.color, key: this.props.code, className: 'block', },
        React.DOM.tr({ id: "color" + this.props.code, onClick: this.color,
         className: null,        },
            React.DOM.td({ id: this.props.code, className: 'Count', }, this.props.code,
            ),
            React.DOM.td({ id: this.props.code, }, React.DOM.img({ id:this.props.code, className: 'Count', src: this.props.url, width: 100, height: 100, })),
            React.DOM.td({ id: this.props.code, className: 'Count' }, this.props.cost),
            React.DOM.td({ id: this.props.code, className: 'Count' }, this.props.kolvo),
            React.DOM.td({ id: this.props.code, className: 'Count' },
                React.DOM.input({ id: this.props.code, className: 'input', value: 'delete', type: 'submit', onClick: this.delete }),
            ),
        ),
    )

 }


    }

}
export default Tovar;


