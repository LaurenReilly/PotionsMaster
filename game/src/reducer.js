let initalState = {
    name: "Cure For Boils",
    recipe: ["one", "two", "three"],
    username: "",
    score: 0,
    userPotion: [],
}

let reducer = (state = initalState, action) => {
    let {type, ingredient, username, potion} = action;
    if (type === "ADD") {
        return {
            ...state,
            userPotion: state.userPotion.concat(ingredient),
        }
    } else if(type === "CORRECT") {
        return {
            ...state,
            score: state.score +10,
            userPotion: [],
        }
    } else if (type === "WRONG") {
        return {
            ...state,
            score: state.score -5,
            userPotion: [],
        }
    } else if (type === "LOGIN") {
        return {
            ...state,
            username: username,
        }
    } else if (type === "NEW") {
        return {
            ...state,
            name: potion.name,
            recipe: potion.recipe,
        }
    } else {
        return state;
    }
}

export default reducer;