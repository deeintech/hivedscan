import AppHeader from 'components/Header';
import { ProposalsListPage } from 'features/proposals/proposalsList/ProposalsListPage';
import React from 'react';
import { Container } from "reactstrap";
import { Route } from "react-router-dom";
import { ProposalDetailsPage } from 'features/proposals/proposalDetails/ProposalDetailsPage';
import AppNavbar from 'components/Nav';
import AppFooter from 'components/Footer';
import { TransactionsListPage } from 'features/hive-engine/transactionsList/TransactionsListPage';
import { MainPage } from 'features/main/MainPage';

function App() {
  return (
    <div>
      <AppNavbar />
      {/* <Route path="/" exact={true} render={() => (
        <AppHeader
          title="Decentralized Hive Fund"
          subtitle="A list of the latest proposals submitted to the Hive network" />
      )} /> */}
      <Route path="/fund" exact={true} render={() => (
        <AppHeader
          title="Decentralized Hive Fund"
          subtitle="The latest proposals submitted to the Hive network" />
      )} />
      <Route path="/hive-engine" exact={true} render={() => (
        <AppHeader
          title="Hive Engine Explorer"
          subtitle="The latest smart contracts transactions on Hive" />
      )} />
      <Container>
      <Route path="/" exact={true} render={() => (
          <MainPage />
        )} />
        <Route path="/fund" exact={true} render={() => (
          <ProposalsListPage />
        )} />
        <Route path={`/proposal/:id`} component={ProposalDetailsPage} />
        <Route path="/hive-engine" exact={true} render={() => (
          <TransactionsListPage />
        )} />
      </Container>
      <AppFooter />
    </div>
  );
}
export default App;
