export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            // Return the object with status and body on resolution
            return {
                status: 200,
                body: 'success'
            };
        })
        .catch(() => {
            // Return an empty Error object on rejection
            return new Error();
        })
        .finally(() => {
            // Log the message after Promise is settled
            console.log('Got a response from the API');
        });
}
