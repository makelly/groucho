# Handlebars Expressions
If you create new templates then mark them up using the appropriate Handlebars expressions shown below.

## General
General purpose Handlebars expressions.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
| `{{getUUID 'key'}}` | This will generate a new UUID and associate it with a key. If this is called again with the same key in the same template the UUID associated with the key will be returned. Note key values are case sensitive. |


## Publisher
Publisher specific Handlebars expressions. A publisher is the organisation which is publishing the event.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
| `{{getUUID 'bundle'}}` | Every event template MUST include this. The UUID returned is used as the unique EventID. |
| `{{getUUID 'message'}}` | Every event template SHOULD include this. The UUID returned is used as the unique message header id. |
| `{{publishDate}}` | Every event template SHOULD include this. Sets the publish date and time to the current date and time at the point Groucho fabricates the event. |
 

## Provider
Provider specific Handlebars expressions. A provider is the health care provider which is the source, origin, of the event. In most situations publisher and provider will be the same, but can be different.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|     |  |

## Encounter
Encounter specific Handlebars expressions. An encounter is the health care encounter associated with the event. This will include the type of health care service and delivery location.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|     |  |

## Patient
Patient specific Handlebars expressions. A patient is the patient associated with the event.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|     |  |

## Event
Event specific Handlebars expressions. This will be different for each event type.

### additionalDemographics
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|     |  |

### admissionDetails
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|     |  |
