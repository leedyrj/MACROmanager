
export default class APIController {
    static addData = (section, body) => {
        return fetch(`http://localhost:5002/${section}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(body)
        });
    };

    static getData = (section) => {
        return fetch(`http://localhost:5002/${section}`).then(e => e.json());
    };
}