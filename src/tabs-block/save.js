import './editor.scss';
import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {

    const { transcript, about_author } = attributes;

    return (
        <>
            <div label="Details">
                <InnerBlocks.Content/>
            </div>
            <div label="Transcript">
                <RichText.Content value={transcript}/>
            </div>
            <div label="About the author">
                <RichText.Content value={about_author}/>
            </div>
        </>
    );
}