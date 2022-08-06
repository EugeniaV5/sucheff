import { GlobalStyle } from './GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import createChunk from '../customHooks/createChunk';
import AppBar from './AppBar/AppBar';

const MainPage = createChunk('MainPage');

export const App = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<MainPage />}></Route>
          {/* <Route path="about-us" element={<AboutUsPage />}></Route>
          <Route path="delivery" element={<DeliveryPage />}></Route>
          <Route path="news" element={<NewsPage />}></Route> */}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>{' '}
    </div>
  );
};
