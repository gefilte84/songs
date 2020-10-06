import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// klasse basert komponent
class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
// state er all data vi har i 'store'
// returnerer alltid en state
const mapStateToProps = state => {
    return { songs: state.songs };
};

// connect fra react redux
// alltid en funksjon og en komponent
// med connect så slipper vi dispatch funksjonen
export default connect(
    mapStateToProps,
     { selectSong }
     )(SongList);