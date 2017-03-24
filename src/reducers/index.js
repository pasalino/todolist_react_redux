import { ADD_REMINDER, DELETE_REMINDERS, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
    let { text, dueDate } = action
    console.log("dddd", action);
    console.log("dddd", text);
    console.log("dddd", dueDate);
    return {
        text,
        id: Math.random(),
        dueDate
    }
}

const deleteById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log("state", reminders)
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDERS:
            console.log("del ddd")
            reminders = deleteById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;