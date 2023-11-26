#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-1_112_x --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/service-v1.112.x.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_23 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-agent-v2.2.23.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/php/php-2_6_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/php-agent-v2.6.3.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/golang/golang-0_2_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/Go-agent-v0.2.4.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.4.2.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.4.3.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.4.4.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_6_13 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dbx-agent-v1.6.13.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/amazon-ecs/amazon-ecs-release-notes --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/amazon-ecs-release-notes.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'