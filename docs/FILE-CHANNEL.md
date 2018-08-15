# File Output Channel
Save event in a file.

Saved files use the following naming convention: `evt-<Event type>-<random 6 digits and/or letters>.<json | xml>`

Examples: `evt-CH015-RpQ4yj.json` `evt-CH019-V9EPDf.xml`

The configuration file is named `file-channel.json`

Configuration file contents:

| Configuration Item | Description |
|--------------------|-------------|
| `fullPath` | The full path to the directory in which to save event files. If the directory does not exist it is created. |

Example configuration file:
```JSON
{
  "fullPath": "C:/published-events"
}
```
