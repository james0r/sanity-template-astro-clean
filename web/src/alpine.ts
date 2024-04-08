import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect)

  Alpine.data('search', function () {
    return {
      results: [],
      userHasInteracted: false,
      isFetching: false,
      terms: '',
      onInputKeyUp(e) {
        this.userHasInteracted = true

        this.terms = e.target.value.trim()

        if (this.terms === '') {
          this.results = []
          return
        }

        this.isFetching = true
        fetch(`/search.json?s=${this.terms}`)
          .then((response) => response.json())
          .then((data) => {
            if (this.terms === '') {
              this.results = []
              return
            }

            if (data.results.length > 0) {
              this.results = data.results
              this.isFetching = false
            } else {
              this.results = []
              this.isFetching = false
            }
          })
      },
    }
  })
}