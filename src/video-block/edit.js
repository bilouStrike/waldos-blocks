import { __ } from "@wordpress/i18n";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;

	return (
        <>
            <h1> { title } </h1>
            <div className="video__block">
               Video content here     
            </div>
        </>
	);
}
