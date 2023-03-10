import { ReactComponent as BackArrow } from '../../assets/back.svg';
import './Header.css';

export const Header = ({ returnHome }) => {
  return (
    <header onClick={returnHome}>
        <BackArrow />
        <p>retour au menu</p>
    </header>
  );
};