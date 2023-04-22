import styled from "styled-components";

export const LateralBarContainer = styled.div`
    display: flex;
    width: 25%;
`

export const LateralBarStyle = styled.div`
    z-index: 1;
    width: 25%;
    background-color: var(--full-black);
    height: 100vh;
    box-shadow: 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .whatsapp {
        font-size: 1.5rem;
        margin: 0 auto;
        margin-bottom: 10px;
        color: var(--whatsapp-color);
    }
    .lateralbar-menu {
        display: flex;
        width: 65%;
        align-items: center;
        justify-content: center;
        transition:  .3s;
        margin: 0 auto;
        margin-top: 18rem;
        font-size: 2rem;
        cursor: pointer;
        background-color: var(--primary-color);
        height: 55px;
        border-radius: 50%;
    }
    .lateralbar-menu:hover {
        transition:  .3s;
        color: var(--spotify-color);
    }
    .about-me-container-all {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    }
    .about-me-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin: 0 auto;
        text-decoration: none;
        color: var(--white-color);

    }
    .about-me {
        font-size: 0.8rem;
    }
`

export const MyNameContainer = styled.div`
    z-index: 2;
    position: absolute;
    left: 2rem;
    top: 1.5rem;
    font-size: 1.8rem;
    color: var(--white-color);
    text-align: center;
    .sour-name {
        color: var(--spotify-color);
    }
`



export const OptionsContainerStyle = styled.div`
    @keyframes ligarMenu {
        0% {
            opacity: 0;
            transform: translateX(-75%);
        }
        100% {
            opacity: 1;
            transform: translateX(0%); 
        }
    }
    z-index: 0;
    opacity: 20%;
    transform: translateX(-100%);
    animation-name: ligarMenu;
    animation-duration: 1s; 
    animation-timing-function: ease; 
    animation-fill-mode: both;
    background-color: var(--gray-color);
    width: 75%;
    border-right: 1px solid var(--gray-color-2);
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
        justify-content: center;
    }
    li button {
        color: inherit;
        text-align: left;
        transition: .3s;
        font-family: 'Chivo Mono', monospace;
        font-size: inherit;
        width: 70%;
        border-radius: 0px 20px 20px 0px;
        height: 40px;
        border: none;
        font-weight: bold;
        background-color: var(--transparent);
    }
`

export const ListedItem = styled.li<{ selected: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.selected ? "var(--spotify-color)" : "var(--white-color)")};
    font-size: 22px;
    :hover {
        color: var(--spotify-color)
    }
`

export const OptionsContainerRemoveStyle = styled.div`
    @keyframes desligarMenu {
        100% {
            opacity: 0;
            transform: translateX(-100%);
        }
        0% {
            opacity: 1;
            transform: translateX(0%); 
        }
    }
    z-index: 0;
    opacity: 20%;
    transform: translateX(-100%);
    animation-name: desligarMenu;
    animation-duration: 1s; 
    animation-timing-function: ease; 
    animation-fill-mode: both;
    background-color: var(--gray-color);
    width: 75%;
    border-right: 1px solid var(--gray-color-2);
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
        justify-content: center;
    }
    li button {
        color: inherit;
        text-align: left;
        transition: .3s;
        font-family: 'Chivo Mono', monospace;
        font-size: inherit;
        width: 70%;
        border-radius: 0px 20px 20px 0px;
        height: 40px;
        border: none;
        font-weight: bold;
        background-color: var(--transparent);
    }
`