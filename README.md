<div align="center">

# Inlay

**The Obsidian workspace as a single card, inlaid in a calm neutral shell.**

[![Release](https://img.shields.io/github/v/release/Brightwav3/obsidian-inlay?include_prereleases&sort=semver&style=flat-square&color=7c4dde)](https://github.com/Brightwav3/obsidian-inlay/releases)
[![Obsidian](https://img.shields.io/badge/Obsidian-1.14%2B-7c4dde?style=flat-square&logo=obsidian&logoColor=white)](https://obsidian.md)
[![Style Settings](https://img.shields.io/badge/Style%20Settings-supported-4c9a6a?style=flat-square)](https://github.com/mgmeyers/obsidian-style-settings)
[![Light & dark](https://img.shields.io/badge/modes-light%20%26%20dark-555?style=flat-square)](#screenshots)
[![Lint](https://img.shields.io/github/actions/workflow/status/Brightwav3/obsidian-inlay/lint.yml?branch=main&style=flat-square&label=lint)](https://github.com/Brightwav3/obsidian-inlay/actions/workflows/lint.yml)
[![License: MIT](https://img.shields.io/github/license/Brightwav3/obsidian-inlay?style=flat-square)](LICENSE)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="screenshots/dark.png">
  <img alt="Inlay theme for Obsidian" src="screenshots/light.png" width="900">
</picture>

</div>

## Why Inlay

Most themes restyle everything. Inlay changes **one idea**: your notes sit on a raised card, and the app chrome around it falls back into a quiet shell. Everything else stays exactly as Obsidian made it.

- **Inlaid card.** The editor and file explorer share one floating card with a soft shadow.
- **Quiet shell.** The ribbon, title bar and right sidebar rest on the shell beside the card.
- **Default where it matters.** Fonts, sizes, spacing and the rendering of your notes (editor, reading view, properties, callouts, code) are untouched.
- **Obsidian's own palette.** Light and dark mode use the default colour scale, so plugins and snippets look the way they expect.
- **Optional glass.** A translucent shell over the OS blur, and a frosted note header that text scrolls beneath.
- **Details.** Curved file-tree guides, unified tab outline, pop-out windows with their own card.
- **Optional Codex style.** A lighter icon set that replaces Obsidian's Lucide icons, Codex-like ribbon buttons, and the settings gear at the foot of the ribbon.
- **Mobile.** Drawers sit on the shell and the open note is the card.

## Screenshots

| Light | Dark |
| :---: | :---: |
| ![Inlay in light mode](screenshots/light.png) | ![Inlay in dark mode](screenshots/dark.png) |

## Installation

### From the community directory

Once Inlay is published: **Settings → Appearance → Themes → Manage**, search for **Inlay**, then select **Use**.

### Manually

1. Download `manifest.json` and `theme.css` from the [latest release](https://github.com/Brightwav3/obsidian-inlay/releases/latest).
2. Put them in `<your vault>/.obsidian/themes/Inlay/`.
3. Select **Inlay** in **Settings → Appearance → Themes**.

## Customisation

Install [Style Settings](https://github.com/mgmeyers/obsidian-style-settings), then open **Settings → Style Settings → Inlay**.

| Section | Options |
| --- | --- |
| **Colours** | Theme or app accent · shell · card · left sidebar (light and dark) |
| **Layout** | Flat mode · card gap · card radius · card shadow |
| **Tabs & sidebars** | Close button on hover · curved or straight tree guides · auto-hide explorer buttons · Codex-style icons · Codex-style ribbon · settings in the ribbon |
| **Translucent window** | Shell opacity · frost amount and colour · grain · card and sidebar opacity |
| **Glass note header** | Opacity · blur · saturation |

> [!NOTE]
> **Translucent window** needs **Settings → Appearance → Translucent window** (macOS and Windows). The operating system draws the blur behind the window, so a theme can't adjust its strength. The glass note header turns itself off while the window is translucent, because in-app blur on a translucent window breaks Chromium's repainting while scrolling.

## Compatibility

| | |
| --- | --- |
| Obsidian | 1.14 or newer, desktop (tested on 1.14.4, macOS) |
| Mobile | Phone and tablet: drawers rest on the shell, the open note is the card (rounded on tablets) |
| Plugins | Style Settings (optional) · Iconize and other plugins that use Obsidian's variables work unchanged |

## Development

```bash
git clone https://github.com/Brightwav3/obsidian-inlay.git
cd obsidian-inlay
npm install
```

| Command | What it does |
| --- | --- |
| `npm run lint` | Checks `theme.css` against [`stylelint-config-obsidianmd`](https://github.com/obsidianmd/stylelint-config), the rules used in theme review |
| `npm run sync` | Copies `manifest.json` and `theme.css` into `showcase-vault/` and every vault listed in `vaults.local.txt` (one path per line, git-ignored). Obsidian doesn't pick up edits made through symlinks, so vaults get real copies |
| `npm run icons` | Builds the Codex-style icon set from `icons/codex-icons.mjs` into `theme.css` and writes `icons/preview.html`, a sheet of every glyph |
| `npm run version` | Writes the `package.json` version into `manifest.json` and `versions.json` |

`showcase-vault/` is a small demo vault for trying the theme and taking screenshots. Open it as a vault after `npm run sync`.

### Releasing

1. Bump `version` in `package.json` and run `npm run version`.
2. Commit, tag the version and push it: `git tag 0.3.1 && git push --tags`.
3. The [release workflow](.github/workflows/release.yml) creates a draft release with `manifest.json` and `theme.css`. Review it, then publish.

## Credits

- Built on [obsidian-sample-theme](https://github.com/obsidianmd/obsidian-sample-theme).
- Configurable through [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) by mgmeyers.

## License

[MIT](LICENSE) © 2026 Simon Zelenkovi
