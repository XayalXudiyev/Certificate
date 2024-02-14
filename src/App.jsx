// App.js

import React from 'react';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Signature from './components/signature/Signature';
import Select from './components/select/Select';
import PdfDownload from './components/pdfDownload/PdfDownload';

const App = () => {
  return (
    <div className='container m-auto text-center py-8 min-h-screen'>
      {/* <Hero />
      <div className='w-full flex justify-end'>
        <Select />
      </div>
      <Main />
      <Signature /> */}
      <PdfDownload />
    </div>
  );
};

export default App;
