import React, {Component} from 'react';
import { connect } from 'react-redux';
import MusicImage from './MusicImage/MusicImage';
import MusicDataDisplay from './MusicDataDisplay/MusicDataDisplay';



import './MusicDetails.css'

class MusicDetails extends Component {

    render(){
        // console.log(this.props.selectSong[0]);
        const selectSong = this.props.selectSong[0];
        return(
            <div className="musicDeatials">
                <MusicImage selectSongData={selectSong}/>
                <MusicDataDisplay selectSongData={selectSong}/>
            </div>
        )
    }
} 


const mapStateToProps = state => {
    return {
        selectSong: state.musicDetailsBuilder,

    };
};

export default connect(mapStateToProps)(MusicDetails);