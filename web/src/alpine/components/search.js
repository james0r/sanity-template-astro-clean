export default {
  name: 'search',
  component() {
    return {
      results: [],
      userHasInteracted: false,
      isFetching: false,
      terms: '',
      onInputKeyUp(e) {
        this.userHasInteracted = true

        this.terms = e.target.value.trim()

        this.isFetching = true

        fetch(`/search-results?s=${this.terms}`)
          .then((response) => {
            return response.text()
          })
          .then((responseText) => {
            this.isFetching = false

            const html = new DOMParser().parseFromString(responseText, 'text/html')
            const resultsSource = html.getElementById('search-results')
            const resultsDestination = document.getElementById('search-results')

            if (resultsSource && resultsDestination) resultsDestination.innerHTML = resultsSource.innerHTML;
          })
          .catch((error) => {
            this.isFetching = false

            console.error('Error:', error);
          });
      },
    }
  }
}