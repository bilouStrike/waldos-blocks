/**
 * External dependencies
 */
import { __ } from "@wordpress/i18n";

export default function save({ attributes }) {
	const { imgUrl, name, intro, description, twitter, linkedin } = attributes;

	return (
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
	);
}
