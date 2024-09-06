import * as amplitude from '@amplitude/analytics-browser';
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function initAmplitude() {
    amplitude.init("02434e2a648821186600db8943872ab5", "", {
        autocapture: {
            attribution: true,
            pageViews: true
        }
    });
}

export default (function amplitudeModule() {
    if (!ExecutionEnvironment.canUseDOM) {
        return null;
    }

    initAmplitude();

    return {
        onRouteUpdate() {

        },
    };
})();