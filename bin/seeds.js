const  movies  = [
   {
     Título :  " Una arruga en el tiempo " ,
     director :  " Ava DuVernay " ,
     estrellas : [ " Storm Reid " , " Oprah Winfrey " , " Reese Witherspoon " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg " ,
     descripción :  " Tras el descubrimiento de una nueva forma de viaje espacial y la desaparición del padre de Meg, ella, su hermano y su amiga deben unirse a tres seres mágicos: la Sra. Whatsit, la Sra. Who y la Sra. Which para viajar el universo de rescatarlo de un terrible mal. " ,
     horarios : [ " 13:00 " , " 15:30 " , " 18:00 " , " 20:10 " , " 22:40 " ]
   },
   {
     Título :  " The Strangers: Prey at Night " ,
     Director :  " Johannes Roberts " ,
     estrellas : [ " Christina Hendricks " , " Bailee Madison " , " Martin Henderson " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,082-68_AL_.jpg " ,
     descripción :  " El viaje por carretera de una familia toma un giro peligroso cuando llegan a un parque de casas móviles aisladas para quedarse con algunos familiares y lo encuentran misteriosamente desierto. Bajo la cobertura de la oscuridad, tres psicópatas enmascarados les visitan para probar todos los límites de la familia mientras que luchan para sobrevivir. " ,
     horarios : [ " 13:50 " , " 16:20 " , " 19:20 " , " 22:10 " ]
   },
   {
     Título :  " The Hurricane Heist " ,
     Director :  " Rob Cohen " ,
     estrellas : [ " Toby Kebbell " , " Maggie Grace " , " Ryan Kwanten " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg " ,
     Descripción :  " Los ladrones intenta un robo masivo contra el Tesoro de Estados Unidos como un huracán de categoría 5 se aproxima a una de sus instalaciones de menta. " ,
     horarios : [ " 13:10 " , " 15:40 " , " 18:20 " , " 20:50 " , " 23:10 " ]
   },
   {
     título :  " gringo " ,
     director :  " Nash Edgerton " ,
     estrellas : [ " Joel Edgerton " , " Charlize Theron " , " David Oyelowo " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg " ,
     Descripción :  " GRINGO, una comedia negra mezclada con acción nudillos blancos y la intriga dramática, explora la batalla de supervivencia para los negocios Harold Soyinka (David Oyelowo) cuando se encuentra cruzando la línea de los ciudadanos respetuosos de la ley a criminal buscado. " ,
     horarios : [ " 13:40 " , " 15:50 " , " 19:00 " , " 21:20 " , " 23:50 " ]
   },
   {
     título :  " pura sangre " ,
     director :  " Cory Finley " ,
     estrellas : [ " Anya Taylor-Joy " , " Olivia Cooke " , " Anton Yelchin " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg " ,
     Descripción :  " Dos adolescentes de clase alta en los suburbios de Connecticut reavivar su amistad poco después de años de crecimiento, aparte Juntos, traman un plan para resolver tanto de sus problemas, no importa cuál sea el costo.. " ,
     horarios : [ " 13:00 " , " 15:30 " , " 18:00 " , " 20:10 " , " 22:40 " ]
   },
   {
     Título :  " The Leisure Seeker " ,
     Director :  " Paolo Virzì " ,
     estrellas : [ " Helen Mirren " , " Donald Sutherland " , " Janel Moloney " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg " ,
     descripción :  " Una pareja fugitiva realiza un viaje inolvidable en el fiel y viejo RV que llaman The Leisure Seeker, que viaja desde Boston a The Ernest Hemingway Home en Key West. Recobran su pasión por la vida y su amor mutuo en un viaje por carretera que proporciona la revelación y la sorpresa hasta el final. " ,
     horarios : [ " 13:40 " , " 15:50 " , " 19:00 " , " 21:20 " , " 23:50 " ]
   },
   {
     título :  " pantera negra " ,
     director :  " Ryan Coogler " ,
     estrellas : [ " Chadwick Boseman " , " Michael B. Jordan " , " Lupita Nyong'o " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@.V1_UX182_CR0,0,182.268_AL_.jpg " ,
     Descripción :  " T'Challa, el rey de Wakanda, sube al trono en la aislada nación africana, tecnológicamente avanzada, pero su demanda es desafiado por un extraño vengativo que era una víctima de la infancia de error del padre de T'Challa. " ,
     horarios : [ " 13:50 " , " 16:20 " , " 19:20 " , " 22:10 " ]
   },
   {
     título :  " gorrión rojo " ,
     Director :  " Francis Lawrence " ,
     estrellas : [ " Jennifer Lawrence " , " Joel Edgerton " , " Matthias Schoenaerts " ],
     imagen :  " https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg " ,
     Descripción :  "bailarina Dominika Egorova es reclutado para 'Escuela Sparrow,' un servicio de inteligencia ruso, donde se ve obligada a utilizar su cuerpo como arma su primera misión, dirigida a un agente de la CIA, amenaza con deshacer la seguridad de ambas naciones. " ,
     horarios : [ " 13:00 " , " 15:30 " , " 18:00 " , " 20:10 " , " 22:40 " ]
   }
 ];