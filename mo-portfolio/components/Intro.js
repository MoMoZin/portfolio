import Image from 'next/image';

const Intro = () => {
  return (

    <section className="intro-section dark-background" >
      <div className='intro-section__desc' data-aos="zoom-out">
        <p>Hello! My name is</p>
        <h1 className='name'>Mo Mo.</h1>
      </div >
      <div className='intro-section__image' data-aos="flip-right">
        <Image
          src="/mo-portfolio.jpg"
          alt="Picture of me"
          width={450}
          height={570} />

        <div className='intro-section__social'>
          <i className="fa-brands fa-linkedin fa-lg"></i>
          <i className="fa-brands fa-github fa-lg"></i>
          <i className="fa-solid fa-blog fa-lg"></i>
          <i className="fa-solid fa-envelope fa-lg"></i>
        </div>
      </div>
      <div className='intro-section__tagline' data-aos="zoom-out">
        <p> I'm a software engineer who loves to turn problems into opportunities with technology!</p>
      </div>
    </section >
  );
};

export default Intro;