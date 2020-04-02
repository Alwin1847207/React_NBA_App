import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "./components/home/home";
import Layout from "./hoc/layout/layout";
import NewsArticle from "./components/articles/news/posts/article_index";
import VideoArticle from "./components/articles/videos/videoPosts/video_index";
import NewsMain from "./components/articles/news/main/news_index";
import VideosMain from "./components/articles/videos/main/videos_index";

class Routes extends Component{
    render() {
        return(
            <Layout>
                <Switch>
                    <Route path={"/articles/:id"} excat component={NewsArticle}/>
                    <Route path={"/videos/:id"} excat component={VideoArticle}/>
                    <Route path={"/news"} excat component={NewsMain}/>
                    <Route path={"/videos"} excat component={VideosMain}/>
                    <Route path={"/"} excat component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;