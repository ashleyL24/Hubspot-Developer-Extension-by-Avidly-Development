<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Chrome Extension Development Guidelines

This is a Chrome extension project for HubSpot developers. When suggesting code:

1. Follow Chrome Extension Manifest V3 guidelines
2. Ensure proper permissions are used in manifest.json
3. Use Chrome extension APIs appropriately (chrome.tabs, chrome.storage, etc.)
4. Follow HubSpot's API and development best practices
5. Maintain clean separation between popup UI and background logic
6. Use async/await for Chrome API calls
7. Consider security implications when handling URLs and parameters
8. Follow proper event handling patterns for Chrome extensions
9. Implement error handling for API calls and URL modifications
10. Keep the UI responsive and user-friendly

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