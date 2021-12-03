const API_URL = "http://localhost:8080/empresa/listar/";

export const rutasApi = () => {
    return fetch(API_URL).then(response => response.json());
}