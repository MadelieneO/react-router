import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props) {
    super(props);

    console.log('~~~~~ props: ', props)
    //const id = props...//props.routeParams.albumId;
    //console.log('~~~~~ props: ', id)
    // const album = props.album;
    // const currentSong = props.currentSong;
    // const isPlaying = props.isPlaying;
    // const toggleOne = props.toggleOne;

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
}

export default Album;
