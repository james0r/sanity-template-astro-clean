export default {
  name: 'searchStatic',
  component() {
    return {
      results: [],
      userHasInteracted: false,
      isLoading: false,
      terms: '',
      postsTemplate: this.$refs['all-posts'],
      allPosts: [],
      init() {
        const templateContent = this.postsTemplate.content
        const nodesArray = Array.from(templateContent.childNodes).filter(node => node.nodeType !== Node.TEXT_NODE);
        this.allPosts = nodesArray
      },
      get message() {
        if (this.isLoading) {
          return 'Searching...'
        }

        if (this.results.length === 0 && this.terms.length > 1 && this.userHasInteracted) {
          return 'No results found'
        }

        return ''
      },
      onInputKeyUp(e) {
        this.userHasInteracted = true // Todo: do i still need this?

        this.terms = e.target.value.trim()

        this.isLoading = true

        setTimeout(() => {
          if (this.terms.length > 1 && this.allPosts.length > 0) {
            this.performSearch()
          } else {
            this.results = []
          }

          this.isLoading = false
        }, 1000)
      },
      performSearch() {
        this.results = this.allPosts.filter((post) => {
          const textContent = post.textContent.toLowerCase()
          const terms = this.terms.toLowerCase().split(' ')

          if (terms.some(term => textContent.includes(term))) {
            return true
          }
        })
      }
    }
  }
}