import React, {Component} from "react";
import SliderTemplate from "./sliderTemplate";
import {firebaseArticles,firebaseLooper} from "../../../firebase";

class NewsSlider extends Component {

    state = {
        news: []
    };

    componentWillMount() {
        firebaseArticles.limitToFirst(this.props.amount).once('value').then((snapshot) => {
            const news = firebaseLooper(snapshot);
            
            this.setState({
                news
            })
        })
    }

    render() {
        return (
            <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }
}

export default NewsSlider;