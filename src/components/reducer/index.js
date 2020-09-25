import { DATA_LOADING, GET_USER, FETCH_DATA_SUCCESS, EDIT_DATA, DELETE_DATA, DATA_FAIL } from '../actions';

const initialState = {
    data: [],
    userId: '',
    isLoading: false,
    error:'Error loading'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_LOADING:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_USER:
            return {
                ...state,
                userId: action.payload,
                isLoading: false,
                error: ''
        }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: ''
            }
        case EDIT_DATA:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: ''
            }
            
        case DELETE_DATA:
            return {
                ...state,
                data: state.data.entries.filter(entry => entry.entry_id !== action.payload),
                isLoading: false,
                error: ''
            }
        case DATA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;