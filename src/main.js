const menuClick = (event) => {
  const activeTabs = document.querySelectorAll('.active1');
  // deactivate existing active tab and panel
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active1', '');
  });
  
  // activate new tab and panel
  event.target.parentElement.className += ' active1';
  document.getElementById(event.target.href.split('#')[1]).className += ' active1';
}

const element = document.getElementById('mainListDiv');

element.addEventListener('click', menuClick);

