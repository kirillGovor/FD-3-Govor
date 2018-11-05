import React from 'react';
import PropTypes from 'prop-types';



class Edit extends React.Component {

    constructor(props) {
        super(props)
       this.state={
           NameValue:props.block,
           PriceValue:props.cost,
           UrlValue:props.url,
           QuantityValue:props.kolvo,
           codeValue:props.code,};
      
      }
      componentWillReceiveProps(props) {

        
        this.setState({ 
            NameValue:props.block,
            PriceValue:props.cost,
            UrlValue:props.url,
            QuantityValue:props.kolvo,
            codeValue:props.code,
            valid:props.valid,
        });
      }
    
    state = {

        tick: 0,
        value: null,
        save: { code: this.props.code, cost: "", url: "", kolvo: "", block: "" },
        validName:false,
        validPrice:false,
        validUrl:false,
        validQuantity:false,

      
        validButton:false,
       NameValue:"",
        PriceValue:"",
        UrlValue:"",
        QuantityValue:"",
    }

    tick = (contain) => {
        this.setState({ tick: 1 })
    }




    cancel = (EO) => {
        var contain = 0;
        EO.stopPropagation()
        this.props.exit(contain);

    }
    valueName = (EO) => {
       
        switch(EO.target.id){

            

            case "name":
            this.setState({NameValue: EO.target.value});
           
            break;

            case "price":
            this.setState({PriceValue: EO.target.value});
      
            break;

            case "url":
            this.setState({UrlValue: EO.target.value});
 
            break;

            case "quantity":
            this.setState({QuantityValue: EO.target.value});
         
            break;
            
        }

        
    }
    save = (EO) => {
     



        if (this.state.validName==false||this.state.validName==undefined&&this.state.validPrice==false||this.state.validPrice==undefined&&
            this.state.validUrl==false||this.state.validUrl==undefined&&this.state.validQuantity==false||this.state.validQuantity==undefined){


            this.props.add(this.state.NameValue,this.state.PriceValue,this.state.UrlValue,this.state.QuantityValue,this.state.codeValue);
        }
        
    }
    inputBlur = () =>{
        if (this.state.NameValue==""){ //валидация name
            this.setState({validName:true})
            this.setState({valid:true})
            
        }
        else{
            this.setState({validName:false})
            
        }
       if (this.state.PriceValue==""){ //валидация price
            this.setState({validPrice:true})
            this.setState({valid:true})
            
        }
        else{
            this.setState({validPrice:false})
          
        }
         if (this.state.UrlValue==""){ //валидация url
            this.setState({validUrl:true})
            this.setState({valid:true})
            
        }
        else{
            this.setState({validUrl:false})
            this.setState({validButton:false})
        }
         if (this.state.QuantityValue==""){ //валидация quantity
            this.setState({validQuantity:true})
            this.setState({valid:true})
           
        }
        else{   
            this.setState({validQuantity:false})
            
        }
        if (this.state.NameValue==""){this.setState({validButton:true})}
        if (this.state.PriceValue==""){this.setState({validButton:true})}
        if (this.state.UrlValue==""){this.setState({validButton:true})}
        if (this.state.QuantityValue==""){this.setState({validButton:true})}
       
    }
    newProduct = () => {
       
    

        
        
        if (this.state.validName==false||this.state.validName==undefined&&this.state.validPrice==false||this.state.validPrice==undefined&&
            this.state.validUrl==false||this.state.validUrl==undefined&&this.state.validQuantity==false||this.state.validQuantity==undefined){

            this.props.NewProductishop(this.state.NameValue,this.state.PriceValue,this.state.UrlValue,this.state.QuantityValue);
        }
    }

    render() {
            var valid =<span style={{color:"red"}} >Заполните поле</span> ;

        if (this.props.tick == 1) {
         
            return (
                

                <div>
                    <div>{"id=" + this.state.codeValue }</div>
                    <div>{"Name"}<input type="text"     value={this.state.NameValue}     onBlur={this.inputBlur} onChange={this.valueName}    onChange={this.valueName} id={"name"}></input>    {(this.state.validName == true&&this.state.valid==true)?valid:null}   </div>
                    <div>{"Price"}<input type="text"    value={this.state.PriceValue}    onBlur={this.inputBlur} onChange={this.valueName}    onChange={this.valueName} id={"price"}></input>   {(this.state.validPrice == true&&this.state.valid==true)?valid:null}   </div>
                    <div>{"url"}<input type="text"      value={this.state.UrlValue}      onBlur={this.inputBlur} onChange={this.valueName}    onChange={this.valueName} id={"url"}></input>     {(this.state.validUrl == true&&this.state.valid==true)?valid:null}    </div>
                    <div>{"Quantity"}<input type="text" value={this.state.QuantityValue} onBlur={this.inputBlur} onChange={this.valueName}   onChange={this.valueName} id={"quantity"}></input> {(this.state.validQuantity == true&&this.state.valid==true)?valid:null}   </div>
                    <div>
                        <input type="submit" value={"save"} className={(this.state.validButton == true)?'valid':null}  onClick={this.save}></input>
                        <input type="submit" value={"cancel"} onClick={this.cancel}></input>
                    </div>
                </div>


            );
        }
        if (this.props.tick == 2) {
            return (
                <div>
                    <div><h1>{"id:" + this.props.ishop.code}</h1></div>
                    <div>{"Name: " + this.props.ishop.block} </div>
                    <div>{"Price" + this.props.ishop.cost}</div>
                </div>
            );

        }
        if (this.props.tick == 3) {

            return (
                <div>
                    <div>{"Name"}<input type="text"     value={this.state.NameValue}     onChange={this.valueName} id={"name"}></input>   {(this.state.validName == true&&this.state.valid==true)?valid:null}  </div>
                    <div>{"Price"}<input type="text"    value={this.state.PriceValue}    onChange={this.valueName} id={"price"}></input>   {(this.state.validPrice == true&&this.state.valid==true)?valid:null}  </div>
                    <div>{"url"}<input type="text"      value={this.state.UrlValue}      onChange={this.valueName} id={"url"}></input>      {(this.state.validUrl == true&&this.state.valid==true)?valid:null} </div>
                    <div>{"Quantity"}<input type="text" value={this.state.QuantityValue} onChange={this.valueName} id={"quantity"}></input> {(this.state.validQuantity == true&&this.state.valid==true)?valid:null} </div>
                    <div>
                        <input type="submit" value={"add"}   onClick={this.newProduct}></input>
                        <input type="submit" value={"cancel"} onClick={this.cancel}></input>
                    </div>
                </div>
            );
        }

        else {

            return (
                <div>


                </div>
            );
        }









    }


}
export default Edit;