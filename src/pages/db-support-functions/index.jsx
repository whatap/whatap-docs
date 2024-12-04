import React, { useRef, useEffect } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import  "tabulator-tables/dist/css/tabulator.min.css";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import whatapLocale from '@site/src/components/ui-text/whatap-locale.json';

export default function App() {
  const { i18n: { currentLocale } } = useDocusaurusContext();

  const menuItem = (sid) => {
    let oText;
    try {
      oText = whatapLocale[sid][currentLocale];
    } catch (e) {
      console.log(e, sid);
    }
    return oText;
  };

  const instantList = menuItem("side_instanceList");
  const dbMonitoring = menuItem("side_dbMonitoring");
  const multiInstance = menuItem("side_multiInstance");
  const slowQueryLog = menuItem("side_slowQueryLog");
  const flexboard = menuItem("side_flexboard");
  const dbTrendComparison = menuItem("side_dbTrendComparison"); // 카운트 추이 비교
  const dbTrend = menuItem("side_dbTrend"); // 카운트 추이
  const dbLockTree = menuItem("side_dbLockTree"); // 락트리
  const deadLock = menuItem("side_deadLock"); // 데드락
  const sessionHistory = menuItem("side_sessionHistory"); // 세션 히스토리
  const dbWaitAnalysis = menuItem("side_dbWaitAnalysis"); // Wait 분석
  const dbSqlAnalysis = menuItem("side_dbSqlAnalysis"); // SQL 분석
  const dbObjectInfo = menuItem("side_dbObjectInfo"); // Top 오브젝트
  const dbTopSqlComparison = menuItem("side_dbTopSqlComparison");
  const dbParameter = menuItem("side_dbParameter"); // 데이터베이스 파라미터
  const metricsChart = menuItem("side_metricsChart");
  const metricsSearch = menuItem("side_metricsSearch");
  const metricsML = menuItem("side_metricsML");
  const pqTree = menuItem("side_pqTree"); // 병렬 쿼리 트리


  const funcs = [
    {
      category: "Dashboard",
      function: instantList,
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
      function: dbMonitoring,
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
      function: multiInstance,
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
      function: slowQueryLog,
      pgsql: "true",
      pgsqlv1: "true",
      oracle: "",
      oraclev1: "",
      oraclepro: "",
      mysql: "true",
      mysqlv1: "true",
      mssql: "",
      mssqlv1: "",
      tibero: "",
      cubrid: "true",
      cubridv1: "true",
      altibase: "",
      altibasev1: "",
      redis: "",
      redisv1: "",
      mongodb: "",
      mongodbv1: "",
    },
    {
      category: "Dashboard",
      function: flexboard,
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
      category: "Analysis",
      function: dbTrendComparison,
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
        width: "100wh", // 테이블 너비 설정
        height: "100%",
        autoResize: false,
        data: funcs, // 데이터
        layout: "fitColumns", // 레이아웃
        groupBy: "category", // 그룹핑 필드
        columns: [
          { title: "Function", field: "function", hozAlign: "left", headerHozAlign: "center", headerVertical:true, headerSort: false },
          { title: "PostgreSQL V2", field: "pgsql", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "PostgreSQL V1", field: "pgsqlv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Oracle V2", field: "oracle", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Oracle V1", field: "oraclev1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Oracle Pro", field: "oracle", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "MySQL V2", field: "mysql", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "MySQL V1", field: "mysqlv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "SQL Server V2", field: "mssql", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false, formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "SQL Server V1", field: "mssqlv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Tibero", field: "tibero", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "CUBRID V2", field: "cubrid", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "CUBRID V1", field: "cubridv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Altibase V2", field: "altibase", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Altibase V1", field: "altibasev1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Redis V2", field: "redis", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "Redis V1", field: "redisv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "MongoDb V2", field: "mongodb", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
          { title: "MongoDb V1", field: "mongodbv1", hozAlign: "center", headerHozAlign: "center", headerVertical:true, headerSort: false,formatter: "tickCross", formatterParams:{ allowEmpty:true } },
        ],
      });
    }, []); // 컴포넌트가 마운트될 때 한 번 실행

    return <div ref={tableRef} id="example-table" />;
  };
  
  return (
    <Layout>
      
      <h1>Supported Functions by Databases</h1>
      
      <RenderTable />
    </Layout>
  )
}
