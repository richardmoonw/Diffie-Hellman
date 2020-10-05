import React from 'react';
import * as bigintCryptoUtils from 'bigint-crypto-utils'
import './App.css';
import { Container, Row, Col, InputGroup, FormControl, Button, Jumbotron } from 'react-bootstrap';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      public_alpha: '',
      public_q: '',
      private_x: '',
      public_y: '',
      public_y2: '',
      shared_key: ''
    }

    this.calculateY = this.calculateY.bind(this);
    this.calculateKey = this.calculateKey.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPublicAlpha = this.setPublicAlpha.bind(this);
    this.setPublicQ = this.setPublicQ.bind(this);
    this.setPrivateX = this.setPrivateX.bind(this);
    this.setPublicY = this.setPublicY.bind(this);
  }

  // Function used to set username in the state.
  setUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  // Function used to set alpha in the state.
  setPublicAlpha(event) {
    this.setState({
      public_alpha: event.target.value
    })
  }
  
  // Function used to set Q in the state.
  setPublicQ(event) {
    this.setState({
      public_q: event.target.value
    })
  }

  // Function used to set X in the state.
  setPrivateX(event) {
    this.setState({
      private_x: event.target.value
    })
  }

  // Function used to set Y in the state.
  setPublicY(event) {
    this.setState({
      public_y2: event.target.value
    })
  }
  
  // Function used to calculate public Y given alpha, Q, and X.
  calculateY() {
    // Calculate public Y
    var alpha = parseInt(this.state.public_alpha);
    var q = parseInt(this.state.public_q);
    var x = parseInt(this.state.private_x); 

    // Fast exponentiation
    var y = bigintCryptoUtils.modPow(alpha, x, q)
    y = parseInt(y)

    this.setState({
      public_y: y
    })
  }

  // Function used to calculate the key given Q, X and other's Y.
  calculateKey() {
    // Calculate public Y
    var q = parseInt(this.state.public_q);
    var x = parseInt(this.state.private_x);
    var y = parseInt(this.state.public_y2);
    
    // Fast exponentiation
    var key = bigintCryptoUtils.modPow(y, x, q);
    key = parseInt(key);

    this.setState({
      shared_key: key
    })
  }

  render() {
    return (
      <>
        <Container style={{backgroundColor: "white", marginTop: "1.5rem", marginBottom:"1.5rem", padding: "2rem 1rem 1rem 1rem", borderRadius: "1rem", border: "dotted 0.18rem #6abac4"}}>
          <p style={{fontSize: "2rem"}}>Diffie-Hellman Cryptographic Protocol</p>
          <p style={{fontSize: "1.5rem", color: "#6abac4"}}>Public data<span style={{fontSize: "0.8rem", color: "black", paddingLeft: "1rem"}}><strong>ENTER USERNAME, ALPHA, Q AND OTHER'S Y</strong></span></p>
          
          {/* Username and Alpha inputs */}
          <Row>
            <Col lg="6">
              <label htmlFor="username"><strong>Username</strong></label>
              <InputGroup className="mb-3">
                <FormControl placeholder="Username" id="username"
                              onChange={this.setUsername}/>
              </InputGroup>
            </Col>
            <Col lg="6">
              <label htmlFor="alpha"><strong>Alpha</strong></label>
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter your public alpha" id="alpha"
                              onChange={this.setPublicAlpha}/>
              </InputGroup>
            </Col>
          </Row>

          {/* Q and other's Y inputs */}
          <Row>
            <Col lg="6">
              <label htmlFor="q"><strong>Q</strong></label>
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter value of public q" id="q"
                              onChange={this.setPublicQ}/>
              </InputGroup>
            </Col>
            <Col lg="6">
              <label htmlFor="y"><strong>Other's Y</strong></label>
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter the public Y of the other user" id="y"
                              onChange={this.setPublicY}/>
              </InputGroup>
            </Col>
          </Row>

          {/* X input */}
          <p style={{fontSize: "1.5rem", color: "#6abac4"}}>Private data<span style={{fontSize: "0.8rem", color: "black", paddingLeft: "1rem"}}><strong>ENTER YOUR X</strong></span></p>
          <Row>
            <Col lg="4">
              <label htmlFor="x"><strong>My X</strong></label>
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter your private X" id="x"
                              onChange={this.setPrivateX}/>
              </InputGroup>
            </Col>
          </Row>

          {/* Calculate Y and calculate key buttons */}
          <Row>
            <Col lg="6">
              <Button style={{width:"100%"}} className="mb-3" variant="dark" onClick={this.calculateY}>Calculate Y</Button>
            </Col>
            <Col lg="6">
              <Button style={{width: "100%"}} className="mb-3" variant="danger" onClick={this.calculateKey}>Calculate key</Button>
            </Col>
          </Row>

          {/* Results */}
          <Jumbotron>
            <h1>Results</h1>
            <Row>
              <Col lg="6">
                <p><strong style={{paddingRight: "1rem", fontSize: "1.1rem"}}>Username:</strong>{this.state.username}</p>
              </Col>
              <Col lg="6">
                <p><strong style={{paddingRight: "1rem", fontSize: "1.1rem"}}>Public Alpha:</strong>{this.state.public_alpha}</p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <p><strong style={{paddingRight: "1rem", fontSize: "1.1rem"}}>Public Q:</strong>{this.state.public_q}</p>
              </Col>
              <Col lg="6">
                <p><strong style={{paddingRight: "1rem", fontSize: "1.1rem"}}>Private X:</strong>{this.state.private_x}</p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <p><strong style={{paddingRight: "1rem", fontSize: "1.1rem"}}>Other's public Y:</strong>{this.state.public_y2}</p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <p><strong style={{paddingRight: "1rem", fontSize: "1.1rem"}}>My public Y:</strong>{this.state.public_y}</p>
              </Col>
              <Col lg="6">
                <p><strong style={{paddingRight: "1rem", fontSize: "1.1rem"}}>Shared key:</strong>{this.state.shared_key}</p>
              </Col>
            </Row>
          </Jumbotron>

        </Container>
      </>
    );
  }
}

export default App;
