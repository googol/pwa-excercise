# PWA excercise

Fork this repository, and configure github pages to serve from the master branch /docs directory.

## Development

For developing, you will need node installed.
I used 8.11.3, but newer versions should work just as well.

To install required dependencies run `npm install`.
To create a build ready to be pushed to github, run `npm run build`, then commit all files in the `docs` directory and push.
To run a development server, run `npm run serve`.

Instead of modifying the react templates I used, you can also just modify the html in the public directory.
Just set the `staticOnly` flag in `serve.js` to `true`, and never run `npm run build` (it will overwrite files).

## Tasks

### Rescue the page from the offline dinosaur
1. Add a service worker that caches static assets like styles and logos
1. Add an offline page, serve it from the cache if a request for html fails
1. You can add the index to the install-time cache too.
  - What sort of effects will that have for content updates?
  - Try changing the content of the index and seeing how it updates.
1. Try the ["Cache and update"](https://serviceworke.rs/strategy-cache-and-update.html) strategy for the index.
  - Again, try playing around with the index content and checking how it updates.

- Try messing with the scope (move the sw to a deeper directory/set scope explicitly)

### Add a manifest to make it installable
1. Simple one, add a manifest file and link to it
1. Make sure the manifest has all the required properties
1. Push to github and try installing on a phone

### Add a new article
How does this affect your service worker and caches?

### Offline reading list
1. Create a client-side script that adds a button to each article for saving it for offline reading.
1. On click, save/remove the page
  - Make sure to save/remove embedded resources like images too
1. Display the status on/next to the button

- Having an index of stored pages in localStorage/IDB helps
- What feels like the best caching strategy?

### Add to offline list when offline
1. Modify the offline page to also have an offline button
1. On click, save a save-to-cache-request in localStorage/IDB
1. When the clientside script starts, try fetching the requested paths into cache
1. You can try adding a notification when it succeeds/fails
1. On chrome, you can try [background sync](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/sync) for the fetching

## Going further
- Check out [serviceworke.rs](https://serviceworke.rs) and play around with the different recipes.
- Check out [Jake Archibald's article on streams](https://jakearchibald.com/2016/streams-ftw/), and play around with the stream combination in a service worker.
