import './editor.scss';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import Tabs from './tabs';
import Author from '../components/author';

export default function Edit({ attributes, setAttributes }) {

    const { transcript } = attributes;

    const allowedBlocks = [
      'core/paragraph',
      'core/heading',
      'core/list'
    ];

    return (
        <Tabs>
            <div label="Details">
              <InnerBlocks allowedBlocks={ allowedBlocks } />
            </div>
            <div label="Transcript">
              <RichText 
                value={transcript}
                onChange={(transcript) => setAttributes({transcript})}
              />
            </div>
            <div label="About the author">
              <Author />
            </div>
        </Tabs>
    );
}