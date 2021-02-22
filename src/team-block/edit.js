import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import { TextControl, TextareaControl, PanelBody } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { imgUrl, name, intro, description, twitter, linkedin } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<strong>Profile Picture</strong>
					<MediaUpload
						title="Profile Picture"
						allowedTypes={["image"]}
						onSelect={(val) => {
							setAttributes({
								imgUrl: val.sizes.full.url,
							});
						}}
						render={({ open }) => {
							return <img src={imgUrl} onClick={open} />;
						}}
					/>
					<TextControl
						label="Name"
						value={name}
						onChange={(val) =>
							setAttributes({
								name: val,
							})
						}
					/>
					<TextareaControl
						label="Intro"
						value={intro}
						onChange={(val) =>
							setAttributes({
								intro: val,
							})
						}
					/>
					<TextareaControl
						label="Description"
						value={description}
						onChange={(val) =>
							setAttributes({
								description: val,
							})
						}
					/>
					<TextControl
						label="Twitter"
						value={twitter}
						onChange={(val) =>
							setAttributes({
								twitter: val,
							})
						}
					/>
					<TextControl
						label="Linkedin"
						value={linkedin}
						onChange={(val) =>
							setAttributes({
								linkedin: val,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="team__block-container">
				<div className="team__block-image">
					<img src={imgUrl} />
					<div className="team__block-description">{description}</div>
				</div>
				<div className="team__block-info">
					<div class="team__block-name">{name}</div>
					<div className="team__block-intro">{intro}</div>
					<div className="team__block-social">
						<a href={`https://www.twitter.com/${twitter}`}>Twitter</a>{" "}
						<span className="team__block-dot">&#183; </span>
						<a href={`https://www.linkedin.com/in/${linkedin}`}>Linkedin</a>
					</div>
				</div>
			</div>
		</>
	);
}
