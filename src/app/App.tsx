import AppHeader from 'components/Header';
import { ProposalsListPage } from 'features/proposals/proposalsList/ProposalsListPage';
import { ProposalsStatsWidget } from 'features/proposals/proposalsList/ProposalsStatsWidget';
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader 
          title="Decentralized Hive Fund" 
          subtitle="A list of the latest proposals submitted to the Hive network"/>
        <Container>
          <ProposalsStatsWidget />
          <ProposalsListPage />
        </Container>
      </div>
    </Router>
  );
}
export default App;
