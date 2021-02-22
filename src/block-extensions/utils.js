const { Fragment } = wp.element;
const { withSelect } = wp.data;


const Figure = ( { height, width, url, title } ) => {
    return (
        <figure>
            <img src={ url } height={ height } width= { width } alt={ title } />
        </figure>
    );
};

const MediaRender = ( { mediaInfo } ) => {
    const thumbnail = mediaInfo ? mediaInfo.media_details.sizes.thumbnail : null;
    const title = mediaInfo ? mediaInfo.title.rendered : '';
    const { height, width, source_url } = thumbnail ? thumbnail : {};

    return (
        <Fragment>
            { thumbnail && <Figure
                height={ height }
                width={ width }
                url={ source_url }
                title={ title }
            /> }
        </Fragment>
    );
};

export const ImagePreview = withSelect( ( select, ownProps) => {

    const { getEntityRecord } = select( 'core' );
    const { id } = ownProps;

    return {
        mediaInfo: id ? getEntityRecord('postType', 'attachment', id) : null,
    }

})(MediaRender);
