import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions'
import '../App.css';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        if(this.state.text==''){
            alert("Text is required");
            return;
        }
        if(this.state.dueDate=='' || this.state.dueDate===null ){
            alert('Due Date is required');
            return;
        }
        this.props.addReminder(this.state.text, this.state.dueDate);
        this.setState({text:'', dueDate: ''});
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="listgroup col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item list-group-horizontal">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div 
                                    className="list-item delete-button"
                                    onClick={() => this.props.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        console.log('props', this.props);
        console.log('state', this.state);
        return (
            <div className="App">
                <div className="title">Todolist React</div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({ text: event.target.value })} 
                            value={this.state.text}
                         />
                        <input 
                            type="datetime-local" 
                            className="form-control"
                            onChange={event => this.setState({dueDate: event.target.value})}
                            value={this.state.dueDate}
                        />
                    </div>
                    <button className="btn btn-success" onClick={() => this.addReminder()}>Add Reminder</button>
                </div>
                {this.renderReminders()}
                <div 
                    className="btn btn-danger"
                    onClick={()=>this.props.clearReminders()}>
                    Clear
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
