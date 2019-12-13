import React, {Component} from 'react';
import { connect } from 'react-redux';

import SidebarList from './SidebarList/SidebarList';
import * as actions from '../../store/actions/index';


import './Sidebar.css'

class Sidebar extends Component {
  

  selectedMusicHandler = (selectedMusic) => {
    // console.log(selectedMusic);
    this.props.onselectMusic(selectedMusic);
  }

      render(){
        const listData = [...this.props.list];

        return (
          <div className="results">
            <ul className="results__list">
              <SidebarList listData={listData} selectedMusicHandler={this.selectedMusicHandler} />
            </ul>
          </div>
        );
      }
}

const mapStateToProps = state => {
  return {
    list: state.musicListBuilder,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onselectMusic: selectedMusic => dispatch(actions.selectMusic(selectedMusic))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
