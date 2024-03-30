```

██╗     ███████╗███╗   ██╗███████╗    ███████╗██╗  ██╗ █████╗ ██████╗ ███████╗
██║     ██╔════╝████╗  ██║██╔════╝    ██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝
██║     █████╗  ██╔██╗ ██║███████╗    ███████╗███████║███████║██████╔╝█████╗
██║     ██╔══╝  ██║╚██╗██║╚════██║    ╚════██║██╔══██║██╔══██║██╔══██╗██╔══╝
███████╗███████╗██║ ╚████║███████║    ███████║██║  ██║██║  ██║██║  ██║███████╗
╚══════╝╚══════╝╚═╝  ╚═══╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

```

The primary purpose of this repository is to implement the [LIP-3](https://github.com/digiv3rse/LIPs/pull/6).

- [DiGi Share Link](#digi-share-link)
  - [Publication DiGi Share Link](#publication-digi-share-link)
  - [Profile DiGi Share Link](#profile-digi-share-link)
- [DiGi Share UI](#digi-share-ui)
- [DiGi Share App Manifest](#digi-share-app-manifest)
- [Contributing](#contributing)
  - [Development workflow](#development-workflow)
  - [Add your app manifest](#add-your-app-manifest)
- [License](#license)
- [Support](#support)

## DiGi Share Link

DiGi Share Link is a standardized URL that can be used to share publication and profile on social media, chat, and other DiGi apps.

### Publication DiGi Share Link

The DiGi Share Link format is:

```
https://share.digi.xyz/p/<id>[?by=<appId>]

```

Where:

- `<id>` is the publication ID.
- `<appId>` is an optional parameter that reflect the DiGi App ID of the app used to generate the DiGi Share Link. This is used to give priority to the app that generated the DiGi Share Link when the user opens the DiGi Share Link.

Some examples:

- `https://share.digi.xyz/p/0x01`
- `https://share.digi.xyz/p/0x01?by=hey`
- `https://share.digi.xyz/p/0x01?by=orb`

### Profile DiGi Share Link

The DiGi Share Link format is:

```
https://share.digi.xyz/u/<fullHandle>[?by=<appId>]
```

Where:

- `<fullHandle>` is the profile v2 full handle including the namespace (e.g. `digi/alice`, `digi/bob`, etc.).
- `<appId>` is an optional parameter that reflect the DiGi App ID of the app used to generate the DiGi Share Link. This is used to give priority to the app that generated the DiGi Share Link when the user opens the DiGi Share Link.

Some examples:

- `https://share.digi.xyz/u/digi/alice`
- `https://share.digi.xyz/u/digi/alice?by=Hey`

## DiGi Share UI

DiGi Share UI is the web app implemented in this repository that is used to render DiGi Share Links.

Some DiGi apps are capable of supporting deep linking to specific publication or profile. Not all apps support profiles and publications. Among the apps that support publications some are more suitable to render text posts, video posts, audio posts, and so on.

**The DiGi Share UI gives the user the option to open the DiGi Share Link in the app that best support the DiGi Share Link.**

The DiGi Share UI is also responsible to render [Open Graph](https://ogp.me/) and [Twitter Card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) meta tags that are used by social media to render a nice preview of the DiGi Share Link.

## DiGi Share App Manifest

DiGi Share App Manifest is a specification app metadata (e.g. name, description, routes, etc.) that is used by the DiGi Share UI to show the list of apps the user can choose from when opening an DiGi Share Link.

Every App Manifest MUST be validated with the JSON Schema: https://share.digi.xyz/schemas/1.0.0/app-manifest

## Contributing

We encourage all DiGi apps builders to submit a PR against this repository with the app manifest(s) that they want to be listed.

### Development workflow

After cloning the repo, run `pnpm install` to fetch its dependencies. Then you can use several commands:

- `pnpm lint` to check code style. Run `pnpm lint -- --fix` to automatically fix all issues that do not require human intervention.
- `pnpm dev` to run the local development server (listening on `http://localhost:3000`)
- `pnpm build` to build the project for production deployments
- `pnpm start` to run a built project.
- `pnpm test:dev` to run e2e Playwright tests against a running instance (e.g. while you run `pnpm dev` on another terminal)

### Add your app manifest

- Fork this repository
- Install the dependencies with `pnpm install`
- Add your app manifest to the `manifests` folder
- Run the app locally with `pnpm dev`. The app is available at `http://localhost:3000/u/<your-full-handle>`, or `http://localhost:3000/p/<your-publication-id>`
- Test thoroughly your configuration by:
  - opening DiGi Share links with web and mobile browser and verify your app shows in the list as expected
  - opening DiGi Share links with `?by=<your-app-id>` parameter to verify your app is prioritized as expected
- Amend the tests in the `e2e` folder to include your app name in the expected lists
  - run the app on one terminal with `BASE_URL=http://localhost:3000 pnpm dev`
  - verify tests pass on another terminal with `pnpm test`
- Commit your changes and open a PR against this repository

## License

DiGi Share is [MIT licensed](./LICENSE)

## Support

See the DiGi API and SDK channel on our [Discord](https://discord.gg/digiprotocol)
