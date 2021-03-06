import React from 'react';
import {Capsule} from './exports'

export default Capsule({
    name: 'app',
    styles: ({color, mixins}) => ({
        app: {
            ...mixins.all100,
        },
        someOtherClass: {
            ...mixins.centerize
        },
        loginButton: {
            background: color.primary
        }
    }),
    logic: ({events, toLogicTest, collective}) => ({

        onMount: (props) => {
            events.emit('mounted', {...props, toLogicTest, ...collective()})
        }
    }),
    mapLogic: {app: 'onMount'}
})(class App extends React.Component {

    componentDidMount() {
        this.props.onMount(this.props);
    }

    render() {
        const {cn, classes} = this.props;
        return (
            <div className={cn(classes.app, classes.someOtherClass)}>
                <button className={classes.loginButton}>loggin</button>
                {JSON.stringify(this.props, null, 4)}
            </div>
        );
    }
});
