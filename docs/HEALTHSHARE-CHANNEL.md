# HealthShare Output Channel
The configuration file is named `healthshare-channel.json`

Configuration file contents:

| Configuration Item | Description |
|--------------------|-------------|
| `url` | The URL of the HealthShare EMS instance. Note - is this is not located on the Internet but the private Health and Social Care Network (HSCN), then Groucho must either be running on a computer on the HSCN or has a suitable VPN connection into HSCN. |
| `authentication` | The method of authenticating with HealthShare EMS. It must be one of `basic` or `oauth2`. |
| `basic.username` | The username for HTTP basic authentication. |
| `basic.password` | The password for HTTP basic authentication. |
| `oauth2.url` | The URL of the OAuth 2.0 server. |

Example configuration file:
```JSON
{
  "url": "https://127.0.0.1",
  "authentication": "basic",
  "basic": {
    "username": "USERNAME",
    "password": "PASSWORD"
  },
  "oauth2": {
    "url": "https://127.0.0.1"
  }
}
```
