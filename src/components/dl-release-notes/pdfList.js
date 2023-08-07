const svList = [
    {
        name: 'service-1.104.x',
        date: '2023-06-28',
        url: '/pdf/release-notes/service-1.104.x.pdf',
        docs: '/release-notes/service/service-1_104_x'
    },
    {
        name: 'service-1.102.x',
        date: '2023-05-24',
        url: '/pdf/release-notes/service-1.102.x.pdf',
        docs: '/release-notes/service/service-1_102_x'
    },
    {
        name: 'service-1.100.x',
        date: '2023-04-26',
        url: '/pdf/release-notes/service-1.100.x.pdf',
        docs: '/release-notes/service/service-1_100_x'
    },
    {
        name: 'service-1.98.x',
        date: '2023-03-29',
        url: '/pdf/release-notes/service-1.98.x.pdf',
        docs: '/release-notes/service/service-1_98_x'
    },
    {
        name: 'service-1.96.0',
        date: '2023-02-22',
        url: '/pdf/release-notes/service-1.96.0.pdf',
        docs: '/release-notes/service/service-1_96_0'
    },
    {
        name: 'service-1.94.0',
        date: '2023-01-11',
        url: '/pdf/release-notes/service-1.94.0.pdf',
        docs: '/release-notes/service/service-1_94_0'
    },
    {
        name: 'service-1.92.0',
        date: '2022-11-24',
        url: '/pdf/release-notes/service-1.92.0.pdf',
        docs: '/release-notes/service/service-1_92_0'
    },
    {
        name: 'service-1.90.0',
        date: '2022-10-18',
        url: '/pdf/release-notes/service-1.90.0.pdf',
        docs: '/release-notes/service/service-1_90_0'
    },
    {
        name: 'service-1.88.0',
        date: '2022-09-28',
        url: '/pdf/release-notes/service-1.88.0.pdf',
        docs: '/release-notes/service/service-1_88_0'
    },
    {
        name: 'service-1.86.0',
        date: '2022-09-14',
        url: '/pdf/release-notes/service-1.86.0.pdf',
        docs: '/release-notes/service/service-1_86_0'
    },
    {
        name: 'service-1.84.0',
        date: '2022-08-24',
        url: '/pdf/release-notes/service-1.84.0.pdf',
        docs: '/release-notes/service/service-1_84_0'
    },
    {
        name: 'service-1.82.0',
        date: '2022-07-27',
        url: '/pdf/release-notes/service-1.82.0.pdf',
        docs: '/release-notes/service/service-1_82_0'
    },
    {
        name: 'service-1.80.0',
        date: '2022-07-13',
        url: '/pdf/release-notes/service-1.80.0.pdf',
        docs: '/release-notes/service/service-1_80_0'
    },
    {
        name: 'service-1.78.0',
        date: '2022-06-22',
        url: '/pdf/release-notes/service-1.78.0.pdf',
        docs: '/release-notes/service/service-1_78_0'
    },
    {
        name: 'service-1.76.0',
        date: '2022-06-08',
        url: '/pdf/release-notes/service-1.76.0.pdf',
        docs: '/release-notes/service/service-1_76_0'
    },
    {
        name: 'service-1.74.0',
        date: '2022-05-25',
        url: '/pdf/release-notes/service-1.74.0.pdf',
        docs: '/release-notes/service/service-1_74_0'
    },
    {
        name: 'service-1.72.0',
        date: '2022-05-11',
        url: '/pdf/release-notes/service-1.72.0.pdf',
        docs: '/release-notes/service/service-1_72_0'
    },
    {
        name: 'service-1.70.0',
        date: '2022-04-20',
        url: '/pdf/release-notes/service-1.70.0.pdf',
        docs: '/release-notes/service/service-1_70_0'
    },
    {
        name: 'service-1.68.0',
        date: '2022-04-06',
        url: '/pdf/release-notes/service-1.68.0.pdf',
        docs: '/release-notes/service/service-1_68_0'
    },
    {
        name: 'service-1.66.0',
        date: '2022-03-23',
        url: '/pdf/release-notes/service-1.66.0.pdf',
        docs: '/release-notes/service/service-1_66_0'
    },
    {
        name: 'service-1.64.0',
        date: '2022-03-09',
        url: '/pdf/release-notes/service-1.64.0.pdf',
        docs: '/release-notes/service/service-1_64_0'
    },
    {
        name: 'service-1.62.0',
        date: '2022-02-20',
        url: '/pdf/release-notes/service-1.62.0.pdf',
        docs: '/release-notes/service/service-1_62_0'
    },
    {
        name: 'service-1.60.0',
        date: '2022-02-09',
        url: '/pdf/release-notes/service-1.60.0.pdf',
        docs: '/release-notes/service/service-1_60_0'
    },
    {
        name: 'service-1.58.0',
        date: '2022-01-19',
        url: '/pdf/release-notes/service-1.58.0.pdf',
        docs: '/release-notes/service/service-1_58_0'
    },
    {
        name: 'service-1.56.0',
        date: '2022-01-05',
        url: '/pdf/release-notes/service-1.56.0.pdf',
        docs: '/release-notes/service/service-1_56_0'
    },
    {
        name: 'service-1.54.0',
        date: '2021-12-28',
        url: '/pdf/release-notes/service-1.54.0.pdf',
        docs: '/release-notes/service/service-1_54_0'
    },
    // 추가적인 PDF 파일들을 원하는 만큼 목록에 추가할 수 있습니다.
];

const javaList = [
    {
        name: 'java-agent-v2.2.12',
        date: '2023-07-21',
        url: '/pdf/release-notes/java-agent-v2.2.12.pdf',
        docs: '/release-notes/java/java-2_2_12',
    },
    {
        name: 'java-agent-v2.2.11',
        date: '2023-07-10',
        url: '/pdf/release-notes/java-agent-v2.2.11.pdf',
        docs: '/release-notes/java/java-2_2_11',
    },
    {
        name: 'java-agent-v2.2.10',
        date: '2023-06-29',
        url: '/pdf/release-notes/java-agent-v2.2.10.pdf',
        docs: '/release-notes/java/java-2_2_10',
    },
    {
        name: 'java-agent-v2.2.09',
        date: '2023-06-16',
        url: '/pdf/release-notes/java-agent-v2.2.9.pdf',
        docs: '/release-notes/java/java-2_2_9',
    },
    {
        name: 'java-agent-v2.2.08',
        date: '2023-06-09',
        url: '/pdf/release-notes/java-agent-v2.2.8.pdf',
        docs: '/release-notes/java/java-2_2_8',
    },
    {
        name: 'java-agent-v2.2.07',
        date: '2023-06-05',
        url: '/pdf/release-notes/java-agent-v2.2.7.pdf',
        docs: '/release-notes/java/java-2_2_7',
    },
    {
        name: 'java-agent-v2.2.06',
        date: '2023-06-01',
        url: '/pdf/release-notes/java-agent-v2.2.6.pdf',
        docs: '/release-notes/java/java-2_2_6',
    },
    {
        name: 'java-agent-v2.2.05',
        date: '2023-05-30',
        url: '/pdf/release-notes/java-agent-v2.2.5.pdf',
        docs: '/release-notes/java/java-2_2_5',
    },
    {
        name: 'java-agent-v2.2.04',
        date: '2023-05-25',
        url: '/pdf/release-notes/java-agent-v2.2.4.pdf',
        docs: '/release-notes/java/java-2_2_4',
    },
    {
        name: 'java-agent-v2.2.03',
        date: '2023-02-14',
        url: '/pdf/release-notes/java-agent-v2.2.3.pdf',
        docs: '/release-notes/java/java-2_2_3',
    },
    {
        name: 'java-agent-v2.2.02',
        date: '2022-12-21',
        url: '/pdf/release-notes/java-agent-v2.2.2.pdf',
        docs: '/release-notes/java/java-2_2_2',
    },
    {
        name: 'java-agent-v2.2.0',
        date: '2022-11-01',
        url: '/pdf/release-notes/java-agent-v2.2.0.pdf',
        docs: '/release-notes/java/java-2_2_0',
    },
    {
        name: 'java-agent-v2.1.3',
        date: '2022-09-01',
        url: '/pdf/release-notes/java-agent-v2.2.0.pdf',
        docs: '/release-notes/java/java-2_2_0',
    },
];

export {svList, javaList}