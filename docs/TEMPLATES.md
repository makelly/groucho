# Templates
Template files use the following naming convention: `<event name and version if required>.template.<json | xml>`

Examples: `physicalExamination.template.json   physicalExamination.template.xml`

*If you add new templates, please update the appropriate tables below.*

## Digital Child Health Events
These are events that *could* be published by direct care systems.

| File name | Description | Format |
|-----------|-------------|--------|
| additionalDemographics.template.json | Additional demographics. | JSON |
| additionalDemographics.template.xml | Additional demographics. | XML |

## National Service Events
These are events that would be published by national services. These can be used to allow Groucho to act as a *proxy publisher* of these events for testing purposes.

| File name | Description | Format |
|-----------|-------------|--------|
| failsafeAlert.template.json | Failsafe alert from national failsafe service. | JSON |
| failsafeAlert.template.xml | Failsafe alert from national failsafe service. | XML |
| birthNotification.template.json | Birth notification from national Personal Demographics Service (PDS). | JSON |
| birthNotification.template.xml | Birth notification from national Personal Demographics Service (PDS). | XML |
| changeOfAddress.template.json | Change of address from national Personal Demographics Service (PDS). | JSON |
| changeOfAddress.template.xml | Change of address from national Personal Demographics Service (PDS). | XML |
| changeOfGP.template.json | Change of GP from national Personal Demographics Service (PDS). | JSON |
| changeOfGP.template.xml | Change of GP from national Personal Demographics Service (PDS). | XML |
| personDeath.template.json | Death notification from national Personal Demographics Service (PDS). | JSON |
| personDeath.template.xml | Death notification from national Personal Demographics Service (PDS). | XML |
