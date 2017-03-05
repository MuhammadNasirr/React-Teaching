var component = React.createClass({
    propTypes:{
        name: React.PropTypes.string
    },
    render: function() {
        return React.DOM.h1({
            style: {
                color: "red",
                background: "Grey"
            }
        }, "hello world" + this.props.name + this.props.Fname)
    }
})

ReactDOM.render(
    React.createElement(component,{
        name: 123,
        Fname:"zahid "
    }),
    document.getElementById("app")
)