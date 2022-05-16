/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Tentang <span>Saya</span></h2>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Saya adalah seorang web developer. Saya belajar pemrograman sejak tahun 2013. <br /> Saat ini sudah memiliki pengalaman pembuatan beberapa sistem aplikasi berbasis website. <br /> Saya juga pernah menjadi speaker workshop tentang web development dan berbagi pengalaman seputar dunia programming.
      </p>
      <button type="button" onClick={() => window.location.href = 'https://drive.google.com/file/d/1mN34aOuXREaD57BlWisGfM5FMQAkO5ns/view?usp=sharing'}>
        Lihat CV Saya
      </button>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
