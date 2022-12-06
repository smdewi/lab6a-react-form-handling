import React from 'react';

export default class SurveyForm extends React.Component {
    state = {
        'name':'',
        'color':'',
        'country':''
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="form-container">
                    <h1>Survey Form</h1>
                    <div className="form-group">
                        <label>Name: </label>
                        <input name="name" type="text" value={this.state.name}
                        onChange={this.updateFormField}></input>
                    </div>
                    <div className="form-group">
                        <label>Favorite Color: </label>
                        <input name="color" type="radio" value="red" 
                        checked={this.state.color === 'red'}
                        onChange={this.updateFormField}/>Red
                        <input name="color" type="radio" value="blue" 
                        checked={this.state.color === 'blue'}
                        onChange={this.updateFormField}/>Blue
                        <input name="color" type="radio" value="green" 
                        checked={this.state.color === 'green'}
                        onChange={this.updateFormField}/>Green
                    </div>
                    <div className="form-group">
                        <label>Country: </label>
                        <select name="country" value={this.state.country}
                        onChange={this.updateFormField}>
                            <option value="singapore"> Singapore</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="indonesia">Indonesia</option>
                        </select>
                    </div>
                    <button>Submit</button>
                    <div>
                        Information to be submitted:
                        <br />
                        <p>Name: {this.state.name}</p>
                        <p>Favorite Color: {this.state.color}</p>
                        <p>Country: {this.state.country}</p>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}