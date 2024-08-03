document.addEventListener('DOMContentLoaded', function () {
      const headers = document.querySelectorAll('.menu-header');

      headers.forEach(header => {
            header.addEventListener('click', function () {
                  // Close other open menus
                  headers.forEach(otherHeader => {
                        if (otherHeader !== header) {
                              otherHeader.classList.remove('active');
                              otherHeader.nextElementSibling.style.maxHeight = null;
                        }
                  });

                  // Toggle the clicked menu
                  this.classList.toggle('active');
                  const content = this.nextElementSibling;
                  if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                  } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                  }
            });
      });
});
