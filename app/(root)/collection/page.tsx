import CardArticle from "@/components/articles/articleCard";

export default function Page() {
  return (
    <div className="mt-11 flex flex-wrap gap-4 max-sm:flex-col sm:items-center">
      <CardArticle
        link="https://reseauactionclimat.org/comprendre-urgence/"
        imageName="/assets/images/waterlevel.jpg"
        title="Comprendre l'urgence climatique"
        description="Notre système climatique repose sur un équilibre très fragile. Cet équilibre est mis en danger par les émissions de gaz à effet de serre liées aux activités humaines."
      />

        <CardArticle
          link="https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/"
          imageName="/assets/images/eoliennes.jpg"
          title="6e rapport du GIEC : quelles solutions face au changement climatique ?"
          description="Le GIEC a publié le lundi 4 avril 2022 son nouveau rapport Atténuation du changement climatique, qui présente des solutions pour réduire nos émissions de gaz à effet de serre et limiter les conséquences du changement climatique."
        />

        <CardArticle
          link="https://climat.be/changements-climatiques/changements-observes/rapports-du-giec/2023-rapport-de-synthese"
          imageName="/assets/images/giec.jpeg"
          title="Rapport de synthèse du GIEC : les risques sont beaucoup plus élevés que dans les prévisions antérieures"
          description="Le 20 mars 2023, le GIEC a publié le très attendu rapport de synthèse du sixième cycle d'évaluation (AR6), ainsi qu'un résumé destiné aux décideurs politiques.
        Ce rapport s'appuie sur :
        les éléments scientifiques
        l'atténuation des changements climatiques
        l'impact, l'adaptation et la vulnérabilité."
        />

        <CardArticle
          link="https://climat.cned.fr/"
          imageName="/assets/images/BA-BA.png"
          title="B.A.-BA du climat et de la biodiversité"
          description="Le B.A.-BA du climat et de la biodiversité est une formation, proposée par le Cned, permettant à toutes les personnes qui le souhaitent, d’acquérir les connaissances fondamentales sur le changement climatique et la biodiversité. Il est le fruit d’une collaboration entre experts scientifiques reconnus et experts de la pédagogie numérique."
        />

        <CardArticle
          link="https://reseauactionclimat.org/"
          imageName="/assets/images/reseau-action-climat.png"
          title="LE RÉSEAU ACTION CLIMAT"
          description="Fédère les associations engagées dans la lutte contre le dérèglement climatique et pour une transition écologique, solidaire et équitable"
        />
        <CardArticle
          link="https://reseauactionclimat.org/en-finir-avec-les-fausses-solutions-pour-le-climat/"
          imageName="/assets/images/arbre.jpeg"
          title="EN FINIR AVEC LES FAUSSES SOLUTIONS POUR LE CLIMAT"
          description="Les solutions présentées comme bonnes pour le climat se révèlent parfois être contre-productives. Notre kit pour déconstruire les idées reçues autour des pratiques et outils qui se révèlent plus dangereux qu'utiles pour le climat."
        />
        <CardArticle
          link="https://www.un.org/fr/climatechange/climate-solutions"
          imageName="/assets/images/nations-unies.jpg"
          title="Solutions climatiques"
          description="La COVID-19 a mis en exergue les conséquences de l’absence de progrès suffisants dans la réalisation des objectifs de développement durable et dans la mise en œuvre de l’Accord de Paris sur les changements climatiques. Nous n’en serions pas là si nous avions fait le nécessaire."
        />
        <CardArticle
          link="https://www.lemonde.fr/planete/article/2023/12/07/cop28-a-mi-parcours-du-sommet-sur-le-climat-des-positions-diametralement-opposees-sur-les-energies-fossiles_6204356_3244.html"
          imageName="/assets/images/cop28.jpg"
          title="COP28 : des positions sur les énergies fossiles diamétralement opposées"
          description="Après des débuts marqués par plusieurs avancées, les négociations entre les parties bloquent sur l’enjeu majeur de l’avenir des combustibles fossiles, certains pays demeurant farouchement hostiles à toute mention du sujet."
        />
        <CardArticle
          link="https://www.wwf.fr/champs-daction/climat-energie/dereglement-climatique"
          imageName="/assets/images/wwf.jpg"
          title="Lutter contre le dérèglement climatique"
          description="La lutte contre le dérèglement climatique est l’un des défis majeurs du XXIe siècle, tant elle appelle à des transformations profondes des sociétés, des territoires et de l’économie mondiale."
        />
      </div>
  );
}
