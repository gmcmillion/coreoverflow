import React from 'react';
import { Flex, Card } from '@procore/core-react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getAnswers,
  editAnswer,
  submitAnswer
} from '../../modules/actions/answers';

import {
  getCurrentQuestion,
  updateQuestions
} from '../../modules/actions/questions';

import Question from './question';
import AnswerList from './answerList';

import './index.css';
import QuestionSpinner from '../dashboard/questionSpinner';

class DetailedQuestion extends React.Component {
  constructor(props) {
    super(props);

    const questionId = this.props.match.params.id;

    this.props.getCurrentQuestion(questionId);
    this.props.getAnswers(questionId);
    console.log(questionId);
  }

  render() {
    return this.props.questionLoading ? (
      <QuestionSpinner />
    ) : (
      <Flex id="main-container" justifyContent="center" direction="column">
        <Card id="card-container" className="card" level="30">
          <Question 
            question={this.props.question}
            updateQuestions={this.props.updateQuestions}
            questionId={this.questionId}
          />
          <AnswerList
            answers={this.props.answers}
            answersBusy={this.props.answersBusy}
            answersError={this.props.answersError}
            editAnswer={this.props.editAnswer}
            submitAnswer={this.props.submitAnswer}
            questionId={this.props.match.params.id}
            userEmail={this.props.userEmail}
            userFirstName={this.props.userFirstName}
            userLastName={this.props.userLastName}
          />
        </Card>
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
  answers: state.answers.data,
  answersBusy: state.answers.busy,
  answersError: state.answers.error,
  userEmail: state.user.data.email,
  userFirstName: state.user.data.firstName,
  userLastName: state.user.data.lastName,
  question: state.question.currentQuestion,
  questionLoading: state.question.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCurrentQuestion,
      updateQuestions,
      getAnswers,
      editAnswer,
      submitAnswer
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedQuestion);
