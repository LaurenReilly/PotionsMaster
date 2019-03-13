let initalState = {
    name: "Cure For Boils",
    recipe: ["one", "two", "three"],
    username: "",
    score: 0,
    userPotion: [],
    currentSound: ""
}

let reducer = (state = initalState, action) => {
    let {type, ingredient, username, potion, currentSound} = action;
    if (type === "ADD") {
        return {
            ...state,
            currentSound: currentSound,
            userPotion: state.userPotion.concat(ingredient),
        }
    } else if(type === "CORRECT") {
        return {
            ...state,
            score: state.score +10,
            userPotion: [],
        }
    } else if (type === "NEW_GAME") {
        return {
            ...state,
            score: 0,
            userPotion: [],
            currentSound: ""
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
            userPotion: [],
            currentSound: ""
        }
    } else if (type === "LOG_OUT") {
        return {
            ...state,
            username: "",
        }
    } else if (type === "RESET_SOUND") {
        return {
            ...state,
            currentSound: ""
        }
    } else {
        return state;
    }
}

export default reducer;