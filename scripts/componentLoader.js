//Sidebar Navigation Loader
document.addEventListener('DOMContentLoaded', () => {
  const sidebarContainer = document.querySelector('#sidebarContainer');

  if (sidebarContainer) {
    fetch('../components/sidebar.html')
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load sidebar: ${response.status}`);
        return response.text();
      })
      .then(html => {
        sidebarContainer.innerHTML = html;

        // Re-initialize Alpine on dynamically added content
        Alpine.initTree(sidebarContainer);
      })
      .catch(error => console.error('Sidebar loading failed:', error));
  }
});

//Mobile Navigation Loader
document.addEventListener('DOMContentLoaded', () => {
  const mobileNavContainer = document.querySelector('#mobileNavContainer');

  if (mobileNavContainer) {
    fetch('../components/mobileNav.html')
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load Mobile Navbar: ${response.status}`);
        return response.text();
      })
      .then(html => {
        mobileNavContainer.innerHTML = html;
        Alpine.initTree(mobileNavContainer);
      })
      .catch(error => console.error('Mobile Navbar loading failed:', error));
  }
});

//Right Hand Content Header Loader
document.addEventListener('DOMContentLoaded', () => {
  const contentHeaderContainer = document.querySelector('#contentHeaderContainer');

  if (contentHeaderContainer) {
    fetch('../components/contentHeader.html')
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load Header: ${response.status}`);
        return response.text();
      })
      .then(html => {
        contentHeaderContainer.innerHTML = html;
        Alpine.initTree(contentHeaderContainer);
      })
      .catch(error => console.error('Header loading failed:', error));
  }
});


//Right Hand Content Footer Loader
document.addEventListener('DOMContentLoaded', () => {
  const contentFooterContainer = document.querySelector('#contentFooterContainer');

  if (contentFooterContainer) {
    fetch('../components/contentFooter.html')
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load Footer: ${response.status}`);
        return response.text();
      })
      .then(html => {
        contentFooterContainer.innerHTML = html;
        Alpine.initTree(contentFooterContainer);
      })
      .catch(error => console.error('Footer loading failed:', error));
  }
});