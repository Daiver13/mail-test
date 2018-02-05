import React, { Component } from 'react';

import {
    validateName,
    validateEmail,
    validatePhoneNumber
} from './validator';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: {
                value: '',
                isError: false,
            },
            phone: {
                value: '',
                isError: false,
            },
            email: {
                value: '',
                isError: false,
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: {
                ...this.state[target.name],
                value: target.value,
            }
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, phone, email } = this.state;

        this.setState({ submitted: true });

        username.isError = validateName(username.value);
        phone.isError = validatePhoneNumber(phone.value);
        email.isError = validateEmail(email.value);

        if(username.isError && phone.isError && email.isError ) {
            console.group("Data");
            console.info('name:', username.value);
            console.info('phone:', phone.value);
            console.info('email:', email.value);
            console.groupEnd();
        }
    }

    render() {
        const {
            username,
            phone,
            email,
            submitted
        } = this.state;

        return (
            <div className="wrapper">
                <h2>Registration</h2>
                <form name="form" onSubmit={this.handleSubmit} className="form">
                    <div className={'form__group' + (submitted && !username.isError ? ' has-error' : '')}>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Name"
                            value={username.value}
                            onChange={this.handleChange}
                        />
                        { submitted &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className={'form__group' + (submitted && !phone.isError ? ' has-error' : '')}>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Phone"
                            value={phone.value}
                            onChange={this.handleChange}
                        />

                        { submitted && !phone.isError &&
                            <div className="help-block">Phone is required</div>
                        }
                    </div>
                    <div className={'form__group' + (submitted && !email.isError ? ' has-error' : '')}>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="E-mail"
                            value={email.value}
                            onChange={this.handleChange}
                        />

                        { submitted && !email.isError &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className="form__group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
