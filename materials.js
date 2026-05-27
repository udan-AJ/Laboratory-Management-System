const defaultMaterials = [
    "DCP","Salt","Sodium Bicarbonate","Bioplex Prime","Biogain","D'poultry vitamin",
    "Vit Farmstar","DL Methionine","L-Methionine","L-Lysine HCl","L-Lysine Sulphate",
    "L-Threonine","L-Tryptophan","L-Valine","L-Isoleucine","L-Arginine","Allzyme Spectrum",
    "Allzyme vegpro","Kemzyme Promach 5","Clopidol","Roviclin","Monacox","Gromax",
    "Coxistac","Coxidin","Agimycin","Tiazin","Detoxa plus","Toxfin 360","Zagribind",
    "Mycosorb A+","Haltox","Actigen","Safmannan","Enterosure","Lysoforte","FRA Lecimax",
    "Carophyll Red","Happy EGG 100","Mycocurb liquid-AW","Salcurb K2 liquid",
    "Mycocurb Extend Plus","Ventar D","Choline Chloride","Vitamin-C","Vitamin-E",
    "Urea","De Oderase","Arbocel","NaClO","Nutri chem","Leader Yellow","Chromflex - C"
];

let materialList = JSON.parse(localStorage.getItem('savedMaterials')) || defaultMaterials;

function saveMaterials() {
    localStorage.setItem('savedMaterials', JSON.stringify(materialList));
}

function addMaterial(newItem) {
    const exists = materialList.some(item => item.toLowerCase() === newItem.toLowerCase());
    if (newItem && !exists) {
        materialList.push(newItem);
        materialList.sort();
        saveMaterials();
        alert(`${newItem} added successfully!`);
        return true;
    } else {
        alert("Item already exists or invalid input!");
        return false;
    }
}

function removeMaterial(itemToRemove) {
    const exists = materialList.some(item => item.toLowerCase() === itemToRemove.toLowerCase());
    if (!exists) {
        alert("Item not found in the list!");
        return false;
    }
    if (confirm(`Are you sure you want to remove '${itemToRemove}'?`)) {
        materialList = materialList.filter(m => m.toLowerCase() !== itemToRemove.toLowerCase());
        saveMaterials();
        alert(`${itemToRemove} removed successfully!`);
        return true;
    }
    return false;
}
