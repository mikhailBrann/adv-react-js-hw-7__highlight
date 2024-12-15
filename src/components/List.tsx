import WithHighlight from './WithHighlight';
import Article from './Article';
import Video from './Video';

const VideoWithHighlight = WithHighlight(Video);
const ArticleWithHighlight = WithHighlight(Article);

function List(props: any) {

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWithHighlight {...item} />
                );

            case 'article':
                return (
                    <ArticleWithHighlight {...item} />
                );
        }
    });
};

export default List;