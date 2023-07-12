module.exports = function () {
    return {
        name: 'whatap-plugin-facebook',
        injectHtmlTags() {
            return {
                preBodyTags: [
                    {
                        tagName: 'script',
                        attributes: { 
                            'async': true, 
                            'defer': true, 
                            'crossorigin': 'anonymous',
                            'src': "https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v17.0&appId=169051789422006&autoLogAppEvents=1",
                            'nonce': 'y4U7YSrt'
                        },
                    },
                    `<div id="fb-root"></div>`
                ],
            };
        },
    };
};