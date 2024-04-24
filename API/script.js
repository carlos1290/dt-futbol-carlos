function traerdata() {

    try {
        fetch("https://66279b8eb625bf088c08fd8e.mockapi.io/api/reporte")
        throw ("error")
            .then(response => {
                if (!response.ok) {
                    throw new Error("0000000000000")
                }
                return response.json()

            })

            .then(data => {
                return console.log(data)
            });

    }
    catch (error) {
        console.log(error);
    }
}

traerdata()