import styled, { css } from 'styled-components';

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);
    
    > div {
        flex: 1;
        display: flex;
        justify-content: space-evenly;

        background: var(--white);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;

        span {
            width: 5rem;
            flex: 1;
        }

        span:first-child {
            border-right: 1px solid #f0f1f3;
        }

        span:last-child {
            border-left: 1px solid #f0f1f3;
        }
    }

    > span {
        font-size:6.25rem;
        margin: 0.5rem;
    }
`;

interface IButtonProps {
    isActive?: boolean;
    hasFinished?: boolean;
}

export const CountDownButton = styled.button<IButtonProps>`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: var(${props => props.isActive ? '--white' : '--blue'}); 
    color: var(${props => props.isActive ? '--title' : '--white'});
    
    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    &:disabled{
        background: var(--white);
        cursor: not-allowed;
        color: var(--text);
    }

    &:hover:not(:disabled) {
        background: var(${props => props.isActive ? '--red' : '--blue-dark'});
        color: var(${props => props.isActive && '--white'});
    }
`;