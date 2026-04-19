import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import {Route, Routes} from 'react-router-dom';
import {LanguageProvider} from './context/Language';
import {lazy, Suspense} from 'react';
import Mainlayout from './layout/Mainlayout';

const Hero = lazy (() => import ('./pages/Home/Hero/Hero'));
const Composer = lazy (() => import ('./pages/Composer/Composer'));
const Logs = lazy (() => import ('./pages/Logs/Logs'));
const Dispatch = lazy (() => import ('./pages/Dispatch/Dispatch'));

const App = () => {
  return (
    <LanguageProvider>
      <div className="bg-gray-100 w-screen h-screen">
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route element={<Mainlayout />}>
              <Route index element={<Hero />} />
              <Route path="/composer" element={<Composer />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/dispatch/*" element={<Dispatch />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </LanguageProvider>
  );
};

export default App;
