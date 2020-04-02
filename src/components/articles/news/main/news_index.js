import React from "react";

import NewsSlider from "../../../widgets/newsSlider/slider";
import NewsList from "../../../widgets/newsList/newsList";

const NewsMain = () => (
    <div>
        <NewsSlider
            type={"featured"}
            settings={{data:false}}
            start={0}
            amount={3}
        />
        <NewsList
            type={"cardMain"}
            loadMore={true}
            start={3}
            amount={10}
        />
    </div>
);

export default NewsMain;