#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-1_114_x --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/service-1.114.x.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-2_0_x --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/service-2.0.x.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_26 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-agent-v2.2.26.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_22 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-batch-agent-v2.2.22.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/php/php-2_7_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/php-agent-v2.7.0.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/php/php-2_7_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/php-agent-v2.7.1.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_86 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/nodejs-agent-v0.4.86.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_88 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/nodejs-agent-v0.4.88.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_89 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/nodejs-agent-v0.4.89.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_5_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/python-agent-v1.5.2.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_5_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/python-agent-v1.5.3.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_5_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/python-agent-v1.5.4.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/golang/golang-0_3_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/Go-agent-v0.3.0.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/golang/golang-0_3_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/Go-agent-v0.3.1.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_5_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.5.0.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_5_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.5.1.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_8 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.4.8.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_9 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.4.9.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_5_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.5.1.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_5_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.5.2.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_6_16 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dbx-agent-v1.6.16.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_6_17 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dbx-agent-v1.6.17.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_6_18 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dbx-agent-v1.6.18.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/browser/browser-v1_3_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/browser-agent-v1.3.3.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/amazon-ecs/amazon-ecs-release-notes --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/amazon-ecs-release-notes.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'