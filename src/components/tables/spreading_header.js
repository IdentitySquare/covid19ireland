import React from 'react'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Styles
import "../main_numbers/map_header.css"

class SpreadingHeader extends React.Component{
  render(){
    const { dateUpdated } = this.props
    return(
      <Row className = "map-header">
        <Col>
          <h3>How COVID-19 Is Spreading</h3>
          <p className ="last-updated">Last Updated: {dateUpdated}</p>
        </Col>
      </Row>
    );
  }
}

export default SpreadingHeader
