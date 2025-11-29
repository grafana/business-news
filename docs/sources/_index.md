---
title: Business News
description: Learn about the Business News data source plugin for Grafana that retrieves and visualizes RSS and Atom feeds.
keywords:
  - business news
labels:
  products:
    - cloud
    - enterprise
    - oss
weight: 10
---

# Business News

<!-- Get Irene's opinion about what to do with this 

:::warning Announcement
We are announcing the retirement of the Business News data source, effective immediately, as part of our ongoing effort to streamline and modernize our Grafana plugin ecosystem. To ensure uninterrupted access to news and data feeds, we strongly recommend migrating to the Infinity data source, a robust and versatile replacement designed to meet your monitoring and visualization needs.

### Why this change?

The retirement aligns with industry trends toward more integrated and scalable data solutions, addressing the complexities of managing fragmented data sources. The Infinity data source offers enhanced flexibility, supporting a wide range of data formats and real-time updates, making it an ideal choice for business analytics and dashboards.
:::

-->

The Business News data source is a plugin for Grafana that retrieves RSS and Atom feeds and allows visualizing them using Business Text and other panels.

## Requirements

- Business News data source 4.X requires **Grafana 10.1** or **Grafana 11**.
- RSS/Atom data source 3.X requires **Grafana 9** or **Grafana 10**.
- RSS/Atom data source 2.X requires **Grafana 8.5** or **Grafana 9**.
- RSS/Atom data source 1.X requires **Grafana 8**.

## Getting started

You can install the Business News data source from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/) or by using the Grafana command line tool.

{{< youtube id="1qYzHfPXJF8" >}}

To install using the command line, run the following command:

```sh
grafana cli plugins install volkovlabs-rss-datasource
```

## Highlights

- Supports RSS 2.0, RSS 1.0, and Atom.
- Works with the Dynamic Text visualization panel.
- Returns Channel (Feed) data, Items (Entries), or both as separate data frames.
- Extracts and parses as additional fields:
  - Image from Meta.
  - H4 and Image from the Encoded content.
  - Media:Group for YouTube.
- Filters items/entries based on the selected time range.
- Lets you specify query parameters with dashboard variables.

The following example shows a dashboard that combines five Business News data sources, each paired with the [Business Text panel](/plugins/business-text/). The [Business Variable panel](/plugins/business-variable/) (#1) provides a switch between Volkov Labs, Grafana, and News channel.

{{< figure src="/media/docs/grafana/panels-visualizations/business-news/dashboard.png" class="border" alt="The Business News data source allows to visualize RSS and Atom feeds on Grafana dashboard." >}}

## Tutorial

This detailed tutorial explains the RSS and Atom formats and shows you how to find appropriate links for further usage. The tutorial demonstrates how to install and configure the Business News data source on your Grafana dashboard. It also covers Grafana transformations to show data transformation techniques.

{{< youtube id="RAxqS2hpWkg" >}}

## Documentation

| Section                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| [Business Text](text)        | Demonstrates how to display feeds using the Business Text panel. |
| [Provisioning](provisioning) | Demonstrates how to automatically provision the data source. |
| [Release notes](release)     | Stay up to date with the latest features and updates.        |

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/business-news/blob/main/LICENSE).
