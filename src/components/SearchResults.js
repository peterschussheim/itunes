import React from 'react'
import PropTypes from 'prop-types'

import { ScrollButton } from './Button'

const styles = {
  searchResults: {
    maxWidth: '60%'
  },
  img: {
    gridArea: 'img',
    maxWidth: '100%'
  },
  media: {
    display: 'grid',
    gridColumnGap: '20px',
    marginBottom: '2em',
    gridTemplateColumns: 'minmax(100px, 0fr) 3fr',
    gridTemplateAreas: '"img" "name"'
  }
}

export default class SearchResults extends React.Component {
  static propTypes = {
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
    ).isRequired
  }

  render() {
    const { results, loading } = this.props

    return (
      <React.Fragment>
        <h2 style={styles.name}>{`Popular albums by ${
          results[0].artistName
        }`}</h2>
        {loading && !results ? null : (
          <div style={styles.searchResults} id="searchResults">
            {results.map(album => (
              <div style={styles.media} key={album.collectionId}>
                <img
                  style={styles.img}
                  src={album.artworkUrl100}
                  alt={`${album.collectionName} coverart`}
                />
                <h4>{album.collectionName}</h4>
              </div>
            ))}
            <ScrollButton delay="100" text="Scroll to the Top" />
          </div>
        )}
      </React.Fragment>
    )
  }
}
