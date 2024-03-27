export default { // Exportation du module
    props: { // Propriétés du composant
        lien:{
            type: String,
            required: true
        },
        contenu: { // Nom de la propriété
            type: String, // Type de la propriété
            required: false // Propriété obligatoire
        }
    },
    // Contenu HTML du composant
    template: `
    <a :href="lien">{{ contenu || lien }}</a>
    `
}
