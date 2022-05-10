import axios from "axios";

const UNI_REST_API_URL = 'http://localhost:8088/support/api/university/';

class UniversityService {
    getUniversities() {
        return axios.get(UNI_REST_API_URL);
    }
}

export default new UniversityService();