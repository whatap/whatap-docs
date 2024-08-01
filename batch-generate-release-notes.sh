#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-2_6_x --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/service-2.6.x.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/service-2.6.x.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_37 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-agent-v2.2.37.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/java-agent-v2.2.37.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_36 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-agent-v2.2.36.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/java-agent-v2.2.36.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_24 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-batch-agent-v2.2.24.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/php/php-2_8_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/php-agent-v2.8.1.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/php-agent-v2.8.1.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_98 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/nodejs-agent-v0.4.98.pdf --dsest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/nodejs-agent-v0.4.98.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_6_6 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/python-agent-v1.6.6.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/python-agent-v1.6.6.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_3_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dotnet-agent-v2.3.0.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dotnet-agent-v2.3.0.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_9 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dotnet-agent-v2.2.9.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dotnet-agent-v2.2.9.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/golang/golang-0_4_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/go-agent-v0.4.0.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/go-agent-v0.4.0.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_6_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-agent-v2.6.4.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/server-agent-v2.6.4.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_6_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-agent-v2.6.3.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/server-agent-v2.6.3.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_6_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-agent-v2.6.2.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/server-agent-v2.6.2.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-aix-1_2_7 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-aix-agent-v1.2.7.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/server-aix-agent-v1.2.7.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_7_8 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/k8s-agent-v1.7.8.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/k8s-agent-v1.7.8.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_7_7 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/k8s-agent-v1.7.7.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/k8s-agent-v1.7.7.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_7_6 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/k8s-agent-v1.7.6.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/k8s-agent-v1.7.6.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_9_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.9.0.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.9.0.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_8_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.8.2.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.8.2.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_8_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.8.1.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.8.1.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_8_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.8.0.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.8.0.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_7_8 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.7.8.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.7.8.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_7_7 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.7.7.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/dbx-agent-v1.7.7.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/xos-1_1_8f --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/xos-agent-v1.1.8f.pdf --dest ./pdf --include-index --selector 'none'

pdfcpu annot remove -pages 1 ./pdf/xos-agent-v1.1.8f.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/browser/browser-v1_3_6 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/browser-agent-v1.3.6.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/browser-agent-v1.3.6.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/npm/npm-v0_4_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/npm-agent-v0.4.5.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/amazon-ecs/amazon-ecs-release-notes --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/amazon-ecs-release-notes.pdf --dest ./pdf --include-index --selector 'none'