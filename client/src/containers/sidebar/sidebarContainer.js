import React from 'react';
import SideBar from './index.js';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { toggleModal } from '../../modules/sidebar.js';
import CoreModal from '../coremodal/coremodal';

const SideBarContainer = props => (
  <div>
    <SideBar
      toggleModal={props.toggleModal}
      changePage={() => props.changePage()}
    />
    <CoreModal 
      open={props.isModalOpen} 
      close={props.toggleModal}
      type='post'
    />
  </div>
);

const mapStateToProps = ({ sidebar }) => {
  return {
    isModalOpen: sidebar.isModalOpen
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModal,
      changePage: () => push('/my-questions')
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);