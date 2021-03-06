import React, { Component } from 'react';

class InputForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            country: ''
        }

    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleGetWeatherData(this.state.formData);
      };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <div className="form-container">
                <form className="col " ref={this.formRef} onSubmit={this.handleSubmit} >
                    <div className="row form-row">
                        <div className="input-field col">
                            <input name="name" id="name" type="text" className="active" value={this.state.formData.city} onChange={this.handleChange} required />
                            <label htmlFor="name">City</label>
                        </div>
                        <div className="input-field col">
                            <input name="country" id="country" type="text" className="active" value={this.state.formData.country} onChange={this.handleChange} required />
                            <label htmlFor="country">Country</label>
                        </div><br></br>
                
                        <button
                            type="submit"
                            className="btn green"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">search</i>
                            Get Weather
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputForm;