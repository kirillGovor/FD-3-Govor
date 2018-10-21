import React from 'react';
import propTypes from 'prop-types';
import './ishop.css';
import Edit from './edit';
import Tovar from './Tovar';



class Ishop extends React.Component {

 

 static propTypes = {
    ishop:propTypes.arrayOf(
      propTypes.shape({
        code: propTypes.string.isRequired,
        kolvo: propTypes.number.isRequired,
        cost: propTypes.number.isRequired,
        url: propTypes.string.isRequired,
       
      })
    ),
  };

 state =  {
   
      ishop: this.props.catalog,
      delited: "",
      atr:null,
      editContain:null,
  }



  delete = (contain) => {
    let catalog = this.state.ishop.slice();
    catalog=catalog.filter(number => number!= contain);
    this.setState({ ishop: catalog },);
  }


  color =(contain)=>{

    this.setState({atr:contain.code})
    

  }

  edit =(contain)=>{
    this.setState({editContain:contain})
    

  }

  render() {
   
      var catalogCode = this.state.ishop.map(v =>
        <Tovar key={v.code}
        block={v.block}
        code={v.code}
        cost={v.cost}
        url={v.url}
        kolvo={v.kolvo}
        background={v.background}
        color={this.color}
        delete={this.delete}
        edit={this.edit}
        ishop={v} 
        atr={this.state.atr} /> 
      );
/*
      var editContain = this.state.ishop.map(v =>
      <Edit key={v.code}
      block={v.block}
      code={v.code}
      cost={v.cost}
      url={v.url}
      kolvo={v.kolvo}
      background={v.background}
      color={this.color}
      delete={this.delete}
      ishop={v} 
      atr={this.state.atr} /> 
      );
      */  
      return (
        <div className="VotesBlock">
        <div className="Question">
        {this.props.MainText}
        </div>
        <table className="table">
        <tbody className="block">
        <tr className="tr">
        <td className="Count" key={"MainTr"+1}>Название:</td>
        <td className="Count" key={"MainTr"+2}>Изображение:</td>
        <td className="Count" key={"MainTr"+3}>Цена:</td>
        <td className="Count" key={"MainTr"+4}>Количество:</td>
        <td className="Count" key={"MainTr"+5}>Свойства:</td>
        </tr>
        </tbody>
        {catalogCode}
        </table>
       {this.state.editContain}
        </div>
        
        


      ) ; 




  }

}
export default Ishop;