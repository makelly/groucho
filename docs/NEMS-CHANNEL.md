# NEMS Output Channel
Send an event to the National Events Management Service (NEMS). This uses a REST API.

The configuration file is named `nems-channel.json`

Configuration file contents:

| Configuration Item | Description |
|--------------------|-------------|
| `url` | The URL of the NEMS instance. Note - is this is not located on the Internet but the private Health and Social Care Network (HSCN), then Groucho must either be running on a computer on the HSCN or has a suitable VPN connection into HSCN. |
| TBD | TBD |

Example configuration file:
```JSON
{
  "url": "http://localhost"
}
```
