import React, { Component } from 'react'

export default class lifecycleMethods extends Component {
    constructor(props) {
        super(props);
        console.log(`constructor props: `, this.props);
    }

    // life cycle methods
    componentWillMount() {
        console.log('Component Will Mount');
    };

    componentDidMount() {
        console.log('Component Did Mount');

    };

    componentWillReceiveProps(nextProps) {
        console.log('Component Will Receive Props', nextProps);
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update', nextProps, nextState);
        return true;
    };

    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will Update', nextProps, nextState);
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update');
    };

    componentWillUnmount() {
        console.log('Component Will Unmount');
    };

    render() {
        return (
            <div>
                lifecycle methods
            </div>
        )
    }
}
