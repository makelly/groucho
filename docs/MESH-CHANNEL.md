# MESH Output Channel
Send an event to a recipient MESH mailbox. This uses a REST API.

The configuration file is named `mesh-channel.json`

Configuration file contents:

| Configuration Item | Description |
|--------------------|-------------|
| `url` | The URL of the MESH instance. Note - is this is not located on the Internet but the private Health and Social Care Network (HSCN), then Groucho must either be running on a computer on the HSCN or has a suitable VPN connection into HSCN. |
| `senderMailboxID` | The sender's MESH mailbox ID. |
| `recipientMailboxID` | The intended recipient's MESH mailbox ID. |
| `workflowID` | The intended recipient's workflow ID. |
| `senderMailboxPassword` | The sender's MESH mailbox password. |
| `sharedKey` | The shared MESH key. |
| TBD | TBD |

Example configuration file:
```JSON
{
  "url": "http://localhost",
  "senderMailboxID": "SENDER",
  "recipientMailboxID": "RECIPIENT",
  "workflowID": "WFID",
  "senderMailboxPassword": "PASSWORD",
  "sharedKey": "HMAC-SHA256"
}
```
