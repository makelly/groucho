# File Output Channel
Saved files use the following naming convention: `evt<datetime stamp><random number>.<json | xml>`

Examples: `TBD` `TBD`

The configuration file is named `file-channel.json`

Configuration file contents:

| Configuration Item | Description |
|--------------------|-------------|
| fullPath | The full path to the directory in which to save event files. If the directory does not exist it is created. |

Example configuration file:
```JSON
{
  "fullPath": "C:/published-events"
}
```
