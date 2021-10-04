import React, { useState }from "react";
import decoration from "../assets/Decoration.svg"
import Pagination from "./Pagination";


function WhoWeHelp() {

    const foundations = {
        id: 0,
        details: [
            {
                name: "Fundacja “Dbam o Zdrowie”",
                info: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
                items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",

            },
            {

                name: "Fundacja “Dla dzieci”",
                info: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
                items: "ubrania, meble, zabawki",
            },
            {

                name: "Fundacja “Bez domu”",
                info: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
                items: "ubrania, jedzenie, ciepłe koce",
            },
            {

                name: "Fundacja “Nulla eleifend massa orci”",
                info: "Cel i misja: Etiam ut lacus sit amet ligula dignissim efficitur.",
                items: "dolor consequat, viverra nisi nec, dictum velit",
            },
            {

                name: "Fundacja “Nunc elementum sodales scelerisque.”",
                info: "Cel i misja: Aenean pretium elit at leo tincidunt.",
                items: "tortor, dictum, libero",
            },
            {

                name: "Fundacja “Etiam placerat posuere risus”",
                info: "Cel i misja: Nullam porttitor tellus in dictum vehicula.",
                items: "viverra, nisi, dictum",
            },
            {

                name: "Fundacja “Duis efficitur”",
                info: "Cel i misja: Quisque tempor condimentum gravida.",
                items: "velit, quam,urna",
            },
            {

                name: "Fundacja “Quisque mattis”",
                info: "Cel i misja: Nullam porttitor tellus in dictum vehicula.",
                items: "tincidunt, tortor",
            },
            {

                name: "Fundacja “Vivamus ut massa lacus.”",
                info: "Cel i misja: Nullam porttitor tellus in dictum vehicula.",
                items: "Vestibulum, vitae, egestas",
            },
        ],

    };

    const organizations = {
        id: 1,
        details: [
            {
                name: "Organizacja “Etiam placerat posuere risus”",
                info: "Cel i misja: Nullam porttitor tellus in dictum vehicula.",
                items: "viverra, nisi, dictum",

            },
            {
                name: "Organizacja “Vivamus ut massa lacus.”",
                info: "Cel i misja: Donec vitae hendrerit augue.",
                items: "Vestibulum, vitae, egestas",
            },
            {
                name: "Organizacja “Quisque mattis”",
                info: "Cel i misja: Maecenas tortor purus.",
                items: "tincidunt, tortor",
            },
            {
                name: "Organizacja “Duis efficitur”",
                info: "Cel i misja: Quisque tempor condimentum gravida.",
                items: "velit, quam,urna",
            },
            {
                name: "Organizacja “Nunc elementum sodales scelerisque.”",
                info: "Cel i misja: Quisque mattis turpis at dolor.",
                items: "tortor, dictum, libero",
            },
            {
                name: "Organizacja “Nulla eleifend massa orci”",
                info: "Cel i misja: Etiam ut lacus sit amet ligula dignissim efficitur.",
                items: "dolor consequat, viverra nisi nec, dictum velit",
            },

        ]

    };

    const locals = {
        id: 2,
        details: [
            {
                name: "Zbiórka “Etiam placerat posuere risus”",
                info: "Cel i misja: Nullam porttitor tellus in dictum vehicula.",
                items: "viverra, nisi, dictum",

            },
            {
                name: "Zbiórka “Vivamus ut massa lacus.”",
                info: "Cel i misja: Maecenas tortor purus.",
                items: "Vestibulum, vitae, egestas",
            },
            {
                name: "Zbiórka “Quisque mattis”",
                info: "Cel i misja: Quisque mattis turpis at dolor.",
                items: "tincidunt, tortor",
            },
        ]

    };

    const option = [foundations, organizations, locals];

    const [selectedOption, setSelectedOption] = useState(0);

    const handleClick = (event) => {
        setSelectedOption(event.target.id);
    };

    const paginateOptions = option[selectedOption].details;
    console.log(paginateOptions);

    const [page, setPage] = useState(1);
    const [orgPerPage] = useState(3);

    const indexOfLastInfo = page * orgPerPage;
    const indexOfFirstInfo = indexOfLastInfo - orgPerPage;
    const currentInfo = paginateOptions.slice(indexOfFirstInfo, indexOfLastInfo);

    const pagination = (pageNumber) => setPage(pageNumber);

    return(
        <section className='who_we_help' id='foundations'>
            <h2>Komu pomagamy?</h2>
            <img src={decoration} className='who_we_help_decoration' alt='fancy_decoration'/>
            <div className='who_we_help_options'>
                <button className='who_we_help_btn' id={0} onClick={handleClick}>
                    Fundacjom
                </button>
                <button className='who_we_help_btn' id={1} onClick={handleClick}>
                    Organizacjom pozarządowym
                </button>
                <button className='who_we_help_btn' id={2} onClick={handleClick}>
                    Lokalnym zbiórkom
                </button>
            </div>

            <div className='who_we_help_info'>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </div>

            <div className='who_we_help_list'>
                <ul className='who_we_help_list_elements'>
                    {currentInfo.map((event) => (
                        <li className='who_we_help_option'>
                            <div className='option_details'>
                                <h3>
                                    {event.name}
                                </h3>
                                <p>
                                    {event.info}
                                </p>
                            </div>
                            <div className='option_items'>
                                {event.items}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='who_we_help_pagination'>
                <Pagination
                    infoPerPage={orgPerPage}
                    totalInfos={paginateOptions.length}
                    paginate={pagination}
                    />

            </div>


        </section>
    )


}

export default WhoWeHelp;
