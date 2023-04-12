import axios from 'axios';

export default axios.create({
    baseURL:"http://betterconnectapi-dev.us-east-1.elasticbeanstalk.com"
});