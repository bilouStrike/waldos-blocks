import { InspectorControls } from "@wordpress/block-editor";
import { TextControl, PanelBody } from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
    const { video_url, youtube_api_key } = attributes;

    return (
        <InspectorControls>
            <PanelBody>
                <TextControl
                    label="Youtube URL:"
                    value={video_url}
                    onChange={(video_url) => setAttributes({video_url})}
                />
                <TextControl
                    label="Youtube API Key:"
                    value={youtube_api_key}
                    onChange={(youtube_api_key) => setAttributes({youtube_api_key})}
                />
            </PanelBody>
        </InspectorControls>
    );
}
export default Inspector;