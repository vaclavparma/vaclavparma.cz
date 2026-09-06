# vaclavparma-cz

Source code for my personal website — [vaclavparma.cz](https://vaclavparma.cz).

Built with [Astro](https://astro.build/). English-only, with the CV also available in Czech.

## Requirements

- Node.js `>=22.12.0`

## Development

```sh
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Scripts

| Command           | Description                          |
| :---------------- | :----------------------------------- |
| `npm run dev`     | Start local dev server               |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview the production build locally |
| `npm run astro`   | Run Astro CLI commands               |

## Project structure

```
public/          # Static assets, incl. CV PDFs under cv/en/ and cv/cs/
src/
  components/    # Astro components
  layouts/       # Page layouts
  lib/           # Shared helpers (e.g. latest CV lookup)
  pages/         # Routes: / (landing), /cv (alias for /cv/en),
                 # /cv/en, /cv/cs (redirect to latest CV PDF)
```

## License

MIT License. See [LICENSE](LICENSE) for details.
