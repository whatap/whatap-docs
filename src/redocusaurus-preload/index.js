

module.exports = function (context, options) {
    return {
        name: 'redocusaurus-preload',
        injectHtmlTags() {
            return {
                preBodyTags: [
                    `
                    <script>
                    let isPath = location.pathname.includes("openapi-spec")

                    if ((window.performance && performance.navigation.type == performance.navigation.TYPE_RELOAD || window.performance && performance.navigation.type == performance.navigation.TYPE_NAVIGATE) && isPath) {
                        showRedocFrag(false);
                    } 
                    function showRedocFrag(toggle){
                        const range = document.createRange()
                        const displayContent = toggle?'block':'none';
                        const displayLoader = !toggle?'block':'none';
                        const frag = range.createContextualFragment(\`
                            <style>
                                .redocusaurus{
                                display: \${displayContent};
                                }
                                .redocusaurus-styles,
                                .redocusaurus-styles:after {
                                    border-radius: 50%;
                                    margin-top: 30vh !important;
                                    margin-bottom: 50vh !important;
                                    width: 10em;
                                    height: 10em;
                                }
                                .redocusaurus-styles {
                                    display: \${displayLoader};
                                    margin: 60px auto;
                                    font-size: 10px;
                                    position: relative;
                                    text-indent: -9999em;
                                    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
                                    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
                                    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
                                    border-left: 1.1em solid #ffffff;
                                    -webkit-transform: translateZ(0);
                                    -ms-transform: translateZ(0);
                                    transform: translateZ(0);
                                    -webkit-animation: load8 1.1s infinite linear;
                                    animation: load8 1.1s infinite linear;
                                }
                                @-webkit-keyframes load8 {
                                    0% {
                                    -webkit-transform: rotate(0deg);
                                    transform: rotate(0deg);
                                    }
                                    100% {
                                    -webkit-transform: rotate(360deg);
                                    transform: rotate(360deg);
                                    }
                                }
                                @keyframes load8 {
                                    0% {
                                    -webkit-transform: rotate(0deg);
                                    transform: rotate(0deg);
                                    }
                                    100% {
                                    -webkit-transform: rotate(360deg);
                                    transform: rotate(360deg);
                                    }
                                }
                            </style>
                            \`
                            )
                            document.querySelector("head").append(frag)
                    }
                    </script>
                `
                ],
                postBodyTags: [
                    `
                    <script>
                    let hasPath = location.pathname.includes("openapi-spec")

                    if ((window.performance && performance.navigation.type == performance.navigation.TYPE_RELOAD || window.performance && performance.navigation.type == performance.navigation.TYPE_NAVIGATE) && hasPath) {
                        let redocusaurusDoc = document.querySelector('.redocusaurus')
                        document.onreadystatechange = function() {
                            if (document.readyState === "complete") {
                                showRedocFrag(true);
                            }
                        }
                    } 
                    </script>
                `
                ],
            };
        },
    };
};
