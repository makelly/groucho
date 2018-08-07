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
| `{{publisher.endpoint}}` | The endpoint from which the event has been published, for example `urn:nhs-uk:addressing:ods:A83627`. |
| `{{publisher.name}}` | The full name of the publisher, for example `SILVERDALE FAMILY PRACTICE`. |

## Provider
Provider specific Handlebars expressions. A provider is the health care provider which is the source, origin, of the event. In most situations publisher and provider will be the same, but can be different.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

## Encounter
Encounter specific Handlebars expressions. An encounter is the health care encounter associated with the event. This will include the type of health care service and delivery location.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|  TBD   |  |

## Patient
Patient specific Handlebars expressions. A patient is the patient associated with the event.

| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
| `{{patient.NHSNumber}}`    |  NHS number, for example `9912003888`. |
| `{{patient.familyName}}` | Family name, for example `DAWKINS`. |
| `{{patient.givenName}}` | Given (first) name, for example `Jack`. |
| `{{patient.gender}}` | Gender. Must be `male` or `female`. |
| `{{patient.dob}}` | Date of birth in format YYYY-MM-DD, for example `2013-10-12`. |
| `{{patient.tob}}` | Time of birth in format YYYY-MM-DDTHH:MM:DD+00:00, for example `2017-10-02T12:00:00+00:00. |
| `{{patient.postcode}}` | Residential postcode, for example `DH1 2TF`. |

## Event
Event specific Handlebars expressions. This will be different for each event type.

### additionalDemographics
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### admissionDetails
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### allergiesAndAdverseReactions
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### assessmentScales
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### birthDetails
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### bloodSpotSampleTaken
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### bloodSpotCardReceived
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### bloodSpotTestOutcome
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### clinicalRiskFactors
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### conditions
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### developmentalSkills
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### dischargeDetails
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### earlyYearsProgress
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### educationalHistory
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### emergencyCareAttendance
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### examinationFindings
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### familyHistory
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### feedingStatus
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### immunization
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### individualRequirements
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### informationandAdviceGiven
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### legalInformation
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### measurements
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### medication
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### newbornHearing
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### parentGuardianorPersonalComment
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### personalContacts
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### physicalExamination
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### planandRequestedActions
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### professionalComment
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### professionalContacts
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### referral
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### safetyAlerts
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### socialContextHousehold
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### socialContextPerson
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |

### failsafeAlertNullify
| Handlebars&nbsp;Expression       | Description |
|---------------------|-------------|
|   TBD  |  |
