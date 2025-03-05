class Lampadina {
    stato = ["acceso", "spento", "rotto"];
    status = stato[0];
    stato() {
        console.log(this.status)
    };
    click() {
        if (this.stato == "acceso") {
            this.stato = stato[1];
    } else if (this.stato == "spento") {
        this.stato = stato[0];
    } 
}}