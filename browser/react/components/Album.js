import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  componentDidMount () {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render () {
    const { album, currentSong, isPlaying, toggleOne } = this.props
    if (!album) return null;
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={ album.songs }
          currentSong={ currentSong }
          isPlaying={ isPlaying }
          toggleOne={ toggleOne } />
      </div>
    );
  }
}

export default Album;
