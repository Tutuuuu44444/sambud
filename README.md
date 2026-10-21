# SamBud

SamBud er en prototype på en mobil applikation udviklet i React Native og Expo.

Ideen med SamBud er, at privatpersoner i samme lokalområde kan gå sammen om at efterspørge den samme service og dermed potentielt opnå en bedre pris. Det kan eksempelvis være vinduespudsning, hækkeklipning eller græsslåning.


## Demovideo + Github

Se demovideo af SamBud på YouTube: https://youtu.be/71pGtkqxsrk?si=S9sld7s9XCqhR6JA

Tilgå kode via GitHub: https://github.com/Tutuuuu44444/sambud


## Funktioner

Prototypen indeholder otte screens:

- En forside med aktive SamBud i lokalområdet
- En visning af et konkret SamBud med information om pris, deltagere og serviceudbyder
- En side hvor brugeren kan oprette et nyt ønske om en service
- En side med brugerens egne SamBud
- En side hvor brugeren kan søge efter SamBud
- En side med information om serviceudbyderen
- En side med anmeldelser
- En side med et alternativt tilbud, hvis gruppemålet ikke bliver nået

Brugeren kan blandt andet:

- Se aktive SamBud via en FlatList
- Åbne et konkret SamBud
- Søge efter SamBud ud fra service eller område
- Tilmelde sig et SamBud
- Se at deltagerantallet ændres efter tilmelding
- Se information om serviceudbyderen
- Læse anmeldelser af serviceudbyderen
- Se sine egne og oprettede SamBud
- Oprette et nyt SamBud-ønske via inputfelter
- Acceptere eller afvise et alternativt tilbud
- Få gemt tilmeldte og oprettede SamBud lokalt med AsyncStorage


## Teknologi

Projektet er udviklet med:

- React Native
- Expo
- React Navigation
- JavaScript
- AsyncStorage

Appen anvender blandt andet:

- Components og props
- FlatList
- useState
- useEffect
- TextInput
- Pressable
- Stack Navigation
- AsyncStorage til lokal lagring
- Separat styling med StyleSheet


## Sådan køres projektet

1. Download eller clone projektet
2. Åbn projektmappen i Visual Studio Code
3. Installer dependencies:

npm install

4. Start projektet med:

npx expo start

5. Scan QR-koden med Expo Go på en mobil enhed.