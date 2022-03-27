import React from 'react'
import Paragraph from '../components/paragraph';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.content = [
      {
        title: '',
        text: <p>Das Internet und insbesondere soziale Netzwerke sowie Instant Messaging Dienste haben unsere Kommunikation stark verändert. Durch ihre Hilfe ist es uns möglich sich jederzeit mit Bekannten auszutauschen oder persönliche Meinungen und Erlebnisse zu teilen. Allerdings zeigt die Forschung, dass eine exzessive Nutzung dieser Anwendungen auch negative Effekte haben kann.</p>
      },
      {
        title: 'Bin ich Facebook süchtig?',
        text: <p>In der Forschung gibt es mittlerweile viele Hinweise darauf, dass die übermäßige Nutzung von Online-Angeboten negative Auswirkungen auf Nutzer*innen haben kann. Es wird dabei davon ausgegangen, dass dabei nicht das Internet selbst ausschlaggebend ist, sondern die einzelnen Anwendungen, die jemand benutzt [1],  zum Beispiel Online-Games wie World of Warcraft oder soziale Netzwerke wie Instagram oder Facebook. Ein weiterer Diskussionspunkt ist der Begriff Sucht. Seit diesem Jahr, wird Onlinespielsucht von der WHO als Krankheit anerkannt [2]. Die Nutzung von sozialen Netzwerken oder Messenger Anwendungen wurde aber noch nicht genug untersucht, weshalb auch nicht offiziell von einer social networking Sucht gesprochen werden kann. Oft wird dafür problematische Nutzung verwendet [3].<br/>Personen, deren Nutzung von sozialen Netzwerken als problematisch angesehen werden kann, verbringen so viel Zeit auf social media Plattformen, dass dadurch andere soziale Aktivitäten oder Leistungen in der Schule oder im Beruf beeinträchtigt werden. Außerdem kann sich die Gesundheit und das Wohlbefinden von betroffenen Personen verschlechtern [4]. Verschiedene Studien zeigen auch, dass psychopathologische Eigenschaften wie Depression oder soziale Angst in Zusammenhang mit problematischer Nutzung von sozialen Netzwerken stehen [3]. Allerdings ist hierbei nicht klar in welche Richtung diese Effekte wirken. Es könnte zum Beispiel sein, dass Personen, die Depressionen haben, dazu tendieren Facebook oder Instagram besonders stark zu nutzen, weil sie hoffen so ihre bestehenden Probleme bewältigen zu können. Andererseits könnte es auch sein, dass die übermäßige Nutzung von diesen Anwendungen die Depressionen auslöst oder verstärkt.</p>
      }
    ]
  }

  render() {
    return(
      <section className="bg-white rounded-2xl shadow-lg -mb-4">
        <div className="px-5">
          <h3 className="pt-10 text-center text-lg mb-8">Wissenschaft</h3>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center mb-8 font-bold">Blaue Häkchen und dunkles Design - Wie soziale Medien uns manipulieren und wie man sie umgestalten könnte</h1>
          <p className="text-lg text-center mb-8">Soziale Anwendungen wie WhatsApp oder Instagram sind darauf ausgelegt ihre NutzerInnen möglichst lange an den Bildschirm zu fesseln. Doch wie schaffen sie das, warum ist das problematisch und wie könnten sie umgestaltet werden, um einen gesunden Umgang zu fördern?</p>
          <h3 className="py-2 px-6 bg-gray-200 mb-20 mx-auto w-fit rounded-full">Von Robert Sauter | 31.03.2022 | 5 Min Lesezeit</h3>
        </div>
        <article className="rounded-b-2xl pb-5">
          {
            this.content.map((paragraph, i) => {
              return <Paragraph key={i} title={ paragraph.title } background={ i % 2 === 0 ? 'bg-gray-100' : 'bg-white' }>{ paragraph.text }</Paragraph>
            })
          }
        </article>
      </section>
    );
  }
}
