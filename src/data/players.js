const players = [
  {
    name: 'Irene Chang',
    year: 'Alumna',
    major: 'Psychology',
    years: '17',
    insta: 'https://www.instagram.com/irene._.changgg/',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733098271/irene_c1f43q.png',
  },
  {
    name: 'Catherine Hu',
    year: 'Alumna',
    major: 'Cognitive Science',
    years: '2',
    insta: 'https://www.instagram.com/_catherinehu/',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733098271/catherine_ti3yiq.png',
  },
  {
    name: 'Zibai Lyu',
    year: 'PhD Student',
    major: 'MCDB',
    years: '13',
    insta: 'https://www.instagram.com/zibailyu0405/',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733098271/zibai_droogz.png',
  },
  {
    name: 'Mukun Liu',
    year: 'Senior',
    major: 'MCDB',
    years: '16',
    insta: 'https://www.instagram.com/keilantraliu/',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733108987/mukun_omvsdz.png',
  },
  {
    name: 'Wanning He',
    year: 'Senior',
    major: 'Psychology',
    years: '16',
    insta: 'https://www.instagram.com/keilantraliu/',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741052186/w_he_gqeajs.png',
  },
  {
    name: 'Wennan Liu',
    year: 'Junior',
    major: 'Cognitive Science',
    years: '16',
    insta: 'https://www.instagram.com/blank_wennanliu/',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741052347/w_liu_sxppa0.png',
  },
  {
    name: 'Ivy Xiao',
    year: 'Sophomore',
    major: 'Cognitive Science',
    years: '9',
    insta: 'https://www.instagram.com/heythisis_ivyy/',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741052251/i_xiao_c3ga8q.png',
  },
  {
    name: 'Nicole Guan',
    year: 'NULL',
    major: 'Cognitive Science',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741052348/n_guan_vu7rwq.png',
  },
  {
    name: 'Gloria Qu',
    year: 'NULL',
    major: 'Environmental Science',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741052532/g_qu_n6sruq.png',
  },
  {
    name: 'Madison Starr',
    year: 'NULL',
    major: 'Music Industry, Political Science',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741052730/m_starr_z3lylf.png',
  },
  {
    name: 'Shitong Li',
    year: 'NULL',
    major: 'Actuarial Mathematics, Ethnomusicology',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741052868/s_li_txbu9c.png',
  },
  {
    name: 'Cory Poon',
    year: 'NULL',
    major: 'Cognitive Science',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053147/c_poon_cfwgai.png',
  },
  {
    name: 'Anthony Zhao',
    year: 'NULL',
    major: 'Mathematics of Computation',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053147/a_zhao_gfbgv3.png',
  },
  {
    name: 'Grace Xu',
    year: 'NULL',
    major: 'Design Media Arts',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053403/g_xu_uvwufg.png',
  },
  {
    name: 'Melissa Yan',
    year: 'NULL',
    major: 'Ethnomusicology',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053428/m_yan_n42ehn.png',
  },
  {
    name: 'Zechuan Rao',
    year: 'NULL',
    major: 'MCDB',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053388/z_rao_n2mwvg.png',
  },
  {
    name: 'Kacey Yang',
    year: 'NULL',
    major: 'Applied Mathematics',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053584/k_yang_yfom8j.png',
  },
  {
    name: 'Joann Zhang',
    year: 'NULL',
    major: 'Economics',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053585/j_zhang_kolsfd.png',
  },
  {
    name: 'Yi Liu',
    year: 'NULL',
    major: 'Applied Mathematics',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053668/y_liu_ymhlye.png',
  },
  {
    name: 'Kyle Yang',
    year: 'NULL',
    major: 'Computer Science',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053823/k_yang_salbga.png',
  },
  {
    name: 'James Liu',
    year: 'NULL',
    major: 'Business Economics',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053779/j_liu_pq5rmo.png',
  },
  {
    name: 'Kenny Luk',
    year: 'NULL',
    major: 'Business Economics',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053806/k_luk_xfmgon.png',
  },
  {
    name: 'Chutian Shi',
    year: 'NULL',
    major: 'Comparative Literature',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053928/c_shi_myv39a.png',
  },
  {
    name: 'Ian Mautner',
    year: 'NULL',
    major: 'Ethnomusicology',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053995/i_mautners_dvlmtc.png',
  },
  {
    name: 'Janice Subroto',
    year: 'NULL',
    major: 'Computational and Systems Biology',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741053998/j_subroto_lkzgbk.png',
  },
  {
    name: 'Edward Tang',
    year: 'NULL',
    major: 'Psychobiology',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741054072/e_tang_gdghq2.png',
  },
  {
    name: 'Yizhuo Dong',
    year: 'NULL',
    major: 'Operations Managmenet',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741054162/y_dong_ndqkk2.png',
  },
  {
    name: 'Kayson Chen',
    year: 'NULL',
    major: 'Cello Performance',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741054210/k_chen_kbiens.png',
  },
  {
    name: 'Sophie Chen',
    year: 'NULL',
    major: 'Operations Management',
    years: 'NULL',
    insta: 'NULL',
    profile:
      'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741054211/s_chen_nwmyz6.png',
  },
];

export default players;
