import React, { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { CountdownContainer, CountDownButton } from './styles';


export default function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useContext(CountdownContext)
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
      <div>
        <CountdownContainer>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
                <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </CountdownContainer>
        {hasFinished ? (
            <CountDownButton
                disabled
            >
                Ciclo encerrado
            </CountDownButton>
        ) : (
            <>
            {isActive ? (
                <CountDownButton 
                    isActive={isActive}
                    type="button"
                    onClick={resetCountdown}
                >
                    Abandonar ciclo
                </CountDownButton>
        ) : (
                <CountDownButton 
                    isActive={isActive}
                    type="button"
                    onClick={startCountdown}
                >
                    Iniciar um ciclo
                </CountDownButton>
        )}
            </>
        )}
      </div>
    );
}