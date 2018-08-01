import React, {Component} from 'react';
import { connect } from 'react-redux';

class Main extends Component {

    increment = () => {
        console.log("Increment Works");
        this.props.dispatch({
            type: 'INCREMENT'
        })
    }

    decrement = () => {
        console.log("Decrement Works");
        this.props.dispatch({
            type: 'DECREMENT'
        })
    }

    render() {
        console.log("Props", this.props);
        const count = this.props.count;
        return(
            <div>
                Main
                <button onClick = {this.increment}>
                    INCREMENT
                </button>
                <button onClick = {this.decrement}>
                    DECREMENT
                </button>

                <h3>
                    State: {count}
                </h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.testReducer.count
})

export default connect(mapStateToProps)(Main);