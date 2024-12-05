export const initialState = {
    questions:[{
        questiontext: 'Question1',
            questiontype: 'radio',
            options: [
                {
                    optiontext: 'option1'
                }],
            
            open: true,

            required: false
    }],
    questiontype:'radio',
    doc_name:"Untitled form",
    doc_desc:"add description"
}
export const actionTypes ={
    SET_QUESTIONS:'SET_QUESTIONS',
    CHANGE_TYPE:'CHANGE_TYPE',
    SET_DOC_NAME:'SET_DOC_NAME',
    SET_DOC_DESC:'SET_DOC_DESC'
}

 const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.SET_QUESTIONS:
            return {
                ...state,
                questions:action.questions,
            }
        case actionTypes.CHANGE_TYPE:
            return {
                ...state,
                questiontype:action.questiontype,
            }
        case actionTypes.SET_DOC_NAME:
            return {
                ...state,
                doc_name:action.doc_name,
            }
        case actionTypes.SET_DOC_DESC:
            return {
                ...state,
                doc_desc:action.doc_desc,
            }
        default:
            return state
}
}

export default reducer