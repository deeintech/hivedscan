import AppHeader from 'components/Header';
import { ProposalsListPage } from 'features/proposals/proposalsList/ProposalsListPage';
import React from 'react';
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import { ProposalDetailsPage } from 'features/proposals/proposalDetails/ProposalDetailsPage';
import { InfoDetailsPage } from 'features/info/InfoDetailsPage';
import { MainPage } from 'features/main/MainPage';
import AppNavbar from 'components/Nav';

function App() {
  return (
    <div>
      <AppNavbar />
      <Route path="/fund" exact={true} render={() => (
        <AppHeader
          title="Decentralized Hive"
          subtitle="Hive Fund, etc" />
      )} />
      <Container>
        <Route path="/" exact={true} render={() => (
          <MainPage />
        )} />
        <Route path="/fund" exact={true} render={() => (
          <ProposalsListPage />
        )} />
        <Route path={`/proposal/:id`} component={ProposalDetailsPage} />
        <Route path={"/info"} exact={true} component={InfoDetailsPage} />
      </Container>
    </div>
  );
}
export default App;
