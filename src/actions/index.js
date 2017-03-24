import { ADD_REMINDER, DELETE_REMINDERS, CLEAR_REMINDERS } from '../constants';

//Action Creator

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in add',action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDERS,
        id
    }
    console.log('action in remove',action);
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    console.log('action in clear',action);
    return action;
}

