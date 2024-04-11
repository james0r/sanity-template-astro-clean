export default {
  name: 'global',
  store() {
    return {
      themeName: 'wauble',
      isMobileMenuVisible: false,
      isWindowScrolled: false,
      init() {
        console.log('Global store initialized')
        window.addEventListener('scroll', this.onWindowScrollHandler)
      },
      get bodyClasses() {
        let classes = []

        if (this.isMobileMenuVisible) {
          classes.push('mobile-menu-visible')
        }

        return classes || ''
      },
      onWindowScrollHandler() {
        const scrollTop = window.scrollY

        document.body.classList[scrollTop > 0 ? 'add' : 'remove']('tw-scrolled')
        this.isWindowScrolled = scrollTop > 0
      },
      openMobileMenu() {
        this.isMobileMenuVisible = true
      },
      closeMobileMenu() {
        this.isMobileMenuVisible = false
      },
      toggleMobileMenu() {
        if (this.isMobileMenuVisible) {
          this.closeMobileMenu()
        } else {
          this.openMobileMenu()
        }
      }
    }
  }
}