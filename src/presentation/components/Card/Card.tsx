import styled from 'styled-components';
interface ICard {
  title: string;
  description: string;
  handleClick: any;
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  :hover {
    .desc {
      display: block;
      -webkit-backdrop-filter: blur(16px);
      backdrop-filter: blur(16px);
    }
    .title {
      font-size: 5em;
    }
    cursor: pointer;
    background-color: yellow;
  }
`;

const CardTitle = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
`;

const CardDescription = styled.div`
  position: absolute;
  text-align: center;
  font-size: 1em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

const Card = ({ title, description, handleClick }: ICard): JSX.Element => {
  return (
    <CardWrapper onClick={handleClick}>
      <CardTitle className="title">{title}</CardTitle>
      <CardDescription className="desc">{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;
