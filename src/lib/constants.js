// constants.js - Defines constants used throught app

// Constants
const FILE_ENCODING = 'utf8';

const DATA_FOLDER = 'data';
const TEMPLATES_FOLDER = 'templates';
const SCRIPTS_FOLDER = 'scripts';
const CONFIG_FOLDER = 'config';

const PUBLISH_XML = 'xml';
const PUBLISH_JSON = 'json';

const EVENT_CH001 = 'CH001'; // Additional Demographics
const EVENT_CH002 = 'CH002'; // Admission Details
const EVENT_CH003 = 'CH003'; // Allergies and Adverse Reactions
const EVENT_CH004 = 'CH004'; // Assessment Scales
const EVENT_CH005 = 'CH005'; // Birth Details
const EVENT_CH006 = 'CH006'; // Blood Spot Sample Taken
const EVENT_CH007 = 'CH007'; // Clinical Risk Factors
const EVENT_CH008 = 'CH008'; // Conditions / Diagnoses
const EVENT_CH009 = 'CH009'; // Discharge Details
const EVENT_CH010 = 'CH010'; // Early Years Progress
const EVENT_CH011 = 'CH011'; // Emergency Care Attendance
const EVENT_CH012 = 'CH012'; // Examination Findings
const EVENT_CH013 = 'CH013'; // Family History
const EVENT_CH014 = 'CH014'; // Feeding Status
const EVENT_CH015 = 'CH015'; // Immunisation Administration
const EVENT_CH016 = 'CH016'; // Individual Requirements
const EVENT_CH017 = 'CH017'; // Information and Advice Given
const EVENT_CH018 = 'CH018'; // Measurements
const EVENT_CH019 = 'CH019'; // Medication
const EVENT_CH020 = 'CH020'; // Developmental Skills
const EVENT_CH021 = 'CH021'; // Newborn Hearing
const EVENT_CH022 = 'CH022'; // Parent Guardian or Personal Comment
const EVENT_CH023 = 'CH023'; // Personal Contacts
const EVENT_CH024 = 'CH024'; // Physical Examination
const EVENT_CH025 = 'CH025'; // Plan and Requested Actions
const EVENT_CH026 = 'CH026'; // Professional Comment
const EVENT_CH027 = 'CH027'; // Professional Contacts
const EVENT_CH028 = 'CH028'; // Referral
const EVENT_CH029 = 'CH029'; // Safety Alerts
const EVENT_CH030 = 'CH030'; // Social Context Household
const EVENT_CH031 = 'CH031'; // Social Context Person
const EVENT_CH032 = 'CH032'; // Educational History
const EVENT_CH033 = 'CH033'; // Legal Information
const EVENT_CH034 = 'CH034'; // Blood Spot Card Received
const EVENT_CH035 = 'CH035'; // Blood Spot Test Outcome
const EVENT_PDS001 = 'PDS001'; // PDS Change of GP
const EVENT_PDS002 = 'PDS002'; // PDS Change of Address
const EVENT_PDS003 = 'PDS003'; // PDS Birth Notification
const EVENT_PDS004 = 'PDS004'; // PDS Person Death
const EVENT_FM001 = 'FM001'; // National Population Failsafe Alert
const EVENT_FM002 = 'FM002'; // National Population Failsafe Alert Nullify

const CHANNEL_SINK = 'sink';
const CHANNEL_FILE = 'file';
const CHANNEL_HEALTHSHARE = 'healthshare';
const CHANNEL_MESH = 'mesh';

const INDEX_LOOPBACK = 'loopback';

const PUBLISH_SCHEMA = 'publishscript.schema.json';

// Module exports
module.exports = {
  FILE_ENCODING,
  DATA_FOLDER,
  TEMPLATES_FOLDER,
  SCRIPTS_FOLDER,
  CONFIG_FOLDER,
  PUBLISH_XML,
  PUBLISH_JSON,
  EVENT_CH001,
  EVENT_CH002,
  EVENT_CH003,
  EVENT_CH004,
  EVENT_CH005,
  EVENT_CH006,
  EVENT_CH007,
  EVENT_CH008,
  EVENT_CH009,
  EVENT_CH010,
  EVENT_CH011,
  EVENT_CH012,
  EVENT_CH013,
  EVENT_CH014,
  EVENT_CH015,
  EVENT_CH016,
  EVENT_CH017,
  EVENT_CH018,
  EVENT_CH019,
  EVENT_CH020,
  EVENT_CH021,
  EVENT_CH022,
  EVENT_CH023,
  EVENT_CH024,
  EVENT_CH025,
  EVENT_CH026,
  EVENT_CH027,
  EVENT_CH028,
  EVENT_CH029,
  EVENT_CH030,
  EVENT_CH031,
  EVENT_CH032,
  EVENT_CH033,
  EVENT_CH034,
  EVENT_CH035,
  EVENT_PDS001,
  EVENT_PDS002,
  EVENT_PDS003,
  EVENT_PDS004,
  EVENT_FM001,
  EVENT_FM002,
  CHANNEL_SINK,
  CHANNEL_FILE,
  CHANNEL_HEALTHSHARE,
  CHANNEL_MESH,
  INDEX_LOOPBACK,
  PUBLISH_SCHEMA
}
