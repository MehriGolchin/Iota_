import React, { Component } from 'react';
import { Label, Input } from './textfield.styles';

export interface TextFieldProps {
    readonly title: string;
    readonly placeholder?: string;
    readonly value?: string;
}

export class TextField extends Component<TextFieldProps> {
    constructor(props: TextFieldProps) {
        super(props);
    }

    render() {
        const { title, placeholder, value } = this.props;
        return (
            <div>
                <Label>{title}
                    <Input
                        type="text"
                        placeholder={placeholder}
                        value={value}
                    />
                </Label>
            </div>
        );
    }
}