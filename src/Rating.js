import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import APIController from "./APIController"

export default class Rating extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 0
        };
    }

    // componentDidMount() {
    //     this.props.MyRecipes.map(recipe => {
    //         if (recipe.recipeId === this.props.recipeId.id && recipe.recipeRating) {
    //             console.log(recipe.recipeId)
    //             console.log(this.props.recipeId.id)
    //             this.setState({
    //                 rating: recipe.recipeRating
    //             })
    //         }
    //     })
    // }

    // onStarClick(nextValue, prevValue, name) {
    //     this.setState({ rating: nextValue });
    //     this.props.MyRecipes.map(recipe => {
    //         if (recipe.recipeId === this.props.recipeId.id) {
    //             let id = recipe.id
    //             let body = {
    //                 recipeRating: nextValue
    //             }
    //             APIController.addRating(id, body)
    //                 .then(() => {
    //                     alert("Added Rating!")
    //                 })
    //         }
    //     });
    // }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    render() {
        const { rating } = this.state;

        return (
            <div>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}