import browser from 'webextension-polyfill';

// Listener for when the content script sends data

// Define an interface for the expected message data
interface WatchActivityMessage {
    type: string;
    data: {
        platformName: string,
        creatorName: string,
        creatorUrl: string
    };
}

// Listener for when the content script sends data
browser.runtime.onMessage.addListener(
    (message: unknown,
        sender: browser.Runtime.MessageSender,
        sendResponse: (response?: unknown) => void
    ): true | Promise<unknown> | undefined => {
        // First, check if the message is of the expected type
        if (isWatchActivityMessage(message)) {
            const { data } = message;

            // Send data to your API here
            fetch('https://your-api-endpoint.com/track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Data sent successfully:', data);
                    sendResponse({ success: true });
                })
                .catch(error => {
                    console.error('Error sending data:', error);
                    sendResponse({ success: false, error });
                });

            // Return true to indicate a response will be sent asynchronously
            return true;
        }

        // If the message isn't the expected type, do nothing
        return undefined;
    }
);

// Type guard function to check if the message is a WatchActivityMessage
function isWatchActivityMessage(message: unknown): message is WatchActivityMessage {
    return (
        typeof message === 'object' &&
        message !== null &&
        (message as WatchActivityMessage).type === 'watchActivity' &&
        'data' in message
    );
}

// TODO: Make sure the api request is only sent once. Implement a cache so that
//          repeat requests do not happen. (Check for uuid).