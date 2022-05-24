
# Page Loading Time js

**PageLoadingTime** is a super-small and super-simple JavaScript document that allows to recive in the console the loading time of your HTML page.  
The script should be placed immediately after the `<html>` tag for optimal performance.  
Example:
```html
<!DOCTYPE html>
<html>
<script> /* script here */ </script>
<head> <!-- head here --> </head>
<body> <!-- body here --> </body>
</html>
```

## What do I read?

*"DOM tree ready at ?ms"* is based on the `DOMContentLoaded` event.  
`DOMContentLoaded` event is fired when the initial HTML document has been loaded and parsed, without waiting for resources to finish loading.

*"Page fully loaded at ?ms"* is based on the `load` event.  
`load` event is fired when the whole page has loaded, including all resources such as stylesheets, images and subframes.
