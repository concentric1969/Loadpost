angular.module("naut").run(["$templateCache", function($templateCache) 
{$templateCache.put("templates/footer.html","<span>&copy; {{app.year}} - {{ app.name }}</span>");
$templateCache.put("templates/layer-search.html", "");
$templateCache.put("templates/settings.html","");
$templateCache.put("templates/sidebar.html","");
$templateCache.put("templates/top-navbar-dock.html","");
$templateCache.put("templates/top-navbar.html","");
});