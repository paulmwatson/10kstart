// Credit: http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage/3146971#3146971
Storage.prototype.setObject = function(key, value)
{
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key)
{
  return this.getItem(key) && JSON.parse(this.getItem(key));
};

var apps = localStorage.getObject('apps');
var wallpapers = localStorage.getObject('wallpapers');

if (!wallpapers)
{
  wallpapers = {
    deadvlei: {
      title: 'Deadvlei',
      css: 'url(http://farm1.static.flickr.com/19/23597646_8055be0f76_o.jpg)'
    },
    orange: { 
      title: 'Orange',
      css: '-moz-radial-gradient(50% 0 90deg, circle cover, #E99D56, #c93620 100%)'
    },
    blue: { 
      title: 'Blue',
      css: '-moz-radial-gradient(50% 0 90deg, circle cover, #E99D56, #c93620 100%)'
    },
    green: { 
      title: 'Green',
      css: '-moz-radial-gradient(50% 0 90deg, circle cover, #E99D56, #c93620 100%)'
    },
    lightgrey: { 
      title: 'Light Grey',
      css: '-moz-radial-gradient(50% 0 90deg, circle cover, #cccccc, #999999 100%)'
    },
    darkgrey: { 
      title: 'Dark Grey',
      css: '-moz-radial-gradient(50% 0 90deg, circle cover, #666666, #333333 100%)'
    }
  };
  localStorage.setObject('wallpapers', wallpapers);
}

if (!apps)
{
  apps = {
    facebook: {
      url: 'http://facebook.com',
      title: 'Facebook',
      defaultInstall: true,
      category: 'Social Networking'
    },
    twitter: {
      url: 'http://twitter.com',
      title: 'Twitter',
      defaultInstall: true,
      category: 'Social Networking'
    },
    google: {
      url: 'http://google.com',
      title: 'Google',
      defaultInstall: true,
      category: 'Search'
    },
    microsoft: {
      url: 'http://www.microsoft.com',
      title: 'Microsoft',
      defaultInstall: true,
      category: 'Technology'
    },
    yahoo: {
      url: 'http://yahoo.com',
      title: 'Yahoo!',
      defaultInstall: true,
      category: 'Search'
    },
    adobe: {
      url: 'http://adobe.com',
      title: 'Adobe',
      defaultInstall: true,
      category: 'Technology'
    },
    bbc: {
      url: 'http://bbc.com',
      title: 'BBC',
      defaultInstall: true,
      category: 'News'
    },
    guardian: {
      url: 'http://guardian.co.uk',
      title: 'Guardian',
      defaultInstall: true,
      category: 'News'
    },
    codeproject: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject1: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject2: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject3: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject4: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject5: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject6: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject7: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject8: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject9: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject10: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject11: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject12: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject13: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject14: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject15: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject16: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject17: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject18: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject19: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject20: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject21: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject22: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject23: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject24: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject25: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject26: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject27: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject28: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject29: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject30: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject31: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject32: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject33: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject34: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    },
    codeproject35: {
      url: 'http://codeproject.com',
      title: 'CodeProject',
      category: 'Development'
    }
  };
  localStorage.setObject('apps', apps);
}
