# SLA

Assignment for interview

## What is this?

It's a simple angular aplication for retrieving gists from github.com. 

## How to use?

Type a username in the search bar and press the "search button".

## What do I get to see?

A list of public gists created by that user. If you click one gist's description, you will see its files, and the avatars of the last 3 users who forked the gist. Also, if you click on a file, you will see it's content.

Each file has a displayed tag, and their union set is also displayed in the gist's information.

## Extra features

 * If there are no gists found (because either the user does not exist, or it has no gists)
 * The avatar links to the github user
 * If the description for a gist is empty, "No description" message will be shown instead
 * If the language of a file is empty, the tag "Unknown" will be used
 * "Forked by" section will appear only if there is at least one user who forked the gist


## How is it build?

* Using Angular framework (which I have ~1 week experience with, being the most manageable choice for a SPA)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
