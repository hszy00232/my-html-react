'use strict'
function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? 'You liked this.' : 'Like';
    return (
        <button type="button" onClick={() => setLiked(!liked)}>
            {text} test!
        </button>
    )
    // return React.createElement('button',{
    //     onClick: () => setLiked(!liked),
    //   }, text);
}

const domContainer = document.querySelector('#like-button-root');
// const rootNode = document.getElementById('like-button-root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));