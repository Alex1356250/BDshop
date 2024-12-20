import { createContext, useContext, ReactNode } from 'react';
import { Comic } from '../types/comic';
import p1 from '../public/pics/p1.jpg';
import p2 from '../public/pics/p2.jpg';
import p3 from '../public/pics/p3.jpg';
import p4 from '../public/pics/p4.jpg';
import p5 from '../public/pics/p5.jpg';
import p6 from '../public/pics/p6.jpg';
import p7 from '../public/pics/p7.jpg';
import p8 from '../public/pics/p8.jpg';
import p9 from '../public/pics/p9.jpg';
import p10 from '../public/pics/p10.jpg';
import p11 from '../public/pics/p11.jpg';
import p12 from '../public/pics/p12.jpg';
import p13 from '../public/pics/p13.jpg';
import p14 from '../public/pics/p14.jpg';
import p15 from '../public/pics/p15.jpg';
import p16 from '../public/pics/p16.jpg';
import p17 from '../public/pics/p17.jpg';

const comicsData: Comic[] = [
  {
    id: '1',
    title: 'Transformers - : Transformers Tome 2',
    cover: p1,
    synopsis: 'Si les Autobots ont réussi à prendre l’avantage sur les Decepticons, ils n’en restent pas moins en situation précaire et réduits au strict minimum. Mais à présent qu’Optimus Prime s’est engagé à protéger la Terre, ils vont devoir faire face et tenter d’écarter cette menace une bonne fois pour toutes. De leur côté, après leur récente défaite, les Decepticons jouent leur avenir et ne peuvent que remettre en question le rôle de meneur de Starscream. Est-il bien le leader qu’il leur faut ?',
    category: 'Science-fiction',
    publisher: 'Ubran Comics',
    collections: 'Energon Universe',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 18.00,
    isNew: true,
    publishedDate: '2024-13-12',
    pages: 160
  },
  {
    id: '2',
    title: 'Wicked -: Wicked - relié collector - Tome 02 Tourment',
    cover: p2,
    synopsis: 'Elle devra choisir entre son devoir et sa survie. Toutes les certitudes d\' Ivy ont volé en éclats.\
    Après avoir échappé au cruel prince des Faes,\
    elle se retrouve meurtrie,\
    et est désormais accablée d\' un secret bouleversant qu\' elle doit dissimuler à tout prix..\
    Car si l\' Ordre le découvre, ses membres la tueront.\
    La situation est d\'autant plus dangereuse qu\'Ivy est tombée amoureuse de son co-équipier Ren.\
    Leur alchimie est incandescente, mais Ivy sait que l\'agent a toujours privilégié son devoir envers l\'Ordre.\
    S\'il apprenait la vérité, il ne voudrait plus jamais la toucher - dans\
    l\'éventualité où il lui laisserait la vie sauve.\
    Par peur de le perdre, Ivy n\'vvose se confier à li.\
    Alors que le prince des Faes se rapproche, avec l\'intention d\'ouvrir à jamais\
    les portes de l\'Autre Monde, Ivy est à court d\'options. Si elle ne découvre pas rapidement\
    à qui elle peut se fier, ce n\'est pas seulement son existence qui sera en péril,\
    mais bien celle du monde tout entier.\
    Traduit de l\'anglais par Alice Kremer.\
    RÉSERVÉ À UN PUBLIC AVERTI',
    category: 'Humour',
    publisher: 'Roncière',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 26.90,
    isNew: true,
    publishedDate: '2024-12-12',
    pages: 384
  },
  {
    id: '3',
    title: 'L\'Arabe Du Futur - : Moi, Fadi, le frère volé - Tome 01 (1986-1994)',
    cover: p3,
    synopsis: 'Le nouveau roman graphique de Riad Sattouf arrive en librairie le mardi 8 octobre 2024 !Riad Sattouf revient avec une nouvelle série de bandes dessinées, qui replonge le lecteur dans l\'univers de sa série à succès L\'Arabe du futur. Ce nouveau projet repose sur les histoires que Riad Sattouf a recueillies en 2011 et 2012 auprès de son frère Fadi Sattouf. Dans ce récit, c\'est Fadi le narrateur : il retrace son parcours, de son enfance heureuse en Bretagne auprès de sa mère adorée et de ses grands frères, Riad et Yahya,...',
    category: 'Humour',
    publisher: 'Livres du futur',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 23.00,
    isNew: true,
    publishedDate: '2024-10-08',
    pages: 152
  },
  {
    id: '4',
    title: 'Ressources - : Ressources',
    cover: p4,
    synopsis: 'A en croire les milliardaires de la Silicon Valley, notre destin passerait inéluctablement par les métavers, l\'intelligence artificielle, les robots autonomes et la conquête spatiale, tandis que les énergies renouvelables et les voitures électriques nous permettraient de maintenir notre " niveau de vie " tout en poursuivant la croissance économique et en " sauvant " la planète au passage. Mais les limites planétaires se rapprochent dangereusement : changement climatique, effondrement de la biodiversité, dégradation et destruction des sols, pollutions globales... Alors peut-on croître indéfiniment ? Et si la contrainte sur les ressources matérielles à disposition, sur la planète et même dans le système solaire, mettait fin à cette course en avant effrénée ? Ressources dresse un état des lieux sans concession, mais ouvre des pistes concrètes vers un avenir durable. Un dossier complète l\'album avec 12 pages d\'informations complémentaires, de glossaire et de sources.',
    category: 'Humour',
    publisher: 'Casterman',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 28.00,
    isNew: true,
    publishedDate: '2024-09-10',
    pages: 176
  },
  {
    id: '5',
    title: 'Tout est bon dans le Breton - : Tout est bon dans le Breton Tome 3',
    cover: p5,
    synopsis: 'A en croire les milliardaires de la Silicon Valley, notre destin passerait inéluctablement par les métavers, l\'intelligence artificielle, les robots autonomes et la conquête spatiale, tandis que les énergies renouvelables et les voitures électriques nous permettraient de maintenir notre " niveau de vie " tout en poursuivant la croissance économique et en " sauvant " la planète au passage. Mais les limites planétaires se rapprochent dangereusement : changement climatique, effondrement de la biodiversité, dégradation et destruction des sols, pollutions globales... Alors peut-on croître indéfiniment ? Et si la contrainte sur les ressources matérielles à disposition, sur la planète et même dans le système solaire, mettait fin à cette course en avant effrénée ? Ressources dresse un état des lieux sans concession, mais ouvre des pistes concrètes vers un avenir durable. Un dossier complète l\'album avec 12 pages d\'informations complémentaires, de glossaire et de sources.',
    category: 'Humour',
    publisher: 'Casterman',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 28.00,
    isNew: true,
    publishedDate: '2024-09-10',
    pages: 176
  },
  {
    id: '6',
    title: 'Blake Et Mortimer - : Blake & Mortimer - Tome 30 - Signé Olrik',
    cover: p6,
    synopsis: 'Un nouveau groupe indépendantiste des Cornouailles, le Free Cornwall Group sévit dans la petite ville de Sainte Corineus. Tout en manifestant contre l’afflux de nouveaux migrants économiques, le groupe est à la recherche du trésor légendaire du roi Arthur et de sa fameuse épée, Excalibur. Blake est alors envoyé sur place pour démanteler l’organisation et empêcher le triste dessein de leur chef, un certain « Grand Druide ». Au même moment, au Center of Scientific and Industrial Research de Londres, le professeur Mortimer...',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '7',
    title: 'La route',
    cover: p7,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '8',
    title: 'Géostratégix: Géosrtatégix L\'intégrale',
    cover: p8,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France',
      pages: 160
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '9',
    title: 'Lucky Luke - : Les Aventures de Lucky Luke d\'après Morris - Tome 11 - Un cow-boy sous Pression',
    cover: p9,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '10',
    title: 'Le Monde sans fin, miracle énergétique et dérive climatique',
    cover: p10,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '11',
    title: 'Moi Ce Que J\'aime C\'est Les Monstres - : Moi, ce que j\'aime, c\'est les monstres 2',
    cover: p11,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '12',
    title: 'Charlie Liberté - Le journal de leur vie',
    cover: p12,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '13',
    title: 'Les guerres de lucas',
    cover: p13,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '14',
    title: 'Champs de bataille',
    cover: p14,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '15',
    title: 'Les Vieux Fourneaux - : Les Vieux Fourneaux - Tome 8 - Graines de voyous',
    cover: p15,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '16',
    title: 'Tintin - Édition noir et blanc colorisée : Le Lotus bleu',
    cover: p16,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '17',
    title: 'Les Rugbymen - Cet après-midi, vous avez carte bleue ! : Les Rugbymen - tome 23',
    cover: p17,
    synopsis: 'Les aventures d\'Astérix et Obélix dans la Gaule antique.',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-03-15',
    pages: 160
  },
  // Ajoutez plus de BD ici
];

interface ComicsContextType {
  comics: Comic[];
  getRandomComic: () => Comic;
  searchComics: (query: string) => Comic[];
  searchByLocation: (lat: number, lng: number) => Comic[];
}

const ComicsContext = createContext<ComicsContextType | undefined>(undefined);

export function ComicsProvider({ children }: { children: ReactNode }) {
  const getRandomComic = () => {
    return comicsData[Math.floor(Math.random() * comicsData.length)];
  };

  const searchComics = (query: string) => {
    return comicsData.filter(comic => 
      comic.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const searchByLocation = (lat: number, lng: number) => {
    // Simplified distance calculation
    return comicsData.filter(comic => {
      const distance = Math.sqrt(
        (comic.location.lat - lat) ** 2 + 
        (comic.location.lng - lng) ** 2
      );
      return distance < 1; // Within ~111km
    });
  };

  return (
    <ComicsContext.Provider value={{ 
      comics: comicsData, 
      getRandomComic, 
      searchComics, 
      searchByLocation 
    }}>
      {children}
    </ComicsContext.Provider>
  );
}

export function useComics() {
  const context = useContext(ComicsContext);
  if (context === undefined) {
    throw new Error('useComics must be used within a ComicsProvider');
  }
  return context;
}