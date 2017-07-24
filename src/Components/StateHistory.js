import React, {Component} from 'react';
import { TodoActions } from '../Actions/TodoActions';

class StateHistory extends Component{
    onBackward(){
        TodoActions.stateBackward();
    }

    onForward(){
        TodoActions.stateForward();
    }

    render(){
        return (
            <div>
                <input type="button" className="btn btn-primary" value="Backward" onClick={this.onBackward.bind(this)} />
                &nbsp;<input type="button" className="btn btn-primary" value="Forward" onClick={this.onForward.bind(this)} />
            </div>
        );
    }
}

export default StateHistory;