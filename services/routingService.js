export class routingService {
    constructor() {}
    async navigateToLocation(locationArray = [], appName) {
        const MYWEBPAGE_PAGE = "my-web-page";

        if (locationArray.length === 0 || locationArray[0] !== MYWEBPAGE_PAGE) {
            console.error("Invalid URL structure: URL must start with 'my-web-page'");
            return;
        }
        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${webSkel.currentUser.space.id}/${appName}/${locationArray.join("/")}`;
        await webSkel.changeToDynamicPage(webComponentName, pageUrl);
    }
}