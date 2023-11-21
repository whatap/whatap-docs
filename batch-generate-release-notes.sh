#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_21 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/java-agent-v2.2.21.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_80 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/nodejs-agent-v0.4.80.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_81 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/nodejs-agent-v0.4.81.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_1_9 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dotnet-agent-v2.1.9.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/dotnet-agent-v2.2.0.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_4_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/server-agent-v2.4.4.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./static/pdf/release-notes/k8s-agent-v1.4.1.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'