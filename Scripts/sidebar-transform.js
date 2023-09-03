function changeSidebar() {
  const sidebarElement = document.querySelector('.sidebar');
  if(sidebarElement.classList.contains('sidebar-normal')) {
      sidebarElement.classList.remove('sidebar-normal');
      sidebarElement.classList.add('sidebar-expanded');
      document.querySelector('body').classList.add('body-expanded');
      const sidebarIconElementList = document.querySelectorAll('.sidebar-icons');
      sidebarIconElementList.forEach(element => {
          element.classList.remove('sidebar-icons-container-normal');
          element.classList.add('sidebar-icons-container-expanded');
      });


  } else {
      sidebarElement.classList.remove('sidebar-expanded');
      sidebarElement.classList.add('sidebar-normal');
      document.querySelector('body').classList.remove('body-expanded');
      const sidebarIconElementList = document.querySelectorAll('.sidebar-icons');
      sidebarIconElementList.forEach(element => {
          element.classList.add('sidebar-icons-container-normal');
          element.classList.remove('sidebar-icons-container-expanded');
      });
  }
}
