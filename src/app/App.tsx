import AppHeader from 'components/Header';
import { ProposalsListPage } from 'features/proposals/proposalsList/ProposalsListPage';
import React from 'react';
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import { ProposalDetailsPage } from 'features/proposals/proposalDetails/ProposalDetailsPage';
import AppNavbar from 'components/Nav';
import AppFooter from 'components/Footer';

function App() {
  return (
    <div>
      <AppNavbar />
      <Route path="/" exact={true} render={() => (
        <AppHeader
          title="Decentralized Hive Fund"
          subtitle="A list of the latest proposals submitted to the Hive network" />
      )} />
      <Container>
        <Route path="/" exact={true} render={() => (
          <ProposalsListPage />
        )} />
        <Route path={`/proposal/:id`} component={ProposalDetailsPage} />
      </Container>
      <AppFooter />
    </div>
  );
}
export default App;
