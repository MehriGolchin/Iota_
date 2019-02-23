import React, { Component } from 'react';
import { Label, Password, ShowHideButton, Wrapper } from './passwordfield.styles';

export interface PasswordFieldProps {
    readonly title: string;
    readonly placeholder?: string;
}

export interface PasswordFieldState {
    isShown: boolean;
}

export class PasswordField extends Component<PasswordFieldProps, PasswordFieldState> {
    constructor(props: PasswordFieldProps) {
        super(props);
        this.state = {isShown: false};

        this.isShown = this.isShown.bind(this);
    }

    isShown(){
        this.setState(state => ({
            isShown: !this.state.isShown,
        }));
    }

    render() {
        const {title, placeholder} = this.props;
        return (
            <Wrapper>
                <Label>{title}
                    <Password
                        type={this.state.isShown ? "text" : "password"}
                        placeholder={placeholder}
                    />
                    <ShowHideButton onClick={this.isShown}>
                        |{this.state.isShown ? " HIDE" : " SHOW"}
                    </ShowHideButton>
                </Label>
            </Wrapper>
        );
    }
}
