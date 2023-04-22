import {
  LateralBarContainer,
  LateralBarStyle,
  ListedItem,
  MyNameContainer,
  OptionsContainerRemoveStyle,
  OptionsContainerStyle,
} from "./style";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillClipboardDataFill, BsTelephoneFill, BsFillCloudDownloadFill, BsFillFileEarmarkFill, BsPersonCircle, BsFillQuestionCircleFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

function LateralBar() {

  const [ menuOpen, setMenuOpen ] = useState(false)

  const [ selectedMenu, setSelectedMenu ] = useState<number | null>(null)

  const handleSelectedMenu = (itemIndex: number) => {
    setSelectedMenu(itemIndex)
  }

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <LateralBarContainer>
      <MyNameContainer>
        <h1 className="my-name">NIELITON</h1>
        <span className="sour-name">sousa</span>
      </MyNameContainer>
      <LateralBarStyle>
        <div className="lateralbar-menu">
          <BiMenu onClick={() => handleToggle()} className="lateralbar-menu-menu" />
        </div>
        <div className="about-me-container-all">
          <a
            className="whatsapp"
            href="https://wa.me/5585996872527"
            target="blank"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
      </LateralBarStyle>
      { menuOpen === true ? 
      <OptionsContainerStyle>
        <ul>
          <ListedItem selected={ selectedMenu === 0 }  onClick={() => handleSelectedMenu(0)}>
            <BsPersonCircle />
            <button>SOBRE MIM</button>
          </ListedItem>
          <ListedItem selected={ selectedMenu === 1 }  onClick={() => handleSelectedMenu(1)}>
            <BsFillClipboardDataFill />
            <button>HABILIDADES</button>
          </ListedItem>
          <ListedItem selected={ selectedMenu === 2 }  onClick={() => handleSelectedMenu(2)}>
            <BsFillFileEarmarkFill />
            <button>PROJETOS</button>
          </ListedItem>
          <ListedItem selected={ selectedMenu === 3 }  onClick={() => handleSelectedMenu(3)}>
            <BsFillCloudDownloadFill />
            <button>DOWNLOAD CV</button>
          </ListedItem>
          <ListedItem selected={ selectedMenu === 4 }  onClick={() => handleSelectedMenu(4)}>
            <BsTelephoneFill />
            <button>CONTATOS</button>
          </ListedItem>
        </ul>
      </OptionsContainerStyle> : <OptionsContainerRemoveStyle>
        <ul>
          <li>
            <BsPersonCircle />
            <button>SOBRE MIM</button>
          </li>
          <li>
            <BsFillClipboardDataFill />
            <button>HABILIDADES</button>
          </li>
          <li>
            <BsFillFileEarmarkFill />
            <button>PROJETOS</button>
          </li>
          <li>
            <BsFillCloudDownloadFill />
            <button>DOWNLOAD CV</button>
          </li>
          <li>
            <BsTelephoneFill />
            <button>CONTATOS</button>
          </li>
        </ul>
      </OptionsContainerRemoveStyle> 
       }
    </LateralBarContainer>
  );
}

export default LateralBar;
