# HubSpot Developer Tools Chrome Extension

A Chrome extension designed to improve the daily workflow of HubSpot developers by providing quick access to documentation, community links, and URL modification tools.

## Features

1. Quick Documentation Links
   - API Documentation (CRM API, CMS API, Webhooks, OAuth)
   - HubL Template Language Reference

2. URL Modification Tools
   - Enable Debug Mode
   - Disable Caching
   - Preview Mode
   - Test Mode
   - Portal Simulation

3. Community Resources
   - Developer Announcements
   - CMS Development Tips
   - CRM Customization Questions
   - Workflow Automation Examples

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the `src` directory of this extension
4. The extension icon should appear in your Chrome toolbar

## Usage

1. Click the extension icon to open the popup
2. Use the tabs to navigate between different features:
   - **Documentation**: Quick links to HubSpot developer resources
   - **URL Tools**: Modify current HubSpot URL parameters
   - **Community**: Access to community resources and discussions

### URL Modification Tools

- All URL modification tools only work on HubSpot domains
- When using the Portal Simulation, enter a valid Portal ID before clicking the button
- Changes will automatically reload the page with the new parameters

## Development

### Project Structure
```
src/
├── manifest.json      # Extension configuration
├── popup.html        # Main popup interface
├── css/
│   └── popup.css     # Styles for the popup
├── js/
│   └── popup.js      # Popup functionality
└── images/           # Extension icons
```

### Prerequisites
- Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript
- Understanding of Chrome extension development

## Note
Remember to replace the placeholder icons in the `images` directory with your own icons before publishing the extension.