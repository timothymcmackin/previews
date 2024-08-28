$(document).ready(function () {
   $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
});

// Set light mode as the default
(function () {
   document.documentElement.dataset.mode = "light";
})();
