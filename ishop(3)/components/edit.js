import React from 'react';
import PropTypes from 'prop-types';



class Edit extends React.Component {

    state = {
        
        tick: 0,
    

}

    tick = (EO) => {
        this.setState({tick:1}) 
    }

    save = (EO) => {

        EO.stopPropagation()
        let contain = this.props.ishop
        this.props.delete(contain);

    }


    cancel = (EO) => {
        this.setState({tick:0}) 
        EO.stopPropagation()
        let contain = this.props.ishop
        this.props.delete(contain);

    }
    render() {


        if (this.state.tick == 1) {
            return (


                <div>
                    <div>{"id=" + this.props.code}</div>
                    <div>{"Name"}<input type="text" value={this.props.code}></input> </div>
                    <div>{"Price"}<input type="text" value={this.props.cost}></input> </div>
                    <div>{"url"}<input type="text" value={this.props.url}></input> </div>
                    <div>{"Quantity"}<input type="text" value={this.props.kolvo}></input> </div>
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
                    <div className="newProduct" key={"newProduct"}><input type="submit" value="new product" onClick={this.tick}></input>
                    </div>
                   
                </div>
            );
        }









    }


}
export default Edit;