import React from 'react';
import {useLocation} from '@docusaurus/router';
import Translate, { translate } from "@docusaurus/Translate";
import styles from './styles.module.css';

export default function FacebookSharing() {
    const location = useLocation();
    const curLocation = "https://docs.whatap.io" + location.pathname;
    const faceURL = "https://www.facebook.com/sharer/sharer.php?u=" + curLocation + "&src=sdkpreparse";
    const onPopup = () => {
        window.open(faceURL, '', 'width=430, height=500, location=no, status=no, scrollbars=yes');
    }
    return(
        <div class={styles.fbsharebutton} data-href={curLocation} data-layout="" data-size="">
            <button type="button" className={styles.fb_xfbml_parse_ignore} onClick={onPopup}>
            {
                translate({
                id: "whatap_plugin.sharefacebook",
                message: "공유",
                description: "Sharing this page",
                })
            }
            </button>
        </div>
    );
}