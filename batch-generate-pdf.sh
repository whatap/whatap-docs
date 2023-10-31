#!/bin/bash
npx docusaurus-prince-pdf -u http://localhost:4000/java/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-apm-java-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/php/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-apm-php-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/nodejs/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-apm-nodejs-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/python/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-apm-python-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/dotnet/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-apm-dotnet-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/golang/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-apm-go-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/server/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-server-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/postgresql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-postgresql-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/oracle/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-oracle-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/mysql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-mysql-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/mssql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-mssql-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/tibero/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-tibero-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/cubrid/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-cubrid-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/altibase/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-altibase-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/redis/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-redis-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/mongodb/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-db-mongodb-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/kubernetes/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-kubernetes-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/log/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-log-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/url/url-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-url-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/manage --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-manage.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/reference --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-reference.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/extensions --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-extensions.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/amazon-cloudwatch/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-amazon-cloudwatch.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/amazon-ecs/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-amazon-ecs.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/azure/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-azure.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/ncloud/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-ncloud.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/oracle-cloud/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-oracle-cloud.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/aws-log/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-aws-log-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/browser --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-browser-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/npm/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-network-performance-monitoring.pdf --dest ./static/pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/openapi --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-open-api.pdf --dest ./static/pdf --include-index

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/about-apm-dbc --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-best-practice-guides-about-apm-dbc.pdf --dest ./static/pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/using-browser-monitoring --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-best-practice-guides-using-browser-monitoring.pdf --dest ./static/pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/about-apm-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-best-practice-guides-about-apm-dashboard.pdf --dest ./static/pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/about-server-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-best-practice-guides-about-server-dashboard.pdf --dest ./static/pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/about-apm-hitmap-class --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/whatap-best-practice-guides-about-apm-hitmap-class.pdf --dest ./static/pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/k8s/k8s-1_4_0 --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/release-notes/k8s-agent-v1.4.0.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/release-notes/service/service-1_110_x --prince-args="--javascript --page-size='a4' --page-margin='10mm'" -o ./static/pdf/release-notes/service-1.110.x.pdf --dest ./static/pdf/release-notes --include-index --selector 'none'
