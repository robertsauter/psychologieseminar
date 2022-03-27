import React from 'react'

export default class Imprint extends React.Component {

  render() {
    return(
      <section className="bg-white p-10 rounded-2xl shadow-lg -mb-4">
          <p>Diese Seite wurde von Robert Sauter im Rahmen eines Studienseminars erstellt.</p>
          <p>Bilder von: <a href="https://pixabay.com/" target="_blank" rel="noreferrer">pixabay.com</a></p>
          <p>Icons von: <a href="https://heroicons.com/" target="_blank" rel="noreferrer">heroicons.com</a></p>
          <p>Diese Seite erfasst oder verarbeitet keinerlei Daten!</p>
          <p>Öffentliches repository: <a href="https://github.com/robertsauter/psychologieseminar" target="_blank" rel="noreferrer">github.com</a></p>
      </section>
    );
  }
}
