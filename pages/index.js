import React from 'react'

export default class Home extends React.Component {
  render() {
    return(
      <section className="p-10">
        <h2 className="text-center text-lg mb-8">Wissenschaft</h2>
        <h1 className="text-5xl text-center mb-8 font-bold">Blaue Häkchen und dunkles Design - Wie soziale Medien uns manipulieren und wie man sie umgestalten könnte</h1>
        <p className="text-lg text-center mb-8">Soziale Anwendungen wie WhatsApp oder Instagram sind darauf ausgelegt ihre NutzerInnen möglichst lange an den Bildschirm zu fesseln. Doch wie schaffen sie das, warum ist das problematisch und wie könnten sie umgestaltet werden, um einen gesunden Umgang zu fördern?</p>
        <div className="py-2 px-6 bg-gray-200 mb-20 mx-auto w-fit rounded-full">Von Robert Sauter | 31.03.2022 | 5 Min Lesezeit</div>
        <article>
          <p className="px-40 py-10 bg-gray-100">Das Internet und insbesondere soziale Netzwerke sowie Instant Messaging Dienste haben unsere Kommunikation stark verändert. Durch ihre Hilfe ist es uns möglich sich jederzeit mit Bekannten auszutauschen oder persönliche Meinungen und Erlebnisse zu teilen. Allerdings zeigt die Forschung, dass eine exzessive Nutzung dieser Anwendungen auch negative Effekte haben kann.</p>
        </article>
      </section>
    );
  }
}
