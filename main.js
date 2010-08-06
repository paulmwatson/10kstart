function reset()
{
  installDefaultApps();
  setDefaultWallpaper();
  document.location = document.location;
}

function setDefaultWallpaper()
{
  localStorage.setObject('wallpaper', wallpapers['orange']);
}

function installDefaultApps()
{
  var defaultInstalls = {};
  jQuery.each(apps, function(i, app)
  {
    if (app.defaultInstall)
    {
      defaultInstalls[i] = app;
    }
  });
  localStorage.setObject('installs', defaultInstalls);
}

function toggleWebStore(toggleMainNav)
{
  if (!$('#webStore').is(':visible'))
  {
    $('#installs').fadeOut();
    showWebStoreCategories();
  }
  else
  {
    $('#webStore #wallpapers:visible').fadeOut();
    if (typeof toggleMainNav == 'undefined' || toggleMainNav)
    {
      $('#installs').fadeIn();
    }
  }

  $('#webStore').slideToggle();
  if (typeof toggleMainNav == 'undefined' || toggleMainNav)
  {
    $('nav.main').slideToggle();
  }
}

function showWebStoreCategories()
{
  $('#webStore #categories').html('');
  
  var categories = [];
  $.each(apps, function(i, app)
  {
    if ($.inArray(app.category, categories) == -1)
    {
      $('#webStore #categories').append('<li><button data-category="' + app.category + '">' + app.category + '</button></li>');
      categories.push(app.category);
    }
  });
  
  $('#webStore #categories button').click(showWebStoreApps);
  $('#webStore #categories li:first-child button').click();
}

function showWallpapers()
{
  this.blur();
  $('#webStore ul li').removeClass('current');
  $(this).parent('li').addClass('current');
  
  $('#webStore #apps').fadeOut(function()
  {
    $('#webStore #wallpapers').html('');
    $.each(wallpapers, function(i, wallpaper)
    {
      $('#webStore #wallpapers').append('<li><button data-wallpaper="' + i + '" style="background-image: ' + wallpaper.css + ';" title="Set ' + wallpaper.title + ' as your wallpaper">' + wallpaper.title + '</button>');
    });
  
    $('#webStore #wallpapers').fadeIn();
  
    $('#webStore #wallpapers button').click(setWallpaper);
  });
}

function showWebStoreApps()
{
  this.blur();
  $('#webStore ul li').removeClass('current');
  $(this).parent('li').addClass('current');
  
  var category = $(this).attr('data-category');
  $('#webStore #wallpapers').fadeOut('fast', function()
  {
    $('#webStore #apps').fadeOut(function()
    {
      $('#webStore #apps').html('');
      $.each(apps, function(i, app)
      {
        if (app.category == category)
        {
          $('#webStore #apps').append('<li><button data-app="' + i + '" style="background-image: url(http://open.thumbshots.org/image.aspx?url=' + app.url + ');" title="Install ' + app.title + '">' + app.title + '</button>');
        }
      });
  
      $('#webStore #apps').fadeIn();
  
      $('#webStore #apps button').click(installApp);
    });
  });
}

function installApp()
{
  var app = $(this).attr('data-app');
  installs[app] = apps[app];
  localStorage.setObject('installs', installs);
  showInstalls();
  toggleWebStore();
}

function setWallpaper()
{
  var wallpaper = wallpapers[$(this).attr('data-wallpaper')];
  $('body').css('background-image', wallpaper.css);
  localStorage.setObject('wallpaper', wallpaper);
}



function toggleEditMode()
{
  $('#installs').toggleClass('edit');
}

function uninstallApp()
{
  this.blur();
  $(this).fadeOut('fast', function()
  {
    delete installs[$(this).attr('data-app')];
    localStorage.setObject('installs', installs);
    showInstalls();
  });
  return false;
}

function showInstalls()
{
  $('#installs').html('');
  jQuery.each(installs, function(i, install)
  {
    $('#installs').append('<li><a data-app="' + i + '" href="' + install.url + '" target="_blank" style="background-image: url(http://open.thumbshots.org/image.aspx?url=' + install.url + ');" title="Launch ' + install.title + '">' + install.title + '</a>');
  });
}

function toggleNewApp()
{
  toggleWebStore(false);
  
  if ($('#dialogBacking').is(':visible'))
  {
    $('#dialogBacking').fadeOut('fast');
  }
  else
  {
    $('#dialogBacking').fadeIn('fast');
  }
  $('#newApp').slideToggle();
}

function addNewApp()
{
  var app = {
      url: $('#newAppURL').val(),
      title: $('#newAppTitle').val(),
      defaultInstall: false,
      category: $('#newAppCategory').val()
    };
  apps[app.title] = app;
  localStorage.setObject('apps', apps);
  toggleNewApp();
  return false;
}

// Bindings
$('#reset').click(reset);
$('.toggleEditMode').click(toggleEditMode);
$('#installs.edit li a').live('click', uninstallApp);
$('.showWebStore').click(toggleWebStore);
$('#webStore .close').click(toggleWebStore);
$('#webStore .addApp').click(toggleNewApp);
$('#newApp .cancel').click(toggleNewApp);
$('#newApp').submit(addNewApp);
$('.showWallpapers').click(showWallpapers);

// Setup
var newUser = (localStorage.firstTime === null);
if (newUser)
{
  localStorage.firstTime = false;
  reset();
}

var installs = localStorage.getObject('installs');

$('body').css('background-image', localStorage.getObject('wallpaper').css);

showInstalls();