// TabsComponent.js
import React from 'react';
import Tab1Content from './TabContents/Tab1Content';
import Tab2Content from './TabContents/Tab2Content';
import Tab3Content from './TabContents/Tab3Content';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabsComponent = () => {
  return (
    <Tabs type="card">
      <TabPane tab="Doświadczenie" key="1">
        <Tab1Content />
      </TabPane>
      <TabPane tab="Znajomość technologii" key="2">
        <Tab2Content />
      </TabPane>
      <TabPane tab="Język" key="3">
        <Tab3Content />
      </TabPane>
      <TabPane tab="Edukacja" key="4">
        <Tab3Content />
      </TabPane>
      <TabPane tab="Certyfikaty" key="5">
        <Tab3Content />
      </TabPane>
    </Tabs>
  );
};

export default TabsComponent;
