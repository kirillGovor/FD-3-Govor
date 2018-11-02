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
      tick:0,
      step:0,
      
      nameValue:"",
      priceValue:"",
      urlValue:"",
      quantityValue:"",
      codeValue:"",
  }



  delete = (contain) => {
    let catalog = this.state.ishop.slice();
    catalog=catalog.filter(number => number!= contain);
    this.setState({ ishop: catalog },);
    this.setState({tick:0})
  }


  color =(contain,contain2)=>{
    this.setState({tick:2})
    this.setState({atr:contain.code})
    this.setState({editContain:contain2})
    
  }

  edit =(contain)=>{
    this.setState({tick:1})
    this.setState({editContain:contain})
    this.setState({nameValue:contain.block})
    this.setState({priceValue:contain.cost})
    this.setState({urlValue:contain.url})
    this.setState({quantityValue:contain.kolvo})
    this.setState({codeValue:contain.code})
    console.log(contain)
  }


  NewProductishop = (Name,price,url,quantity)=>{
    this.state.ishop.push(
      {block:Name, 
       code:Name,
      cost:price,
      url:url,
      kolvo:quantity,
      }
    );
    this.setState({ishop:this.state.ishop})
  }

  
newProduct =()=>{
this.setState({tick:3})
}
exit=(contain)=>{
  this.setState({tick:contain})
}



add=(Name,price,url,quantity,id)=>{
 
  let catalog = this.state.ishop.slice();
  catalog.forEach(function(item, i, arr) {
    if (item.code==id){
      arr[i]={
        block:Name, 
        code:id,
       cost:price,
       url:url,
       kolvo:quantity,
       };
      
    }

    
  });
  this.setState({ishop:catalog});
  console.log(this.state.ishop);

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

     
       var editContain= 
      <Edit 
      NewProductishop={this.NewProductishop}
      color={this.color}
      delete={this.delete}
      exit={this.exit}
      ishop={this.state.editContain} 
      atr={this.state.atr}
      tick={this.state.tick}
      add={this.add}
      block={this.state.nameValue}
      cost={this.state.priceValue}
      url={this.state.urlValue}
      kolvo={this.state.quantityValue}
      code={this.state.codeValue}
      /> 
      ;
      
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
        <div className="Newproduct"><input type="submit" value={"NewProduct"} onClick={this.newProduct}></input> </div>
        <div>{editContain}</div>
      
        </div>
        
        


      ) ; 




  }

}
export default Ishop;