import React from 'react';
import { IProposal } from 'interfaces/proposals/proposal';
import { VotingModal } from 'features/proposals/proposalModals/VotingModal';
import { ContentModal } from 'features/content/contentModals/ContentModal';
import useModal from 'helpers/useModal';
import { daysLeftFilter, vestsFilter } from 'helpers/filters';
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Badge,
  UncontrolledTooltip
} from "reactstrap";
type Props = {
  proposal: IProposal,
  style: string
}

export const ProposalListItem = ({ proposal, style }: Props) => {
  const { isOpenVotingModal, toggleVotingModal } = useModal(proposal);
  const { isOpenContentModal, toggleContentModal } = useModal(proposal);
  
  return (
    <div>
      <Card className={`card-stats mb-4 mt-4 mb-lg-0 ${style}`} key={proposal.id}>
        <CardBody>
          <Row>
            <Col className="col-11">
              <Row>
                <Col className="d-none d-lg-block col-lg-1 my-auto divider">
                  <a
                    className="avatar rounded-circle mr-3"
                    href={`https://peakd.com/@${proposal.creator}`}
                    target="_blank"
                  >
                    <img
                      alt="..."
                      src={`https://images.hive.blog/u/${proposal.creator}/avatar`}
                    />
                  </a>
                </Col>
                <Col className="col-sm-12 col-md-11">
                  <CardTitle className="mb-0">
                    <a className="text mr-2" onClick={toggleContentModal}>{proposal.subject}</a>
                    <a className="text display-5" onClick={toggleContentModal}></a>
                    <Link to={`/proposal/${proposal.proposal_id}`}><u>(#{proposal.proposal_id})</u></Link>
                    {proposal.receiver === "steem.dao" ?
                      <span>
                        <Badge color="success" className="ml-2" id="returnTooltip">Return proposal</Badge>
                        <UncontrolledTooltip
                          delay={0}
                          placement="top"
                          target="returnTooltip"
                        >
                          Return proposal acts as a threshold you need to pass to start receiving funding. Every proposal with less votes will not receive funds.
                      </UncontrolledTooltip>
                      </span>
                      : null
                    }
                    {proposal.receiver === "null" ?
                      <span>
                        <Badge color="warning" className="ml-2" id="burnTooltip">Burn proposal</Badge>
                        <UncontrolledTooltip
                          delay={0}
                          placement="top"
                          target="burnTooltip"
                        >
                          Burn proposal decreases HBD inflation, the funds will be sent to unrecoverable account (@null).
                      </UncontrolledTooltip>
                      </span>
                      : null
                    }
                  </CardTitle>
                  <p className="mt-1 mb-0">
                    <span className="text-sm mr-1 text-secondary2">
                      by <a href={`https://peakd.com/@${proposal.creator}`} className="mr-1" target="_blank">@{proposal.creator}</a>
                      {proposal.creator !== proposal.receiver ?
                        <span>
                          with receiver <a href={`https://peakd.com/@${proposal.receiver}`} target="_blank">@{proposal.receiver}</a>
                        </span>
                        : null
                      }
                    </span>
                    <Badge className="secondary2 mr-2">{vestsFilter(proposal.total_votes.toString())} HP</Badge>
                    <Badge className="secondary2 mr-2">{proposal.daily_pay.amount} HBD/day</Badge>
                    <Badge className="secondary2 mr-2">{daysLeftFilter(proposal.end_date)}</Badge>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="d-none d-lg-block col-lg-1">
              <div className="icon icon-shape bg-secondary2 text-dark rounded-circle shadow upvote-icon" onClick={toggleVotingModal}>
                <i className="fas fa-angle-up"></i>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <VotingModal
        isShowing={isOpenVotingModal}
        hide={toggleVotingModal}
        proposalId={proposal.id} />
      <ContentModal
        isShowing={isOpenContentModal}
        hide={toggleContentModal}
        proposal={proposal}
      />
    </div>
  )
}
