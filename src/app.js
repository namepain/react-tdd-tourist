import React from 'react';
import { Spin } from 'antd'

import './common/global.less'

import Pages from './pages'

const App = () => {
  return (
    <React.Suspense fallback={ <Spin size="large" className="fix__center" /> }>
      <Pages />
    </React.Suspense>
  );
}

export default App
