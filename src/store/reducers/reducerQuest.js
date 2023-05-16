const defaultState = {
    countWorker: 0,
    questions: [],
    result: []
}

const ADD_QUESTION = "ADD_QUESTION";
const ADD_WORKER_COUNT = "ADD_WORKER_COUNT";
const REMOVE_QUESTION = "REMOVE_QUESTION";
const RESET_QUESTION = "RESET_QUESTION";
const ADD_RESULT = "ADD_RESULT";


export const reducerQuest = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_WORKER_COUNT:
            return { ...state, countWorker: Number(action.payload) }
        case ADD_QUESTION:
            return { ...state, questions: [...state.questions, action.payload] };
        case REMOVE_QUESTION:
            return { ...state, questions: state.questions.filter(q => q !== action.payload) };
        case RESET_QUESTION:
            return { ...state, questions: [], countWorker: 0, result: [] };
        case ADD_RESULT:
            return { ...state, result: action.payload }
        default:
            return state;
    }
}

export const addWorkerCountAction = (payload) => ({ type: ADD_WORKER_COUNT, payload });
export const addQuestionAction = (payload) => ({ type: ADD_QUESTION, payload });
export const removeQuestionAction = (payload) => ({ type: REMOVE_QUESTION, payload });
export const resetQuestionAction = () => ({ type: RESET_QUESTION });
export const addResultAction = (payload) => ({ type: ADD_RESULT, payload });