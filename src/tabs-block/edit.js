import './editor.scss';

import Tabs from './tabs';

export default function Edit({ attributes, setAttributes }) {
    return (
        <Tabs>
            <div label="Details">
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Transcript">
              After 'while, <em>Crocodile</em>!
            </div>
            <div label="About the author">
              Nothing to see here, this tab is <em>extinct</em>!
            </div>
        </Tabs>
    );
}