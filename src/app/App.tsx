import AppHeader from 'components/Header';
import { ProposalsListPage } from 'features/proposals/proposalsList/ProposalsListPage';
import React from 'react';
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import { ProposalDetailsPage } from 'features/proposals/proposalDetails/ProposalDetailsPage';
import { InfoDetailsPage } from 'features/info/InfoDetailsPage';

function App() {
  return (
    <div>
      <AppHeader
        title="Decentralized Hive Fund"
        subtitle="A list of the latest proposals submitted to the Hive network" />
      <Container>
        <Route path="/" exact={true} render={() => (
          <ProposalsListPage />
        )} />
        <Route path={`/proposal/:id`} component={ProposalDetailsPage} />
        <Route path={"/info"} exact={true} component={InfoDetailsPage} />
      </Container>
    </div>
  );
}
export default App;
