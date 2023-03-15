import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import checkProduct from '@site/src/components/CheckProduct';

export default function ChangeImgName({img, ext, desc}) {
    const product = checkProduct();
    // console.log(isBrowser);
    console.log(product);
    // if (location.includes('nodejs')) {
    //     product = 'nodejs';
    // } else if (location.includes('java')) {
    //     product = 'java';
    // } else if (location.includes('php')) {
    //     product = 'php';
    // } else if (location.includes('python')) {
    //     product = 'python';
    // } else if (location.includes('golang')) {
    //     product = 'golang';
    // } else if (location.includes('server')) {
    //     product = 'server';
    // } else if (location.includes('kubernetes')) {
    //     product = 'k8s';
    // } else if (location.includes('postgresql')) {
    //     product = 'postgresql';
    // } else if (location.includes('oracle-cloud')) {
    //     product = 'oracle-cloud';
    // } else if (location.includes('oracle')) {
    //     product = 'oracle';
    // } else if (location.includes('mysql')) {
    //     product = 'mysql';
    // } else if (location.includes('mssql')) {
    //     product = 'mssql';
    // } else if (location.includes('tibero')) {
    //     product = 'tibero';
    // } else if (location.includes('cubrid')) {
    //     product = 'cubrid';
    // } else if (location.includes('altibase')) {
    //     product = 'altibase';
    // } else if (location.includes('redis')) {
    //     product = 'redis';
    // } else if (location.includes('mongodb')) {
    //     product = 'mongodb';
    // } else if (location.includes('url')) {
    //     product = 'url';
    // } else if (location.includes('amazon-cloudwatch')) {
    //     product = 'aws-cloudwatch';
    // } else if (location.includes('amazon-ecs')) {
    //     product = 'aws-ecs';
    // } else if (location.includes('azure')) {
    //     product = 'azure';
    // } else if (location.includes('ncloud')) {
    //     product = 'ncloud';
    // }
    return (
        <img src={'/img/' + img + '-' + product + ext} alt={desc}
        />
    );
}