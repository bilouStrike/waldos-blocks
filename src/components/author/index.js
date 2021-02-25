import './style.scss';
import { select } from '@wordpress/data';
const { apiFetch } = wp;
const { useState, useEffect } = wp.element;

const Author = () => {

    const [author, setAuthor] = useState({});

    useEffect(() => {
        const postID = select("core/editor").getCurrentPostId();
        apiFetch( { path: `/wp/v2/posts/${postID}` } ).then( post => {
            var authorID = post.author
            apiFetch( { path: '/wp/v2/users/'+authorID } ).then( author => {
                setAuthor(author);
            });
        });
    }, []);

    return (
        <div className="waldos-friends-author">
            <img src={author?.avatar_urls?.[96]}/>
            <div className="waldos-friends-author__description">
                <h3> {author?.name} </h3>
                <p> {author?.description} </p>
            </div>
        </div>
    )
}

export default Author;