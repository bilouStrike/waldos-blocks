import './style.scss';
import { select } from '@wordpress/data';
const { apiFetch } = wp;
const { useEffect } = wp.element;

const Author = ({attributes, setAttributes}) => {

    const {
        author_name,
        author_description,
        author_img
    } = attributes;

    const setAuthor = (author) => {
        setAttributes({
            author_name: author?.name,
            author_description: author?.description,
            author_img: author?.avatar_urls?.[96]
        })
    }

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
            <img src={author_img}/>
            <div className="waldos-friends-author__description">
                <h3> {author_name} </h3>
                <p> {author_description} </p>
            </div>
        </div>
    )
}

export default Author;