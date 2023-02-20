const { ipcRenderer } = require('electron');

import { header } from "../components/header.js";
import { idmd, idht } from "./textareaview.js";
import { $ } from "../../controlers/utils.js";

const idButton = "save";
const idButton2 = "export";
const data = "makdown"

export const headerview = header({
    Titel: "Conversor de MakDown a HTML",
    btnText: "Guardar",
    btnId: idButton, 
    btn2Text: "Exportar",
    btn2Id: idButton2
});

$(document).ready(() => {
    $(`#${idButton2}`).on('click', () => {
        ipcRenderer.send('mostrar-dialogo', `${$(`#${idht}`).e.outerHTML}`);
    });

    $(`#${idButton}`).on('click', () => {
        $(`#${idmd}`).setLocalStorage(data);
        $(`#${idButton}`).addHTML("Guardar");
    });
    
    $(document).on("keydown", (e) => {
        if (e.ctrlKey && e.key === "s") {
            $(`#${idmd}`).setLocalStorage(data);
            $(`#${idButton}`).addHTML("Guardar");
        }
    });

    $(`#${idmd}`).on('input', (e) => {
        $(`#${idButton}`).addHTML("Guardar *");
    });
});