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

      edit =(EO) =>{
        let contain = this.props.ishop;
      }

    render () {


        

        return (<tbody id={ this.props.code} onClick={this.color} key ={this.props.code} className="block">
        <tr id={"color"+this.props.code} onClick={this.color} className={(this.props.atr == this.props.ishop.code)?'background':null}>
        <td id={this.props.code} className="Count">{this.props.code}</td>
        <td  id={this.props.code} ><img id={this.props.code} className="Count" src={this.props.url} width={100} height={100}></img></td>
        <td id={this.props.code} className="Count" >{this.props.cost}</td>
        <td id={this.props.code} className="Count">{this.props.kolvo}</td>
        <td id={this.props.code} className="Count">
        <input id={this.props.code} className="input" value="edit" type="submit" onClick={this.edit }></input>
        <input id={this.props.code} className="input" value="delete" type="submit" onClick={this.delete }>
        </input></td>

        </tr>
        </tbody>
        );
        
    
    

    


 


    }

}
export default Tovar;


