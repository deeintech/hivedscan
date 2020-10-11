import AppHeader from 'components/Header';
import AppStats from 'components/Stats';
import { ProposalsListPage } from 'features/proposals/proposalsList/ProposalsListPage';
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
          <AppStats />
          <ProposalsListPage />
        </Container>
      </div>
    </Router>
  );
}
export default App;
