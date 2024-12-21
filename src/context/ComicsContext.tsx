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
    category: 'Roman graphique',
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
    category: 'Documentaire',
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
    category: 'Aventure',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: false,
    publishedDate: '2024-03-15',
    pages: 160
  },
  {
    id: '7',
    title: 'La route',
    cover: p7,
    synopsis: 'L’apocalypse a eu lieu. Le monde est dévasté, couvert de cendres et de cadavres. Parmi les survivants, un père et son fils errent sur une route, poussant un caddie rempli d’objets hétéroclites, censés les aider dans leur voyage. Sous la pluie, la neige et le froid, ils avancent vers les côtes du sud, la peur au ventre : des hordes de sauvages cannibales terrorisent ce qui reste de l’humanité. Survivront-ils à leur périple ? Après "Le Rapport de Brodeck", Manu Larcenet adapte de nouveau une œuvre majeure de la littérature...',
    category: 'Science-fiction',
    publisher: 'Dargaud',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 29.50,
    isNew: false,
    publishedDate: '2024-03-29',
    pages: 160
  },
  {
    id: '8',
    title: 'Géostratégix: Géosrtatégix L\'intégrale',
    cover: p8,
    synopsis: 'À l’heure de la globalisation, peut-on comprendre le monde sans connaître la chaîne des événements qui l’ont façonné, la logique des rivalités, les affrontements des puissances? L’essor du monde bipolaire puis sa disparition, la décolonisation, l’enjeu de l’arme nucléaire, la globalisation de l’économie, l’émergence de nouvelles puissances… aucun de ces aspects n’est isolé, ils interviennent au cours d’une grande histoire interconnectée et jouée par des acteurs hors normes.Comprendre le monde n’est pas nécessaire, c’est indispensable. Les pays, les organisations non gouvernementales, les opinions publiques, ou encore les géants du numérique, jouent tous un rôle sur la scène internationale. Leur influence sur le monde s’étend ou au contraire s’étiole, ils prennent part aux défis globaux, aux menaces, aux débats. Le géopolitologue Pascal Boniface décrypte les principaux rouages des grands événements historiques depuis 1945 et leurs conséquences actuelles. Un récit judicieusement mis en images par le dessinateur Tommy, qui adjoint à une vaste galerie de portraits des cartes explicatives et un trait d’humour bienvenu. On apprend et on comprend en souriant.',
    category: 'Géopolitque',
    publisher: 'Dunod',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France',
    },
    price: 39.90,
    isNew: false,
    publishedDate: '2024-03-15',
    pages: 328
  },
  {
    id: '9',
    title: 'Lucky Luke - : Les Aventures de Lucky Luke d\'après Morris - Tome 11 - Un cow-boy sous Pression',
    cover: p9,
    synopsis: 'L’ambiance est morose à New-München, ce petit village du Dakota fondé par des colons allemands. La raison ? Une pénurie de bière causée par la grève générale qui paralyse toutes les brasseries du pays ! Alors quand Lucky Luke est appelé à la rescousse, il va devoir se rendre à Milwaukee, capitale américaine de la bière, pour apaiser les tensions entre syndicalistes marxistes et barons industriels. Et si notre cowboy solitaire est déjà débordé par les affres du conflit social, c’est sans compter sur les Dalton qui...',
    category: 'Aventure',
    publisher: 'Lucky Comics',
    collections: 'Lucky Lucke Nouvelles Aventures',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-11-15',
    pages: 48
  },
  {
    id: '10',
    title: 'Le Monde sans fin, miracle énergétique et dérive climatique',
    cover: p10,
    synopsis: 'La rencontre entre un auteur majeur de la bande dessinée et un éminent spécialiste des questions énergétiques et de l’impact sur le climat a abouti à ce projet, comme une évidence, une nécessité de témoigner sur des sujets qui nous concernent tous. Intelligent, limpide, non dénué d’humour, cet ouvrage explique sous forme de chapitres les changements profonds que notre planète vit actuellement et quelles conséquences, déjà observées, ces changements parfois radicaux signifient. Jean-Marc Jancovici étaye sa vision  remarquablement argumentée en plaçant la question de l’énergie et du changement climatique au cœur de sa réflexion tout en évoquant les enjeux économiques (la course à la croissance à tout prix est-elle un leurre ?), écologiques et sociétaux. Ce témoignage éclairé s’avère précieux, passionnant et invite à la réflexion sur des sujets parfois clivants, notamment celui de la transition énergétique. Christophe Blain se place dans le rôle du candide, à la façon de son livre "En cuisine avec Alain Passard" et de "Quai d’Orsay" signé avec l’expertise d’un coauteur : un pavé de 120 pages indispensable pour mieux comprendre notre monde, tout simplement !',
    category: 'Documentaire',
    publisher: 'Dargaud',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 30.00,
    isNew: false,
    publishedDate: '2021-10-29',
    pages: 196
  },
  {
    id: '11',
    title: 'Moi Ce Que J\'aime C\'est Les Monstres - : Moi, ce que j\'aime, c\'est les monstres 2',
    cover: p11,
    synopsis: 'Karen Reyes, notre petite artiste, doit désormais faire face à une vie nouvelle où tout tremble et vacille, et où même ses quelques certitudes semblent sur le point de voler en éclats. Mais Karen est un être farouche : 1/3 loup-garou, 1/3 détective, 1/3 enflammée. Toute de curiosité, d’imagination et de compassion, elle veut bannir de son existence les tabous et les mensonges, censés la protéger, mais qui ont fini par empoisonner jusqu’à ses rêves. Heureusement que son frère Deeze, artiste contrarié au passé trouble, est là..',
    category: 'Humour',
    publisher: 'Monsieur Toussaint Louverture',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.99,
    isNew: true,
    publishedDate: '2024-11-07',
    pages: 416
  },
  {
    id: '12',
    title: 'Charlie Liberté - Le journal de leur vie',
    cover: p12,
    synopsis: 'Cabu, Elsa Cayat, Charb, Honoré, Bernard Maris, Mustapha Ourrad, Tignous, Wolinski, nous manquent. On nous les a enlevés, un matin de janvier 2015. Ils étaient dessinateurs, journaliste psychanalyste, correcteur et universitaire. Ils collaboraient à Charlie Hebdo , journal satirique créé en 1970, disparu en 1982 puis reparu en 1992. On a beaucoup écrit pour comprendre les raisons qui avaient poussé les deux...',
    category: 'Humour',
    publisher: 'Hachette',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 29.90,
    isNew: true,
    publishedDate: '2024-12-05',
    pages: 224
  },
  {
    id: '13',
    title: 'Les guerres de lucas',
    cover: p13,
    synopsis: 'Scrupuleusement fidèle à la réalité historique, méticuleusement documenté,  Les Guerres de Lucas  met en scène l’invraisemblable épopée de George Lucas, enfant rebelle passé à côté de la mort, prodige du nouvel Hollywood et visionnaire indomptable. Une exploration inédite des coulisses de  Star Wars, de l’enfer du casting au tournage cauchemardesque, où querelles entre acteurs, histoire d’amour secrète et désastres en pagaille jalonnent le quotidien. Un bourbier gigantesque dont sortira pourtant une œuvre majeure qui...',
    category: 'Cinéma',
    publisher: 'Deman',
    collections: 'N/A',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 24.90,
    isNew: true,
    publishedDate: '2024-10-04',
    pages: 208
  },
  {
    id: '14',
    title: 'Champs de bataille',
    cover: p14,
    synopsis: 'À la sortie de la Seconde Guerre mondiale, l\'État fait redessiner les terres agricoles dans la plupart des campagnes françaises. Accessibilité des champs par des machines, regroupement des parcelles et disparition des haies et talus. C\'est le "remembrement". L\'objectif est que la paysannerie produise davantage, que le pays atteigne son auto-suffisance alimentaire et que la France devienne une puissance agricole mondiale.',
    category: 'Documentaire',
    publisher: 'Delcourt',
    collections: 'La Revue Dessinée Delcourt',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 23.75,
    isNew: true,
    publishedDate: '2024-11-20',
    pages: 192
  },
  {
    id: '15',
    title: 'Les Vieux Fourneaux - : Les Vieux Fourneaux - Tome 8 - Graines de voyous',
    cover: p15,
    synopsis: 'C’est l’été, Montcoeur est sec comme un 49,3. La canicule est telle qu’on voit même le fond de l’étang la Gibelette ! Du jamais-vu. Pourtant, ce n’est pas la météo qui va empêcher Sophie d’organiser une fête pour les 60 ans du « Loup en slip ». L’occasion de se replonger dans les souvenirs et de dépoussiérer quelques vieilles photos. Le loup en Slip, dans le coin, c’est pas rien. Naturellement, Pierrot fait le déplacement, mais voilà, est-ce la chaleur ? Il semblerait que le vieil anar se tape une crise de foi en...',
    category: 'Humour',
    publisher: 'Dargaud',
    collections: 'Vieux Fournaux',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 15.00,
    isNew: false,
    publishedDate: '2024-03-15',
    pages: 56
  },
  {
    id: '16',
    title: 'Tintin - Édition noir et blanc colorisée : Le Lotus bleu',
    cover: p16,
    synopsis: 'D\'abord prépublié dans Le Petit Vingtième entre août 1934 et octobre 1935, sous le titre Les Aventures de Tintin, reporter en Extrême-Orient, Le Lotus bleu paraît sous la forme d\'un album de 124 pages en noir et blanc aux éditions Casterman en 1936. Suite directe des Cigares du Pharaon, Le Lotus bleu est le premier album de la série à bénéficier d\'une construction plus romanesque, moins héritée du feuilleton picaresque. Considérée par tous les spécialistes comme l\'album le plus abouti d\'Hergé tant sur le plan scénaristique...',
    category: 'Aventure',
    publisher: 'Casterman',
    collections: 'Tintin',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 23.00,
    isNew: false,
    publishedDate: '2024-01-08',
    pages: 144
  },
  {
    id: '17',
    title: 'Les Rugbymen - Cet après-midi, vous avez carte bleue ! : Les Rugbymen - tome 23',
    cover: p17,
    synopsis: 'La BD à l\'humour implacable !Dans le village de Paillar, le rugby est roi : même les ronds-points sont ovales ! L\'équipe de Paillar n\'a peur que d\'une chose, c\'est que des Anglais mal intentionnés transforment L\'Albala-Digeo, le bar local, en salon de thé ! Pour le reste, ce ne sont pas les gnons, les beignes, les marrons et les tampons de l\'équipe adverse qui feront reculer les joueurs du Paillar Athletic Club ! Nos joueurs vont vous faire pénétrer au coeur des vestiaires, des mêlées, des club-houses et des légendaires...',
    category: 'Humour',
    publisher: 'Bamboo Eds',
    collections: 'Les Rugbymen',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: 'Paris, France'
    },
    price: 11.90,
    isNew: true,
    publishedDate: '2025-01-29',
    pages: 48
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