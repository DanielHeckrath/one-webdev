import Stage from '@/components/Stage';
import Teaser from '@/components/Teaser';
import PopoverDemo from '@/components/PopoverDemo';
import AnchorDemo from '@/components/AnchorDemo';
import NestingDemo from '@/components/NestingDemo';
import LayerDemo from '@/components/LayerDemo';
import ScopeDemo from '@/components/ScopeDemo';
import IsWhereDemo from '@/components/IsWhereDemo';
import ContainerSizeQueriesDemo from '@/components/ContainerSizeQueriesDemo';
import HasDemo from '@/components/HasDemo';
import SubgridDemo from '@/components/SubgridDemo';
import ContainerStyleQueriesDemo from '@/components/ContainerStyleQueriesDemo';
import ImageGrid from '@/components/ImageGrid';
import Text from '@/components/Text';
import Quote from '@/components/Quote';
import SubgridRow from '@/components/SubgridRow';
import SubgridCard from '@/components/SubgridCard';

export default function Home() {
    return (
        <main className="main-grid">
            <h1>Agenda</h1>
            <ol>
                <li>
                    <a href="#nesting-demo">Nesting</a>
                </li>
                <li>
                    <a href="#layer-demo">CSS Cascade Layers</a>
                </li>
                <li>
                    <a href="#scope-demo">CSS Scope</a>
                </li>
                <li>
                    <a href="#is-where-demo">:is() and :where()</a>
                </li>
                <li>
                    <a href="#has-demo">:has()</a>
                </li>
                <li>
                    <a href="#subgrid-demo">Grid & Subgrid</a>
                </li>
                <li>
                    <a href="#size-query-demo">Container Size</a>
                </li>
                <li>
                    <a href="#style-query-demo">Container Style Queries</a>
                </li>
                <li>
                    <a href="#popover-demo">Declarative Popovers</a>
                </li>
                <li>
                    <a href="#anchor-demo">CSS Anchor</a>
                </li>
            </ol>
            <NestingDemo id="nesting-demo" className="content mb-10" />
            <LayerDemo id="layer-demo" className="content mb-10" />
            <ScopeDemo id="scope-demo" className="content mb-10" />
            <IsWhereDemo id="is-where-demo" className="content mb-10" />
            <HasDemo id="has-demo" className="content mb-10" />
            <SubgridDemo id="subgrid-demo" className="mb-10" />
            <Stage />
            <SubgridRow className="content mt-6 mb-6">
                <SubgridCard
                    className=""
                    name="BMW X5 xDrive50e"
                    properties={
                        <p>
                            Kraftstoffverbrauch bei entladener Batterie
                            kombiniert 8.3 l/100km [1] CO2 Emission (charge
                            sustaining combined) 188 g/km CO2 Klasse: G
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25HzecVqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69SuDW8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5QunrQbBUq2rjGpUa2rQbroMESMd0ViyJGy5iJvrQ%25r9si8W8zWuo86qogqaakel3ilUjQzcRScHzd7MbnMdd8uyJGy583MrQ%25r9odiW8zWuKbGqogqaYUel3ilUEn8cRScH809MbnMdgBuyJGy5iY3rQ%25r9sKJW8zWunb2qogqaJh5l3ilUE0mcRScH8ZgMbnMdJozyJGy53L5rQ%25r9snYW8zWunJEqogqaGuGl3ilU%2585cRScHJ%25HMbnMdJ8uyJGy5QsnrQ%25r99uDW8zWuDAbqogqaC28l3ilUj7dcRScHFBBMbnMdJoHyJGy5Q35rQ%25r9SDGW8zWu3ndqogqaRGul3ilUE4QcRScH48WMbnMddUkyJGy5765rQ%25r9sRxW8zWubAkqogqaCYTl3ilUQI8cRScH8NUMbnMdj9oyJGy5i03rQ%25r99oUW8zWuEJHqogqaFQ8l3ilURK0cRox9Dbg2drjG08HdrQbpJg1sW7%25m9orQbucYia%25d"
                />
                <SubgridCard
                    className=""
                    name="BMW X5 xDrive50e"
                    properties={
                        <p>
                            Energieverbrauch (WLTP, gew., komb.) 0.9 l/100km
                            <br />
                            CO2-Emissionen (WLTP, gew., komb.) 20 g/km
                            <br />
                            Elektrische Reichweite (komb., EAER) 99 km
                            <br />
                            Elektrische Reichweite (innerorts, EAER) 115 km
                            <br />
                            Kraftstoffverbrauch bei entladener Batterie
                            <br />
                            kombiniert 9.3 l/100km CO2 Klasse: B CO2 Klasse bei
                            <br />
                            entladener Batterie: G
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25Hzef5qoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69ioaW8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5mRDrQbBUq2rjGpUa2rQbroMESMd0ViyJGy5iJvrQ%25r9si8W8zWuo86qogqaakel3ilUjQzcRScHzd7MbnMdd8uyJGy58HgrQ%25r9sRnW8zWuBa4qogqaYV3l3ilUQ75cRScHz09MbnMdjf7yJGy5iY3rQ%25r9S1JW8zWuKDQqogqa3Uzl3ilUQT9cRScHFBsMbnMdgm3yJGy5Q3grQ%25r9RX9W8zWuEUQqogqaD%25Fl3ilU%258jcRScHH1lMbnMdg3uyJGy5QoarQ%25r98KGW8zWuuaCqogqaC2Jl3ilU4tocRScH705MbnMdjYYyJGy5Q3drQ%25r98R9W8zWunxbqogqaG4zl3ilU%254QcRScHFe8MbnMdeoqyJGy55HvrQ%25r9019W8zWuKbhqogqaGK8l3ilU4EZcRScH86oMbnMdgC8yJGy53SBrQ%25r9SeCW8zWuBUbqogqaGEJl3ilUUb5cRScH7o3MbnMdJCYyJRTa4QSN9q0z835uqoQk8S2DlBgKaRqoQUyFnHg9"
                />
                <SubgridCard
                    className=""
                    name="BMW M3 Competition Touring mit M xDrive"
                    properties={
                        <p>
                            Energieverbrauch (WLTP, kombiniert) 10.3 l/100km
                            <br />
                            CO2 Emissionen (WLTP, kombiniert) 233 g/km
                            <br />
                            CO2 Klasse: G
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25H2gcVqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69SuDW8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5moorQbBUq2rjGpUa2rQbroMESMdjfgyJGy58OUrQ%25r98SGW8zWuEfGqogqaDn3l3ilUR3AcRScHHwsMbnMdeoiyJGy55obrQ%25r90uCW8zWuujUqogqaYSQl3ilUEOwcRScHHwUMbnMdoBuyJGy5iYarQ%25r90vBW8zWunFbqogqaJ2zl3ilU%25QNcRScHzRUMbnMdQCuyJGy53LUrQ%25r90diW8zWuBj4qogqaJh%25l3ilURQGcRScHbZuMbnMdoPdyJGy5BubrQ%25r9snYW8zWunJEqogqaFk4l3ilUjF0cRScH4%25oMbnMdg3uyJGy58g5rQ%25r9sinW8zWuoD%25qogqaaU4l3ilUC7gcRScHzesMbnMdjYYyJGy5iourQ%25r98R5W8zWunREqogqa3Jal3ilU%25e0cRScHzmiMbnMdQgayJGy5isErQ%25r90KRW8zWuotJqogqaDJKl3ilUEtUcRScH48PMbnMdgl7yJGy53ARrQ%25r901jW8zWuoYEqogqaJ%25Fl3ilUEdQcRScH486MbnMdgCuyJGy558arQ%25r9YbJW8zWuomjqogqaGEFl38X5KRzAHyFnJQlayJRObz6mrjGe58yJR9lBguGH"
                />
                <SubgridCard
                    className=""
                    name="BMW iX1 xDrive30"
                    properties={
                        <p>
                            Stromverbrauch (WLTP) 17.8 kWh/100km
                            <br />
                            CO2 Emissionen (WLTP, kombiniert) 0 g/km
                            <br />
                            Elektrische Reichweite (WLTP, kombiniert) 425 km
                            <br />
                            Elektrische Reichweite (WLTP, innerorts) 513 km
                            <br />
                            CO2 Klasse: A
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25Hz18IqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69iE8W8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5mRBrQbBUq2rjGpUa2rQbroMESMd0ViyJGy5BO5rQ%25r9SQwW8zWuKSoqogqa3o1l3ilUUvmcRScH78gMbnMdg%252yJGy5i9BrQ%25r993UW8zWuuD%25qogqaR9nl3ilUCQzcRScHFdsMbnMdjfJyJGy53YarQ%25r9SEUW8zWuBwYqogqaGjJl3ilU%25tocRScH4e3MbnMdJ5SyJGy5s6UrQ%25r9RXHW8zWuBj4qogqa3Jnl3ilUj79cRScH8ZHMbnMd09RyJGy5BObrQ%25r9snYW8zWunJEqogqaGQdl3ilURJ5cRScHbeiMbnMdd5syJGy5s63rQ%25r9K1JW8zWuEFUqogqaY77l3ilURQacRScHb8HMbnMdgPoyJGy5iKnrQ%25r90KRW8zWuKbsqogqaa9Ol3ilUEtUcRScH48PMbnMdgl7yJGy53ARrQ%25r9Se3W8zWunm4qogqaYHJl3ilU%25FQcRScHHJ9MbnMd03RyJGy5Q4ErQbZUe8nIulBgoR9al38vontCcYiDUbl38HrjGdiu"
                />
                <SubgridCard
                    className=""
                    name="BMW X1 sDrive20i"
                    properties={
                        <p>
                            Kraftstoffverbrauch bei entladener Batterie
                            kombiniert 6.0 l/100km
                            <br />
                            CO2 Emission (charge sustaining combined) 134 g/km
                            <br />
                            CO2 Klasse: D
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25HzecVqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69SuDW8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5QunrQbBUq2rjGpUa2rQbroMESMd0ViyJGy5iJvrQ%25r9si8W8zWuo86qogqaakel3ilUjQzcRScHzd7MbnMdd8uyJGy583MrQ%25r9odiW8zWuKbGqogqaYUel3ilUEn8cRScH809MbnMdgBuyJGy5iY3rQ%25r9sKJW8zWunb2qogqaJh5l3ilUE0mcRScH8ZgMbnMdJozyJGy53L5rQ%25r9snYW8zWunJEqogqaGuGl3ilU%2585cRScHJ%25HMbnMdJ8uyJGy5QsnrQ%25r99uDW8zWuDAbqogqaC28l3ilUj7dcRScHFBBMbnMdJoHyJGy5Q35rQ%25r9SDGW8zWu3ndqogqaRGul3ilUE4QcRScH48WMbnMddUkyJGy5765rQ%25r9sRxW8zWubAkqogqaCYTl3ilUQI8cRScH8NUMbnMdj9oyJGy5i03rQ%25r99oUW8zWuEJHqogqaFQ8l3ilURK0cRox9Dbg2drjG08HdrQbpJg1sW7%25m9orQbucYia%25d"
                />
                <SubgridCard
                    className=""
                    name="BMW Z4 sDrive20i"
                    properties={
                        <p>
                            Energieverbrauch (WLTP, kombiniert) 7.2 l/100km
                            <br />
                            CO2 Emissionen (WLTP, kombiniert) 163 g/km
                            <br />
                            CO2 Klasse: F
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25HORsUqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69YaUW8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5QuErQbBUq2rjGpUa2rQbroMESMdjfgyJGy5QinrQ%25r9sifW8zWuo8Vqogqaakel3ilURO%25cRScHbdQMbnMdg50yJGy55oarQ%25r993RW8zWuBa4qogqaab4l3ilUEO1cRScHFGoMbnMdoBuyJGy5iYarQ%25r9SERW8zWunb2qogqaGJOl3ilU%253acRScH8ZuMbnMdjYKyJGy53LSrQ%25r98RiW8zWuEUQqogqaDnal3ilUCzjcRScHzo7MbnMdd9SyJGy5B0urQ%25r9oi9W8zWun3Cqogqa3Czl3ilUC7gcRScH705MbnMdjYYyJGy5Q3drQ%25r98R9W8zWunCjqogqaG4zl3ilUb%259cRScHzDYMbnMdjmoyJGy58AErQ%25r9sRcW8zWuBAuqogqaDJTl3ilU4EAcRScH8NuMbnMdo13yJGy57u3rQ%25r99oUW8zWuEJHqogqaDR7l3ilUj8ocRScHbDBMbnMdg70yJRTa4QSN9q0ze5RbqoQk8S2DlBgKaRqoQUyFnHg9"
                />
                <SubgridCard
                    className=""
                    name="BMW M340i xDrive Touring"
                    properties={
                        <p>
                            Kraftstoffverbrauch bei entladener Batterie
                            kombiniert 8.4 l/100km
                            <br />
                            CO2 Emission (charge sustaining combined) 190 g/km
                            <br />
                            CO2 Klasse: G
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25H1RcVqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69iE3W8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5mRnrQbBUq2rjGpUa2rQbroMESMdjfgyJGy5QinrQ%25r9YpnW8zWuEfuqogqaDn3l3ilUR3AcRScHHwsMbnMd0oiyJGy55oarQ%25r9sRnW8zWuBa4qogqaab4l3ilUU0dcRScHFGoMbnMdjfOyJGy53YarQ%25r9SEUW8zWuBckqogqaYVEl3ilU%257QcRScH4e3MbnMdoISyJGy53LtrQ%25r9SRwW8zWuDSCqogqaGoul3ilUQT9cRScHFBsMbnMdJozyJGy5QLUrQ%25r9YEHW8zWubxuqogqaFH8l3ilUU6GcRScH7w3MbnMdei0yJGy5iRBrQ%25r9sibW8zWunJHqogqaRnal3ilUCGzcRScH7GoMbnMdgViyJGy5iK3rQ%25r98ijW8zWuoD%25qogqaaU4l3ilUQ4jcRScH40iMbnMdeB8yJGy5isDrQ%25r90FFW8zWunRUqogqa3Jul3ilU%25JjcRScHb8HMbnMdgsYyJGy5iKnrQ%25r9oSHW8zWunm7qogqaRGul3ilUE4QcRScH48jMbnMdJ13yJGy5m3erQ%25r9019W8zWunyYqogqaJ25l3ilUUT9cRScH86oMbnMdjIEyJGy5iubrQ%25r98BYW8zWubGEqogqaYHJl3ilUbW5cRScHzj8MbnMdgCuyJGy558arQ%25r9YbJW8zWuomjqogqaGEFl38X5KRzAHyFnFQHUyJRObz6mrjGe58yJR9lBguGH"
                />
                <SubgridCard
                    className=""
                    name="BMW Z4 sDrive20i"
                    properties={
                        <p>
                            Energieverbrauch (WLTP, kombiniert) 7.2 l/100km
                            <br />
                            CO2 Emissionen (WLTP, kombiniert) 163 g/km
                            <br />
                            CO2 Klasse: F
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25HeS8IqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69SuDW8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5mRErQbBUq2rjGpUa2rQbroMESMdjfgyJGy5QinrQ%25r9sifW8zWuo8Vqogqaakel3ilURO%25cRScHzd7MbnMdd8uyJGy55o3rQ%25r9sRnW8zWuBa4qogqaab4l3ilUU0dcRScHFpAMbnMdj%253yJGy53YarQ%25r9SEUW8zWuBckqogqaGjJl3ilUC4ocRScHz8IMbnMdgokyJGy5iJdrQ%25r9RXHW8zWuBj4qogqa3Jnl3ilUjdocRScH4giMbnMd0VRyJGy5mSBrQ%25r9SbYW8zWuuU%25qogqaFEHl3ilUbGUcRScHzJmMbnMdJ8uyJGy5QsnrQ%25r9sEGW8zWuEFUqogqaY77l3ilURQacRScHb8HMbnMdgsYyJGy5iKnrQ%25r9oSHW8zWunm7qogqaYCJl3ilUbI0cRScH48WMbnMdjIdyJGy5m3XrQ%25r9R1HW8zWubtJqogqa3EFl3ilUQzjcRScHF58MbnMddQuyJGy5BRarQ%25r9soFW8zWuEJQqogqa3s7l38X5KRzAHyFnDU8oyJRObz6mrjGe58yJR9lBguGH"
                />
                <SubgridCard
                    className=""
                    name="BMW M440i xDrive Cabrio"
                    properties={
                        <p>
                            Kraftstoffverbrauch bei entladener Batterie
                            kombiniert 8.3 l/100km
                            <br />
                            CO2 Emission (charge sustaining combined) 188 g/km
                            <br />
                            CO2 Klasse: G
                        </p>
                    }
                    image="https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545J3qAHyFn7o9Mb3dnqbgyFnOCJ6drQb9Y3QSW7%25faUfW8Jg285otlBgQxGZl38Sm2q0zoyJRa8uE8nW7%25HORNjqoQeyFne05uyJRv8YzdAW7%25zHyJRI8JJ1rjG69SuDW8J1XXrjGpo2gb7ZDbgyJRIBLgib2ulBgbUQz5moorQbBUq2rjGpUa2rQbroMESMdjfgyJGy5QinrQ%25r99RJW8zWuEfuqogqaGoOl3ilUCGRcRScHbR2MbnMdeoiyJGy579DrQ%25r993DW8zWuBiJqogqaYVvl3ilUQ75cRScHz09MbnMdgBoyJGy5msbrQ%25r9R1GW8zWubxIqogqaGoul3ilUQT9cRScHFBsMbnMdJozyJGy5QLUrQ%25r9YEHW8zWubxuqogqaFH8l3ilUjvocRScH4g7MbnMdg30yJGy5iJmrQ%25r9sibW8zWuuNrqogqaFEHl3ilUbGUcRScHzm8MbnMdJmSyJGy53sBrQ%25r9sEGW8zWuBjjqogqa3Jul3ilURQUcRScHzmBMbnMdgsSyJGy58iUrQ%25r9SejW8zWu3n9qogqaYCJl3ilUCQFcRScHb6oMbnMdeo4yJGy5765rQ%25r9SMBW8zWubAdqogqaJNQl3ilU%256RcRScHFNYMbnMdJ70yJGy53SBrQ%25r90aRW8zWu3yHqogqaaRdl3ilUj8ocRScHbDBMbnMdg70yJRTa4QSN9q0z839NqoQk8S2DlBgKaRqoQUyFnHg9"
                />
            </SubgridRow>
            <Text className="light" textClassName="highlight" />
            <ImageGrid className="light" />
            <Text className="light" textClassName="highlight" />
            <Quote className="blue" quoteClassName="highlight" image />
            <Text className="light pb-7" textClassName="indent-left" />
            <Text className="light pt-7" textClassName="indent-right" />
            <Quote className="green pb-7" quoteClassName="indent-left" />
            <Quote className="green pt-7 mb-10" quoteClassName="indent-right" />
            <ContainerSizeQueriesDemo
                id="size-query-demo"
                className="content mb-10"
            />
            <ContainerStyleQueriesDemo
                id="style-query-demo"
                className="content mb-10"
            />
            <PopoverDemo id="popover-demo" className="content mb-10" />
            <AnchorDemo id="anchor-demo" className="content mb-10" />
        </main>
    );
}
