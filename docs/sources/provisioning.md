---
title: Provisioning
description: Learn how to provision the Business News data source using YAML configuration files.
keywords:
  - business news
  - provisioning
labels:
  products:
    - cloud
    - enterprise
    - oss
weight: 30
---

# Provisioning

Grafana supports managing data sources by adding one or more YAML config files in the `provisioning/datasources` folder.

## Example

The following example shows how to provision the Business News data source.

```yaml
datasources:
  - name: Bitcoin
    type: volkovlabs-rss-datasource
    access: proxy
    orgId: 1
    uid: rZAdZdf7k
    version: 1
    editable: true
    jsonData:
      feed: https://news.bitcoin.com/feed/
```

## Data sources

When provisioned, the Business News data source appears in the data sources list.

{{< figure src="/media/docs/grafana/panels-visualizations/business-news/datasource.png" class="border" alt="Business News Data source requires to input Feed URL." >}}

### Feed URL

The URL must contain all necessary characters (such as `/` at the end) to avoid redirects.

During testing, you might see the following error.

{{< figure src="/media/docs/grafana/panels-visualizations/business-news/error.png" class="border" alt="Failed to fetch the provided URL." >}}

If the URL is correct and returns data but also returns an error, add `/` to the end of the URL to avoid a redirect blocked by CORS policy.

For example, use `https://sitename/feed/` instead of `https://sitename/feed`.

{{< figure src="/media/docs/grafana/panels-visualizations/business-news/correct-url.png" class="border" alt="Provided URL should be exactly as it returned from the RSS and Atom resource to avoid CORS policy restrictions." >}}

{{< admonition type="note">}}
If you already tried a data source with `https://sitename/feed` and added `/` but still see an error, clear your cache and perform a hard reload.
{{< /admonition >}}
