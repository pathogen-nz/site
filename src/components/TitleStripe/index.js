import React, { Component, PropTypes } from "react"

export default class TitleStripe extends Component {
    
  render() {
    return (
            <div id="stripe" className={ this.props.narrow ? "bg-thematic narrow" : "bg-thematic" }>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <h1 className="page-title">{ this.props.title }</h1>
                        </div> 
                    </div> 
                </div>
            </div>
        )
  }
}

TitleStripe.propTypes = {
  narrow: PropTypes.bool,
  title: PropTypes.string.isRequired,
}
