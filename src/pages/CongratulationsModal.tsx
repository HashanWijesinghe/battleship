import { RootState } from '@src/store/store';
import { FC, memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import { ViewportWidthBreakpoints } from '@src/shared/constants';
import colors from '@src/styles/colors';
import strings from '@src/shared/strings';
import { gameActions } from '@src/store/gameSlice';
import NotFoundAnimation from '../animations/60014-gold-medal.json';

const StyledModal = styled(ReactModal)`
  display: flex;
  flex: 0.9;
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 2em;
  padding-top: 0;
  background-color: white;
  border-radius: 0.5em;
  -webkit-box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.75);

  &:hover,
  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${ViewportWidthBreakpoints.tabletMin}) and (max-width: ${ViewportWidthBreakpoints.tabletMax}) {
    flex: 0.7;
  }
  @media only screen and (min-width: ${ViewportWidthBreakpoints.desktopMin}) {
    flex: 0.4;
  }
`;

const LottieContainer = styled.div`
  background-color: ${colors.cobalite};
  height: 100%;
  border-bottom-left-radius: 10em;
  border-bottom-right-radius: 10em;
  -webkit-box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.3);
`;

const Header = styled.span`
  color: ${colors.rockBottom};
  font-size: 2em;
  font-weight: bolder;
  padding-top: 1em;
`;

const Description = styled.span`
  color: ${colors.rockBottomLight};
  font-size: 1.5em;
  font-weight: 300;
  padding-top: 1em;
`;

const Button = styled.button`
  padding: 1em;
  margin-top: 1.5em;
  background-color: ${colors.cobalite};
  border-radius: 0.3em;
  border-color: transparent;

  transition: all300ms ease;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

const ButtonText = styled.span`
  color: white;
`;

// change react modal parent styles
if (ReactModal.defaultStyles.overlay) {
  ReactModal.defaultStyles.overlay.display = 'flex';
  ReactModal.defaultStyles.overlay.justifyContent = 'center';
}

const CongratulationsModal: FC = () => {
  const hasWon = useSelector(
    (state: RootState) => state.game.player1.score === 17
  );

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (hasWon && isVisible === false) {
      setIsVisible(true);
    }
  }, [hasWon, isVisible]);

  const handlePlayAgain = () => {
    dispatch(gameActions.resetGame());
    setIsVisible(false);
  };

  return (
    <StyledModal
      isOpen={isVisible}
      ariaHideApp={false}
      contentLabel="winnerContent"
    >
      <LottieContainer>
        <Lottie
          options={{
            loop: true,
            animationData: NotFoundAnimation,
          }}
          height={200}
          width={200}
        />
      </LottieContainer>

      <Header>{strings.victory}</Header>
      <Description>{strings.victorySubTitle}</Description>
      <Button type="button" onClick={handlePlayAgain}>
        <ButtonText>{strings.playAgain}</ButtonText>
      </Button>
    </StyledModal>
  );
};

export default memo(CongratulationsModal);
