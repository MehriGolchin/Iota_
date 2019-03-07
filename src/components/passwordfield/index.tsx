import React, { Component } from 'react';
import { Label, Password, ShowHideButton, Wrapper } from './passwordfield.styles';
import { Trans, WithTranslation, withTranslation } from 'react-i18next';

export interface PasswordFieldProps {
    readonly title: string;
    readonly placeholder?: string;
}

export interface PasswordFieldState {
    isShown: boolean;
}

type LocalizedPasswordFieldProps = PasswordFieldProps & WithTranslation;

class LocalizedPasswordField extends Component<LocalizedPasswordFieldProps, PasswordFieldState> {
    constructor(props: LocalizedPasswordFieldProps) {
        super(props);
        this.state = {isShown: false};

        this.ShowHide = this.ShowHide.bind(this);
    }

    ShowHide(){
        this.setState(state => ({
            isShown: !this.state.isShown,
        }));
    }

    render() {
        const {title, placeholder} = this.props;
        const { isShown } = this.state;
        return (
            <Wrapper>
                <Label>{title}
                    <Password
                        type={isShown ? "text" : "password"}
                        placeholder={placeholder}
                    />
                    <ShowHideButton onClick={this.ShowHide}>
                        | <Trans>Hide</Trans>
                    </ShowHideButton>
                </Label>
            </Wrapper>
        );
    }
}

export const PasswordField = withTranslation('translation')(LocalizedPasswordField);