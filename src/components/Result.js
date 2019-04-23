import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Result extends Component {
  render() {
    const result = this.props.result;
    const msg = (!result) ? 'Chose brand, year and plan' : 'The total is: $';
    return (
        <div className="gran-total">
            { msg }
            <TransitionGroup component="span" className="resultado">
                <CSSTransition 
                    classNames="resultado"
                    key={ result }
                    timeout={{enter: 500, exit: 500}}
                >
                    <span>{ result }</span>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
  }
}
