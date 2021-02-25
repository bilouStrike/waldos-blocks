import './editor.scss';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {

    return (
        <>
            <div label="Details">
                <InnerBlocks.Content/>
            </div>
        </>
    );
}