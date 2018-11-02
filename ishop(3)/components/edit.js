import React from 'react';
import PropTypes from 'prop-types';



class Edit extends React.Component {

    constructor(props) {
        super(props)
       this.state={NameValue:props.block};
      
      }
      componentWillReceiveProps() {
        this.setState({ 
            NameValue:this.props.block,
            PriceValue:this.props.cost,
            UrlValue:this.props.url,
            QuantityValue:this.props.kolvo,});
      }
    
    state = {

        tick: 0,
        value: null,
        save: { code: this.props.code, cost: "", url: "", kolvo: "", block: "" },

      value:this.props.ishop,

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
        console.log(this.state.NameValue,this.state.PriceValue,this.state.UrlValue,this.state.QuantityValue)
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
        if (this.props.ishop.code == this.state.save.code) {
            console.log("fdfd")
            this.props.add(this.state.save);
        }
    }

   

    render() {


        if (this.props.tick == 1) {
         
            return (
                

                <div>
                    <div>{"id=" + this.props.ishop.code }</div>
                    <div>{"Name"}<input type="text"     value={this.state.NameValue}      onChange={this.valueName} id={"name"}></input> </div>
                    <div>{"Price"}<input type="text"    value={this.state.PriceValue}    onChange={this.valueName} id={"price"}></input> </div>
                    <div>{"url"}<input type="text"      value={this.state.UrlValue}      onChange={this.valueName} id={"url"}></input> </div>
                    <div>{"Quantity"}<input type="text" value={this.state.QuantityValue} onChange={this.valueName} id={"quantity"}></input> </div>
                    <div>
                        <input type="submit" value={"save"}   onClick={this.save}></input>
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
                    <div>{"Name"}<input type="text" defaultValue={""} onChange={this.valueName} id={"name"}></input> </div>
                    <div>{"Price"}<input type="text" defaultValue={""} onChange={this.valueName} id={"price"}></input> </div>
                    <div>{"url"}<input type="text" defaultValue={""} onChange={this.valueName} id={"url"}></input> </div>
                    <div>{"Quantity"}<input type="text" defaultValue={""} onChange={this.valueName} id={"quantity"}></input> </div>
                    <div>
                        <input type="submit" value={"save"} onClick={this.save}></input>
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