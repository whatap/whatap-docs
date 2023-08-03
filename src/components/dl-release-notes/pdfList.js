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
        docs: '/release-notes/service/service-1_96_x'
    },
    {
        name: 'service-1.94.0',
        date: '2023-01-11',
        url: '/pdf/release-notes/service-1.94.0.pdf',
        docs: '/release-notes/service/service-1_94_x'
    },
    {
        name: 'service-1.92.0',
        date: '2022-11-24',
        url: '/pdf/release-notes/service-1.92.0.pdf',
        docs: '/release-notes/service/service-1_92_x'
    },
    {
        name: 'service-1.90.0',
        date: '2022-10-18',
        url: '/pdf/release-notes/service-1.90.0.pdf',
        docs: '/release-notes/service/service-1_90_x'
    },
    {
        name: 'service-1.88.0',
        date: '2022-09-28',
        url: '/pdf/release-notes/service-1.88.0.pdf',
        docs: '/release-notes/service/service-1_88_x'
    },
    {
        name: 'service-1.86.0',
        date: '2022-09-14',
        url: '/pdf/release-notes/service-1.86.0.pdf',
        docs: '/release-notes/service/service-1_86_x'
    },
    {
        name: 'service-1.84.0',
        date: '2022-08-24',
        url: '/pdf/release-notes/service-1.84.0.pdf',
        docs: '/release-notes/service/service-1_84_x'
    },
    {
        name: 'service-1.82.0',
        date: '2022-07-27',
        url: '/pdf/release-notes/service-1.82.0.pdf',
        docs: '/release-notes/service/service-1_82_x'
    },
    {
        name: 'service-1.80.0',
        date: '2022-07-13',
        url: '/pdf/release-notes/service-1.80.0.pdf',
        docs: '/release-notes/service/service-1_80_x'
    },
    {
        name: 'service-1.78.0',
        date: '2022-06-22',
        url: '/pdf/release-notes/service-1.78.0.pdf',
        docs: '/release-notes/service/service-1_78_x'
    },
    {
        name: 'service-1.76.0',
        date: '2022-06-08',
        url: '/pdf/release-notes/service-1.76.0.pdf',
        docs: '/release-notes/service/service-1_76_x'
    },
    {
        name: 'service-1.74.0',
        date: '2022-05-25',
        url: '/pdf/release-notes/service-1.74.0.pdf',
        docs: '/release-notes/service/service-1_74_x'
    },
    {
        name: 'service-1.72.0',
        date: '2022-05-11',
        url: '/pdf/release-notes/service-1.72.0.pdf',
        docs: '/release-notes/service/service-1_72_x'
    },
    {
        name: 'service-1.70.0',
        date: '2022-04-20',
        url: '/pdf/release-notes/service-1.70.0.pdf',
        docs: '/release-notes/service/service-1_70_x'
    },
    {
        name: 'service-1.68.0',
        date: '2022-04-06',
        url: '/pdf/release-notes/service-1.68.0.pdf',
        docs: '/release-notes/service/service-1_68_x'
    },
    {
        name: 'service-1.66.0',
        date: '2022-03-23',
        url: '/pdf/release-notes/service-1.66.0.pdf',
        docs: '/release-notes/service/service-1_66_x'
    },
    {
        name: 'service-1.64.0',
        date: '2022-03-09',
        url: '/pdf/release-notes/service-1.64.0.pdf',
        docs: '/release-notes/service/service-1_64_x'
    },
    {
        name: 'service-1.62.0',
        date: '2022-02-20',
        url: '/pdf/release-notes/service-1.62.0.pdf',
        docs: '/release-notes/service/service-1_62_x'
    },
    {
        name: 'service-1.60.0',
        date: '2022-02-09',
        url: '/pdf/release-notes/service-1.60.0.pdf',
        docs: '/release-notes/service/service-1_60_x'
    },
    {
        name: 'service-1.58.0',
        date: '2022-01-19',
        url: '/pdf/release-notes/service-1.58.0.pdf',
        docs: '/release-notes/service/service-1_58_x'
    },
    {
        name: 'service-1.56.0',
        date: '2022-01-05',
        url: '/pdf/release-notes/service-1.56.0.pdf',
        docs: '/release-notes/service/service-1_56_x'
    },
    {
        name: 'service-1.54.0',
        date: '2021-12-28',
        url: '/pdf/release-notes/service-1.54.0.pdf',
        docs: '/release-notes/service/service-1_54_x'
    },
    // 추가적인 PDF 파일들을 원하는 만큼 목록에 추가할 수 있습니다.
];

const javaList = [
    {
        name: 'java-agent-v2.2.12',
        url: '/pdf/release-notes/java-agent-v2.2.12.pdf',
    },
    {
        name: 'java-agent-v2.2.11',
        url: '/pdf/release-notes/java-agent-v2.2.11.pdf',
    },
    {
        name: 'java-agent-v2.2.10',
        url: '/pdf/release-notes/java-agent-v2.2.10.pdf',
    },
    {
        name: 'java-agent-v2.2.09',
        url: '/pdf/release-notes/java-agent-v2.2.9.pdf',
    },
    {
        name: 'java-agent-v2.2.08',
        url: '/pdf/release-notes/java-agent-v2.2.8.pdf',
    },
    {
        name: 'java-agent-v2.2.07',
        url: '/pdf/release-notes/java-agent-v2.2.7.pdf',
    },
];

export {svList, javaList}