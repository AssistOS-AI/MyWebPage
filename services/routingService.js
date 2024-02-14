export class routingService {
    constructor() {}
    async navigateToLocation(locationArray = [], appName) {
        const MYWEBPAGE_PAGE = "my-web-page";

        if (locationArray.length === 0 || locationArray[0] === MYWEBPAGE_PAGE) {
            const pageUrl = `${webSkel.currentUser.space.id}/${appName}/${MYWEBPAGE_PAGE}`;
            await webSkel.changeToDynamicPage(MYWEBPAGE_PAGE, pageUrl);
            return;
        }
        if(locationArray[locationArray.length-1]!== MYWEBPAGE_PAGE){
            console.error(`Invalid URL: URL must end with ${MYWEBPAGE_PAGE}`);
            return;
        }
        const webComponentName = locationArray[locationArray.length - 1];
        const pageUrl = `${webSkel.currentUser.space.id}/${appName}/${locationArray.join("/")}`;
        await webSkel.changeToDynamicPage(webComponentName, pageUrl);
    }
}