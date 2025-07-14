import {
  People,
  School,
  HealthAndSafety,
  Campaign,
  Psychology,
  Balance,
  VolunteerActivism,
  Church,
} from '@mui/icons-material';

export interface Commission {
  id: string;
  name: string;
  shortName: string;
  description: string;
  mission: string;
  vision: string;
  objectives: string[];
  activities: string[];
  contact: {
    phone?: string;
    email?: string;
    address?: string;
    website?: string;
    social?: {
      facebook?: string;
      instagram?: string;
      youtube?: string;
      twitter?: string;
    };
  };
  images: string[];
  logo?: string;
  color: string;
  iconName: string;
  featured?: boolean;
}

export const commissions: Commission[] = [
  {
    id: 'yazim',
    name: 'Youth Alive Zimbabwe',
    shortName: 'YAZIM',
    description: 'A positive peer support group based on Christian faith and values, empowering young people to make responsible, life-giving choices for positive, healthy and fulfilling lives.',
    mission: 'To address behaviour change, upholding good values and develop young people of integrity, service and good character; people who understand their purpose of life and live exemplary lives.',
    vision: 'To develop an AIDS free generation where young people can enjoy the fullness of life.',
    objectives: [
      'Empower young people to make responsible, life-giving choices',
      'Encourage positive peer pressure and support among youth',
      'Promote abstinence before marriage and faithfulness within marriage',
      'Develop young people of integrity, service and good character',
      'Create an enabling environment for youth to reach their potential'
    ],
    activities: [
      'Positive peer support groups and meetings',
      'Behaviour change workshops and training',
      'Education For Life programmes',
      'Youth leadership development',
      'Community outreach and awareness campaigns',
      'Inter-denominational youth activities',
      'Life skills and character formation programs'
    ],
    contact: {
      phone: '+263 4 123 456',
      email: 'yazimb@gmail.com',
      address: '27 Tenth Avenue Mutare, Zimbabwe',
      website: 'http://www.youthalive.org.zw/',
      social: {
        facebook: 'https://www.facebook.com/Youth-Alive-Zimbabwe-173736519308587'
      }
    },
    images: ['youtha1.jpg', 'youtha2.jpg', 'youtha3.jpg', 'youtha4.jpg', 'youtha5.jpg', 'youtha6.jpg', 'youtha7.jpg'],
    logo: 'youthlogozim.jpg',
    color: '#1976d2',
    iconName: 'People',
    featured: true
  },
  {
    id: 'caritas',
    name: 'Caritas Mutare Zimbabwe',
    shortName: 'Caritas',
    description: 'The development arm of the Catholic Church, Diocese of Mutare, providing humanitarian aid, relief, and developmental programs across Manicaland\'s six districts.',
    mission: 'Guided by the social teachings of the Roman Catholic church, Caritas Zimbabwe Mutare thrives to promote food security, social protection, environmental management, water and sanitation for vulnerable men and women, boys and girls in sustainable manner within the diocese of Mutare.',
    vision: 'God loving communities that are empowered in sustainable livelihoods and living with dignity.',
    objectives: [
      'Promote food security and sustainable agriculture',
      'Provide social protection for vulnerable populations',
      'Implement environmental management programs',
      'Improve water and sanitation infrastructure',
      'Support sustainable livelihoods and community development'
    ],
    activities: [
      'Humanitarian relief and emergency response',
      'Food security and agricultural development',
      'Water and sanitation projects',
      'Environmental management and conservation',
      'Social protection programs',
      'Community development and capacity building',
      'Advocacy and awareness campaigns'
    ],
    contact: {
      phone: '+263 4 123 457',
      email: 'cadec@mweb.co.zw',
      address: 'Cnr Jason Moyo and Herbert Chitepo, Mutare, Zimbabwe',
      social: {
        facebook: 'https://www.facebook.com/Caritas-Zimbabwe-Mutare-435582420318611',
        twitter: 'https://twitter.com/CaritasMutare'
      }
    },
    images: [
      'cari1.jpg',
      'cari2.jpg',
      'cari3.jpg',
      'cari4.jpg',
      'cari5.jpg',
      'cari6.jpg',
      'cari7.jpg',
      'cari8.jpg',
      'cari9.jpg',
      'cari10.jpg',
      'cari13.jpg',
      'cari15.jpg',
      'cari16.jpg'
    ],
    logo: 'caritasmut.jpg',
    color: '#d32f2f',
    iconName: 'VolunteerActivism'
  },
  {
    id: 'health',
    name: 'Health Commission',
    shortName: 'Health',
    description: 'Providing comprehensive, holistic healthcare services to improve the health and well-being of all Zimbabwean citizens, with a focus on those most at risk.',
    mission: 'To prevent disease, promote health and provide comprehensive, holistic care for the poor, sick, marginalized, and so participate in Christ\'s ministry of healing.',
    vision: 'To improve the health and well being of all Zimbabwean citizens with a focus on those most at risk, and to contribute to the health system so it can be more responsive to the needs of the people.',
    objectives: [
      'Reduce disease burden, maternal and infant mortality through adequate maternal and child health services',
      'Train and provide competent health staff with gender perspective at all levels',
      'Sensitize communities on preventable health problems and improve problem-solving capabilities',
      'Promote multisectoral cooperation involving Education, Agriculture, Water, NGOs, and Civil Society',
      'Create awareness that health responsibility rests with individuals, families, and communities',
      'Promote and sustain public-private partnerships in health service delivery',
      'Advance Catholic values and teachings in healthcare'
    ],
    activities: [
      'Maternal and child health services',
      'Environmental health and sanitation programs',
      'Nutrition promotion and support',
      'Communicable disease control',
      'Health staff training and capacity building',
      'Community health education and awareness',
      'Public-private health partnerships',
      'Family health promotion programs'
    ],
    contact: {
      phone: '+263 20 62608',
      email: 'cathohealth@gmail.com',
      address: 'Box 877 Mutare, Cnr Jason Moyo and Herbert Chitepo, Mutare, Zimbabwe'
    },
    images: [
      'health_covid1.jpg',
      'health_donations1.jpg', 
      'health_equip1.jpg',
      'health_equipment.jpg',
      'health_immuni.jpg',
      'health_outreach.jpg',
      'health_outreach1.jpg',
      'health_outreach4.jpg',
      'health_supplies.jpg',
      'health_supplies1.jpg',
      'health_supplies2.jpg',
      'health_supplies3.jpg',
      'health_work1.jpg',
      'health_workers.jpg',
      'health-equipment1.jpg'
    ],
    color: '#388e3c',
    iconName: 'HealthAndSafety'
  },
  {
    id: 'education',
    name: 'Education Commission',
    shortName: 'Education',
    description: 'Fostering academic excellence and character formation through Catholic education and lifelong learning.',
    mission: 'To provide quality Catholic education that forms the whole person - mind, body, and spirit.',
    vision: 'Excellence in education that nurtures faith, knowledge, and character.',
    objectives: [
      'Provide quality Catholic education',
      'Support teachers and educational staff',
      'Promote character formation and values',
      'Ensure access to education for all',
      'Foster academic excellence'
    ],
    activities: [
      'Catholic school management and support',
      'Teacher training and development',
      'Student formation and character development',
      'Educational resource provision',
      'Scholarship and bursary programs',
      'Parent and community engagement'
    ],
    contact: {
      phone: '+263 4 123 459',
      email: 'education@mutarediocese.org',
      address: 'Diocese of Mutare, Zimbabwe'
    },
    images: [
      'edu1.jpg',
      'edu2.jpg',
      'edu3.jpg',
      'edu4.jpg',
      'edu5.jpg',
      'edu6.jpg',
      'edu7.jpg',
      'edu8.jpg',
      'edu9.jpg',
      'edu10.jpg',
      'edu12.jpg',
      'edum1.jpg',
      'edum2.jpg',
      'edum3.jpg',
      'edum4.jpg',
      'edum5.jpg'
    ],
    color: '#f57c00',
    iconName: 'School'
  },
  {
    id: 'communications',
    name: 'Diocese of Mutare SOCCOM',
    shortName: 'SOCCOM',
    description: 'Promoting pastoral activities through modern means of communication to reach out to all people in response to growing social, spiritual, economic, political and cultural challenges.',
    mission: 'Promoting pastoral activities through the use of relevant modern means of communication and to reach out to all people in response to the growing social, spiritual, economic, political and cultural challenges of our time.',
    vision: 'To become a fully functional Diocesan Commission which will promote the Church\'s mission of evangelizing through the Media.',
    objectives: [
      'Evangelise through social communications using different types of media and promote interactive communications',
      'Empower youth through media education to appreciate and critically analyze different types of mass media',
      'Work in collaboration with other Commissions by providing communications assistance through training and consultancy',
      'Encourage Church personnel and youth to actively participate in media in a creative manner',
      'Coordinate communication activities within the Diocese',
      'Gather and effectively present information about Church activities at Diocesan and National level',
      'Empower media consumers, especially youth, to be appreciative, critical and discriminative users',
      'Identify, train and promote young talents for Church\'s communications work and mainstream media',
      'Train Church personnel for creative interaction and participation in media',
      'Promote and uphold human dignity and be the voice of the voiceless'
    ],
    activities: [
      'Media evangelization and interactive communications',
      'Youth media education and critical analysis training',
      'Inter-commission communications assistance and consultancy',
      'Church personnel media training and professional formation',
      'Diocesan communication coordination and management',
      'Information gathering and presentation from various sources',
      'Media literacy and consumer empowerment programs',
      'Talent identification and training for communications work',
      'Creative media interaction and participation training',
      'Advocacy for human dignity and voicing the voiceless'
    ],
    contact: {
      phone: '+263 202066928',
      email: 'communications@mutarediocese.org',
      address: 'Cnr Jason Moyo and Herbert Chitepo, Mutare, Zimbabwe',
      social: {
        facebook: 'https://www.facebook.com/mutaresoccom/'
      }
    },
    images: [
      'jubl1.jpg',
      'jubl2.jpg',
      'jubl4.jpg', 
      'jubl9.jpg',
      'sos2.jpg',
      'sos3.jpg',
      'sos5.jpg',
      'sos7.jpg',
      'sos11.jpg',
      'sos13.jpg'
    ],
    logo: 'sosscomlogo.jpg',
    color: '#7b1fa2',
    iconName: 'Campaign'
  },
  {
    id: 'youth',
    name: 'Diocese of Mutare Youth Commission',
    shortName: 'Youth Commission',
    description: 'Helping young people achieve their spiritual, intellectual, and social potential while preparing them for adult life and deepening their Christian faith.',
    mission: 'Help the Youth to deepen their Christian faith and to apply principles of faith in their daily lives.',
    vision: 'To help young people to achieve their spiritual, intellectual, and social potential and thus prepare them for adult life; give them a deeper knowledge of their Christian vocation; develop a sense of duty and responsibility; of self reliance and cooperation; respect themselves and others, and develop a spirit of self-discipline.',
    objectives: [
      'Foster total personal and spiritual growth, promote good moral behaviour and Christian principles',
      'Empower young people to live as disciples of Jesus Christ and develop leadership',
      'Involve youth in social and developmental activities for community development',
      'Draw young people to responsible participation in the Catholic faith community',
      'Explore and promote talents through self-help projects for individual and community development',
      'Promote Zimbabwean culture and language while encouraging good citizenship',
      'Guide youth through their problems and crisis situations'
    ],
    activities: [
      'Spiritual formation and faith development programs',
      'Leadership training and youth empowerment workshops',
      'Social and community development projects',
      'Talent development and self-help initiatives',
      'Cultural preservation and language programs',
      'Youth counseling and crisis intervention',
      'Vocational guidance and preparation',
      'Inter-parish youth coordination and events'
    ],
    contact: {
      phone: '+263 4 123 461',
      email: 'youth@mutarediocese.org',
      address: 'Diocese of Mutare, Zimbabwe'
    },
    images: [],
    logo: 'Logo.png',
    color: '#ff9800',
    iconName: 'Psychology'
  },
  {
    id: 'justice-peace',
    name: 'Catholic Commission for Justice and Peace in Zimbabwe-Mutare Diocesan Office',
    shortName: 'CCJP-M',
    description: 'An arm of the Roman Catholic Church operating within the structures of the RC Diocese of Mutare promoting justice and peace since its establishment in 1972 by the Zimbabwe Catholic Bishop\'s Conference (ZCBC).',
    mission: 'CCJP exist to foster Justice and peace for citizens in the Diocese guided by Gospel values.',
    vision: 'CCJP Mutare Envisions God fearing community that radiates joy and light in a democratic and prosperous Diocese.',
    objectives: [
      'Promote constitutionalism and democratic governance',
      'Advocate for environmental protection and sustainability',
      'Build community resilience and capacity',
      'Develop institutional structures and capabilities',
      'Foster justice and peace through Gospel values',
      'Support vulnerable and marginalized communities',
      'Promote human dignity and respect for human life'
    ],
    activities: [
      'Constitutionalism and democratic governance programs',
      'Environmental protection and sustainability initiatives',
      'Community resilience building and capacity development',
      'Institutional development and strengthening',
      'Human rights advocacy and education',
      'Peace and reconciliation programs',
      'Social justice education and awareness',
      'Community mediation and conflict resolution',
      'Policy advocacy and lobbying',
      'Research and documentation on justice and peace issues'
    ],
    contact: {
      phone: '+263 4 123 462',
      email: 'ccjp@mutarediocese.org',
      address: 'Diocese of Mutare, Zimbabwe'
    },
    images: ['ccjpz.jpg'],
    logo: 'ccjplogo.jpg',
    color: '#5d4037',
    iconName: 'Balance'
  },
  {
    id: 'domccp',
    name: 'Diocese of Mutare Community Care Programme',
    shortName: 'DOMCCP',
    description: 'A community based organisation working in Manicaland Province of Zimbabwe. Established in 1992 as a Trust, the original focus was on reducing the impact of HIV and AIDS through home-based care programmes. In 2015, DOMCCP was registered as a Private Voluntary Organisation (PVO) in compliance with the laws of Zimbabwe, transforming its focus to address contemporary health and development challenges of communities, especially the marginalized.',
    mission: 'Empower communities to own their development for sustainability and improved standards of lives.',
    vision: 'Healthy, empowered and productive communities.',
    objectives: [
      'Provide comprehensive community care and support services',
      'Empower communities to own their development',
      'Address contemporary health and development challenges',
      'Support marginalized and vulnerable populations',
      'Promote sustainable community development',
      'Improve standards of living in communities',
      'Ensure accountability and compliance with legal frameworks'
    ],
    activities: [
      'Home-based care programmes for HIV and AIDS patients',
      'Community health and development initiatives',
      'Support for marginalized and vulnerable populations',
      'Community empowerment and capacity building',
      'Sustainable development projects',
      'Health education and awareness programmes',
      'Community-based rehabilitation services',
      'Emergency response and relief programmes',
      'Advocacy for community rights and needs',
      'Strategic planning and implementation of five-year plans'
    ],
    contact: {
      phone: '+263 20 69263 / 67680',
      email: 'enquiries@domccp.co.zw',
      address: 'St Joseph\'s Mission Box SK60 Sakubva, ZWE Mutare, Zimbabwe',
      website: 'www.domccp.co.zw',
      social: {
        facebook: 'https://facebook.com/1670239109859860'
      }
    },
    images: [
      'domccp1.jpg',
      'domccp2.jpg',
      'domccp3.jpg',
      'domccp4.jpg',
      'domccp6.jpg',
      'domccp7.jpg',
      'domccp8.jpg',
      'domccp11.jpg',
      'domccp12.jpg',
      'domccp13.jpg',
      'domccp14.jpg',
      'domccp23.jpg',
      'domccp45.jpg'
    ],
    logo: 'domccplogo.jpg',
    color: '#00695c',
    iconName: 'Church'
  }
];

// Icon mapping
export const iconMap = {
  People,
  School,
  HealthAndSafety,
  Campaign,
  Psychology,
  Balance,
  VolunteerActivism,
  Church,
}; 