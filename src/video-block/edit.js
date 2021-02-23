import { __ } from "@wordpress/i18n";
import "./editor.scss";
const { useState, useEffect } = wp.element;
//const { RichText } = wp.editor;

const KEY = 'AIzaSyAL0Otj6cbv26GlgyZ5YL1EmRuzxdjxroo';

export default function Edit({ attributes, setAttributes }) {

    const [selectedItem, setSelectedItem] = useState(0);
    const [description, setDescription] = useState('');

    const { outline_title } = attributes;

    const video_annotations = [
        {   
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Introduction to dog training 0',
            src: 'https://www.youtube.com/embed/gqOrv5Se6BI'
        },
        { 
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Do’s and dont’s - The Basics 01',
            src: 'https://www.youtube.com/embed/F8sN7ijzozU',
        },
        {   
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Introduction to dog training 02',
            src: 'https://www.youtube.com/embed/gqOrv5Se6BI'
        },
        { 
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Do’s and dont’s - The Basics 03',
            src: 'https://www.youtube.com/embed/F8sN7ijzozU',
        },
        {   
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Introduction to dog training 04',
            src: 'https://www.youtube.com/embed/gqOrv5Se6BI'
        },
        { 
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Do’s and dont’s - The Basics 05',
            src: 'https://www.youtube.com/embed/F8sN7ijzozU',
        },
        {   
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Introduction to dog training 06',
            src: 'https://www.youtube.com/embed/gqOrv5Se6BI'
        },
        { 
            thumbnail: 'http://waldosfriends.local/wp-content/uploads/2021/02/photo-1532275672750-588761c76ae8-1.png',
            title: 'Do’s and dont’s - The Basics 07',
            src: 'https://www.youtube.com/embed/F8sN7ijzozU',
        },
    ];

    let itemsList = [];
    let start = selectedItem <= 4 ? 0 : selectedItem - 4;
    let end = selectedItem <= 4 ? 5 : selectedItem + 1;

    for (let i=start + 0; i < end; i++ ) {
        itemsList.push(
            <div className={`video-block__playItem ${ selectedItem === i && 'video-block__playItem--active'} `} onClick={() => setSelectedItem(i)}> 
                <img src={video_annotations[i]?.thumbnail} />
                    <div className="video-block__description">
                        <h3> {video_annotations[i]?.title} </h3>
                        <span> 00:25 </span>
                    </div>
            </div>
        )
    }

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=LrWe_VzegoM&key=${KEY}`)
        .then((response) => response.json())
        .then((responseJson) => setDescription(responseJson.items[0].snippet.description))
        .catch((error) => console.log(error))
    });

	return (
        <div className="video-block">
            <div className="video-block__container">
                <div className="video-block__player">
                    <iframe
                        src={video_annotations[selectedItem]?.src}
                        frameborder="0"
                        height="480"
                    />
                </div>
                <div className="video-block__playlist">
                    <h2>
                        Video outline
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
	);
}
