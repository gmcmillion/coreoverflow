import React from 'react';
import classNames from 'classnames';
import removeMd from 'remove-markdown';
import { Box, Card, Flex, Link, Token } from '@procore/core-react';
import './index.css';
import 'react-tagsinput/react-tagsinput.css';

const PUBLIC_URL = process.env.PUBLIC_URL || '';

const QuestionCard = props => {
  const {
    id,
    title,
    body,
    claps,
    timestamp,
    user,
    answerCount,
    userId,
    tags
  } = props.question;

  let bodyText = body;
  if (body && body.length > 250) {
    bodyText = body.substring(0, 250) + '...';
  }

  return (
    <Card className="card" level="30">
      <Box padding="md">
        <Flex>
          <Flex
            alignItems="center"
            direction="column"
            className="side-card-container"
          >
            <Box className="votes-container">
              <Flex alignItems="center" direction="column">
                <p className="card-vote-num">{claps}</p>
                <p className="card-vote-text">claps</p>
              </Flex>
            </Box>
            <Box
              className={classNames('answer-container', {
                'has-answer': answerCount > 0
              })}
            >
              <Flex alignItems="center" direction="column">
                <p
                  className={classNames('answer-vote-num', {
                    'has-answer': answerCount > 0
                  })}
                >
                  {answerCount}
                </p>
                <p
                  className={classNames('answer-vote-text', {
                    'has-answer': answerCount > 0
                  })}
                >
                  answers
                </p>
              </Flex>
            </Box>
          </Flex>
          <Flex direction="column" className="right-side-container">
            <Box>
              {/* TODO: remove hard coded URL */}
              <Link href={PUBLIC_URL + `/question/${id}`}>
                <p className="card-title">{title}</p>
              </Link>
            </Box>
            <Box>
              <Flex direction="column">
                <p className="card-body">{removeMd(bodyText)}</p>
                <div className="card-body">
                  {tags ? (
                    tags.map((tag, index) => {
                      return (
                        <Token key={index} className="tag">
                          <Token.Label>{tag}</Token.Label>
                        </Token>
                      );
                    })
                  ) : (
                    <div />
                  )}
                </div>
              </Flex>
            </Box>
            <Flex className="question-user-info" direction="column">
              <p className="subtext">
                Asked by
                <Link href={PUBLIC_URL + `/profile/userid=${userId}`}>
                  {` ${user}`}
                </Link>
                {` on ${timestamp.format('ll')}`}
              </p>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
};

export default QuestionCard;
