import global from '../../assets/global'

  const langue = global["global"]
  const texts = global[langue]["Header"]

const items = [
    { id: 1, name: texts["txt0-0"]+"<br/>"+texts["txt0-1"], link: "notre-labo" },
    { id: 2, name: texts["txt1-0"]+"<br/>"+texts["txt1-1"], link: "marque-blanche" },
    { id: 3, name: texts["txt2-0"]+"<br/>"+texts["txt2-1"], link: "formule-sur-mesure" },
    { id: 4, name: texts["txt3-0"], link: "qualite" },
    { id: 5, name: texts["txt4-0"], link: "#contactez-nous" },
    
  ]

  export default items;