import React, {Component} from "react";
import styles from '../../articles.css';
import Header_Article from './header_article';
import {firebaseDB, firebaseLooper, firebaseTeams} from "../../../../firebase";

class NewsArticle extends Component {

    state = {
        article: [],
        team: []
    };

    componentWillMount() {
       firebaseDB.ref('articles/'+this.props.match.params.id).once('value').then((snapshot)=>{
           let article = snapshot.val();

           firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value').then((snapshot)=>{
               const team = firebaseLooper(snapshot);
               this.setState({
                   article,
                   team
               })
           }).catch((e)=>{
               console.log(e)
           })

        }).catch((e)=>{
            console.log(e)
       })
    }

    render() {

        const article = this.state.article;
        const team = this.state.team;

        return (
            <div className={styles.articleWrapper}>
                <Header_Article
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
                <div className={styles.articleBody}>
                    <h1>{article.title}</h1>
                    <div className={styles.articleImage}
                         style={{
                             background: 'url(/images/articles/' + article.image + ')'
                         }}/>
                    <div className={styles.articleText}>
                        {article.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsArticle;