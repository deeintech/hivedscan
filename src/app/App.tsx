import AppHeader from 'components/header';
import AppStats from 'components/stats';
import { ProposalsListPage } from 'features/proposals/proposalsList/proposalsListPage';
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Container>
          <AppStats />
          <ProposalsListPage />
        </Container>
      </div>
    </Router>
  );
}
export default App;
