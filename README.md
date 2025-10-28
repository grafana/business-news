# Business News for Grafana

[![CI](https://github.com/grafana/business-news/actions/workflows/push.yml/badge.svg)](https://github.com/grafana/business-news/actions/workflows/push.yml)
[![CD](https://github.com/grafana/business-news/actions/workflows/publish.yml/badge.svg)](https://github.com/grafana/business-news/actions/workflows/publish.yml)
[![License](https://img.shields.io/github/license/grafana/business-news)](https://github.com/grafana/business-news/blob/main/LICENSE)

>This project was originally contributed by [Volkov Labs](https://github.com/volkovlabs/business-news) - thanks for all your great work!
>
>We have republished under the same plugin ID, keeping the community signature. This means you can simply update your plugin version. A new ID would have required manual updates to your dashboards. For additional information on the changes, see the [Notices](https://github.com/grafana/business-news/blob/main/NOTICES.md).

The Business News data source is a plugin for Grafana that retrieves RSS and Atom feeds and allows visualizing them using Business Text and other panels.

## Announcement

We are announcing the retirement of the Business News data source, effective immediately, as part of our ongoing effort to streamline and modernize our Grafana plugin ecosystem. To ensure uninterrupted access to news and data feeds, we strongly recommend migrating to the Infinity data source, a robust and versatile replacement designed to meet your monitoring and visualization needs.

### Why This Change?

The retirement aligns with industry trends toward more integrated and scalable data solutions, addressing the complexities of managing fragmented data sources. The Infinity data source offers enhanced flexibility, supporting a wide range of data formats and real-time updates, making it an ideal choice for business analytics and dashboards.

## Requirements

- Business News data source 4.X requires **Grafana 10.1** or **Grafana 11**.
- RSS/Atom data source 3.X requires **Grafana 9** or **Grafana 10**.
- RSS/Atom data source 2.X requires **Grafana 8.5** or **Grafana 9**.
- RSS/Atom data source 1.X requires **Grafana 8**.

## Getting Started

The Business News data source can be installed from the [Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/) or utilizing the Grafana command line tool.

For the latter, please use the following command.

```bash
grafana-cli plugins install volkovlabs-rss-datasource
```

## Highlights

- Supports RSS 2.0, RSS 1.0 and Atom.
- Works with Dynamic Text visualization panel.
- Returns Channel (Feed) data, Items (Entries) or both as separate data frames.
- Extract and parse as additional fields:
  - Image from Meta.
  - H4 and Image from the Encoded content.
  - Media:Group for YouTube.
- Filter items/entries based on the selected Time Range.
- Allows specifying Query parameters with dashboard variables.

## Documentation

| Section                                                                   | Description                                                  |
| ------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [Business Text](https://volkovlabs.io/plugins/business-news/text/)        | Demonstrates how to display feed using Dynamic Text panel.   |
| [Provisioning](https://volkovlabs.io/plugins/business-news/provisioning/) | Demonstrates how to automatically provision the data source. |
| [Release Notes](https://volkovlabs.io/plugins/business-news/release/)     | Stay up to date with the latest features and updates.        |

## Always happy to hear from you

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/grafana/business-news/issues).

## License

Apache License Version 2.0, see [LICENSE](https://github.com/grafana/business-news/blob/main/LICENSE).
