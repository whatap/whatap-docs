#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-1_112_x --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/service-v1.112.x.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_24 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-agent-v2.2.24.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_25 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-agent-v2.2.25.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_21 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-batch-agent-v2.2.21.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_22 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-batch-agent-v2.2.22.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/php/php-2_6_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/php-agent-v2.6.3.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_83 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/nodejs-agent-v0.4.83.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_4_9 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/python-agent-v1.4.9.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_5_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/python-agent-v1.5.0.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/golang/golang-0_2_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/Go-agent-v0.2.4.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_4_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.4.5.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_4_6 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.4.6.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_4_7 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.4.7.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_4_8 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.4.8.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_4_9 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.4.9.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.4.4.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_6_14 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dbx-agent-v1.6.14.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_6_15 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dbx-agent-v1.6.15.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/amazon-ecs/amazon-ecs-release-notes --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/amazon-ecs-release-notes.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'