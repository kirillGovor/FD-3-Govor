import React from 'react';
import PropTypes from 'prop-types';



class Edit extends React.Component {

    state = {

        tick: 0,
        value: null,
        save: { code: this.props.code, cost: "", url: "", kolvo: "", block: "" }
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


        let save = this.state.save;
        if (this.props.tick == 3) {
            if (EO.target.id == "name") {
                save.block = EO.target.value;

            }
            if (EO.target.id == "price") {
                save.cost = EO.target.value;

            }
            if (EO.target.id == "url") {
                save.url = EO.target.value;

            }
            if (EO.target.id == "quantity") {
                save.kolvo = EO.target.value;

            }
        }
        else {
            if (EO.target.id == "name") {
                save.block = EO.target.value;
                save.code = this.props.ishop.code;
            }
            if (EO.target.id == "price") {
                save.cost = Number(EO.target.value);
                save.code = this.props.ishop.code;
            }
            if (EO.target.id == "url") {
                save.url = EO.target.value;
                save.code = this.props.ishop.code;
            }
            if (EO.target.id == "quantity") {
                save.kolvo = Number(EO.target.value);
                save.code = this.props.ishop.code;
            }
        }
        this.setState({ save: save });
        console.log(this.state.save)
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
                    <div>{"id=" + this.props.ishop.code}</div>
                    <div>{"Name"}<input type="text" defaultValue={this.props.ishop.block} onChange={this.valueName} id={"name"}></input> </div>
                    <div>{"Price"}<input type="text" defaultValue={this.props.ishop.cost} onChange={this.valueName} id={"price"}></input> </div>
                    <div>{"url"}<input type="text" defaultValue={this.props.ishop.url} onChange={this.valueName} id={"url"}></input> </div>
                    <div>{"Quantity"}<input type="text" defaultValue={this.props.ishop.kolvo} onChange={this.valueName} id={"quantity"}></input> </div>
                    <div>
                        <input type="submit" value={"save"} onClick={this.save}></input>
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