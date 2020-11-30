import React, { children, Component } from 'react'

const styleMaping = {
    primary : "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger"
}

export default class Button extends Component {

    // props:  variant (primary/secondary)   disable, size
    // trong props luôn luôn có 1 props children
    render() {
        let {variant,disabled,size,children} = this.props;
        // const className = disable ? "btn-disable" : variant === "primary" ? "btn-primary": "btn-secondary";
        // const className = variant === "primary" ? "btn-primary": "btn-secondary";
        const className = styleMaping[variant];
        return (
            <button className={`btn ${className} btn-${size} `} disabled={disabled} > 
                {children}
            </button>
        )
    }
}
