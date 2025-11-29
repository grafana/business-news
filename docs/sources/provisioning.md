---
title: Provisioning
description: Learn about Provisioning in Grafana
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

Example of provisioning the Business News Data Source.

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

When provisioned, the Business News data source should be available in the data sources list.

{{< figure src="/media/docs/grafana/panels-visualizations/business-news/datasource.png" class="border" alt="Business News Data source requires to input Feed URL." >}}

### Feed URL

The URL must be contain all necessary characters ('/' at the end, etc.) to avoid redirects.

During testing you may see the error.

{{< figure src="/media/docs/grafana/panels-visualizations/business-news/error.png" class="border" alt="Failed to fetch the provided URL." >}}

If the URL is correct and returns data, but returns an error. Try to add `/` to the end of the url to avoid redirect blocked by CORS policy.

As an example use `https://sitename/feed/` instead `https://sitename/feed`.

{{< figure src="/media/docs/grafana/panels-visualizations/business-news/correct-url.png" class="border" alt="Provided URL should be exactly as it returned from the RSS and Atom resource to avoid CORS policy restrictions." >}}

{{< admonition type="note">}}
If you already tried a data source with `https://sitename/feed` and added `/` still see an error. Please clear cache and use hard reload.
{{< /admonition >}}
