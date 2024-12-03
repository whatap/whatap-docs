import React, { useRef, useEffect } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import  "tabulator-tables/dist/css/tabulator.min.css";
import Layout from '@theme/Layout';

const funcs = [
  {
    category: "Dashboard",
    function: "Instance List",
    pgsql: "true",
    pgsqlv1: "true",
    oracle: "true",
    oraclev1: "true",
    oraclepro: "true",
    mysql: "true",
    mysqlv1: "true",
    mssql: "true",
    mssqlv1: "true",
    tibero: "true",
    cubrid: "true",
    cubridv1: "true",
    altibase: "true",
    altibasev1: "true",
    redis: "true",
    redisv1: "true",
    mongodb: "true",
    mongodbv1: "true",
  },
  {
    category: "Dashboard",
    function: "Instance Monitoring",
    pgsql: "true",
    pgsqlv1: "true",
    oracle: "true",
    oraclev1: "true",
    oraclepro: "true",
    mysql: "true",
    mysqlv1: "true",
    mssql: "true",
    mssqlv1: "true",
    tibero: "true",
    cubrid: "true",
    cubridv1: "true",
    altibase: "true",
    altibasev1: "true",
    redis: "true",
    redisv1: "true",
    mongodb: "true",
    mongodbv1: "true",
  },
];

const RenderTable = () => {
  const tableRef = useRef(null); // DOM 요소를 참조하기 위한 Ref

  useEffect(() => {
    // Tabulator 인스턴스를 생성
    new Tabulator(tableRef.current, {
      height: "100wh", // 테이블 높이 설정
      autoResize: false,
      data: funcs, // 데이터
      layout: "fitColumns", // 레이아웃
      groupBy: "category", // 그룹핑 필드
      columns: [
        { title: "Function", field: "function", hozAlign: "left", headerHozAlign: "center", headerVertical:true, headerSort: false },
        { title: "PostgreSQL V2", field: "pgsql", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "PostgreSQL V1", field: "pgsqlv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "Oracle V2", field: "oracle", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "Oracle V1", field: "oraclev1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "Oracle Pro", field: "oracle", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "MySQL V2", field: "mysql", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "MySQL V1", field: "mysqlv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "SQL Server V2", field: "mssql", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross" },
        { title: "SQL Server V1", field: "mssqlv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "Tibero", field: "tibero", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "CUBRID V2", field: "cubrid", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "CUBRID V1", field: "cubridv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "Altibase V2", field: "altibase", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "Altibase V1", field: "altibasev1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "Redis V2", field: "redis", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "Redis V1", field: "redisv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "MongoDb V2", field: "mongodb", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
        { title: "MongoDb V1", field: "mongodbv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross" },
      ],
    });
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  return <div ref={tableRef} id="example-table" />;
};

export default function App() {
  return (
    <Layout>
      
      Supported Functions by Databases
      
      <RenderTable/>
    </Layout>
  )
}
