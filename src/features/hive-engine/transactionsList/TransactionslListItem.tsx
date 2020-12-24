import { ITransaction } from 'interfaces/hive-engine/transaction';
import React from 'react';
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Badge
} from "reactstrap";

type Props = {
  transaction: ITransaction
}

export const TransactionsListItem = ({ transaction }: Props) => {
  return (
    <div>
      <Card className="card-stats mb-4 mt-4 mb-lg-0">
        <CardBody>
          <Row>
            <Col className="col-11">
              <Row>
                <Col className="d-none d-lg-block col-lg-1 my-auto divider">
                  <a
                    className="avatar rounded-circle mr-3"
                    href={`https://hive-engine.com`}
                    target="_blank"
                  >
                    <img
                      alt="..."
                      src={`https://hive-engine.com/images/logo-dark.png`}
                    />
                  </a>
                </Col>
                <Col className="col-sm-12 col-md-11">
                  <CardTitle className="mb-0">
                    <a className="text mr-2">{transformText(transaction)}</a>
                  </CardTitle>
                  <p className="mt-1 mb-0">
                    <Badge className="secondary2 mr-2"><Link className="" to={`/hive-engine/block/${transaction.refHiveBlockNumber}`}>#{transaction.refHiveBlockNumber}</Link></Badge>
                    <Badge className="secondary2 mr-2"><Link to={`/hive-engine/transaction/${transaction.transactionId}`}>{transaction.transactionId.slice(0, 4) + '..' + transaction.transactionId.slice(36, 40)}</Link></Badge>
                    <Badge color="warning" className="mr-2">{transaction.contract}</Badge>
                    {/* <Badge color="warning" className="mr-2">{parseEvent(transaction.logs)}</Badge> */}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

function transformText(payload: ITransaction) {
  let parsedLogs = JSON.parse(payload.logs);
  // let parsedContract = payload.contract;
  let parsedPayload = JSON.parse(payload.payload);
  
  if (parsedLogs && parsedLogs.errors) {
    return `Execution contract error: ${parsedLogs.errors[0]}`;
  }
  if (parsedLogs && parsedLogs.events.length) {
    return JSON.stringify(parsedLogs.events[0].data);
  }
  if (!parsedLogs && !parsedLogs.length) {
    return JSON.stringify(parsedPayload);
  }
}

// function parseEvent(payload: string) {
//   let parsedText = JSON.parse(payload);
//   console.log(parsedText);
//   if(parsedText && (parsedText !== undefined) && (parsedText !== null)) {
//     return parsedText;
//   }
//   if(parsedText && parsedText.events){
//     let event = parsedText.events[0].event;
//     return event.split(/(?=[A-Z])/).join(' ');
//   }
//   else {
//     return null;
//   }
//   // if (parsedText && parsedText.events !== undefined) {

//   // } else {
//   //   return null;
//   // }
// }

// function parseText(payload: string) {
//   return JSON.parse(payload);
// }