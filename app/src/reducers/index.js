const initialState = {
    word: "Random Cat Picture Generator",
    cat: "https://purr.objects-us-east-1.dream.io/i/cute_animals_show_feeling_06.jpg"
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CALL_API":
            console.log("called api")
            return {...state, cat: action.payload }
        default:
            return state;
    }
}