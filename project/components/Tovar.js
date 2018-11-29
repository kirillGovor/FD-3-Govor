import React from 'react';
import PropTypes from 'prop-types';
import Edit from './edit';
class Tovar extends React.Component{

    

    static propTypes = {
     // tick: propTypes.func,
        
    }

   state = {
        
            catalog: this.props.catalog,
            tick: 0,

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

      edit =(EO) =>{
        EO.stopPropagation()
        let contain =this.props.ishop;
      

      this.props.edit(contain);
      }

    render () {

    

       

        return (<div id={ this.props.block} onClick={this.color} key ={this.props.code} className="block">
        <p id={"color"+this.props.code} onClick={this.color} className={(this.props.atr == this.props.ishop.code)?'background':null}></p>
        <p id={this.props.code} className="Count">{"Продукт: "+this.props.block}</p>
        <p className="imgProduct" id={this.props.code} ><img id={this.props.code} className="imgProduct" src={this.props.url} ></img></p>
        <p id={this.props.code} className="Count" >{"Цена "+this.props.cost}</p>
        <p id={this.props.code} className="Count">{"количество: "+this.props.kolvo}</p>
        <div id={this.props.code} className="buttonsBlock">
        <input id={this.props.code} className="input" value="edit" type="submit" onClick={this.edit }></input>
        <input id={this.props.code} className="input" value="delete" type="submit" onClick={this.delete }>
        </input></div></div>

        )
      }
    
    

    


 


    

}
export default Tovar;


