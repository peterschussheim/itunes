import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  backgroundColor: 'rgba(68, 68, 68, 0.16)',
  color: 'black',
  borderRadius: '0px',
  width: '50%',
  padding: '20px',
  fontSize: '100%'
}

export default class SearchResults extends React.Component {
  static propTypes = {
    resultCount: PropTypes.number,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        wrapperType: PropTypes.string,
        collectionType: PropTypes.string,
        artistId: PropTypes.number,
        collectionId: PropTypes.number,
        amgArtistId: PropTypes.number,
        artistName: PropTypes.string,
        collectionName: PropTypes.string,
        collectionCensoredName: PropTypes.string,
        artistViewUrl: PropTypes.string,
        collectionViewUrl: PropTypes.string,
        artworkUrl60: PropTypes.string,
        artworkUrl100: PropTypes.string,
        collectionPrice: PropTypes.number,
        collectionExplicitness: PropTypes.string,
        contentAdvisoryRating: PropTypes.string,
        trackCount: PropTypes.number,
        copyright: PropTypes.string,
        country: PropTypes.string,
        currency: PropTypes.string,
        releaseDate: PropTypes.string,
        primaryGenreName: PropTypes.string
      })
    )
  }

  render() {
    const { data } = this.props
    return (
      <div id="searchResults">
        <h2>{`Popular albums by ${data[0].artistName}`}</h2>
        <div style={styles}>
          {data.map(album => {
            return (
              <div key={album.collectionId}>
                <img
                  src={album.artworkUrl100}
                  alt={`${album.collectionName} cover-art`}
                />
                <p>{album.collectionName}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
