import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useLocation} from '@docusaurus/router';

export default function CheckProduct() {
    let location = useLocation();
    let cProd = location.pathname.split("/")[1];
    var product;
    if (cProd === 'nodejs') {
        product = '-nodejs';
    } else if (cProd === 'java') {
        product = '-java';
    } else if (cProd === 'php') {
        product = '-php';
    } else if (cProd === 'python') {
        product = '-python';
    } else if (cProd === 'golang') {
        product = '-golang';
    } else if (cProd === 'dotnet') {
        product = '-dotnet';
    } else if (cProd === 'server') {
        product = '-server';
    } else if (cProd === 'kubernetes') {
        product = '-k8s';
    } else if (cProd === 'postgresql') {
        product = '-postgresql';
    } else if (cProd === 'oracle-cloud') {
        product = '-oci';
    } else if (cProd === 'oracle') {
        product = '-oracle';
    } else if (cProd === 'mysql-rds') {
        product = '-mysql-rds';
    } else if (cProd === 'mysql') {
        product = '-mysql';
    } else if (cProd === 'mssql') {
        product = '-mssql';
    } else if (cProd === 'tibero') {
        product = '-tibero';
    } else if (cProd === 'cubrid') {
        product = '-cubrid';
    } else if (cProd === 'altibase') {
        product = '-altibase';
    } else if (cProd === 'redis') {
        product = '-redis';
    } else if (cProd === 'mongodb') {
        product = '-mongodb';
    } else if (cProd === 'url') {
        product = '-url';
    } else if (cProd === 'amazon-cloudwatch') {
        product = '-aws-cloudwatch';
    } else if (cProd === 'amazon-ecs') {
        product = '-aws-ecs';
    } else if (cProd === 'azure') {
        product = '-azure';
    } else if (cProd === 'ncloud') {
        product = '-ncloud';
    } else if (cProd === 'aws-log') {
        product = '-aws-log';
    } else if (cProd === 'log') {
        product = '-log';
    } else {
        product = '';
    }
    return (
        product
    );
}