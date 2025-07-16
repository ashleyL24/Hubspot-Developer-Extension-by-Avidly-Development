<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Hubspot Developer Extension By Avidly Development — Copilot Instructions

This is an open-source Chrome extension project for HubSpot developers. Please follow these standards when generating or suggesting code:

## Open Source Coding Standards

1. **Follow Chrome Extension Manifest V3 guidelines**
2. **Use clear, descriptive comments** for all non-trivial code
3. **Ensure proper permissions** are used in manifest.json
4. **Use Chrome extension APIs appropriately** (chrome.tabs, chrome.storage, etc.)
5. **Follow HubSpot's API and development best practices**
6. **Maintain clean separation** between popup UI and background logic
7. **Use async/await** for Chrome API calls
8. **Consider security implications** when handling URLs and parameters
9. **Follow proper event handling patterns** for Chrome extensions
10. **Implement error handling** for API calls and URL modifications
11. **Keep the UI responsive and user-friendly**
12. **Write modular, maintainable code**
13. **Use inclusive, welcoming language** in comments and documentation
14. **Respect the Code of Conduct and Contributing guidelines**

## Project Structure
- manifest.json: Extension configuration
- popup.html/css/js: Extension UI and interaction
- Background scripts: If needed for enhanced functionality
- Content scripts: If needed for page manipulation

## HubSpot-Specific Considerations
- Only modify URLs on HubSpot domains
- Follow HubSpot's URL parameter conventions
- Consider HubSpot's API rate limits
- Maintain compatibility with HubSpot's security requirements

## Contribution
- All code should be easy to review and follow the [CONTRIBUTING.md](../CONTRIBUTING.md) guidelines.
- All contributors must adhere to the [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md).