# Operátor ICT test

Tato aplikace je Express.js aplikace napsaná v TypeScriptu. Aplikace obsahuje dva endpointy: `/state` a `/card/{cardId}`.
Aplikace je určena pouze pro účely testovacího zadání. Není určna k produkčnímu nasazení.
Port aplikace `10100` je nastavitelný v .env proměnných.

## Spuštění aplikace

#### Přes Docker Compose

1. Otevřete terminál ve složce aplikace.
2. Spusťte příkaz:

    ```bash
    docker-compose up --build
    ```

    Tím se spustí aplikace v Docker kontejneru.

3. Aplikace bude dostupná na adrese `http://localhost:10100`.

#### Standartně v node.js přes npm command

1. Otevřete terminál ve složce aplikace.
2. Spusťte příkaz:

    ```bash
    npm start
    ```
3. Aplikace bude dostupná na adrese `http://localhost:10100`.


## Endpointy

### `/state` (GET)

Nezabezpečený endpoint, který vrátí status "OK".

#### Příklad použití:

```
curl http://localhost:10100/state
```

### `/card/{cardId}` (GET)
Zabezpečený endpoint, který vyžaduje API klíč v hlavičce (X-API-Key) a vrátí informace o kartě.

#### Příklad použití:
Z hkediska účelu aplikace je zde uvedene API klíč `7c720d70-a8cf-47e2-beb7-4e11dff82097`. Ten je nastaven v .env proměnných aplikace.

Použití klíče při volání endpointu:

```
curl -H "X-API-Key: 7c720d70-a8cf-47e2-beb7-4e11dff82097" http://localhost:10100/card/123456789000
```

Nahraďte 123456789000 za skutečné ID karty.

##  `/swagger-ui` (GET)

Aplikace má dostupnou nezabezpečenou swagger dokumentaci v HTML.

#### [**Swagger dokumentace** /swagger-ui](http://localhost:10100/swagger-ui)

## Odpovědi
### `/state`
Pro endpoint `/state` můžete očekávat odpověď ve formátu JSON:
```
{
  "state": "OK"
}
```

### `/card/{cardId}`
Pro endpoint `/card/{cardId}` můžete očekávat odpověď ve formátu JSON s informacemi o kartě:
```
{
  "cardId": 123456789000,
  "state": "Aktivní v držení klienta",
  "validTo": "12.08.2020"
}

## Code review - obecné

- bylo by dobré mít v readme definovanou verzi node.js, která je potřeba pro spuštění aplikace
  - vyčetl jsem z Dockerfilu
  - proč verze 21?
- zajímavej port 10100
- v dependencies by neměly být závislosti, které se nepoužívají
  - např. `@types/..` nebo `jest`
- jaké jsou výhody a nevýhody generovaného swaggeru?
  - návratové hodnoty v kódu a v dokumentaci se neshodují
- testy neprochází
- proč je složka testů v `src`?
