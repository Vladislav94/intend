$(document).ready(function(){
  
  var $nav = $('.header-nav');
      $navItem = $('.nav-list__item'),
      $activeItem = $('.nav-list__item--active');

  showDropdown($activeItem);

  $navItem.on('mouseover', function(){
    var $this = $(this);

    showDropdown($this);
    removeDropdown($this.siblings());
  });

  $navItem.on('mouseleave', function(){
    var $this = $(this);
    removeDropdown($this);
  });

  $nav.on('mouseleave', function(){
    showDropdown($activeItem);
  });

  function showDropdown(parent) {
    parent.find('.list-item__dropdown').addClass('list-item__dropdown--visible');
  }

  function removeDropdown(parent) {
    parent.find('.list-item__dropdown').removeClass('list-item__dropdown--visible');
  }

});