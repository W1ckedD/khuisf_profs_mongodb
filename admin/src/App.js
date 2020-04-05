import React, { useContext, useEffect } from 'react';

// Context
import {
    Context as AuthContext,
    Provider as AuthProvider
} from './context/AuthContext';
import { Provider as ProfProvider } from './context/ProfContext';
import { Provider as PositionProvider } from './context/PositionContext';
import { Provider as MajorProvider } from './context/MajorContext';
import { Provider as FacultyProvider } from './context/FacultyContext';
import { Provider as DownloadProvider } from './context/DownloadContext';

// React Router
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// Navbar
import Navbar from './components/Navbar';

// Auth
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

// Profs
import ProfsScreen from './screens/profs/ProfsScreen';
import AddProfScreen from './screens/profs/AddProfScreen';
import ProfDetailsScreen from './screens/profs/ProfDetailsScreen';
import ProfDownloadScreen from './screens/profs/ProfDownloadScreen';

// Positions
import PositionsScreen from './screens/positions/PositionsScreen';

// Majors
import MajorsScreen from './screens/majors/MajorsScreen';

// Faculties
import FacultiesScreen from './screens/faculties/FacultiesScreen';

function App() {
    const { state, checkIfAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        checkIfAuthenticated();
    }, []);
    if (state.token) {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Route path="/downloads/:id">
                        <ProfDownloadScreen />
                    </Route>
                    <Route path="/profs/:id">
                        <ProfDetailsScreen />
                    </Route>
                    <Route exact path="/profs">
                        <ProfsScreen />
                    </Route>
                    <Route path="/add-prof">
                        <AddProfScreen />
                    </Route>
                    <Route path="/positions">
                        <PositionsScreen />
                    </Route>
                    <Route path="/majors">
                        <MajorsScreen />
                    </Route>
                    <Route path="/faculties">
                        <FacultiesScreen />
                    </Route>
                    <Redirect from="*" to="/profs" />
                </Router>
            </div>
        );
    } else {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/login">
                            <LoginScreen />
                        </Route>
                        <Route path="/register">
                            <RegisterScreen />
                        </Route>
                        <Redirect from="*" to="/login" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default () => (
    <AuthProvider>
        <ProfProvider>
            <DownloadProvider>
                <PositionProvider>
                    <MajorProvider>
                        <FacultyProvider>
                            <App />
                        </FacultyProvider>
                    </MajorProvider>
                </PositionProvider>
            </DownloadProvider>
        </ProfProvider>
    </AuthProvider>
);
