import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";
import './App.css';
import FlightDetails from './components/FlightDetails';
import FlightList from './components/FlightList';
import { FlightDetailProvider, FlightProvider } from './contexts/flightContext';

const FlightDetailProviderWrapper = ({ children }) => {
  const { id } = useParams();
  return <FlightDetailProvider id={id}>{children}</FlightDetailProvider>;
};

function App() {
  return (
    <div>
      <FlightProvider>
        <Router>
            <h2 className="text-center">Flight Information</h2>
            <Routes>
                <Route path="/" element={<FlightList />} />
                <Route path="/detail/:id" element={<FlightDetailProviderWrapper><FlightDetails /></FlightDetailProviderWrapper>} />
            </Routes>
        </Router>
      </FlightProvider>
    </div>
  );
}

export default App;