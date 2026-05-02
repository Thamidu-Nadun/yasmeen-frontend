import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import {Route, Routes} from 'react-router-dom';
import {LanguageProvider} from './context/Language';
import {lazy, Suspense} from 'react';
import Mainlayout from './layout/Mainlayout';
import {Toaster} from 'react-hot-toast';
import Emails from './pages/Emails/Emails';

const Hero = lazy (() => import ('./pages/Home/Hero/Hero.jsx'));
const Composer = lazy (() => import ('./pages/Composer/Composer.jsx'));
const Logs = lazy (() => import ('./pages/Logs/Logs.jsx'));
const Dispatch = lazy (() => import ('./pages/Dispatch/Dispatch.jsx'));
const NotFound = lazy (() => import ('./pages/ErrorPages/NotFound.jsx'));

const App = () => {
  return (
    <LanguageProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 1500,
          style: {background: '#333', color: '#fff'},
        }}
      />
      <div className="bg-white w-screen h-screen">
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center bg-linear-to-b from-blue-50 to-white">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4" />
                <p className="text-gray-600 font-semibold">Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route element={<Mainlayout />}>
              <Route index element={<Hero />} />
              <Route path="/composer" element={<Composer />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/dispatch/:id" element={<Dispatch />} />
              <Route path="/emails" element={<Emails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </LanguageProvider>
  );
};

export default App;
