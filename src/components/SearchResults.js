import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  media: {
    display: 'grid',
    gridColumnGap: '20px',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: '"img" "name" "content"'
  },
  img: {
    paddingTop: 5,
    gridArea: 'img',
    maxWidth: '100%'
  },
  name: { gridArea: 'name' },
  content: {
    gridArea: 'content',
    backgroundColor: '#eee',
    padding: 5
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
          <div style={styles.media} id="searchResults">
            {results.map(album => (
              <div key={album.collectionId}>
                <div style={styles.img}>
                  <img
                    src={album.artworkUrl100}
                    alt={`${album.collectionName} coverart`}
                  />
                </div>
                <p style={styles.content}>{album.collectionName}</p>
              </div>
            ))}
          </div>
        )}
      </React.Fragment>
    )
  }
}
