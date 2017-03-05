import { combineReducers } from 'redux';

//Reducer for UI state
const ui = (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_NOTE':
			return Object.assign({}, state, {
				currentNoteId: action.id
			});
		case 'CHANGE_EDIT_STATE':
			return Object.assign({}, state, {
				isEditing: action.isEditing
			});
		case 'CHANGE_FILTER_TEXT':
			return Object.assign({}, state, {
				filterText: action.filterText
			});
		default:
			return state;
	}
};

/*const ui = combineReducers({
	loadNote
});*/

export default ui;
