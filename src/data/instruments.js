const instruments = [
  {
    description:
      'The guzheng, or Chinese zither, is a traditional string instrument with origins over 2,500 years ago. It typically has 21-26 strings stretched over a wooden soundboard, with movable bridges beneath each string for tuning. The guzheng is known for its rich, resonant tone and expressive techniques, including tremolo, glissando, and pitch bending, creating sounds that evoke nature. Once used mainly in solo pieces, the guzheng now features in ensembles and modern genres, bridging traditional and contemporary music around the world.',
    diff: 4,
    id: '1',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733044398/gz_q5xfak.png',
    link: 'https://www.youtube.com/watch?v=_B_VX9RTsI8&list=PLglzhCF1qBImfAAxudApwiVmrxCx-qMPG',
    name: 'Guzheng',
    players: [
      'Wanning He',
      'Ivy Xiao',
      'Wennan Liu',
      'Nicole Guan',
      'Gloria Qu',
    ],
    tags: ['All', 'Ensemble', 'Zheng'],
    title: 'Guzheng 古筝',
  },
  {
    description:
      'The erhu, often called the "Chinese violin," is a traditional two-stringed instrument with a history of over 1,000 years. It features a small soundbox covered with snakeskin, which amplifies its distinctive, expressive tone. Played with a bow positioned between its two strings, the erhu is known for its soulful, voice-like quality and can produce a wide range of emotions, from melancholic to lively. Once used primarily in traditional Chinese music, the erhu now appears in orchestras and various genres worldwide.',
    diff: 4,
    id: '2',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043964/erhu_eewqmk.png',
    link: 'https://www.youtube.com/watch?v=YJ2O7vQfeiE',
    name: 'Erhu',
    players: ['Zibai Lyu', 'Irene Chang', 'Catherine Hu', 'Madison Starr'],
    tags: ['All', 'Ensemble'],
    title: 'Erhu 二胡 ',
  },
  {
    description:
      "The pipa is a traditional Chinese lute with over 2,000 years of history, known for its pear-shaped wooden body and four strings. Played vertically, it uses a combination of finger plucking, rapid strumming, and bending techniques to create a bright, percussive sound with expressive nuances. The pipa's music can evoke scenes from nature, battle, or romance, making it central in Chinese classical and folk music. Today, the pipa is also featured in modern compositions, showcasing its versatility across genres worldwide.",
    diff: 4,
    id: '3',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043964/pipa_kvt7mh.png',
    link: 'https://www.youtube.com/watch?v=gcGVwBoic38',
    name: 'Pipa',
    players: ['Alice Deng', 'Shitong Li', 'Mukun Liu'],
    tags: ['All', 'Ensemble'],
    title: 'Pipa 琵琶',
  },
  {
    description:
      'The sheng is a traditional Chinese mouth-blown reed instrument with a history of over 3,000 years, recognized as one of the oldest Chinese wind instruments. It consists of a series of vertical bamboo pipes arranged in a circle, each with a metal reed, creating a harmonic sound when air is blown into a central chamber. The sheng can play multiple notes simultaneously, making it unique among Chinese instruments for its ability to produce chords. Traditionally used in folk and opera music, the sheng now also appears in contemporary and orchestral music globally.',
    diff: 4,
    id: '4',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043964/sheng_scuov0.png',
    link: 'https://www.youtube.com/watch?v=66xu3kn3Jc4',
    name: 'Sheng',
    players: ['Cory Poon', 'Anthony Zhao'],
    tags: ['All', 'Ensemble'],
    title: 'Sheng 笙',
  },
  {
    description:
      'The dizi is a traditional Chinese transverse flute made from bamboo, with over 2,000 years of history. Known for its bright, melodic sound, the dizi has a special membrane, called the dimo, covering one hole, which gives it a distinctive buzzing tone. Played by blowing across a mouth hole and covering finger holes, it can express lively, lyrical, and even dramatic moods. The dizi is widely used in Chinese folk and classical music and is now featured in orchestras and fusion genres worldwide.',
    diff: 4,
    id: '5',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733044752/dizi_j7fp2x.png',
    link: 'https://www.youtube.com/watch?v=fz1i-Wvv1tk',
    name: 'Dizi',
    players: ['Grace Xu', 'Melissa Yan', 'Zechuan Rao'],
    tags: ['All', 'Ensemble'],
    title: 'Dizi 笛子',
  },
  {
    description:
      'The yangqin is a traditional Chinese hammered dulcimer, characterized by its trapezoidal shape and numerous strings stretched across a wooden frame. Played with mallets, the yangqin produces a bright, resonant sound and is capable of creating intricate melodies and harmonies. With origins tracing back to the Middle East, it became popular in China during the Ming Dynasty. The yangqin is commonly used in Chinese folk music, orchestras, and contemporary compositions, showcasing its versatility across various musical styles and genres.',
    diff: 4,
    id: '6',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043964/yangqin_msjby7.png',
    link: 'https://www.youtube.com/watch?v=NYOb4HHzH_w',
    name: 'Yangqin',
    players: ['Kacey Yang', 'Joann Zhang'],
    tags: ['All', 'Ensemble'],
    title: 'Yangqin 扬琴',
  },
  {
    description:
      'The liuqin is a traditional Chinese string instrument resembling a smaller version of the pipa, with a pear-shaped wooden body and four strings. Played with a plectrum, the liuqin produces a bright, clear tone, making it suitable for both solo performances and ensemble settings. Its unique sound is characterized by a quick, agile playing style that can evoke a range of emotions, from lively to lyrical. The liuqin is often featured in Chinese folk music, opera, and contemporary compositions, reflecting its versatility and enduring popularity in Chinese culture.',
    diff: 4,
    id: '7',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043964/liuqin_jgbyqd.png',
    link: 'https://www.youtube.com/watch?v=jsHdsoUMtpU',
    name: 'Liuqin',
    players: ['Yi Liu'],
    tags: ['All', 'Ensemble'],
    title: 'Liuqin 柳琴',
  },
  {
    description:
      'The ruan is a traditional Chinese string instrument with a round body and long neck, often called the "Chinese lute." It typically has four strings and is played with a plectrum, producing a warm, rich sound. The ruan comes in various sizes, each offering different tonal qualities, and is known for its expressive capabilities, suitable for solo performances and ensembles. With a history dating back over 2,000 years, the ruan is commonly used in Chinese classical music, opera, and contemporary compositions, showcasing its versatility and cultural significance.',
    diff: 4,
    id: '8',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043964/ruan_u2msyz.png',
    link: 'https://www.youtube.com/watch?v=eQXo9-9_ap0',
    name: 'Ruan',
    players: ['Kyle Yang', 'James Liu', 'Kenny Luk'],
    tags: ['All', 'Ensemble'],
    title: 'Ruan 阮',
  },
  {
    description:
      'The suona is a traditional Chinese double-reed instrument, similar to a shawm and shehnai, known for its loud and piercing sound. Made of wood or metal, it features a conical body and a double reed that produces a vibrant tone. The suona has a wide range and is capable of playing both melodic lines and intricate ornamentation. Traditionally used in Chinese folk music, weddings, and festive celebrations, it can evoke joy and excitement. The suona is increasingly featured in modern compositions, showcasing its adaptability across various musical styles and genres.',
    diff: 4,
    id: '9',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043963/suona_p5du8c.png',
    link: 'https://www.youtube.com/watch?v=-EWHW672PwY',
    name: 'Suona',
    players: ['Chutian Shi'],
    tags: ['All', 'Ensemble'],
    title: 'Suona 唢呐',
  },
  {
    description:
      'The sanxian is a traditional Chinese three-stringed instrument with a long neck and a rounded, fretless body. Made from wood and often covered with snake skin, it produces a deep, resonant sound when played with a plectrum. The sanxian\'s name means "three strings," and it is known for its expressive range and unique tonal qualities. Commonly used in Chinese opera, folk music, and ensembles, the sanxian can convey a variety of emotions, from sorrowful to lively, making it a versatile instrument in both traditional and contemporary music.',
    diff: 4,
    id: '10',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733044868/sanxian_wunsl0.png',
    link: 'https://www.youtube.com/watch?v=kd-01Autd0Y',
    name: 'Sanxian',
    players: ['Ian Mautner', 'Janice Subroto'],
    tags: ['All', 'Ensemble'],
    title: 'Sanxian 三弦',
  },
  {
    description:
      'The xiao is a traditional Chinese vertical bamboo flute, known for its soft, mellow tone and expressive range. Typically made from a single piece of bamboo, it features five or six finger holes and is played by blowing across the top. The xiao has a history of over 2,500 years and is often associated with reflective and serene music, evoking feelings of nature and tranquility. Commonly used in Chinese classical, folk, and spiritual music, the xiao remains a beloved instrument, celebrated for its beauty and ability to convey deep emotion.',
    diff: 4,
    id: '11',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043964/xiao_worzff.png',
    link: 'https://www.youtube.com/watch?v=MCBO2CfiLmk',
    name: 'Xiao',
    players: ['Edward Tang'],
    tags: ['All', 'Ensemble'],
    title: 'Xiao 箫',
  },
  {
    description:
      'The guqin is a traditional Chinese seven-string zither, revered for its deep cultural significance and serene sound. With a history spanning over 3,000 years, the guqin is known for its understated elegance and is often associated with Confucian philosophy. It features a long, narrow body made of wood and is played by plucking the strings, allowing for a wide range of expressive techniques. The guqin is primarily used in solo performances and is celebrated for evoking nature and emotion, making it a symbol of Chinese artistic heritage.',
    diff: 4,
    id: '12',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733044030/gq_sdjwyv.png',
    link: 'https://www.youtube.com/watch?v=XO6i2Lg38bo&list=PLy3c9hw2xV4g69auLBmpMXG_1utgVGCW7',
    name: 'Guqin',
    players: ['Yizhuo Dong'],
    tags: ['All', 'Qin'],
    title: 'Guqin 古琴',
  },
  {
    description:
      'The cello is a string instrument known for its rich, warm tone and wide range. In recent years, it has become popular in Chinese music ensembles due to its versatility and depth of sound. The cello provides a strong bass line that complements traditional Chinese instruments, which often focus on higher melodies. By filling the lower frequency range that these instruments typically lack, the cello enhances the harmonic structure and balances the overall sound in ensembles. This fusion of Western and Chinese music creates a richer musical experience for contemporary audiences.',
    diff: 4,
    id: '13',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043963/cello_olry3o.png',
    link: 'https://www.youtube.com/watch?v=scz8H_IiYQI',
    name: 'Cello',
    players: ['Kayson Chen', 'Sophie Chen'],
    tags: ['All', 'Ensemble'],
    title: 'Cello 大提琴',
  },
  {
    description:
      'Chinese percussion encompasses a diverse range of instruments that play a vital role in traditional Chinese music, opera, and festivals. Instruments like the gong, drum, and cymbals are commonly used to create rhythm and enhance the overall performance. The dazu, a barrel drum, is often used in folk and operatic settings, while the luo (gong) adds dramatic effects.\nPercussion instruments are essential for maintaining tempo, accentuating melodies, and adding excitement to performances. Their dynamic and varied sounds contribute significantly to the richness of Chinese musical traditions and cultural celebrations.',
    diff: 4,
    id: '14',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043963/percussion_laiyfu.png',
    link: 'https://www.youtube.com/watch?v=mSJrIcxvzpk',
    name: 'Percussion',
    players: ['Wanning He'],
    tags: ['All', 'Ensemble'],
    title: 'Percussion',
  },
  {
    description:
      'Kunqu is one of the oldest and most refined forms of Chinese opera, originating from the Kunshan region in Jiangsu province during the Ming Dynasty. Known for its graceful movements, lyrical melodies, and poetic lyrics, Kunqu combines singing, acting, and dance to tell stories, often based on classical literature. The performance style emphasizes subtlety and emotional depth, making it distinct from other Chinese operas. Revived in recent years, Kunqu is celebrated for its artistic value and cultural heritage.',
    diff: 4,
    id: '15',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043963/kunqu_eveojq.png',
    link: 'https://www.youtube.com/watch?v=ePSDPHQoQ2A',
    name: 'Kunqu',
    players: [],
    tags: ['All', 'Kunqu Opera'],
    title: 'Kunqu 昆曲',
  },
  {
    description:
      'The hulusi is a traditional Chinese wind instrument made from a gourd and bamboo, recognized for its unique, soft sound. Often referred to as the "gourd flute," it has one melody pipe and two drone pipes, producing a rich, harmonious tone when played. The hulusi is popular in folk music, particularly in the southwestern regions of China, such as Yunnan, where it is used to accompany songs and dances. Its expressive capabilities allow it to evoke a range of emotions, making it a cherished instrument in both traditional performances and contemporary compositions.',
    diff: 4,
    id: '16',
    image:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733043963/hulusi_ky1ubl.png',
    link: 'https://www.youtube.com/watch?v=x_Pb-RTXnIo',
    name: 'Hulusi',
    players: ['Cory Poon'],
    tags: ['All'],
    title: 'Hulusi 葫芦丝',
  },
];

export default instruments;
