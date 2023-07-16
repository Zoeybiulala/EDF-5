import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { indigo, amber } from '@mui/material/colors'
import { createTheme } from "@mui/material/styles";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import DrugInfoPage from "./pages/DrugInfoPage";
import ComparisonLandingPage from "./pages/ComparisonLandingPage";
import ComparisonPage from "./pages/ComparisonPage";
import ComparisonWithoutPage from "./pages/ComparisonWithoutPage";
import ComparisonWithAIPage from "./pages/ComparisonWithAIPage";
import AdvancedPage from './pages/AdvancedPage';
import OTC from './pages/OTCPrescription';
import Advanced from './pages/Advanced';
import ErrorPage from './pages/ErrorPage';
import SearchResult from './pages/SearchResult';

// createTheme enables you to customize the look and feel of your app past the default
// in this case, we only change the color scheme
export const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: amber,
  },
});

// App is the root component of our application and as children contain all our pages
// We use React Router's BrowserRouter and Routes components to define the pages for
// our application, with each Route component representing a page and the common
// NavBar component allowing us to navigate between pages (with hyperlinks)
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/landingPage" element={<AlbumsPage />} />
          <Route path="/drugs" element={<AlbumsPage />} />
          <Route path="/drug/:drugName" element={<DrugInfoPage />} />
          <Route path="/comparison" element={<ComparisonLandingPage />} />
          <Route path="/comparison/withCondition" element={<ComparisonPage />} />
          <Route path="/comparison/withoutCondition" element={<ComparisonWithoutPage />} />
          <Route path="/comparison/withAI" element={<ComparisonWithAIPage />} />
          <Route path="/advancedpage" element={<AdvancedPage />} />
          <Route path="/otcandp" element={<OTC />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/error" element={<ErrorPage />}/>
          <Route path="/search-result/:searchType/:searchTerm" element={<SearchResult />}/>
          <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}