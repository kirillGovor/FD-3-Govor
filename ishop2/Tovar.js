var Tovar = React.createClass({

    displayName: 'Tovar',

    propTypes: {
        delete: React.PropTypes.func.isRequired,
        color: React.PropTypes.func.isRequired,
        ishop: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.string.isRequired,
                kolvo: React.PropTypes.number.isRequired,
                cost: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,

            })
        )
    },

    getInitialState: function () {
        return {

        }

    },




    render: function () {



        return React.DOM.tbody({ id: this.props.code, onClick: this.color, key: this.props.code, className: 'block', },
            React.DOM.tr({ id: "color" + this.props.code, onClick: this.props.color, className: 'tr', },
                React.DOM.td({ id: this.props.code, className: 'Count', }, this.props.code,
                ),
                React.DOM.td({ id: this.props.code, }, React.DOM.img({ id:this.props.code, className: 'Count', src: v.url, width: 100, height: 100, })),
                React.DOM.td({ id: this.props.code, className: 'Count' }, this.props.cost),
                React.DOM.td({ id: this.props.code, className: 'Count' }, this.props.kolvo),
                React.DOM.td({ id: this.props.code, className: 'Count' },
                    React.DOM.input({ id: this.props.code, className: 'input', value: 'delete', type: 'submit', onClick: this.props.delete }),
                ),
            ),
        )
    },

});


