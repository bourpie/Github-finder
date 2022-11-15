function About() {
  return (
    <>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
    <p className='mb-4 text-2xl font-light'>
        Une application React pour rechercher des profils GitHub et voir les détails des profils. Ce projet fait partie du cours Udemy <a className="text-white" href='https://www.udemy.com/course/'>
        React Front To Back</a> de <a className="text-white" href='https://traversymedia.com'> Brad Traversy</a></p>
    <p className='text-lg text-gray-400'>
      Version <span className='text-white'>1.0.0</span>
    </p>
    <p className='text-lg text-gray-400'>
      Mise en page par :{' '}
      <a className='text-white' href='https://twitter.com/hassibmoddasser'>
        Hassib Moddasser
      </a>
    </p>
  </>
  )
}

export default About