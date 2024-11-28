ESERCIZIO: OUR TEAM
===

## Consegna:

Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato).

## Bonus: 

- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team!)

## Procedimento: 

- Creare uno scheletro di layout in html che permetta di verificare il codice nello scrypt.

- Per quanto riguarda la logica che permette alla pagina di funzionare sarà necessario creare due funzioni:
  1) Funzione 1: dovrà restituire una stringa cotenente tutte le card concatenate. All'interno di questa funzione verrà fatto ciclare l'array di partenza e per ogni membro di tale array verrà creata una card con una seconda funzione.
  2) Funzione 2 : sarà la funzione che genererà appunto le card. Restituirà con il template literal la struttura vera e propria della card in html. Per prima cosa questa funzione destrutturerà un oggetto fornendoci così le sue proprietà come variabili. A quel punto potremmo andare a compilare la card inserendo queste variabili nella struttura della card.

- La combinazione di queste due funzioni permetterà di destrutturare ogni singolo membro dell'array e con le sue proprietà compilare il formato della card che la prima funzione poi andrà a concatenare per formare il nostro elenco di card.