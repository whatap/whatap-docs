
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Videos({url}) {
    return (
        <div class="video-container">
            <video type="video/mp4" autoplay="true" loop="true" muted="true" width="100%" height="auto" class="p-video">
                <source src={url}/>
            </video>
        </div>
    );
}