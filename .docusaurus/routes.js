import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'de7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e0e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '330'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'df3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '813'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e2f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '1d4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'd65'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/',
        component: ComponentCreator('/join-us/', 'b68'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/community-marketing-&-communications-strategist',
        component: ComponentCreator('/join-us/community-marketing-&-communications-strategist', '592'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/creative-visual-designer',
        component: ComponentCreator('/join-us/creative-visual-designer', '14c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/digital-communications-lead',
        component: ComponentCreator('/join-us/digital-communications-lead', 'a97'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/grassroots-community-organizer',
        component: ComponentCreator('/join-us/grassroots-community-organizer', '6cf'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/head-of-copy',
        component: ComponentCreator('/join-us/head-of-copy', '7d7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/studio-design-lead',
        component: ComponentCreator('/join-us/studio-design-lead', '8ca'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/join-us/web-developer',
        component: ComponentCreator('/join-us/web-developer', '0b6'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
