import React, { Component } from 'react';
import { primeraMayuscula } from '../helpers';

export default class Summary extends Component {

    showSummary = () => {
        const { brand, year, plan } = this.props.data;

        if (!brand || !year || !plan) return null;

        return (
            <div className="resumen">
                <h2>Quote Summary</h2>
                <li>Brand: { primeraMayuscula(brand) }</li>
                <li>Plan: { primeraMayuscula(plan) }</li>
                <li>Year: { year }</li>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.showSummary()}
            </div>
        )
    }
}
