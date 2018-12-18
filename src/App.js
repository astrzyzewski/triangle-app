import React, { Component } from 'react';
import Result from './result/Result';
import './App.css';
import { Form } from 'react-tradeshift-ui';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isValidTriangle: true,
        validatorMessage: '',
        isValidInput: false,
        val_a: 0,
        val_b: 0,
        val_c: 0,
        sides: [ 0, 0, 0]
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
  }

  /**
   * Handler method for form submit. Calls the checkValidity method
   * and prevents page from reloading
   */
  handleSubmit(event) {
    this.checkValidity();
    event.preventDefault();
  }

  /**
  * Checks the validity of the form input. A triangle is considered invalid if:
  * -any of the sides are equal to or less than zero
  * -the sum of the lengths of any two sides is less than the length of the remaining side
  */
  checkValidity(){
    let val_a = +this.state.val_a;
    let val_b = +this.state.val_b;
    let val_c = +this.state.val_c;

    if (val_a <= 0 || val_b <= 0 || val_c <= 0) {
        this.setState(state => ({
            validatorMessage: 'A triangle\'s side cannot be zero or negative in length',
            isValidTriangle: false,
            isValidInput: false
        }))
    } else if((val_a + val_b) < val_c ||
              (val_a + val_c) < val_b ||
              (val_b + val_c) < val_a) {
       this.setState(state => ({
            validatorMessage: 'The given values cannot form a valid triangle',
            isValidTriangle: false,
            isValidInput: false
       }))
    } else {
       this.setState(state => ({
            isValidTriangle: true,
            isValidInput: true,
            sides: [ val_a, val_b, val_c]
       }))
    }
  }

  /**
  * Handles changes to the input of the form fields.
  * Updates the corresponding state value and resets the validatorMessage and
  * validity flags to default
  */
  handleInput(event) {
    const name = event.target.name;

    this.setState({
        [name]: event.target.value,
        validatorMessage: '',
        isValidTriangle: true,
        isValidInput: false,
    });
  }

  render() {

    let validity = <span style={{ color: 'red' }}>{this.state.validatorMessage}</span>
    let result = <Result style={{ marginTop: '50px' }} sides={this.state.sides} />;

    return (
        <div className="container">
            <h3>Triangle App</h3>
            <div className="jumbotron">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div className="col-md-2">
                                <label htmlFor="s_a">Side A: </label>
                                <input type="number"
                                    name="val_a" id="s_a"
                                    pattern="\\d+"
                                    value={this.state.val_a}
                                    onChange={this.handleInput} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-2">
                                <label htmlFor="s_b">Side B: </label>
                                <input type="number"
                                    name="val_b" id="s_b"
                                    pattern="\\d+"
                                    value={this.state.val_b}
                                    onChange={this.handleInput} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-2">
                                <label htmlFor="s_c">Side C: </label>
                                <input type="number"
                                    name="val_c" id="s_c"
                                    pattern="\\d+"
                                    value={this.state.val_c}
                                    onChange={this.handleInput} required/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </div>
                        <div>
                            {!this.state.isValidTriangle && validity}
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    {this.state.isValidInput && result}
                </div>
             </div>
        </div>
    );
  }
}

export default App;
