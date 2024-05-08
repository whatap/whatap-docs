#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-2_3_x --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/service-2.3.x.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_32 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-agent-v2.2.32.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java/java-2_2_31 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-agent-v2.2.31.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_24 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/java-batch-agent-v2.2.24.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/php/php-2_7_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/php-agent-v2.7.2.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_95 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/nodejs-agent-v0.4.95.pdf --dsest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/python/python-1_6_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/python-agent-v1.6.2.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dotnet-agent-v2.2.1.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_2 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dotnet-agent-v2.2.2.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dotnet-agent-v2.2.3.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/dotnet/dotnet-2_2_4 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dotnet-agent-v2.2.4.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/golang/golang-0_3_3 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/Go-agent-v0.3.3.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/server/server-2_5_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/server-agent-v2.5.5.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_5_9 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/k8s-agent-v1.5.9.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_6_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/k8s-agent-v1.6.0.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_6_1 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/k8s-agent-v1.6.1.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/dbx-1_7_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/dbx-agent-v1.7.0.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/db/xos-1_1_8b --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/xos-agent-v1.1.8b.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/browser/browser-v1_3_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/browser-agent-v1.3.5.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/npm/npm-v0_4_5 --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/npm-agent-v0.4.5.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/amazon-ecs/amazon-ecs-release-notes --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/amazon-ecs-release-notes.pdf --dest ./pdf --include-index --selector 'none'