
export default class APIController {

    static addData = (section, body) => {
        return fetch(`http://localhost:5002/${section}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(body)
        });
    };

    static getData = (section) => {
        return fetch(`http://localhost:5002/${section}`).then(e => e.json());
    };

    static getRecipes = () => {
        return fetch("http://api.yummly.com/v1/api/recipes?_app_id=5b6699eb&_app_key=d4778728e4efa474d08a7676801d6fa2&d").then(e => e.json())
    }

    static getOneRecipe = (recipeId) => {
        return fetch(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=5b6699eb&_app_key=d4778728e4efa474d08a7676801d6fa2&d`).then(e => e.json())
    }
}