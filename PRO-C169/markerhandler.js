AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound", () => {
            console.log("marcador encontrado");
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost",() => {
            console.log("marcador perdido");
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button");

        orderButton.addEventListener("click", () => {
            swal({
                icon: "https:// i.imgur.com/4NZ6uLY.jpg",
                title: "Gracias por orden!!",
                text:" ",
                timer:2000,
                buttons: false
            });
        });

        orderSummaryButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Resumen de la orden",
                text:"Operacion en curso",
            });
        });
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
});