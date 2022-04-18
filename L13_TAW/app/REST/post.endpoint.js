import business from '../business/business.container';
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            console.log("RESULT: " + JSON.stringify(result.slice(0,5)))
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
    router.post('/api/posts', async (request, response, next) => {
        console.log("----" + JSON.stringify(request.body))
        try {
            let result = await business.getPostManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};
export default postEndpoint;
