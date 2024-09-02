#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-2_7_x --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/service-2.7.x.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/service-2.7.x.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_38 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-agent-v2.2.38.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/java-agent-v2.2.38.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_25 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-batch-agent-v2.2.25.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/java-batch-agent-v2.2.25.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/php/php-2_8_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/php-agent-v2.8.1.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/php-agent-v2.8.1.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_5_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/nodejs-agent-v0.5.1.pdf --dsest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/nodejs-agent-v0.5.1.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_5_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/nodejs-agent-v0.5.0.pdf --dsest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/nodejs-agent-v0.5.0.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_6_8 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/python-agent-v1.6.8.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/python-agent-v1.6.8.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_6_7 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/python-agent-v1.6.7.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/python-agent-v1.6.7.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_3_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dotnet-agent-v2.3.1.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dotnet-agent-v2.3.1.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/golang/golang-0_4_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/go-agent-v0.4.1.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/go-agent-v0.4.1.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_6_6 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-agent-v2.6.6.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/server-agent-v2.6.6.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_6_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-agent-v2.6.5.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/server-agent-v2.6.5.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-aix-1_2_7 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-aix-agent-v1.2.7.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/server-aix-agent-v1.2.7.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_7_9 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/k8s-agent-v1.7.9.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/k8s-agent-v1.7.9.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-2_0_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v2.0.0.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v2.0.0.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_9_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.9.5.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.9.5.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_9_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.9.4.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.9.4.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_9_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.9.3.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.9.3.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_9_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.9.2.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.9.2.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_9_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.9.1.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.9.1.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/xos-1_1_8f --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/xos-agent-v1.1.8f.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/xos-agent-v1.1.8f.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/browser/browser-v1_3_6 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/browser-agent-v1.3.6.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/browser-agent-v1.3.6.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/npm/npm-v0_4_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/npm-agent-v0.4.5.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/amazon-ecs/amazon-ecs-release-notes --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/amazon-ecs-release-notes.pdf --dest ./pdf --include-index --selector 'none'