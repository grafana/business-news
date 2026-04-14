# Business News for Grafana

![CI](https://github.com/grafana/business-news/actions/workflows/push.yml/badge.svg)
![CD](https://github.com/grafana/business-news/actions/workflows/publish.yml/badge.svg)
[![License](https://img.shields.io/github/license/grafana/business-news)](https://github.com/grafana/business-news/blob/main/LICENSE)

![Dashboard](https://raw.githubusercontent.com/grafana/business-news/main/src/img/dashboard.png)

## Deprecation notice

As part of an effort to streamline and modernize, the Business News
data source has been deprecated. To ensure uninterrupted access to
news and data feeds, we strongly recommend migrating to the Infinity
data source, a robust and versatile replacement designed to meet
your monitoring and visualization needs.

The deprecation aligns with industry trends toward more integrated
and scalable data solutions, addressing the complexities of managing
fragmented data sources. The Infinity data source offers enhanced
flexibility, supporting a wide range of data formats and real-time
updates, making it an ideal choice for business analytics and
dashboards.

## Introduction

The Business News data source is a plugin for Grafana that retrieves
RSS and Atom feeds and allows visualizing them using Business Text
and other panels.

[![Business News data source for Grafana | News feed tutorial for Grafana Dashboard](https://raw.githubusercontent.com/grafana/business-news/main/img/video.png)](https://youtu.be/RAxqS2hpWkg)

## Requirements

- Business News data source 4.X requires **Grafana 11.6** or newer.
- RSS/Atom data source 3.X requires **Grafana 9** or **Grafana 10**.
- RSS/Atom data source 2.X requires **Grafana 8.5** or **Grafana 9**.
- RSS/Atom data source 1.X requires **Grafana 8**.

## Getting Started

The Business News data source can be installed from the
[Grafana Plugins catalog](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/)
or utilizing the Grafana command line tool.

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

| Section | Description |
| --- | --- |
| [Business Text](https://grafana.com/docs/plugins/volkovlabs-rss-datasource/latest/business-text/) | Demonstrates how to display feed using Dynamic Text panel. |
| [Provisioning](https://grafana.com/docs/plugins/volkovlabs-rss-datasource/latest/provisioning/) | Demonstrates how to automatically provision the data source. |
| [Release notes](https://grafana.com/docs/plugins/volkovlabs-rss-datasource/latest/release/) | Stay up to date with the latest features and updates. |

## Business Suite for Grafana

The Business Suite is a collection of open source plugins created and actively maintained by Volkov Labs.

The collection aims to solve the most frequent business tasks by
providing an intuitive interface with detailed written documentation,
examples, and video tutorials.

[![Business Suite for Grafana](https://raw.githubusercontent.com/VolkovLabs/.github/main/business.png)](https://grafana.com/grafana/plugins/)

### Enterprise Support

With the [Business Suite Enterprise](https://grafana.com/products/enterprise/),
you're not just getting a product, you're getting a complete support
system. You'll have a designated support team ready to tackle any
issues.

You can contact us via Zendesk, receive priority in feature requests
and bug fixes, meet with us for in-person consultation, and get
access to the Business Intelligence. It's a package that's designed
to make your life easier.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/grafana/business-news/blob/main/LICENSE).
