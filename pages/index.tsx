import { NextPage } from 'next';
import Table from 'components/Table';
import { useMemo } from 'react';
import { Column, FilterType, FilterTypes, useFilters, usePagination, useSortBy, useTable } from 'react-table';
import Layout from 'components/Layout';
import Filter from 'components/Filter';

export type Data = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  creditCard: string | null;
  university: string | null;
};

const TablePage: NextPage = () => {
  const data: Data[] = useMemo(
    () => [
      {
        id: 1,
        firstName: 'Dominic',
        lastName: 'Duigenan',
        email: 'dduigenan0@wiley.com',
        gender: 'Female',
        city: 'Chengfeng',
        country: 'China',
        creditCard: null,
        university: 'Guangdong Peizheng College ',
      },
      {
        id: 2,
        firstName: 'Jackie',
        lastName: 'Licciardi',
        email: 'jlicciardi1@unblog.fr',
        gender: 'Non-binary',
        city: 'Novaya Chigla',
        country: 'Russia',
        creditCard: '30186154471065',
        university: 'Ural Academy of Public Administration',
      },
      {
        id: 3,
        firstName: 'Marlowe',
        lastName: 'Dicker',
        email: 'mdicker2@cnbc.com',
        gender: 'Female',
        city: 'Palaífyto',
        country: 'Greece',
        creditCard: '374283215464835',
        university: 'University of Western Macedonia',
      },
      {
        id: 4,
        firstName: 'Jerrie',
        lastName: 'Golledge',
        email: 'jgolledge3@thetimes.co.uk',
        gender: 'Non-binary',
        city: '‘Anjarah',
        country: 'Jordan',
        creditCard: '3564952611734397',
        university: 'Philadelphia University',
      },
      {
        id: 5,
        firstName: 'Florella',
        lastName: 'Pratley',
        email: 'fpratley4@clickbank.net',
        gender: 'Non-binary',
        city: 'Tateyama',
        country: 'Japan',
        creditCard: '3556727166352542',
        university: null,
      },
      {
        id: 6,
        firstName: 'Gabriel',
        lastName: 'Bown',
        email: 'gbown5@pcworld.com',
        gender: 'Non-binary',
        city: 'Al Ibrāhīmīyah',
        country: 'Egypt',
        creditCard: '5002350158786182',
        university: 'Sinai University',
      },
      {
        id: 7,
        firstName: 'Juliane',
        lastName: 'Hartmann',
        email: 'jhartmann6@artisteer.com',
        gender: 'Bigender',
        city: 'Brnaze',
        country: 'Croatia',
        creditCard: '3568737216739586',
        university: 'Zagreb School of Economics and Management',
      },
      {
        id: 8,
        firstName: 'Hewet',
        lastName: 'Conant',
        email: 'hconant7@plala.or.jp',
        gender: 'Male',
        city: 'Budapest',
        country: 'Hungary',
        creditCard: '676349696652335805',
        university: 'Liszt Ferenc Academy of Music Budapest',
      },
      {
        id: 9,
        firstName: 'Tilda',
        lastName: 'Masding',
        email: 'tmasding8@amazon.co.jp',
        gender: 'Non-binary',
        city: 'San Vicente',
        country: 'Philippines',
        creditCard: '5191916425947806',
        university: 'Saint Louis University',
      },
      {
        id: 10,
        firstName: 'Charmane',
        lastName: 'Farahar',
        email: 'cfarahar9@wsj.com',
        gender: 'Female',
        city: 'Libode',
        country: 'South Africa',
        creditCard: '3573021547436995',
        university: 'Central University of Technology, Free State',
      },
      {
        id: 11,
        firstName: 'Pietrek',
        lastName: 'MacKeeg',
        email: 'pmackeega@123-reg.co.uk',
        gender: 'Agender',
        city: 'Boromlya',
        country: 'Ukraine',
        creditCard: '374288402964158',
        university: 'Ivano-Frankivsk National University of Oli and Gas',
      },
      {
        id: 12,
        firstName: 'Tabbatha',
        lastName: 'Denk',
        email: 'tdenkb@nyu.edu',
        gender: 'Genderfluid',
        city: 'Debre Zeyit',
        country: 'Ethiopia',
        creditCard: '5541579349258705',
        university: 'Wolkite University',
      },
      {
        id: 13,
        firstName: 'Fae',
        lastName: 'Kopec',
        email: 'fkopecc@plala.or.jp',
        gender: 'Polygender',
        city: 'Qutun',
        country: 'China',
        creditCard: '3546999813524806',
        university: 'China Academy of Art',
      },
      {
        id: 14,
        firstName: 'Philly',
        lastName: 'Zollner',
        email: 'pzollnerd@naver.com',
        gender: 'Polygender',
        city: 'Hilversum',
        country: 'Netherlands',
        creditCard: '30015757764040',
        university: 'Christelijke Hogeschool Windesheim',
      },
      {
        id: 15,
        firstName: 'Mimi',
        lastName: 'Fargher',
        email: 'mfarghere@delicious.com',
        gender: 'Bigender',
        city: 'Kenarilang',
        country: 'Indonesia',
        creditCard: null,
        university: 'Universitas Sanata Dharma',
      },
      {
        id: 16,
        firstName: 'Genny',
        lastName: 'Piel',
        email: 'gpielf@earthlink.net',
        gender: 'Bigender',
        city: 'Nesovice',
        country: 'Czech Republic',
        creditCard: '6771713383198785774',
        university: 'Brno University of Technology',
      },
      {
        id: 17,
        firstName: 'Harrison',
        lastName: 'Immins',
        email: 'himminsg@xing.com',
        gender: 'Female',
        city: 'Apengjiang',
        country: 'China',
        creditCard: '374283789314895',
        university: null,
      },
      {
        id: 18,
        firstName: 'Georgina',
        lastName: 'Korn',
        email: 'gkornh@ed.gov',
        gender: 'Bigender',
        city: 'Tsyelyakhany',
        country: 'Belarus',
        creditCard: '341726059460012',
        university: null,
      },
      {
        id: 19,
        firstName: 'Elena',
        lastName: 'Cummine',
        email: 'ecumminei@nhs.uk',
        gender: 'Bigender',
        city: 'Huangzhuang',
        country: 'China',
        creditCard: '503816772124403768',
        university: null,
      },
      {
        id: 20,
        firstName: 'Chadd',
        lastName: 'Gaskins',
        email: 'cgaskinsj@ftc.gov',
        gender: 'Polygender',
        city: 'Lipce Reymontowskie',
        country: 'Poland',
        creditCard: '3540191945581195',
        university: null,
      },
      {
        id: 21,
        firstName: 'Odette',
        lastName: 'Dunbleton',
        email: 'odunbletonk@addtoany.com',
        gender: 'Non-binary',
        city: 'Tallahassee',
        country: 'United States',
        creditCard: '370432571118758',
        university: 'Life Chiropractic College West',
      },
      {
        id: 22,
        firstName: 'Tito',
        lastName: 'Espina',
        email: 'tespinal@addthis.com',
        gender: 'Genderfluid',
        city: 'Denver',
        country: 'United States',
        creditCard: '3550168133584527',
        university: 'Connecticut College',
      },
      {
        id: 23,
        firstName: 'Brigitte',
        lastName: 'David',
        email: 'bdavidm@flickr.com',
        gender: 'Polygender',
        city: 'Dandian',
        country: 'China',
        creditCard: '30180465110439',
        university: 'Huazhong Agricultural University',
      },
      {
        id: 24,
        firstName: 'Quentin',
        lastName: 'Blankhorn',
        email: 'qblankhornn@fotki.com',
        gender: 'Non-binary',
        city: 'Caotang',
        country: 'China',
        creditCard: '30527880095274',
        university: 'Nanjing University of Economics',
      },
      {
        id: 25,
        firstName: 'Mella',
        lastName: 'Seiffert',
        email: 'mseifferto@hubpages.com',
        gender: 'Polygender',
        city: 'Dayu',
        country: 'China',
        creditCard: '3550633470002821',
        university: 'Nanjing Forestry University',
      },
      {
        id: 26,
        firstName: 'Noreen',
        lastName: 'Buxsy',
        email: 'nbuxsyp@constantcontact.com',
        gender: 'Non-binary',
        city: 'Midland',
        country: 'United States',
        creditCard: '3559494220568319',
        university: 'Baltimore Hebrew University',
      },
      {
        id: 27,
        firstName: 'Krista',
        lastName: "O'Sculley",
        email: 'kosculleyq@baidu.com',
        gender: 'Male',
        city: 'Khānewāl',
        country: 'Pakistan',
        creditCard: null,
        university: 'Liaquat University of Medical & Health Sciences Jamshoro',
      },
      {
        id: 28,
        firstName: 'Liane',
        lastName: 'Gargett',
        email: 'lgargettr@fema.gov',
        gender: 'Non-binary',
        city: 'Kafr Takhārīm',
        country: 'Syria',
        creditCard: '6709042158347389641',
        university: 'Damascus University',
      },
      {
        id: 29,
        firstName: 'Nicolina',
        lastName: 'Maso',
        email: 'nmasos@berkeley.edu',
        gender: 'Female',
        city: 'Aanislag',
        country: 'Philippines',
        creditCard: '560225667785394279',
        university: 'Davao Doctors College',
      },
      {
        id: 30,
        firstName: 'Nil',
        lastName: 'Wettern',
        email: 'nwetternt@icio.us',
        gender: 'Non-binary',
        city: 'São Domingos do Maranhão',
        country: 'Brazil',
        creditCard: '4026867633296987',
        university: 'Universidade Estácio de Sá',
      },
      {
        id: 31,
        firstName: 'Natalie',
        lastName: 'Stiant',
        email: 'nstiantu@mail.ru',
        gender: 'Non-binary',
        city: 'Žihle',
        country: 'Czech Republic',
        creditCard: null,
        university: 'Tomas Bata University in Zlin',
      },
      {
        id: 32,
        firstName: 'Mikael',
        lastName: 'Chimienti',
        email: 'mchimientiv@dmoz.org',
        gender: 'Genderqueer',
        city: 'Nadezhda',
        country: 'Russia',
        creditCard: null,
        university: 'Yaroslavl State University',
      },
      {
        id: 33,
        firstName: 'Carey',
        lastName: 'Seakings',
        email: 'cseakingsw@google.cn',
        gender: 'Male',
        city: 'Khirdalan',
        country: 'Azerbaijan',
        creditCard: '5020835767866665530',
        university: null,
      },
      {
        id: 34,
        firstName: 'Annice',
        lastName: 'Alfonsini',
        email: 'aalfonsinix@quantcast.com',
        gender: 'Bigender',
        city: 'Petroúpolis',
        country: 'Greece',
        creditCard: '374283810679555',
        university: 'University of Central Greece',
      },
      {
        id: 35,
        firstName: 'Yule',
        lastName: 'Mongan',
        email: 'ymongany@barnesandnoble.com',
        gender: 'Non-binary',
        city: 'Banjar Swastika',
        country: 'Indonesia',
        creditCard: '30256956385738',
        university: 'Universitas Bengkulu',
      },
      {
        id: 36,
        firstName: 'Demetris',
        lastName: 'Goodyear',
        email: 'dgoodyearz@bigcartel.com',
        gender: 'Female',
        city: 'Kefang',
        country: 'China',
        creditCard: '374283429646755',
        university: 'Luzhou Medical College',
      },
      {
        id: 37,
        firstName: 'Mariejeanne',
        lastName: 'Sarah',
        email: 'msarah10@state.tx.us',
        gender: 'Female',
        city: 'Nowy Tomyśl',
        country: 'Poland',
        creditCard: '676315822114303328',
        university: 'Catholic University of Lublin',
      },
      {
        id: 38,
        firstName: 'Darby',
        lastName: 'Thandi',
        email: 'dthandi11@cornell.edu',
        gender: 'Genderqueer',
        city: 'Mulyadadi',
        country: 'Indonesia',
        creditCard: null,
        university: 'Universitas Madura',
      },
      {
        id: 39,
        firstName: 'Hazlett',
        lastName: 'Mattis',
        email: 'hmattis12@alibaba.com',
        gender: 'Genderqueer',
        city: 'Karadaglije',
        country: 'Bosnia and Herzegovina',
        creditCard: '3538725459638075',
        university: 'University of Mostar',
      },
      {
        id: 40,
        firstName: 'Benoite',
        lastName: 'Ikringill',
        email: 'bikringill13@npr.org',
        gender: 'Female',
        city: 'Tha Bo',
        country: 'Thailand',
        creditCard: null,
        university: null,
      },
      {
        id: 41,
        firstName: 'Mill',
        lastName: 'Killock',
        email: 'mkillock14@reference.com',
        gender: 'Non-binary',
        city: 'Włocławek',
        country: 'Poland',
        creditCard: '3538914124643617',
        university: null,
      },
      {
        id: 42,
        firstName: 'Quinton',
        lastName: 'Bradwell',
        email: 'qbradwell15@github.com',
        gender: 'Male',
        city: 'Memphis',
        country: 'United States',
        creditCard: '3556426057384553',
        university: 'Eastern New Mexico University',
      },
      {
        id: 43,
        firstName: 'Lydie',
        lastName: 'Bassick',
        email: 'lbassick16@apple.com',
        gender: 'Genderqueer',
        city: 'Quy Đạt',
        country: 'Vietnam',
        creditCard: '5602259109323140',
        university: 'Hue University of Agriculture and Forestry ',
      },
      {
        id: 44,
        firstName: 'Prudy',
        lastName: 'Zanitti',
        email: 'pzanitti17@icio.us',
        gender: 'Male',
        city: 'Secunda',
        country: 'South Africa',
        creditCard: '3566876249196752',
        university: 'University of Fort Hare',
      },
      {
        id: 45,
        firstName: 'Grazia',
        lastName: 'Hinkens',
        email: 'ghinkens18@comcast.net',
        gender: 'Female',
        city: 'Nianpan',
        country: 'China',
        creditCard: null,
        university: 'Wuyi University',
      },
      {
        id: 46,
        firstName: 'Ida',
        lastName: 'Girk',
        email: 'igirk19@bigcartel.com',
        gender: 'Female',
        city: 'Bang Kruai',
        country: 'Thailand',
        creditCard: null,
        university: 'Pathumthani University',
      },
      {
        id: 47,
        firstName: 'West',
        lastName: 'Boyfield',
        email: 'wboyfield1a@qq.com',
        gender: 'Male',
        city: 'Matamey',
        country: 'Niger',
        creditCard: '3587901787800790',
        university: 'Université Abdou Moumouni de Niamey',
      },
      {
        id: 48,
        firstName: 'Haley',
        lastName: 'Stovell',
        email: 'hstovell1b@wired.com',
        gender: 'Female',
        city: 'Pradera',
        country: 'Colombia',
        creditCard: null,
        university: 'Universidad Tecnológica de Pereira',
      },
      {
        id: 49,
        firstName: 'Sioux',
        lastName: 'Yonge',
        email: 'syonge1c@archive.org',
        gender: 'Bigender',
        city: 'La Roche-sur-Yon',
        country: 'France',
        creditCard: '374283188961486',
        university: null,
      },
      {
        id: 50,
        firstName: 'Georas',
        lastName: 'Kelwick',
        email: 'gkelwick1d@dagondesign.com',
        gender: 'Male',
        city: 'Serpukhov',
        country: 'Russia',
        creditCard: '3570119061757185',
        university: 'Siberian State University of Telecommunications and Informatics',
      },
      {
        id: 51,
        firstName: 'Abagail',
        lastName: 'Read',
        email: 'aread1e@businesswire.com',
        gender: 'Agender',
        city: 'Hong’an Chengguanzhen',
        country: 'China',
        creditCard: null,
        university: 'Zhejiang Sci-Tech University ',
      },
      {
        id: 52,
        firstName: 'Cory',
        lastName: 'Stroton',
        email: 'cstroton1f@is.gd',
        gender: 'Bigender',
        city: 'Suure-Jaani',
        country: 'Estonia',
        creditCard: null,
        university: null,
      },
      {
        id: 53,
        firstName: 'Ainsley',
        lastName: 'Askew',
        email: 'aaskew1g@fema.gov',
        gender: 'Genderfluid',
        city: 'Qingshu',
        country: 'China',
        creditCard: null,
        university: 'Wuyi University',
      },
      {
        id: 54,
        firstName: 'Ranice',
        lastName: 'Plows',
        email: 'rplows1h@disqus.com',
        gender: 'Genderfluid',
        city: 'Dhanot',
        country: 'Pakistan',
        creditCard: '5493870587696971',
        university: 'University of Munawwar-ul-Islam',
      },
      {
        id: 55,
        firstName: 'Henryetta',
        lastName: 'Maryott',
        email: 'hmaryott1i@slate.com',
        gender: 'Female',
        city: 'Mulyadadi',
        country: 'Indonesia',
        creditCard: null,
        university: 'Universitas Darma Agung',
      },
      {
        id: 56,
        firstName: 'Holden',
        lastName: 'Phillcock',
        email: 'hphillcock1j@nih.gov',
        gender: 'Bigender',
        city: 'Martigues',
        country: 'France',
        creditCard: null,
        university: null,
      },
      {
        id: 57,
        firstName: 'Doti',
        lastName: 'McMaster',
        email: 'dmcmaster1k@unesco.org',
        gender: 'Non-binary',
        city: 'København',
        country: 'Denmark',
        creditCard: null,
        university: 'IT University of Copenhagen',
      },
      {
        id: 58,
        firstName: 'Cassandry',
        lastName: 'Hackin',
        email: 'chackin1l@youtube.com',
        gender: 'Bigender',
        city: 'Hägersten',
        country: 'Sweden',
        creditCard: null,
        university: 'Malmö University College',
      },
      {
        id: 59,
        firstName: 'Caterina',
        lastName: 'Shewon',
        email: 'cshewon1m@constantcontact.com',
        gender: 'Genderfluid',
        city: 'Itacurubí del Rosario',
        country: 'Paraguay',
        creditCard: null,
        university: null,
      },
      {
        id: 60,
        firstName: 'Doro',
        lastName: 'Manske',
        email: 'dmanske1n@cbsnews.com',
        gender: 'Genderfluid',
        city: 'Tojeira',
        country: 'Portugal',
        creditCard: '50205283997030341',
        university: 'Instituto Superior de Tecnologias Avançadas - ISTEC',
      },
      {
        id: 61,
        firstName: 'Leeland',
        lastName: 'Siemons',
        email: 'lsiemons1o@blogtalkradio.com',
        gender: 'Genderqueer',
        city: 'Sangzhen',
        country: 'China',
        creditCard: '3542312131538504',
        university: 'Capital Normal University',
      },
      {
        id: 62,
        firstName: 'Sephira',
        lastName: 'Pietersma',
        email: 'spietersma1p@nbcnews.com',
        gender: 'Female',
        city: 'Al Ibrāhīmīyah',
        country: 'Egypt',
        creditCard: null,
        university: 'Modern Sciences & Arts University',
      },
      {
        id: 63,
        firstName: 'Sallyann',
        lastName: 'Jillings',
        email: 'sjillings1q@bbc.co.uk',
        gender: 'Non-binary',
        city: 'Victoria',
        country: 'El Salvador',
        creditCard: '5641824919842898042',
        university: null,
      },
      {
        id: 64,
        firstName: 'Allix',
        lastName: 'Girsch',
        email: 'agirsch1r@jugem.jp',
        gender: 'Non-binary',
        city: 'Ketitang Wetan',
        country: 'Indonesia',
        creditCard: '3548514440144106',
        university: 'Universitas Islam Bandung',
      },
      {
        id: 65,
        firstName: 'Norris',
        lastName: 'Heaphy',
        email: 'nheaphy1s@hibu.com',
        gender: 'Agender',
        city: 'Sirindhorn',
        country: 'Thailand',
        creditCard: '6373900588156957',
        university: 'Naresuan University',
      },
      {
        id: 66,
        firstName: 'Enriqueta',
        lastName: 'Gippes',
        email: 'egippes1t@cnet.com',
        gender: 'Genderqueer',
        city: 'Landskrona',
        country: 'Sweden',
        creditCard: '201610144845123',
        university: null,
      },
      {
        id: 67,
        firstName: 'Bryna',
        lastName: 'Colclough',
        email: 'bcolclough1u@msu.edu',
        gender: 'Male',
        city: 'Ventspils',
        country: 'Latvia',
        creditCard: '4017956487862',
        university: null,
      },
      {
        id: 68,
        firstName: 'Conny',
        lastName: 'Czaja',
        email: 'cczaja1v@i2i.jp',
        gender: 'Agender',
        city: 'Shkotovo',
        country: 'Russia',
        creditCard: null,
        university: 'Herzen State Pedagogical University of Russia',
      },
      {
        id: 69,
        firstName: 'Heidie',
        lastName: 'MacCostye',
        email: 'hmaccostye1w@japanpost.jp',
        gender: 'Genderqueer',
        city: 'Cipeundeuy',
        country: 'Indonesia',
        creditCard: '58936493031050739',
        university: 'Universitas Swadaya Gunung Djati',
      },
      {
        id: 70,
        firstName: 'Rafa',
        lastName: 'Sollam',
        email: 'rsollam1x@google.it',
        gender: 'Female',
        city: 'Jiangcheng',
        country: 'China',
        creditCard: null,
        university: 'Shenyang Polytechnic University',
      },
      {
        id: 71,
        firstName: 'Julia',
        lastName: 'Revington',
        email: 'jrevington1y@phoca.cz',
        gender: 'Male',
        city: 'Shidu',
        country: 'China',
        creditCard: '4913182668316916',
        university: 'North China Electric Power University',
      },
      {
        id: 72,
        firstName: 'Lotte',
        lastName: 'Siret',
        email: 'lsiret1z@yellowbook.com',
        gender: 'Genderqueer',
        city: 'Hisya',
        country: 'Syria',
        creditCard: '3574741741774003',
        university: null,
      },
      {
        id: 73,
        firstName: 'Consuela',
        lastName: 'Szubert',
        email: 'cszubert20@yahoo.co.jp',
        gender: 'Agender',
        city: 'Baing',
        country: 'Indonesia',
        creditCard: '5247075364415327',
        university: 'Institut Teknologi Adhi Tama Surabaya',
      },
      {
        id: 74,
        firstName: 'Doralynn',
        lastName: 'Cleeve',
        email: 'dcleeve21@sina.com.cn',
        gender: 'Bigender',
        city: 'Venlo',
        country: 'Netherlands',
        creditCard: null,
        university: null,
      },
      {
        id: 75,
        firstName: 'Frasier',
        lastName: 'Blaxill',
        email: 'fblaxill22@bizjournals.com',
        gender: 'Male',
        city: 'Owczarnia',
        country: 'Poland',
        creditCard: null,
        university: 'Fine Arts Academy in Warsaw',
      },
      {
        id: 76,
        firstName: 'Ardyth',
        lastName: 'John',
        email: 'ajohn23@reddit.com',
        gender: 'Male',
        city: 'Abengourou',
        country: 'Ivory Coast',
        creditCard: '3580691669139931',
        university: 'Université de Cocody',
      },
      {
        id: 77,
        firstName: 'Pierce',
        lastName: 'Pyer',
        email: 'ppyer24@phpbb.com',
        gender: 'Male',
        city: 'San José',
        country: 'Honduras',
        creditCard: '633330987705265921',
        university: 'Universidad Nacional Autónoma de Honduras',
      },
      {
        id: 78,
        firstName: 'Tatiania',
        lastName: 'Bonnor',
        email: 'tbonnor25@artisteer.com',
        gender: 'Female',
        city: 'Chapultepec',
        country: 'Mexico',
        creditCard: '3589087720514918',
        university: null,
      },
      {
        id: 79,
        firstName: 'Idaline',
        lastName: 'Rasp',
        email: 'irasp26@de.vu',
        gender: 'Polygender',
        city: 'Igurusi',
        country: 'Tanzania',
        creditCard: '347580770788373',
        university: null,
      },
      {
        id: 80,
        firstName: 'Cally',
        lastName: 'McConville',
        email: 'cmcconville27@lulu.com',
        gender: 'Male',
        city: 'Oygon',
        country: 'Mongolia',
        creditCard: null,
        university: 'Health sciences University of Mongolia',
      },
      {
        id: 81,
        firstName: 'Mallory',
        lastName: 'Cocksedge',
        email: 'mcocksedge28@is.gd',
        gender: 'Bigender',
        city: 'Kopparberg',
        country: 'Sweden',
        creditCard: '3536045729386187',
        university: 'Mid-Sweden University',
      },
      {
        id: 82,
        firstName: 'Durante',
        lastName: 'Huyghe',
        email: 'dhuyghe29@weebly.com',
        gender: 'Non-binary',
        city: 'Shangfang',
        country: 'China',
        creditCard: '4041593896354187',
        university: 'Southwest Petroleum University',
      },
      {
        id: 83,
        firstName: 'Larissa',
        lastName: 'Broadberry',
        email: 'lbroadberry2a@marketwatch.com',
        gender: 'Polygender',
        city: 'Nhơn Trạch',
        country: 'Vietnam',
        creditCard: null,
        university: 'Vietnam National University Ho Chi Minh City',
      },
      {
        id: 84,
        firstName: 'Millard',
        lastName: "O'Quin",
        email: 'moquin2b@rediff.com',
        gender: 'Agender',
        city: 'Sozopol',
        country: 'Bulgaria',
        creditCard: '3545624293606953',
        university: 'Academy of Economics "Dimitur A. Tscenov"',
      },
      {
        id: 85,
        firstName: 'Ulric',
        lastName: 'Torel',
        email: 'utorel2c@google.pl',
        gender: 'Genderfluid',
        city: 'Laohekou',
        country: 'China',
        creditCard: '4844732902451665',
        university: 'Shandong University of Art and Design',
      },
      {
        id: 86,
        firstName: 'Dieter',
        lastName: 'Cranmor',
        email: 'dcranmor2d@pinterest.com',
        gender: 'Female',
        city: 'Tmourghout',
        country: 'Morocco',
        creditCard: '374283866791478',
        university: 'Université Mohammed V - Souissi',
      },
      {
        id: 87,
        firstName: 'Sada',
        lastName: 'Rake',
        email: 'srake2e@sbwire.com',
        gender: 'Bigender',
        city: 'Taiqing',
        country: 'China',
        creditCard: null,
        university: null,
      },
      {
        id: 88,
        firstName: 'Ninetta',
        lastName: 'Gaye',
        email: 'ngaye2f@ameblo.jp',
        gender: 'Female',
        city: 'Meitang',
        country: 'China',
        creditCard: '3553443489260775',
        university: null,
      },
      {
        id: 89,
        firstName: 'Rubin',
        lastName: 'Prudham',
        email: 'rprudham2g@tinyurl.com',
        gender: 'Female',
        city: 'Bishkek',
        country: 'Kyrgyzstan',
        creditCard: null,
        university: 'Kyrgyz National University',
      },
      {
        id: 90,
        firstName: 'Holly-anne',
        lastName: 'Burgoine',
        email: 'hburgoine2h@123-reg.co.uk',
        gender: 'Agender',
        city: 'Rantaupanjangkiri',
        country: 'Indonesia',
        creditCard: null,
        university: 'Universitas 17 Agustus 1945 Surabaya',
      },
      {
        id: 91,
        firstName: 'Birgitta',
        lastName: 'Pretsell',
        email: 'bpretsell2i@state.tx.us',
        gender: 'Genderqueer',
        city: 'Santiago Atitlán',
        country: 'Guatemala',
        creditCard: '3581471536735917',
        university: 'Universidad Francisco Marroquín',
      },
      {
        id: 92,
        firstName: 'Zoe',
        lastName: 'Choake',
        email: 'zchoake2j@spotify.com',
        gender: 'Non-binary',
        city: 'Heshui',
        country: 'China',
        creditCard: null,
        university: null,
      },
      {
        id: 93,
        firstName: 'Juan',
        lastName: 'Handrick',
        email: 'jhandrick2k@yahoo.com',
        gender: 'Male',
        city: 'Lonpao Dajah',
        country: 'Indonesia',
        creditCard: '3566906828183895',
        university: 'Universitas Muria Kudus',
      },
      {
        id: 94,
        firstName: 'Kalle',
        lastName: 'Leebetter',
        email: 'kleebetter2l@mac.com',
        gender: 'Non-binary',
        city: 'Cachoeiro de Itapemirim',
        country: 'Brazil',
        creditCard: '374288775951840',
        university: 'Faculdade Jaguariúna',
      },
      {
        id: 95,
        firstName: 'Alphonso',
        lastName: 'Noke',
        email: 'anoke2m@tumblr.com',
        gender: 'Male',
        city: 'Granja do Tedo',
        country: 'Portugal',
        creditCard: '201561287730194',
        university: null,
      },
      {
        id: 96,
        firstName: 'Genevieve',
        lastName: 'Harding',
        email: 'gharding2n@va.gov',
        gender: 'Genderfluid',
        city: 'Taytayan',
        country: 'Philippines',
        creditCard: null,
        university: 'Leyte Normal University',
      },
      {
        id: 97,
        firstName: 'Winnah',
        lastName: 'Danser',
        email: 'wdanser2o@ucsd.edu',
        gender: 'Polygender',
        city: 'Manicaragua',
        country: 'Cuba',
        creditCard: null,
        university: 'Universidad Central de Las Villas',
      },
      {
        id: 98,
        firstName: 'Putnem',
        lastName: 'Ifill',
        email: 'pifill2p@sfgate.com',
        gender: 'Genderqueer',
        city: 'Santo Estêvão',
        country: 'Brazil',
        creditCard: '560224991471420870',
        university: 'Centro Universitário Barao de Maua',
      },
      {
        id: 99,
        firstName: 'Bern',
        lastName: 'Rennebach',
        email: 'brennebach2q@yahoo.co.jp',
        gender: 'Bigender',
        city: 'Wanglian',
        country: 'China',
        creditCard: '3581293927652752',
        university: 'China University of Mining Technology - Beijing',
      },
      {
        id: 100,
        firstName: 'Callida',
        lastName: 'Setterfield',
        email: 'csetterfield2r@bluehost.com',
        gender: 'Genderqueer',
        city: 'Kristinehamn',
        country: 'Sweden',
        creditCard: '3580853403326279',
        university: 'Gotland University College',
      },
    ],
    []
  );

  const multiSelectFilter: FilterType<Data> = (rows, columnIds, filterValue: string) => {
    const columnId = columnIds[0] as keyof Data;

    return filterValue.length === 0 ? rows : rows.filter((row) => filterValue.includes(String(row.original[columnId])));
  };

  const filterTypes = useMemo<FilterTypes<Data>>(
    () => ({
      multiSelectFilter,
    }),
    []
  );

  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        width: 100,
        filter: multiSelectFilter,
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
        width: 100,
        filter: multiSelectFilter,
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        width: 100,
        filter: multiSelectFilter,
      },
      {
        Header: 'Email',
        accessor: 'email',
        width: 100,
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        width: 100,
      },
      {
        Header: 'City',
        accessor: 'city',
        width: 100,
      },
      {
        Header: 'Country',
        accessor: 'country',
        width: 100,
      },
      {
        Header: 'Credit card',
        accessor: 'creditCard',
        width: 100,
      },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: 10 }, filterTypes },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <Layout>
      <Filter tableInstance={tableInstance} />
      <Table tableInstance={tableInstance} />
    </Layout>
  );
};

export default TablePage;
