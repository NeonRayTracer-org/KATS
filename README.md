# KATS

> Kandelborg API TS Starter aka KATS

This project will get you running with a GraphQL API in less than 10 minutes!

Did you ever think making a complete API server with authentication, pagination, filtering, rules, image upload, amazing speed, etc. etc. was bothersome?

Perhaps you've been annoyed at all the repetition and hard work it takes when maintaining an ever-changing schema, its resolvers, and their rules? Look no further! &mdash; Okay... I'll stop :smirk:. But, here's some core aspects of KATS that makes it so great:

- First class developer experience
- Code-first development
- API versioning
- Easy datamodel updates & db migrations
- Ready for mirco services
- File upload

Everything is strongly typed! There's always intellisense when applicable, and it works like a charm.

Pre-made models:

- Post
- Project
- Project Category
- User

Authentication is integrated with JWT and all models are ready for i18n.

## Getting started

**This project is made with somewhat experienced developers in mind.**

**Experience with or willingness to learn debugging is required for a good dev experience.**

**Also, the following is assumed:**

- **Working knowledge of GraphQL**
- **Basic understanding of git and npm (installing & running scripts)**

  ***

This project follows some conventions currently not standard in Prisma, read more about them in the [conventions section](#conventions)

KATS is a solid foundation for building an API server, that is, when the project has matured a bit.

Some aspects probably haven't addressed yet, since it's a one-man job so far. Do not hesitate to open an issue about anything! Please read the [CONTRIBUTING](/CONTRIBUTING.md) documentation first though.

Okay, with all the boring out of the way, lets jump into it shall we? Go to the [installation section](#installation) for the next steps.
1

### Requirements

- node.js >= 8.x.x
- Docker + docker-compose
- Cloudinary account

Follow the installation instructions in the official documentation if needed.

### Installation

> Make sure the [requirements](#requirements) are met.

1. Clone or fork this repository
2. Install dependencies
3. Install Prisma globally
4. Start Prisma server
5. Generate schema and clients

```console
git clone https://github.com/Kandelborg/kats.git .
npm i && npm i -g prisma@beta
# or
yarn && yarn -g prisma@beta

docker-compose up -d
prisma deploy
```

And that's it! A prisma server with the datamodel defined in `/database` has been created and is now live. Go visit the admin area here: <http://localhost:4466/_admin>

After the deploy, the post deploy hook's commands in `prisma.yml` get executed. They generate a schema, a prisma client and a nexus client based on the database schema.

#### Stopping Prisma server

To stop the prisma server again, run `docker-compose down` in the project folder.

## Usage

### Commands

| Command  | Effect                                          |
| -------- | ----------------------------------------------- |
| cz       | Commit staged files via commitizen              |
| dev      | Run `ts-node-dev` in `/src`                     |
| build    | Run webpack on the project                      |
| generate | Generate prisma client, schema, and nexus types |

### Settings

All settings are derived from `process.env` i.e.the env object in the current node process.
It's populated _before_ the code is executed allowing for a more flexible application than one would get with hard-coded values.

Before going any further, a Cloudinary cloud name, signed preset, and public & private keys are needed.

While Cloudinary isn't essential for development, it's the juice behind the upload functionality.
Cloudinary doesn't just store pictures, it stores every kind of file - and its free plan is amazingly good!

Settings are located in `src/settings`

For a full overview of possible settings, look at the definition in [`typings/globals.d.ts`](/typings/globals.d.ts).

#### Common

> NOTE: `APP_SECRET` is not in the settings folder. It's _only_ set via 'global' env variables to ensure security.

| Variable   | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| APP_SECRET | String  | Prisma _service_ key        |
| DOMAIN     | String  | Domain of API server        |
| PORT       | Integer | Port to start the server on |

#### Whitelist

| Variable                 | Type           | Description                              |
| ------------------------ | -------------- | ---------------------------------------- |
| ALLOWED_DOMAINS          | Array\<String> | List of CORS enabled domains             |
| ALLOWED_PRISMA_MUTATIONS | Array\<Object> | List of allowed prisma default mutations |
| ALLOWED_PRISMA_QUERIES   | Array\<Object> | List of allowed prisma default queries   |

#### Cloudinary

| Variable              | Type   | Description               |
| --------------------- | ------ | ------------------------- |
| CLOUDINARY_API_KEY    | String | API key                   |
| CLOUDINARY_API_SECRET | String | Secret API key            |
| CLOUD_NAME            | String | Name of account space     |
| PRESET                | String | Name of **signed** preset |

These settings should be set in `ecosystem.config.js` **after** adding the file to `.gitignore` OR using a **private** repository. Otherwise the security of the project is compromised.

Using something like [Bitwarden](https://bitwarden.com/) enables secure sharing of sensitive settings - you can choose whatever, but this is free and OSS.
It's also possible to create custom fields and share collections of items with other users.

## Development

Running the development environment is quite easy:

```console
npm run dev
# or
yarn dev
```

This starts a development server on <http://localhost:4000> with automatic reloading on file changes.

---

### After database schema update

To reflect the changes made in [`database/`](/database) files, make a new deployment:

```console
npm run prisma:deploy
```

This connects to the endpoint defined in `prisma.yml` and updates the schema, or creates a new if none exists.

---

### After nexus resolver update

If the changes in the `resolvers` directory aren't reflecting in intellisense or the types, run the generate command:

```console
npm run generate
# or
yarn generate
```

If it doesn't work, try restarting the server. Otherwise, don't hesitate to open an issue!

---

### Adding database types

_Not written yet..._

---

### Adding custom resolvers

_Not written yet..._

---

## Production

### Build

```console
npm run build
# or
yarn build
```

### Run app in production

```console
NODE_ENV=production node dist/index.js
```

### Build docker

> Make sure the app has [been built](#build) at least once.

```console
docker build -t NAME/PROJECT:1.0.0 .
```

Which creates a docker image under the user `NAME` called `PROJECT` with the tag `1.0.0`.

This process will be automated in the near future, stay tuned!

---

This is not large-scale production ready yet. The following features are currently being worked on or updated:

- [ ] Rate limiting
- [ ] Caching
- [ ] I18n
- [ ] Awesome error handling
- [ ] Fully automated production build
- [ ] Proper documentation

## Deployment

It up to you really, there'll be a single file in `dist/bundle.js` you can host anywhere, as long as you can access the database via <http://localhost:4466>, give it ENV variables, and open port 4000.

A more comprehensive deployment strategy will be automated; options and information will go here. Very soon!

## Conventions

### Schema type naming conventions

Instead of using the default naming schema for mutations defined as `TYPE+ACTION`, KATS uses a more convenient naming method: `ACTION+TYPE`.
In practice it looks like this:

```gql
# Prisma method:
type CreatePost
type UpdatePost
type CreateProject
type UpdateProject

# KATS method:
type PostCreate
type PostUpdate
type ProjectCreate
type ProjectUpdate
```

This does more just look pretty, it allows for faster search and less cognitive load.

Imagine having to write _all_ of a word before you finish a search or get autocompletion -
bleeding edge tech problems, i know, but it is 2019 after all...
And I haven't gotten my hoverboard yet! Easy coding must do for now.

This naming convention helps accelerating the process of searching, and even has the benefit of **a more consistent file & object layout**.

Just to be clear: input and query types aren't changed from defaults - they're great in regards to aesthetics and practicality.

New queries should be named in camelCase with the type first, then its corresponding action.
It can be easy to get caught up in doing things the same way (as above),
but with queries - I've found - there's less cognitive load when it's closer to speech.

A good rule of thumb when naming resolvers is to consider what you'd do in real life, let's look at an example:

1. By Id Get (the) Post & Post delete?

2. (Get) (the) Post By Id & delete (the) Post?

What do you say you're going to do? I'm gonna pick nr. 2 as it's the only choice making literal sense (in english, the langugage we're programming in).

Choosing nr. 2 and shortening it to (pseudo)code gives us the names `postById` & `deletePost` which makes sense both when thinking about _and_ handling it as code.
With this convention, you get intellisense by writing what you wanna do in common speech.
It doesn't get much easier if I'd say so myself.

### Commit conventions

This project uses the default `cz-conventional-changelog` commit convention. It's based on the Angular commit convention.

Commit rules are defined in `.czrc`, and is used by commitizen.

Commitizen It's a CLI tool that crates an interactive prompt for commits and - in this case - is integrated with commitlint.
Just follow the instructions and the commit goes through if no rules are broken.

- **Don't use Uppercase for the first letter of the first word in the main message**

---

Remember that these conventions only are _guidelines_. **Not** golden rules applicable to everyone all the time.

Think about what makes sense for you/your team and make some decisions based on that.
KATS conventions _should_ provide a good foundation filled with common practices and logical choices.

## Built with

- TypeScript
- Prisma
- Nexus
- Graphql shield
- Graphql Yoga
- Webpack
- Babel
- Commitizen
- Commitlint
- Docker
- Cloudinary

## Contributing

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details about the process for submitting pull requests to KATS.

## Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

## Acknowledgements

- This readme is heavily based on the great README template from PurpleBooth
- The awesome team at Prisma who makes some incredible tools!

## License

Licensed under MIT, read more in [LICENSE](/LICENSE)

## Author

- Mathias Wøbbe - _initial work_ - [Github profile](https://github.com/MathiasKandelborg)
