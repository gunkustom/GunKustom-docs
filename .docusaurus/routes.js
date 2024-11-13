import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/GunKustom-docs/blog',
    component: ComponentCreator('/GunKustom-docs/blog', '22a'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/archive',
    component: ComponentCreator('/GunKustom-docs/blog/archive', '0e8'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/authors',
    component: ComponentCreator('/GunKustom-docs/blog/authors', 'c1d'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/GunKustom-docs/blog/authors/all-sebastien-lorber-articles', 'bba'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/authors/yangshun',
    component: ComponentCreator('/GunKustom-docs/blog/authors/yangshun', '16c'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/first-blog-post',
    component: ComponentCreator('/GunKustom-docs/blog/first-blog-post', 'd11'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/long-blog-post',
    component: ComponentCreator('/GunKustom-docs/blog/long-blog-post', 'cf2'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/mdx-blog-post',
    component: ComponentCreator('/GunKustom-docs/blog/mdx-blog-post', '323'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/tags',
    component: ComponentCreator('/GunKustom-docs/blog/tags', '858'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/tags/docusaurus',
    component: ComponentCreator('/GunKustom-docs/blog/tags/docusaurus', 'bbf'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/tags/facebook',
    component: ComponentCreator('/GunKustom-docs/blog/tags/facebook', '908'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/tags/hello',
    component: ComponentCreator('/GunKustom-docs/blog/tags/hello', '18f'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/tags/hola',
    component: ComponentCreator('/GunKustom-docs/blog/tags/hola', '9a4'),
    exact: true
  },
  {
    path: '/GunKustom-docs/blog/welcome',
    component: ComponentCreator('/GunKustom-docs/blog/welcome', '3db'),
    exact: true
  },
  {
    path: '/GunKustom-docs/markdown-page',
    component: ComponentCreator('/GunKustom-docs/markdown-page', '576'),
    exact: true
  },
  {
    path: '/GunKustom-docs/docs',
    component: ComponentCreator('/GunKustom-docs/docs', '559'),
    routes: [
      {
        path: '/GunKustom-docs/docs',
        component: ComponentCreator('/GunKustom-docs/docs', 'b06'),
        routes: [
          {
            path: '/GunKustom-docs/docs',
            component: ComponentCreator('/GunKustom-docs/docs', '791'),
            routes: [
              {
                path: '/GunKustom-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/GunKustom-docs/docs/category/tutorial---basics', '4ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/GunKustom-docs/docs/category/tutorial---extras', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/intro',
                component: ComponentCreator('/GunKustom-docs/docs/intro', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-basics/congratulations', '31d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-basics/create-a-blog-post', 'e4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-basics/create-a-document', 'dbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-basics/create-a-page', 'cf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-basics/deploy-your-site', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-basics/markdown-features', 'fc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-extras/manage-docs-versions', '1b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GunKustom-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/GunKustom-docs/docs/tutorial-extras/translate-your-site', 'c8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/GunKustom-docs/',
    component: ComponentCreator('/GunKustom-docs/', '944'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
