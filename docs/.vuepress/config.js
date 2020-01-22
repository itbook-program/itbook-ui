module.exports = {
  base: '/itbook-ui/',
  title: 'itbook',
  description: '基于 mpvue 的 itbook ui框架',
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.ico`
    }]
  ],
  themeConfig: {
    repo: 'itbook-program/itbook-ui',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '文档',
        link: '/guide/'
      }
    ],
    sidebar: [{
        title: '快速开始',
        collapsable: false,
        children: [
          ['guide/', '介绍'],
          'guide/install'
        ]
      }, {
        title: '表单组件',
        collapsable: false,
        children: [
          'formComponent/button'
        ]
      }
    ]
  }
};
