import {
  LateralBarContainer,
  LateralBarStyle,
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
          <a className="about-me-container" href="">
            <BsFillQuestionCircleFill />
            <span className="about-me">About me</span>
          </a>
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
