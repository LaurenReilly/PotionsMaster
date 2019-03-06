let initalState = {
    potion: "",
    recipe: [],
    username: "",
    score: 0,
    userPotion: [],
}

let reducer = (state = initalState, action) => {
    let {type, ingredient, username, potion, recipe} = action;
    if (type === "ADD") {
        return {
            ...state,
            userPotion: state.userPotion.concat(ingredient),
        }
    } else if(type === "CORRECT") {
        return {
            ...state,
            score: state.score +10,
        }
    } else if (type === "WRONG") {
        return {
            ...state,
            score: state.score -5,
        }
    } else if (type === "LOGIN") {
        return {
            ...state,
            username: username,
        }
    } else if (type === "NEW_POTION") {
        return {
            ...state,
            potion: potion,
            recipe: recipe,
        }
    } else {
        return state;
    }
}

export default reducer;