import { __ } from "@wordpress/i18n";
import "./editor.scss";
import Inspector from './inspector';
import { 
    extractTime,
    extractTimeInSeconde,
    YouTubeGetID
} from './helpers';

const { useState, useEffect } = wp.element;
const { RichText } = wp.editor;

export default function Edit(props) {
    const { 
        setAttributes,
        attributes:  { 
            outline_title,
            video_url,
            youtube_api_key
        },
    } = props;

    const [selectedItem, setSelectedItem] = useState(0);
    const [description, setDescription] = useState('');
    const [thumbnails, setThumbnails] = useState({});

    let itemsList = [];
    let start = selectedItem <= 4 ? 0 : selectedItem - 4;
    let end = selectedItem <= 4 ? 5 : selectedItem + 1;
    const videoId = YouTubeGetID(video_url);
    const REMOTE_URL_CALL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${youtube_api_key}`

    useEffect(() => {
        fetch(REMOTE_URL_CALL)
        .then((response) => response.json())
        .then((responseJson) => {
            setDescription(responseJson?.items[0]?.snippet?.description);
            setThumbnails(responseJson?.items[0]?.snippet?.thumbnails);
        })
        .catch((error) => console.log(error))
    },[video_url, youtube_api_key]);

    const video_annotations = extractTime(description);

    for ( let i = start; i < end; i++ ) {
        itemsList.push(
            <div className={`video-block__playItem ${ selectedItem === i && 'video-block__playItem--active'} `} onClick={() => setSelectedItem(i)}> 
                <img src={thumbnails?.default?.url} />
                <div className="video-block__description">
                    <h3> {video_annotations[i]?.description} </h3>
                    <span> {video_annotations[i]?.time} </span>
                </div>
            </div>
        )
    }

    const chapter_start = extractTimeInSeconde(video_annotations[selectedItem]?.time);

    return (
        <>
            <Inspector {...props}/>
            <div className="video-block">
                <div className="video-block__container">
                    <div className="video-block__player">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?start=${chapter_start}`}
                            frameborder="0"
                            height="480"
                        />
                    </div>
                    <div className="video-block__playlist">
                        <h2> 
                            <RichText 
                                value={outline_title}
                                onChange={ (outline_title) => setAttributes({outline_title}) }
                            />
                        </h2>
                        <div className="video-block__itemsList">
                            { selectedItem > 4 &&
                                <a onClick={() => setSelectedItem(selectedItem - 1)}>  
                                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.22255 12.6703L0.321856 3.55299C-0.107286 3.11342 -0.107286 2.40036 0.321856 1.9608L1.36013 0.897302C1.78882 0.458205 2.48314 0.457736 2.91274 0.895425L9.99977 8.12127L17.0873 0.895893C17.5169 0.457735 18.2112 0.458674 18.6399 0.897769L19.6781 1.96126C20.1073 2.40083 20.1073 3.11389 19.6781 3.55346L10.777 12.6703C10.3478 13.1099 9.65169 13.1099 9.22255 12.6703Z" fill="#848484"/>
                                    </svg>
                                </a>
                            }
                            { itemsList }
                            { video_annotations.length - 1 != selectedItem && 
                                <a onClick={() => setSelectedItem(selectedItem + 1)}>  
                                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.22255 12.6703L0.321856 3.55299C-0.107286 3.11342 -0.107286 2.40036 0.321856 1.9608L1.36013 0.897302C1.78882 0.458205 2.48314 0.457736 2.91274 0.895425L9.99977 8.12127L17.0873 0.895893C17.5169 0.457735 18.2112 0.458674 18.6399 0.897769L19.6781 1.96126C20.1073 2.40083 20.1073 3.11389 19.6781 3.55346L10.777 12.6703C10.3478 13.1099 9.65169 13.1099 9.22255 12.6703Z" fill="#848484"/>
                                    </svg>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}
